<script>
export default{
    data(){
        return{
            istruction: 'War should never be entered upon every agency of peace has failed not to be good'
        }
    },

    props:{
        logoFooter: String,
        socials: Array,
        name: String,
        tag: String,
        links: Array,
        titoloLinks: String,
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
                
            </div>
    
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;

footer{
    background-image: url('./assets/img/footer-bg.jpg');
    color: whitesmoke;
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
}

</style>