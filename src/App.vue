<script>
import NavBar from './components/NavBar.vue';
import Jumbo from './components/Jumbo.vue';
import SectionPreviews from './components/SectionPreviews.vue';
import ShopProductList from './components/ShopProductList.vue';
import SectionOffer from './components/SectionOffer.vue';
import SectionStatistic from './components/SectionStatistic.vue';
import TitleSection from './components/TitleSection.vue';
import SectionTopProduct from './components/SectionTopProduct.vue';
import ContactInfoProducts from './components/ContactInfoProducts.vue';
import TitleSectionTwo from './components/TitleSectionTwo.vue';
import FooterApp from './components/FooterApp.vue';

export default {
  data(){
    return{
      overview: [
        {
            tag: 'fa-solid fa-location-dot fa-xs',
            name: 'geolocalization'
        },
        {
            tag: 'fa-solid fa-envelope fa-xs',
            name: 'name@boolemail.com',
        }
      ],

      socials: [
        {
            name: 'facebook',
            tag: 'fa-brands fa-facebook-f fa-xs',
        },
        {
            name: 'twitter',
            tag: 'fa-brands fa-x-twitter fa-xs',
        },
        {
            name: 'instagram',
            tag: 'fa-brands fa-instagram fa-xs',
        },
        {
            name: 'pinterest',
            tag: 'fa-brands fa-pinterest-p fa-xs',
        }
      ],

      menus:[
        {
            name: 'HOME',
            tag: 'fa-solid fa-chevron-down fa-xs',
        },
        {
            name: 'ABOUT',
            tag: 'fa-solid fa-chevron-down fa-xs',
        },
        {
            name: 'SERVICE',
            tag: 'fa-solid fa-chevron-down fa-xs',
        },
        {
            name: 'PORTFOLIO',
            tag: 'fa-solid fa-chevron-down fa-xs',
        },
        {
            name: 'SHOP',
            tag: 'fa-solid fa-chevron-down fa-xs',
        },
        {
            name: 'BLOG',
            tag: 'fa-solid fa-chevron-down fa-xs',
        },
        {
            name: 'CONTACT',
            tag: '',
        },
      ],
      
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
          imgBlog: './assets/img/blo1-70x70.jpg',
          description: 'Where I live, I am surrounded by fresh, organic food, so I eat really well.',
          dataP: 'December 17.2022',
        },
        {
          imgBlog: './assets/img/blo2-70x70.jpg',
          description: 'What I live, I am surrounded by fresh, organic food, so I eat really well.',
          dataP: 'December 16.2022',
        }
      ],

      gallery:['blo1-70x70.jpg','blo2-70x70.jpg','blo3-70x70.jpg','blo4-70x70.jpg','blo8-70x70.jpg','blo7-70x70.jpg'],
      
      titoloLinks: 'Emergency Link.',
      links: ['Organic Food Shop', 'Our Term & Condition.', 'Gogrin Faq Section', 'Our Team Member', 'Our Latest News Feed']
    }
  },
  
  components: { 
    NavBar, 
    Jumbo, 
    SectionPreviews, 
    ShopProductList, 
    SectionStatistic, 
    SectionOffer,
    TitleSection,
    SectionTopProduct,
    ContactInfoProducts,
    TitleSectionTwo,
    FooterApp, 
  }
}
</script>

<template>
  <nav-bar
  :overview="overview"
  :socials="socials"
  :menus="menus"
  :name="name"
  :tag="tag"/> 

  <jumbo/>
  <section-previews/>
  <shop-product-list/> <!-- TODO: fare funzioni calcolo sconto prodotti -->
  <section-offer/>
  <section-statistic/> <!-- TODO: inserire le decorazioni -->
  <title-section/>
  <section-top-product/> <!-- TODO: fare funzioni calcolo sconto prodotti -->
  <contact-info-products/>
  <title-section-two/>
  
  <footer-app
  :logoFooter="logoFooter"
  :socials="socialsContact"
  :name="name"
  :tag="tag"
  :titoloLinks="titoloLinks"
  :links="links"
  :Blogs="Blogs"
  :imgBlog="imgBlog"
  :description="description"
  :dataP="dataP"
  :gallery="gallery" />
</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>
