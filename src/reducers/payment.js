import {
  LOGOUT,
  PAYMENT_HISTORY_ERROR,
  PAYMENT_ACCOUNT_ERROR,
  DELETE_PAYMENT_ACCOUNT,
  SET_PAYMENT_HISTORY,
  SET_PAYMENT_ACCOUNTS,
  PAYMENT_SUCCESSFUL,
  ADD_PAYMENT_ACCOUNT,
  SET_LOADER,
  SET_SERVICES,
  SET_CHARGES,
  ERROR,
  PAYMENT_FAIL,
  PAYMENT_SUCCESS,
  MPESA_STK_SUCCESS,
  MPESA_STK_FAIL,
} from "../actions/types";

const initialState = {
  payment_history: null,
  services: null,
  charges: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_PAYMENT_HISTORY:
      return {
        ...state,
        payment_history: payload,
      };
    case SET_CHARGES:
      return {
        ...state,
        charges: payload,
      };
    case SET_SERVICES:
      return {
        ...state,
        services: payload,
      };
    case SET_LOADER:
      return {
        ...state,
        loading: true,
      };
    case MPESA_STK_SUCCESS:
    case MPESA_STK_FAIL:
      return {
        ...state,
        loading: false,
      };
    // case ADD_PAYMENT_ACCOUNT:
    //   return [...state, payload];
    // case DELETE_PAYMENT_ACCOUNT:
    //   return state.payment_accounts.filter(
    //     ({ account_number }) =>
    //       account_number !== payload.account_number && name !== payload.name
    //   );
    case PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case PAYMENT_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case LOGOUT:
      return {
        ...state,
        payment_history: null,
        services: null,
        charges: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
