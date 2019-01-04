<template>
  <div id="body">
    <ul class="menu-item">
      <li v-for="menu in menus" v-bind:class="menu.checked == true ? 'menuEnter' : '' " :key="menu.name" @click="menuClick(menu.id)" @mouseenter="menuEnter(menu)" @mouseleave="menuLeave(menu)">{{menu.name}}</li>
    </ul>
    <Right1 :type="fa"></Right1>
  </div>
</template>
<script>
import Right from '@/components/Right'
export default {
  name: 'Body',
  components: {
     'Right1': Right
  },
  data () {
    return {
      menus:[{
        "id" : "yy",
        "name":"用友方案测试",
        "checked":false
      },{
        "id" : "jh",
        "name":"建行方案测试",
        "checked":false
      },{
        "id" : "dl",
        "name":"大连方案测试",
        "checked":false
      }
      ],
      fa:"yy"
   }
  },
  methods:{
      menuClick(type){
          this.fa = type;
      },
      menuEnter(menu){
          menu.checked=true;
      },
      menuLeave(menu){
          menu.checked=false;
      }
  }
}
</script>
<style>
#body{
   background:#e8edf1; 
   position:relative;
   height:750px;
}
.menu-item{
  color:#fff;
  margin:0px;
  width:20%;
  min-width:120px;
  background:#343f55;
  height:100%;
  font-size:14px;
}
.menu-item li{
  cursor:pointer;
  display:block;
  width:100%;
  height:50px;
  margin:0px;
  line-height:50px;
}
.menuEnter{
  background:#e8edf1;
  color:#343f55;
  font-weight:400;
}
</style>