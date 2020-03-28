<template>
  <b-row>
    <Stock v-for="stock in stocks" v-bind:key="stock.id">{{stock.name}}</Stock>
  </b-row>
</template>
<script>
import Stock from "./Stock.vue";
export default {
  data: () => ({
    stocks: [
      { id: 1, name: "AH", price: 850 },
      { id: 2, name: "AF", price: 550 },
      { id: 3, name: "HAT", price: 750 },
      { id: 4, name: "AT", price: 450 },
      { id: 5, name: "AH", price: 850 }
    ]
  }),
  components: {
    Stock
  }
};
</script>
