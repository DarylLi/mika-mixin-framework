<script>
import Child from './child.vue';
import Child2 from '../vue3/child3.vue';
export default {
  setup(){},
  mounted(){
    // vue3 runtime渲染
    const _VueReady = setInterval(()=>{
      if(_Vue){
        clearInterval(_VueReady);
        _Vue.createApp(Child2).mount("#handlerDomV3");
      }
    },100)
    
  },
  data() {
    return {
      msg: `vue version is： ${Vue.version}`
    }
  },
  components:{
    Child
  }
}
</script>

<template>
<div class="App" :style="{'position':'relative'}">
  <h1>this is vue2 contents:</h1>
  <p>{{ msg }}</p>
  <input v-model="msg">
  <Child />
  <div class='handlerv3'>
    <div class='handlercontent'>
      this is rendered by vue3 and rendered in vue2:
    </div>
    <div id='handlerDomV3'></div>
  </div>
</div>
</template>
<style>
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
.handlerv3{
  position: absolute;
  right: 20%;
  bottom: 150px;
}
#handlerDomV3{
  margin-top: 20px;
}
</style>