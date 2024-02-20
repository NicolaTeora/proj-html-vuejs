<script>
export default {
    data(){
        return{
            products:[
                {
                    pic: "./assets/img/s1.jpg",
                    name: "Organic Juice",
                    price: 20,
                },
                {
                    pic: "./assets/img/s2.jpg",
                    name: "Fress Cobies",
                    price: 18,
                },
                {
                    pic: "./assets/img/s4.jpg",
                    name: "Fresh Blueberries",
                    price: 19,
                },
                {
                    pic: "./assets/img/s5.jpg",
                    name: "Fress Apple",
                    price: 18,
                },
                {
                    pic: "./assets/img/s7.jpg",
                    name: "Naga pepper",
                    price: 21,
                },
                {
                    pic: "./assets/img/s8.jpg",
                    name: "Fresh Waterlemon",
                    price: 15,
                },
                {
                    pic: "./assets/img/s9.jpg",
                    name: "Red Gajor",
                    price: 29,
                },
                {
                    pic: "./assets/img/s10.jpg",
                    name: "organic letus",
                    price: 23,
                },
            ]
        }
    },
    methods:{
        getImgPath(img){
            return new URL(`${img}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="container-one">
        <div class="container-two">
            <p>Trending Online Store</p>
            <h2>Gogrin all <span>organic</span> food</h2>
            
            <p>Trending Online Store</p>
            <h2>Gogrin all <span>organic</span> food</h2>
            <ul>
                <li>All product</li>
                <li>Apple</li>
                <li>food</li>
                <li>Orange</li>
                <li>Vegetable</li>
            </ul>
            <div class="products">
                <div class="product" v-for="product of products">
                    <figure>
                        <img :src="getImgPath(product.pic)" :alt="product.pic">
                        <figcaption>
                            <p>{{ product.name }}</p>
                            <span>$ {{ product.price }}</span>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <button>All products</button>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;

.container-one{
    margin-top: 5rem;
    background-image: url('../components/assets/img/shop-bg-img.jpg');
    .container-two{
        padding: 2rem 0;
        text-align: center;
        color: white;
        ul{
            display: flex;
            justify-content: space-around;
            
        }
        button{
            @include btn-oranage-one();
        }
        .products{
            display: flex;
            flex-wrap: wrap;
            .product{
                width: 25%;
            }
        }
    }
}
</style>