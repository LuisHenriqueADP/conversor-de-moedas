import React from 'react';
import {
  InputContainer,
  Label,
  InputWrapper,
  CurrencyPrefix,
  StyledInput
} from './styles/AmountInput.styles';

interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  id: string;
  currencyCode?: string;
}

const AmountInput: React.FC<AmountInputProps> = ({
  value,
  onChange,
  label,
  id,
  currencyCode,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const value = e.target.value;
    if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
      onChange(value);
    }
  };

  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputWrapper>
        {currencyCode && <CurrencyPrefix>{currencyCode}</CurrencyPrefix>}
        <StyledInput
          id={id}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="0,00"
          inputMode="decimal"
          $hasPrefix={!!currencyCode}
        />
      </InputWrapper>
    </InputContainer>
  );
};

export default AmountInput; 