<script>
import NavBar from './components/NavBar.vue';
import Jumbo from './components/Jumbo.vue';
import SectionOne from './components/SectionOne.vue';
import ShopProductList from './components/ShopProductList.vue';
import NewsLetterApp from './components/NewsLetterApp.vue';

export default {
  data(){
    return{}
  },
  
  components: { NavBar, Jumbo, SectionOne, ShopProductList, NewsLetterApp }
}
</script>

<template>
  <nav-bar/> <!-- TODO: data props -->
  <jumbo/>
  <section-one/>
  <shop-product-list/> <!-- TODO: fare funzioni calcolo sconto prodotti -->

  <news-letter-app/>
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
