/**
 * Tendermint actions
 */

import api from "./api";
import {
  RpcClient
} from "tendermint";
import {
  WS
} from "Constants";

const client = RpcClient(WS);

export default {
  /**
   * Action to subscribe new block web socket
   * 
   * @param {Function} commit
   */
  subNewClient({
    commit,
    dispatch
  }) {
    client.subscribe({
      query: "tm.event = 'NewBlock'"
    }, event => {
      let block = event.block;
      commit("addNewBlock", block);
      commit("setLastBlock", block);
      dispatch("stake/fetchPool", null, {
        root: true
      });
      if (block.header.num_txs * 1 > 0) {
        dispatch("updateTransactions", block.header.height);
      }
    });
  },
  /**
   * Action to fetch transactions
   * 
   * @param {Function} commit 
   * @param {Object} filters // tag, page, limit
   */
  async fetchTransactions({
    commit
  }, filters) {
    commit("startLoading");
    commit("setServerReachability", true, {
      root: true
    });
    try {
      const response = await api.requestTransactions(filters);
      commit("addTransactions", response.data);
    } catch (error) {
      if (error.response !== undefined) {
        commit("setMessage", error.response.data.error);
      } else {
        commit("setServerReachability", false, {
          root: true
        });
      }
    } finally {
      commit("stopLoading");
    }
  },
  async updateTransactions({
    commit
  }, height) {
    commit("startLoading");
    commit("setServerReachability", true, {
      root: true
    });
    try {
      const response = await api.requestTransactionsByHeight(height);
      commit("addTransactions", response.data);
    } catch (error) {
      if (error.response !== undefined) {
        commit("setMessage", error.response.data.error);
      } else {
        commit("setServerReachability", false, {
          root: true
        });
      }
    } finally {
      commit("stopLoading");
    }
  },
};
