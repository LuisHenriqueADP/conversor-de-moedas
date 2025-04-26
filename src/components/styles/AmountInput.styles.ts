import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-color);
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const CurrencyPrefix = styled.span`
  position: absolute;
  left: 1rem;
  color: var(--text-color);
  font-weight: 500;
  z-index: 1;
`;

export const StyledInput = styled.input<{ $hasPrefix: boolean }>`
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