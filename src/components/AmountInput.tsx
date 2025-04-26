import React from 'react';
import styled from 'styled-components';

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
    // Only allow numbers and decimal point
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  width: 100%;
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-color);
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CurrencyPrefix = styled.span`
  position: absolute;
  left: 1rem;
  color: var(--text-color);
  font-weight: 500;
  z-index: 1;
`;

const StyledInput = styled.input<{ $hasPrefix: boolean }>`
  padding: 1rem;
  padding-left: ${({ $hasPrefix }) => ($hasPrefix ? '3.5rem' : '1rem')};
  border-radius: var(--border-radius);
  border: 1px solid #ddd;
  background-color: white;
  transition: var(--transition);
  font-weight: 500;
  color: var(--input-text-color);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.2);
  }
  
  &::placeholder {
    color: var(--placeholder-color);
  }
`;

export default AmountInput; 