import styled from 'styled-components';

export const ConverterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  width: 100%;
  min-height: 100vh;
`;

export const ConverterCard = styled.div`
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

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const Description = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  color: #666;
`;

export const CurrencySelectionContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-end;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SelectColumn = styled.div`
  flex: 1;
  width: 100%;
  min-width: 180px;
`;

export const SwapButtonContainer = styled.div`
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

export const SwapButton = styled.button`
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

export const SwapIcon = styled.span`
  font-size: 1.2rem;
  line-height: 1;
`;

export const ResultContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: var(--border-radius);
  padding: 1.5rem;
`;

export const ResultLabel = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const ResultValue = styled.div`
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

export const CurrencyCode = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-right: 0.5rem;
  white-space: nowrap;
`;

export const ConversionRate = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

export const LoadingIndicator = styled.span`
  font-size: 1rem;
  color: #666;
`;

export const ErrorMessage = styled.div`
  color: var(--error-color);
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: rgba(231, 76, 60, 0.1);
  border-radius: var(--border-radius);
  font-size: 0.9rem;
`; 