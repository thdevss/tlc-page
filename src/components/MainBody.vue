<template>
  <b-container>
    <b-card no-body>
      <b-tabs pills card vertical nav-wrapper-class="w-20">
        <b-tab title="ตรวจสลากฯ" active><b-card-text><CheckNumber /></b-card-text></b-tab>
        <b-tab title="ผลสลากฯทั้งหมด"><b-card-text><NumberTable /></b-card-text></b-tab>

      </b-tabs>
    </b-card>  
  </b-container>
</template>

<script>
import CheckNumber from './Lotto/CheckNumber.vue'
import NumberTable from './Lotto/NumberTable.vue'


export default {
  name: 'MainBody',
  components: {
    CheckNumber,
    NumberTable
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
</style>
