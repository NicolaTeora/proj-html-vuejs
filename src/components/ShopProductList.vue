<script>
export default {
    data(){
        return{
            products:[
                {
                    pic: "./assets/img/s1.jpg",
                    name: "Organic Juice",
                    discount: 'SALE!',
                    price: 20,
                },
                {
                    pic: "./assets/img/s2.jpg",
                    name: "Fress Cobies",
                    discount: 'SALE!',
                    price: 18,
                },
                {
                    pic: "./assets/img/s4.jpg",
                    name: "Fresh Blueberries",
                    discount: 'SALE!',
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
                    discount: '',
                    price: 21,
                },
                {
                    pic: "./assets/img/s8.jpg",
                    name: "Fresh Waterlemon",
                    discount: '',
                    price: 15,
                },
                {
                    pic: "./assets/img/s9.jpg",
                    name: "Red Gajor",
                    discount: 'SALE!',
                    price: 29,
                },
                {
                    pic: "./assets/img/s10.jpg",
                    name: "organic letus",
                    discount: '',
                    price: 23,
                },
            ],
            shopMenus:['All product','Apple','food','Orange','Vegetable'],
        }
    },
    methods:{
        getImgPath(img){
            return new URL(`${img}`, import.meta.url).href;
        },
        viewListProduct(){
            console.log('go to page the list of product')
        }
    }
}
</script>

<template>
    <div class="container-one">
        <div class="container-two">
            <div class="menu-shop ">
                <p>Trending Online Store</p>
                <h2>Gogrin all <span>organic</span> food</h2>
                
                <p>Trending Online Store</p>
                <h2>Gogrin all <span>organic</span> food</h2>
                <ul>
                    <li v-for="i of shopMenus">{{ i }}</li>
                </ul>
            </div>

            <div class="products">
                <!-- TODO: mettere il prezzo scontato -->
                <div class="product" v-for="product of products">
                    <figure>
                        <img :src="getImgPath(product.pic)" :alt="product.pic">
                        <span class="label">{{ product.discount }}</span>
                        <figcaption>
                            <p>{{ product.name }}</p>
                            <span>$ {{ product.price }}</span>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <button @click="viewListProduct()">All products</button>
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
        .menu-shop{
            width: 50%;
            margin: 20px auto;
            p{
                color: #EF9E03;
                margin-top: 1rem;
            }
            h2{
                margin-bottom: 1.5rem;
                font-size: 55px;
                span{ color: #EF9E03; }
            }
        }
        ul{
            display: flex;
            justify-content: space-around;
            li:hover{
                cursor: pointer;
                text-decoration: underline
            }
            
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
            p{
                font-size: large;
                margin: 10px 0;
            }
            span{
                color: #EF9E03;
                //margin-bottom: 10px;
            }
            figure{
                margin: 20px 0;
                position: relative;
                .label{
                    position: absolute;
                    padding: 5px;
                    right: 25px;
                    top: 5px;
                    background-color: #EF9E03;
                    color: whitesmoke;
                } 
            }
        }
    }
}
</style>