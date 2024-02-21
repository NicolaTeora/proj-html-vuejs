<script>
import { store } from '../store/store';
export default{
    data(){
        return{
            store,
        }
    },

    methods:{
        getImgPath(img){
            return new URL(`${img}`, import.meta.url).href;
        },
    }
}
</script>

<template>
   <div class="container-two ">
    <div class="row">
        
        <div v-for="product of store.popularProduct" class="card-prduct">
           
            <figure>
                <img :src="getImgPath(product.pic)" alt="">
                <figcaption>
                    <p>{{ product.name }}</p>
                    <span>$ {{ product.price }}</span>
                </figcaption>
            </figure>
            
        </div>
        
    </div>
   </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
.row{
    margin-top: 2rem;
    display: flex;
    gap: 10px;
    .card-prduct{
        width: 100%;
        border: 1px solid lightgray;
        box-shadow: 3px 5px 5px lightgray;
        text-align: center;
        padding: 10px 0;
        
        figure{
            img{
                width: 250px;
            }
            p, span{ font-weight: bold; }
            span{ color:#888888 }
        }
    }
}

</style>