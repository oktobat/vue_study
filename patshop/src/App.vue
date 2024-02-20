<template>
  <div id="container">
    <PatHeader></PatHeader>
    <router-view></router-view>
  </div>
</template>


<script>
  import './assets/css/reset.css'

  import PatHeader from './components/PatHeader'

  export default {
    components:{
      PatHeader : PatHeader,
    },
    
  }
</script>

<style lang="scss" scoped>
  #container {
    max-width:800px; margin:50px auto;
    border:1px solid #000; 
  }
</style>