const INITIAL_STATE = {
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_EXPENSES': {
    return {
      ...state,
      expenses: action.payload,
    };
  }
  default:
    return state;
  }
};

export default wallet;
