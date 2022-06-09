<template>
  <div>
    <b-navbar type="dark" variant="dark" fixed="bottom">
      <b-navbar-brand href="#">Thai Lotto Checker</b-navbar-brand>

      <b-navbar-nav align="end">
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item target="_blank" href="https://github.com/thdevss">Github</b-nav-item>
        <b-nav-item target="_blank" href="https://www.linkedin.com/in/pichet-s-89a5a8178 ">Linkedin</b-nav-item>

      
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'FooterBar',
  props: {
    msg: String
  }
}
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
.navbar-expand {
  justify-content: space-between;
}
</style>
