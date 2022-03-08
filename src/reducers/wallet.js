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
  case 'DELETE_EXPENSE': {
    return {
      ...state,
      expenses: state.expenses.filter((curr) => (
        curr.id !== action.expense
      )),
    };
  }
  default:
    return state;
  }
};

export default wallet;
