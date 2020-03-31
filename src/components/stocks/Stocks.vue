<template>
  <b-row>
    <Stock v-for="stock in stocks" v-bind:key="stock.id" :stock="stock">
      {{
      stock.name
      }}
    </Stock>
  </b-row>
</template>
<script>
import Stock from "./Stock.vue";
export default {
  components: {
    Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>
