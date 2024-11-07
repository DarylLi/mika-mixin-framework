<script>
import { onMounted, ref } from 'vue'
export default{
    data(){
        return {
            count: 1
        }
    }
}
</script>
<template>
<div>
    <div class="child-head">
        this is a vue3 component:{{count}}
    </div>
    <div>
        <button @click="count++">Count</button>
    </div>
</div>

</template>
<style>
div{
    line-height: 32px;
}
.child-head{
    font-size: 18px;
    color:#fff;
}
</style>
