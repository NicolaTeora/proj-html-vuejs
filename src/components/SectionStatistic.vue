<script>
import { store } from '../store/store';

export default{
    data(){
        return{
            store,
            bar: '<img src="./assets/img/counter-shap1.png" alt="">',
            
            statistics: [
                {
                    value: '29+',
                    titleCount: 'Years of Experienced'
                },
                {
                    value: '200+',
                    titleCount: 'Everyday Online Delivery'
                },
                {
                    value: '20K',
                    titleCount: 'Client Statysfaction'
                },
                {
                    value: '30+',
                    titleCount: 'Award Winning'
                }
            ]
            
        }
    }
}
</script>

<template>
    <section class="statistic container-one">
        <div class="container-two">
            <div class="row">

                <div v-for="result of statistics" class="col-count">
                    
                    <div class="card ">
                        <span class="number">{{ result.value }}</span> <br>
                        <span class="description">{{ result.titleCount }}</span>
                    </div> 
                </div>
                
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;

.statistic{
    background-image: url('./assets/img/counter-bg.jpg');
    margin: 3rem auto;
    padding: 45px 0;
}
.row{
    display: flex;
    align-items: center;
    .col-count{
        width: 100%;
        padding: 0 5px;
        text-align: center;
        .number{
            font-size: 50px;
            color: #EF9E03;
        }
        .description{
            font-size: smaller;
            font-weight: bold;
            color: whitesmoke;
        }
    }
}
</style>