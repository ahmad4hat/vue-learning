<template>
  <div>
    <h1>stockPorfolio</h1>
    <b-row>
      <Stock v-for="stock in stocks" v-bind:key="stock.id" :stock="stock">
        {{
        stock.name
        }}
      </Stock>
    </b-row>
  </div>
</template>
<script>
import Stock from "./Stock";
export default {
  components: {
    Stock
  },
  computed: {
    stocks() {
      console.log(this.$store.getters.stockPorfolio);
      return this.$store.getters.stockPorfolio;
    }
  }
};
</script>
