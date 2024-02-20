<script>
import NavBar from './components/NavBar.vue';
import Jumbo from './components/Jumbo.vue';
import SectionOne from './components/SectionOne.vue';
import ShopProductList from './components/ShopProductList.vue';
import FooterApp from './components/FooterApp.vue';

export default {
  data(){
    return{}
  },
  
  components: { NavBar, Jumbo, SectionOne, ShopProductList, FooterApp }
}
</script>

<template>
  <nav-bar/> <!-- TODO: data props -->
  <jumbo/>
  <section-one/>
  <shop-product-list/> <!-- TODO: fare funzioni calcolo sconto prodotti -->

  <footer-app/>
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
