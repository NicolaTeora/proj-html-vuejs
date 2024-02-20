<script>
import NavBar from './components/NavBar.vue';
import Jumbo from './components/Jumbo.vue';
import SectionOne from './components/SectionOne.vue';
import ShopProductList from './components/ShopProductList.vue';

export default {
  data(){
    return{}
  },
  
  components: { NavBar, Jumbo, SectionOne, ShopProductList }
}
</script>

<template>
  <nav-bar/> <!-- TODO: data props -->
  <jumbo/>
  <section-one/>
  <shop-product-list/>
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
