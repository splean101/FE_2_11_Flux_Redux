import { legacy_createStore } from 'redux';

const couterReducer = (
  state = { coffee: 0, sugar: 0, isLoggedIn: false },
  action
) => {
  const INCREMENT_COFFEE = 'INCREMENT_COFFEE';
  const DECREMENT_COFFEE = 'DECREMENT_COFFEE';
  const INCREASE_COFFEE = 'INCREASE_COFFEE';

  const INCREMENT_SUGAR = 'INCREMENT_SUGAR';
  const DECREMENT_SUGAR = 'DECREMENT_SUGAR';
  const INCREASE_SUGAR = 'INCREASE_SUGAR';

  const LOGIN = 'LOGIN';

  switch (action.type) {
    case INCREMENT_COFFEE:
      return { ...state, coffee: state.coffee + 1 };
    case DECREMENT_COFFEE:
      return { ...state, coffee: state.coffee - 1 };
    case INCREASE_COFFEE:
      return { ...state, coffee: state.coffee + action.number };
    case INCREMENT_SUGAR:
      return { ...state, sugar: state.sugar + 1 };
    case DECREMENT_SUGAR:
      return { ...state, sugar: state.sugar - 1 };
    case INCREASE_SUGAR:
      return { ...state, sugar: state.sugar + action.number };
    case LOGIN:
      return { ...state, isLoggedIn: true };
  }

  return state;
};

const store = legacy_createStore(couterReducer);

export default store;
