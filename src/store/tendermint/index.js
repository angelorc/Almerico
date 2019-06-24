/**
 * Tendermint state
 */

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export const initialState = {
  blocks: [],
  lastBlock: null,
  transactions: [],
  isFetching: false,
  message: "",
};

export default {
  namespaced: true,
  initialState,
  state: {
    ...initialState
  },
  getters,
  actions,
  mutations
};
