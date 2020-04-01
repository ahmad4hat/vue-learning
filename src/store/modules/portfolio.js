const state = { funds: 1000, stocks: [] };
export const BUY_STOCKS = "BUY_STOCKS";
export const SELL_STOCKS = "SELL_STOCKS";
const mutations = {
  [BUY_STOCKS](state, { id, quantity, price }) {
    console.log(state.funds);
    const record = state.stocks.find(el => el.id == id);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: id,
        quantity: quantity
      });
      console.log(state);

      console.log(price);
      console.log(quantity);
      state.funds -= price * quantity;
      console.log("hello " + state.funds);
    }
  },
  [SELL_STOCKS](state, { id, quantity, price }) {
    const record = state.stocks.find(el => el.id == id);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += quantity * price;
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit(SELL_STOCKS, order);
  }
};
const getters = {
  stockPorfolio: (state, getters) =>
    state.stocks.map(stock => {
      console.log(stock);
      const record = getters.stocks.find(element => element.id == stock.id);
      console.log("****");
      console.log(record);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    }),
  funds: state => state.funds
};
export default {
  state,
  mutations,
  actions,
  getters
};
