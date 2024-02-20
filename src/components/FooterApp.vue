<script>
export default{
    data(){
        return{
            istruction: 'War should never be entered upon every agency of peace has failed not to be good',
            titleBlog: 'Our Latest Blog.'
        }
    },

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
    },

    methods:{
        getImgPath(img){
            return new URL(`${img}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <footer>
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
            <div class="emegency">
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
    
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;

footer{
    margin-top: 3rem;
    padding-top: 3rem;
    background-image: url('./assets/img/footer-bg.jpg');
    color: whitesmoke;
}

.logo-ft{
    li{
        line-height: 50px;
    }
}
.container-two{
    display: flex;
    gap: 1rem;
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
        }
    }
    .emegency{
        ul{
            margin-top: 1rem;
            li{
                line-height: 35px;
            }
        }
    }
    .blogs{
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
}

</style>