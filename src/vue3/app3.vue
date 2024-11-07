<script>
import Child from './child3.vue'
import Child2 from '../vue2/child.vue'
export default {
  components:{
    Child,
  },
  setup(){
    // console.log(Child)
  },
  mounted(){
    // vue2 runtime渲染
    const _VueReady = setInterval(()=>{
      if(Vue){
        clearInterval(_VueReady);
        new Vue({ 
          el: "#handlerDomV2",
          components: { Child2 },
          template: "<Child2/>",
        });
      }
    },100)
  },
  data() {
    return {
      msg: `Vue version is ： ${_Vue.version}`
    }
  }
}
</script>

<template>
<div className="App" :style="{'borderBottom':'4px solid #fff'}">
  <h1>this is vue3 contents:</h1>
  <p>{{ msg }}</p>
  <input v-model="msg">
  <Child />
  <div class='handlerv2'>
    <div class='handlercontent'>
      this is rendered by vue2 and rendered in vue3:
    </div>
    <div id='handlerDomV2'></div>
  </div>
</div>
</template>
<style scoped>
.handlercontent{
  background: #fff;
  border-radius: 20px;
  padding: 10px;
  width: 320px;
}
.handlercontent::after{
  content: '';
  width: 0;
  height: 0;
  border-top: 24px solid #fff;
  border-right: 24px solid transparent;
  border-left: 24px solid transparent;
  position: absolute;
  z-index: 121212;
  top: 74px;
}
.handlerv2{
  position: absolute;
  right: 20%;
  bottom: 180px;
}
</style>