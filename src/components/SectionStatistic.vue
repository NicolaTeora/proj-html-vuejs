<script>
import { store } from '../store/store';

export default{
    data(){
        return{
            store,

            statistics: [
                {
                    value: 99,
                    titleCount: 'details count'
                }
            ]
        }
    }
}
</script>

<template>
    <section class="statistic">
        <div class="container-two">
            <div class="row ">
                <div class="col-count debug2">
                    <div class="card debug1">
                        <span>99</span> <br>
                        <span>title count</span>
                    </div> 
                </div>
                <img src="./assets/img/counter-shap1.png" alt="">
                <div class="col-count debug2">
                    <div class="card debug1">
                        <span>99</span> <br>
                        <span>title count</span>
                    </div> 
                </div>
                <div class="col-count debug2">
                    <div class="card debug1">
                        <span>99</span> <br>
                        <span>title count</span>
                    </div> 
                </div>
                <div class="col-count debug2">
                    <div class="card debug1">
                        <span>99</span> <br>
                        <span>title count</span>
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
    margin-top: 3rem;
    padding: 20px 0;
}
.row{
    display: flex;
    .col-count{
        width: 100%;
        text-align: center;
    }
}
</style>