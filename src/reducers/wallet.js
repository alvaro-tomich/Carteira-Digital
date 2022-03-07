const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_EXPENSES': {
    return {
      ...state,
      expenses: [
        ...state.expenses, ...action.payload.expenses],
    };
  }
  case 'SAVE_CURRENCIES': {
    return {
      ...state,
      currencies: [...action.currencies],
    };
  }
  default:
    return state;
  }
};

export default wallet;
