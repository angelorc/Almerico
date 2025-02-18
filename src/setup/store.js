import Vue from "vue";
import Vuex from "vuex";

import account from "Store/account";
import stake from "Store/stake";
import tendermint from "Store/tendermint";
import votings from "Store/votings";

Vue.use(Vuex);

const initialState = {
  account: account.initialState,
  stake: stake.initialState,
  tendermint: tendermint.initialState,
  votings: votings.initialState,
};

export default new Vuex.Store({
  modules: {
    account,
    stake,
    tendermint,
    votings
  },
  state: {
    serverReachability: true
  },
  getters: {
    getServerReachability: state => state.serverReachability
  },
  mutations: {
    /**
     * Reset all the store
     * 
     * @param {state} state 
     */
    reset(state) {
      Object.keys(state).forEach(key => {
        Object.assign(state[key], initialState[key]);
      });
    },
    /**
     * Set the server reachability
     * 
     * @param {state} state 
     * @param {boolean} payload 
     */
    setServerReachability(state, payload) {
      state.serverReachability = payload;
    }
  }
});
