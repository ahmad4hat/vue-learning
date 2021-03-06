import stocks from "../../data/stocks.js";
import { BUY_STOCKS } from "./portfolio";
const state = {
  stocks: []
};

const SET_STOCKS = "SET_STOCKS";
const RAN_STOCKS = "RAN_STOCKS";
const mutations = {
  [SET_STOCKS](state, stocks) {
    state.stocks = stocks;
  },
  [RAN_STOCKS](state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit(BUY_STOCKS, order);
  },
  initStocks: ({ commit }) => {
    commit(SET_STOCKS, stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit(RAN_STOCKS);
  }
};

const getters = {
  stocks: state => state.stocks
};
export default { state, mutations, actions, getters };
