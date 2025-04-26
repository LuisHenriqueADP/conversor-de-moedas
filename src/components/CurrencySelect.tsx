import React from 'react';
import styled from 'styled-components';
import { CurrencyOption } from '../types/currency';

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

const SelectContainer = styled.div`
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

const StyledSelect = styled.select`
  padding: 1rem;
  padding-right: 3rem;
  border-radius: var(--border-radius);
  border: 1px solid #ddd;
  background-color: white;
  transition: var(--transition);
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232d3436' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  color: var(--text-color);
  width: 100%;
  min-height: 3.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.2);
  }
  
  option {
    color: var(--text-color);
    background-color: white;
    padding: 0.5rem;
  }
`;

export default CurrencySelect; 