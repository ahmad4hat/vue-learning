<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <router-link to="/">
        <b-navbar-brand>Stock Price</b-navbar-brand>
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-nav-text>
          <strong>FUNDS {{ funds | currency}}</strong>
        </b-nav-text>
        <b-navbar-nav>
          <router-link to="/portfolio" tag="b-nav-item" active-class="active">Portfolio</router-link>
          <router-link to="/stocks" tag="b-nav-item" active-class="active">Stocks</router-link>
          <b-nav-item @click="endDay">End day</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    endDay() {
      console.log("hello");
      this.$store.dispatch("randomizeStocks");
    }
  }
};
</script>
