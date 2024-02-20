<script>
import NavBar from './components/NavBar.vue';
import Jumbo from './components/Jumbo.vue';
import SectionOne from './components/SectionOne.vue';
import ShopProductList from './components/ShopProductList.vue';
//import NewsLetterApp from './components/NewsLetterApp.vue';
import FooterApp from './components/FooterApp.vue';

export default {
  data(){
    return{
      logoFooter: './assets/img/footer-logo.png',
      socialsContact: [
        {
          tag:'fa-brands fa-facebook-f',
          name: 'Facebook'
        },
        {
          tag:'fa-brands fa-google-plus-g',
          name: 'Google Plus'
        },
        {
          tag:'fa-brands fa-x-twitter',
          name: 'Twitter'
        },
        {
          tag: 'fa-brands fa-pinterest-p fa-xs',
          name: 'Pinterest'
        }
      ],

      Blogs:[
        {
          imgBlog: './asset/img/blo1-70x70.jpg',
          description: 'Where I live, I am surrounded by fresh, organic food, so I eat really well.',
          data: 'December 17.2022',
        }
      ],
      
      titoloLinks: 'Emergency Link.',
      links: ['Organic Food Shop', 'Our Term & Condition.', 'Gogrin Faq Section', 'Our Team Member', 'Our Latest News Feed']
    }
  },
  
  components: { NavBar, Jumbo, SectionOne, ShopProductList, FooterApp }
}
</script>

<template>
  <nav-bar/> <!-- TODO: data props -->
  <jumbo/>
  <section-one/>
  <shop-product-list/> <!-- TODO: fare funzioni calcolo sconto prodotti -->

  <!-- <news-letter-app/> -->
  <footer-app
  :logoFooter="logoFooter"
  :socials="socialsContact"
  :name="name"
  :tag="tag"
  :titoloLinks="titoloLinks"
  :links="links" />
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
