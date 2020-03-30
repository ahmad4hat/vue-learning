import stocks from "../../data/stocks.js";
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
    console.log(state);
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    console.log(order);
    commit();
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