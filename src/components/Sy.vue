<template>
  <div class="sy">
    <header1></header1>
    <body1></body1>
    <bottom1></bottom1>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Body from '@/components/Body'
import Bottom from '@/components/Bottom'
export default {
  name: 'Sy',
  components: {
     'header1': Header,
     'body1': Body,
     'bottom1': Bottom
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
