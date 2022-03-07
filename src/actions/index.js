import getCurrencies from '../services/getCurrencies';

export const saveEmail = (email) => ({
  type: 'SAVE_EMAIL',
  payload: {
    email,
  },
});

export const saveExpenses = (expenses) => ({
  type: 'SAVE_EXPENSES',
  payload: {
    expenses,
  },
});

const getApiCurrencies = (currencies) => ({ type: 'SAVE_CURRENCIES', currencies });

export const fetchCurrenciesThunk = () => async (dispatch) => {
  const currencies = await getCurrencies();
  const currenciesArr = Object.values(currencies).filter(
    (curr) => curr.codein !== 'BRLT',
  );
  dispatch(getApiCurrencies(currenciesArr));
};
