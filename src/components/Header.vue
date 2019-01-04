<template>
  <div id="header">
      {{msg}}
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: '欢迎访问银行接口测试系统'
    }
  }
}
</script>
<style>
#header{
  width:100%;
  height:50px;
  line-height:50px;
  font-size:16px;
  background:#545f71;
  color:#fff;
}
</style>