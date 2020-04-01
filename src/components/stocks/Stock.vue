<template>
  <b-col sm="12" md="6" style="padding:30px">
    <div class="card">
      <h1 class="header-text">
        {{ stock.name }}
        <small>({{ stock.price }})</small>
      </h1>
      <div class="form">
        <input
          type="number"
          class="price-input"
          placeholder="Quantity"
          v-model.number="quantity"
          @change="checkMethod"
        />
        <div class="empty-box"></div>
        <button
          @click="buyMethod"
          class="submit-button"
          :disabled=" (insufficientFunds || quantity <= 0 || !Number.isInteger(quantity))"
        >Buy</button>
      </div>
    </div>
  </b-col>
</template>
<script>
export default {
  props: ["stock"],
  data: () => ({
    quantity: 0
  }),
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.stock.price * this.quantity > this.funds;
    }
  },
  methods: {
    checkMethod() {
      console.log(this.stock.price);
      console.log(this.quantity);
      console.log(this.insufficientFunds);
      console.log(this.quantity <= 0);
      console.log(!Number.isInteger(this.quantity));
    },
    buyMethod() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: parseInt(this.quantity)
      };
      console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  overflow: hidden;
  width: 100%;
  justify-content: center;
  align-items: center;

  display: flex;
  flex-direction: column;
  border-radius: 22px 22px 22px 22px;

  padding: 1%;

  box-shadow: 10px 10px 34px -10px rgba(0, 0, 0, 0.75);
}
.header-text {
  // color: var(--teal);
}
.form {
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .price-input {
    font: inherit;
    border: none;
    border-bottom: 1px solid var(--teal);
    font-size: 150%;

    margin: 0 20px;
    display: block;
    outline: none;
    padding: 10px;
  }
  .submit-button {
    border: none;
    background: var(--teal);
    border-radius: 6%;
    padding: 10px;
    display: block;
  }
  .empty-box {
    display: inline;
    height: 10px;
    width: 10px;
  }
}
</style>
