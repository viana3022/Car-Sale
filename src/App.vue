<template>
  <div>
    <PaginaInicial/>
    <NavBar/>
  </div>
</template>

<script>

import PaginaInicial from './components/PaginaInicial.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    PaginaInicial,
    NavBar,
  },
  data(){
    return{

    }
  }
}
</script>

<style src="../global.css">
  
</style>
