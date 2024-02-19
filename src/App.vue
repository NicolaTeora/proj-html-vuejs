<script>
import NavBar from './components/NavBar.vue';
export default {
  data(){
    return{
      title:'ciao',
    }
  },
  
  components: { NavBar }
}
</script>

<template>
  <nav-bar/>
</template>

<style lang="scss" >
@use './style/general.scss' as *;
</style>
