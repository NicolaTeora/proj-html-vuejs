<script>
import NavBar from './components/NavBar.vue';
import Jumbo from './components/Jumbo.vue';
import SectionOne from './components/SectionOne.vue';

export default {
  data(){
    return{}
  },
  
  components: { NavBar, Jumbo, SectionOne }
}
</script>

<template>
  <nav-bar/> <!-- TODO: data props -->
  <jumbo/>
  <section-one/>
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
