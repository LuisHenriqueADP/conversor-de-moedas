export interface ExchangeRateData {
  base: string;
  date: string;
  rates: Record<string, number>;
  time_last_updated: number;
}

export type CurrencyCode = string;

export interface CurrencyOption {
  code: CurrencyCode;
  name: string;
}

export const COMMON_CURRENCIES: CurrencyOption[] = [
  { code: 'USD', name: 'Dólar Americano' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'Libra Esterlina' },
  { code: 'JPY', name: 'Iene Japonês' },
  { code: 'AUD', name: 'Dólar Australiano' },
  { code: 'CAD', name: 'Dólar Canadense' },
  { code: 'CHF', name: 'Franco Suíço' },
  { code: 'CNY', name: 'Yuan Chinês' },
  { code: 'BRL', name: 'Real Brasileiro' },
  { code: 'INR', name: 'Rupia Indiana' },
  { code: 'MXN', name: 'Peso Mexicano' },
  { code: 'RUB', name: 'Rublo Russo' },
]; 