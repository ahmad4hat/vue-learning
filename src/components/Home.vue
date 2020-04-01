<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <h6>You May Save & Load your Data</h6>
    <h6>Click on 'End Day' to begin a new Day!</h6>
    <hr />
    <p>Your Funds :{{funds}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
