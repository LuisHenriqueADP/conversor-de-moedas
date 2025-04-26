import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AmountInput from './AmountInput';
import CurrencySelect from './CurrencySelect';
import { COMMON_CURRENCIES } from '../types/currency';
import useCurrencyConverter from '../hooks/useCurrencyConverter';

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

const ConverterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  width: 100%;
  min-height: 100vh;
`;

const ConverterCard = styled.div`
  background-color: var(--card-background);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 2.5rem;
  width: 100%;
  max-width: 600px;
  transition: var(--transition);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  color: #666;
`;

const CurrencySelectionContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-end;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SelectColumn = styled.div`
  flex: 1;
  width: 100%;
  min-width: 180px;
`;

const SwapButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 600px) {
    transform: rotate(90deg);
    padding: 0.5rem 0;
  }
`;

const SwapButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  transition: var(--transition);
  padding: 0;

  &:hover {
    background-color: var(--secondary-color);
    transform: scale(1.1);
  }

  &.animating {
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

const SwapIcon = styled.span`
  font-size: 1.2rem;
  line-height: 1;
`;

const ResultContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: var(--border-radius);
  padding: 1.5rem;
`;

const ResultLabel = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const ResultValue = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  word-break: break-word;
  overflow-wrap: anywhere;
  color: var(--text-color);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CurrencyCode = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-right: 0.5rem;
  white-space: nowrap;
`;

const ConversionRate = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const LoadingIndicator = styled.span`
  font-size: 1rem;
  color: #666;
`;

const ErrorMessage = styled.div`
  color: var(--error-color);
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: rgba(231, 76, 60, 0.1);
  border-radius: var(--border-radius);
  font-size: 0.9rem;
`;

export default CurrencyConverter; 