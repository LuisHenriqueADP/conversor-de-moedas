import axios from 'axios';


const api = axios.create({
  baseURL: 'https://api.exchangerate-api.com/v4/latest',
});


export const getExchangeRates = async (baseCurrency: string = 'USD') => {
  try {
    const response = await api.get(`/${baseCurrency}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
};


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