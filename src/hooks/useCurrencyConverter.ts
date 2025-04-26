import { useState, useEffect } from 'react';
import { getExchangeRates, convertCurrency } from '../services/api';
import { ExchangeRateData, CurrencyCode } from '../types/currency';

interface ConversionResult {
  convertedAmount: number | null;
  isLoading: boolean;
  error: string | null;
}

export const useCurrencyConverter = (
  amount: number,
  fromCurrency: CurrencyCode,
  toCurrency: CurrencyCode
): ConversionResult => {
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [rates, setRates] = useState<ExchangeRateData | null>(null);


  useEffect(() => {
    const fetchRates = async () => {
      if (!fromCurrency) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const data = await getExchangeRates(fromCurrency);
        setRates(data);
      } catch (err) {
        setError('Failed to fetch exchange rates');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRates();
  }, [fromCurrency]);


  useEffect(() => {
    const convert = async () => {
      if (!amount || !fromCurrency || !toCurrency || !rates) {
        setConvertedAmount(null);
        return;
      }

      try {
        if (fromCurrency === toCurrency) {
          setConvertedAmount(amount);
          return;
        }

        const result = await convertCurrency(amount, fromCurrency, toCurrency);
        setConvertedAmount(result);
      } catch (err) {
        setError('Failed to convert currency');
        console.error(err);
      }
    };

    convert();
  }, [amount, fromCurrency, toCurrency, rates]);

  return { convertedAmount, isLoading, error };
};

export default useCurrencyConverter; 