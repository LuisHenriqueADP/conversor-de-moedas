import React, { useState } from 'react';
import AmountInput from './AmountInput';
import CurrencySelect from './CurrencySelect';
import { COMMON_CURRENCIES } from '../types/currency';
import useCurrencyConverter from '../hooks/useCurrencyConverter';
import {
  ConverterContainer,
  ConverterCard,
  Title,
  Description,
  CurrencySelectionContainer,
  SelectColumn,
  SwapButtonContainer,
  SwapButton,
  SwapIcon,
  ResultContainer,
  ResultLabel,
  ResultValue,
  CurrencyCode,
  ConversionRate,
  LoadingIndicator,
  ErrorMessage
} from './styles/CurrencyConverter.styles';

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [swapAnimation, setSwapAnimation] = useState<boolean>(false);

  const numericAmount = parseFloat(amount) || 0;
  
  const { convertedAmount, isLoading, error } = useCurrencyConverter(
    numericAmount,
    fromCurrency,
    toCurrency
  );

  const formatAmount = (value: number | null): string => {
    if (value === null) return '';
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    }).format(value);
  };

  const handleSwapCurrencies = () => {
    setSwapAnimation(true);
    setTimeout(() => {
      setFromCurrency(toCurrency);
      setToCurrency(fromCurrency);
      setSwapAnimation(false);
    }, 300);
  };

  return (
    <ConverterContainer>
      <ConverterCard>
        <Title>Conversor de Moedas</Title>
        <Description>
          Converta entre moedas usando taxas de câmbio em tempo real
        </Description>

        <AmountInput
          id="amount"
          label="Valor"
          value={amount}
          onChange={setAmount}
          currencyCode={fromCurrency}
        />

        <CurrencySelectionContainer>
          <SelectColumn>
            <CurrencySelect
              id="from-currency"
              label="De"
              value={fromCurrency}
              onChange={setFromCurrency}
              options={COMMON_CURRENCIES}
            />
          </SelectColumn>

          <SwapButtonContainer>
            <SwapButton
              onClick={handleSwapCurrencies}
              disabled={isLoading}
              className={swapAnimation ? 'animating' : ''}
            >
              <SwapIcon>⇄</SwapIcon>
            </SwapButton>
          </SwapButtonContainer>

          <SelectColumn>
            <CurrencySelect
              id="to-currency"
              label="Para"
              value={toCurrency}
              onChange={setToCurrency}
              options={COMMON_CURRENCIES}
            />
          </SelectColumn>
        </CurrencySelectionContainer>

        {error && <ErrorMessage>{error === 'Failed to fetch exchange rates' ? 'Falha ao buscar taxas de câmbio' : 'Falha ao converter moeda'}</ErrorMessage>}

        <ResultContainer>
          <ResultLabel>Valor Convertido:</ResultLabel>
          <ResultValue>
            {isLoading ? (
              <LoadingIndicator>Carregando...</LoadingIndicator>
            ) : (
              <>
                {convertedAmount !== null ? (
                  <>
                    <CurrencyCode>{toCurrency}</CurrencyCode>
                    {formatAmount(convertedAmount)}
                  </>
                ) : (
                  'Digite um valor para converter'
                )}
              </>
            )}
          </ResultValue>
          
          {convertedAmount !== null && amount && (
            <ConversionRate>
              1 {fromCurrency} = {formatAmount(convertedAmount / numericAmount)} {toCurrency}
            </ConversionRate>
          )}
        </ResultContainer>
      </ConverterCard>
    </ConverterContainer>
  );
};

export default CurrencyConverter; 