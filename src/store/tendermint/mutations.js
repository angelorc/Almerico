/**
 * Tendermint mutations
 */

export default {
  /**
   * Set Tendermint isFetching state to true
   *
   * @param {TendermintState} state
   */
  startLoading(state) {
    state.isFetching = true;
  },
  /**
   * Set Tendermint isFetching state to false
   *
   * @param {TendermintState} state
   */
  stopLoading(state) {
    state.isFetching = false;
  },
  /**
   * Set Tendermint message
   *
   * @param {TendermintState} state
   * @param {Message} message
   */
  setMessage(state, message) {
    state.message = message;
  },
  /**
   * Set blocks data
   * 
   * @param {TendermintState} state 
   * @param {Array} data 
   */
  setBlocks(state, data) {
    state.blocks = data;
  },
  /**
   * Add blocks data
   * 
   * @param {TendermintState} state 
   * @param {Array} data 
   */
  addBlocks(state, data) {
    state.blocks.push(...data);
  },
  /**
   * Set transactions data
   * 
   * @param {TendermintState} state 
   * @param {Array} data 
   */
  setTransactions(state, data) {
    state.transactions = data;
  },
  /**
   * Add transactions data
   *
   * @param {TendermintState} state
   * @param {Array} data
   */
  addTransactions(state, data) {
    state.transactions.push(...data);
  },
};
