import React from 'react';
import { CurrencyOption } from '../types/currency';
import {
  SelectContainer,
  Label,
  StyledSelect
} from './styles/CurrencySelect.styles';

interface CurrencySelectProps {
  value: string;
  onChange: (value: string) => void;
  options: CurrencyOption[];
  label: string;
  id: string;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({
  value,
  onChange,
  options,
  label,
  id,
}) => {
  return (
    <SelectContainer>
      <Label htmlFor={id}>{label}</Label>
      <StyledSelect
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Selecionar moeda</option>
        {options.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.code} - {currency.name}
          </option>
        ))}
      </StyledSelect>
    </SelectContainer>
  );
};

export default CurrencySelect; 