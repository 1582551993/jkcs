<template>
  <div id="right">
      <Yy1 v-if="type=='yy'"></Yy1>
      <Dl1 v-if="type=='dl'"></Dl1>
      <Jh1 v-if="type=='jh'"></Jh1>
  </div>
</template>
<script>
import Yy from '@/components/favue/Yy'
import Dl from '@/components/favue/Dl'
import Jh from '@/components/favue/Jh'
export default {
  name: 'Right',
  components: {
     'Yy1': Yy,
     'Dl1': Dl,
     'Jh1': Jh
  },
  props: ['type'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  
}
</script>
<style>
#right{
  position:absolute;
  left:20%;
  top:0px;
  margin:30px;
}
</style>