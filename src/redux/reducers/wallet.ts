// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';
import { WALLET_FETCH_TYPE, WALLET_INPUT_EXPENSE_TYPE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  total: 0,
};

const WalletReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case WALLET_FETCH_TYPE:
      return { ...state, currencies: [...action.payload] };
    case WALLET_INPUT_EXPENSE_TYPE:
      return {
        ...state,
        idToEdit: state.idToEdit + 1,
        total: parseFloat((state.total + (action.payload.value
          * parseFloat(action.payload.exchangeRates[action.payload.currency].ask)))
          .toFixed(2)),
        expenses: [...state.expenses,
          { ...action.payload,
            id: state.idToEdit,
            exchangeRates: action.payload.exchangeRates }],
      };
    default: return state;
  }
};

export default WalletReducer;
