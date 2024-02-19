<script>
import NavBar from './components/NavBar.vue';
import Jumbo from './components/Jumbo.vue';

export default {
  data(){
    return{
      title:'ciao',
    }
  },
  
  components: { NavBar, Jumbo }
}
</script>

<template>
  <nav-bar/> <!-- TODO: data props -->
  <jumbo/>
</template>

<style lang="scss" >
@use './style/general.scss' as *;
</style>
