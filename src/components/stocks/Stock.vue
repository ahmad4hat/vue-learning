<template>
  <b-col sm="12" md="6" style="padding:30px">
    <div class="card">
      <h1 class="header-text">Name</h1>
      <form action method="post" class="form">
        <input type="number" class="price-input" placeholder="Quantity" />
        <div class="empty-box"></div>
        <button type="submit" class="submit-button">Buy</button>
      </form>
    </div>
  </b-col>
</template>
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
