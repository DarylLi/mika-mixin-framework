<template>
  <div class="child-vue2">
    a child content render by vue2 {{timeStr}}
    <Son />
  </div>
</template>
<script>
import Son from './component/son.vue'
export default {
  name: 'HelloWorld',
  data() {
    return {
      timeStr:'',
      poiList: { data: [] },
    }
  },
  created() {
    setInterval(()=>{
      this.timeStr = new Date().getTime();
    },1000)
  },
  components:{
    Son
  },
  methods: {}

}

</script>
<style lang="scss">
.App{
  padding: 20px;
}
.child-vue2{
  width: 200px;
  color: #fff;
  margin: 20px 0;
  padding: 20px;
  border-width:6px;
  border-image-slice: 18;
  border-style: solid;
  border-image-source: repeating-linear-gradient(45deg, transparent, rgb(248, 216, 199) 30px);
  -webkit-mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
  -webkit-mask-size: 200%;
  animation: shine 2s infinite;
  background: #000;
}
.child-vue2:before {
  border-left: 1px solid;
  border-right: 1px solid;
  -webkit-transform: scale(1,0);
  transform: scale(1,0);
}

.child-vue2:after {
  border-bottom: 1px solid;
  border-top: 1px solid;
  -webkit-transform: scale(0,1);
  transform: scale(0,1);
}
@-webkit-keyframes shine {
  from {
    -webkit-mask-position: 150%;
  }
  
  to {
    -webkit-mask-position: -50%;
  }
}


</style>