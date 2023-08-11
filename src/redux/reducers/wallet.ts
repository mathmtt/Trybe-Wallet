// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';
import { TABLE_CLICK_DELETE, WALLET_FETCH_TYPE, WALLET_INPUT_EXPENSE_TYPE }
  from '../actions';
import { Expense } from '../types/types';

const initialState = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const WalletReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case WALLET_FETCH_TYPE:
      return { ...state, currencies: [...action.payload] };
    case WALLET_INPUT_EXPENSE_TYPE:
      return {
        ...state,
        idToEdit: state.idToEdit + 1,
        expenses: [...state.expenses,
          { ...action.payload,
            id: state.idToEdit,
            exchangeRates: action.payload.exchangeRates }],
      };
    case TABLE_CLICK_DELETE:
      return { ...state,
        expenses: state.expenses
          .filter((element:Expense) => element.id !== action.key) };
    default: return state;
  }
};
export default WalletReducer;
