<script>
import NewsLetterApp from './NewsLetterApp.vue';

export default{
    data(){
        return{
            istruction: 'War should never be entered upon every agency of peace has failed not to be good',
            titleBlog: 'Our Latest Blog.'
        }
    },

    components:{ NewsLetterApp },

    props:{
        logoFooter: String,
        socials: Array,
        name: String,
        tag: String,
        links: Array,
        titoloLinks: String,
        Blogs: Array,
        imgBlog: String,
        description: String,
        dataP: String,
        gallery: Array,
    },

    methods:{
        getImgPath(img){
            return new URL(`${img}`, import.meta.url).href;
        },
        getGalleryImgPath(img){
            return new URL(`./assets/img/${img}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <footer>
        <div class="email-news">
            <news-letter-app/>
        </div>
        <div class="container-two">

            <div class="logo-ft">
                <ul>
                    <li><img :src="getImgPath(logoFooter)" alt="logo footer"></li>
                    <li>{{ istruction }}</li>
                    <li>
                        <ul class="socialLinks">
                            <li v-for="social of socials"><i :class="social.tag"></i></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="emergency">
                <h3>{{titoloLinks}}</h3>
                <ul>
                    <li v-for="link of links">{{ link }}</li>
                </ul>
            </div>

            <div class="blogs">
                <h3>{{ titleBlog }}</h3>               
                <div v-for="blog of Blogs">
                    <figure>
                        <img :src="getImgPath(blog.imgBlog)" :alt="blog.imgBlog">
                        <figcaption>
                            <p class="description">{{ blog.description }}</p>
                            <p>{{ blog.dataP }}</p>
                        </figcaption>
                    </figure>
                </div>
            </div>

            <div class="our-gallery">
                <h3>Our Gallery</h3>
                <div class="gallery">
                    <div v-for="image of gallery" class="card">
                        <img :src="getGalleryImgPath(image)" :alt="getGalleryImgPath(image)">
                    </div>
                </div>
            </div>
    
        </div>

    </footer>

</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;

footer{
    position: relative;
    margin-top: 3rem;
    padding-top: 5rem;
    padding-bottom: 3rem;
    background-image: url('./assets/img/footer-bg.jpg');
    color: whitesmoke;
    .email-news{
        top: -50px;
        width: 100%;
        position: absolute;
    }
}

.logo-ft{
    width: 25%;
    li{
        width: 70%;
        margin-top: 10px;
    }
}
.container-two{
    display: flex;
    //gap: 1rem;
    
    .socialLinks{
        display: flex;
        gap: 1rem;
        color: whitesmoke;
        li{
            text-align: center;
            line-height: 50px;
            width: 50px;
            height: 50px;
            border-radius: 5px;
            background-color: #007166;
            &:hover{
                background-color: #EF9E03;
            }
        }
    }
    .emergency{
        width: 25%;
        ul{
            margin-top: 1rem;
            li{
                line-height: 35px;
            }
        }
    }
    .blogs{
        width: 25%;

        figure{
            display: flex;
            gap: 1rem;
            margin: 1rem 0;
            figcaption{
                .description{
                    font-weight: bold;
                }
            }
        }
    }
    .our-gallery{
        width: 25%;

    }
    .gallery{
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
        .card{
            padding: 5px;
            width: calc(100% / 3 - 20px);
            img{ width: 100% }
        }
    }
}

</style>