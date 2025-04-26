import axios from 'axios';

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: 'https://api.exchangerate-api.com/v4/latest',
});

// Function to get the latest exchange rates with a base currency
export const getExchangeRates = async (baseCurrency: string = 'USD') => {
  try {
    const response = await api.get(`/${baseCurrency}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
};

// Function to convert amount from one currency to another
export const convertCurrency = async (
  amount: number, 
  fromCurrency: string, 
  toCurrency: string
) => {
  try {
    const rates = await getExchangeRates(fromCurrency);
    const rate = rates.rates[toCurrency];
    
    if (!rate) {
      throw new Error(`Exchange rate for ${toCurrency} not found`);
    }
    
    return amount * rate;
  } catch (error) {
    console.error('Error converting currency:', error);
    throw error;
  }
};

export default api; 