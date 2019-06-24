/**
 * Stake APIs
 */

import axios from "axios";
import {
  API
} from "Constants";

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  /**
   * Handle ajax request to get a validators list
   * 
   * @param {string} status 
   * @param {number} page 
   * @param {number} limit
   * @return {Promise}
   */
  requestValidators({
    status,
    page,
    limit
  }) {
    return instance.get(API.STAKING_VALIDATORS, {
      params: {
        status,
        page,
        limit
      }
    });
  },
  /**
   * Handle ajax request to get a validator by address
   * 
   * @param {string} address
   * @return {Promise}
   */
  requestValidator(address) {
    return instance.get(`${API.STAKING_VALIDATORS}/${address}`);
  },
  /**
   * Handle ajax request to get staking pool
   * 
   * @return {Promise}
   */
  requestPool() {
    return instance.get(API.STAKING_POOL);
  }
};
