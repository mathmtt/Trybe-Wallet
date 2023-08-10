import { Dispatch } from 'redux';
import { Expense, UserProp } from '../types/types';
import { ApiFetch } from '../../API/API';

// Coloque aqui suas actions
export const USER_TYPE = 'USER_TYPE';
export const WALLET_FETCH_TYPE = 'WALLET_FETCH';
export const WALLET_INPUT_FETCH_TYPE = 'WALLET_FETCH_INPUT';
export const WALLET_INPUT_EXPENSE_TYPE = 'WALLET_INPUT_EXPENSE_TYPE';

export const UserAction = (payload:UserProp) => ({
  type: USER_TYPE,
  payload,
});

export const WalletFetch = (payload: any) => ({
  type: WALLET_FETCH_TYPE,
  payload,
});

export const WalletInputExpense = (payload: Expense) => ({
  type: WALLET_INPUT_EXPENSE_TYPE,
  payload,
});

export const WalletInputFetch = (payload: string[]) => ({
  type: WALLET_INPUT_FETCH_TYPE,
  payload,
});

export const ActionFetch = () => {
  return async (dispatch:Dispatch) => {
    const data = await ApiFetch();
    delete data.USDT;
    dispatch(WalletFetch(Object.keys(data)));
  };
};
