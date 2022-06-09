<template>
  <div id="app">
    <MainBody style="margin-bottom:10%;" />

    <FooterBar />
  </div>
</template>

<script>
import MainBody from './components/MainBody.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  name: 'App',
  components: {
    MainBody,
    FooterBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
