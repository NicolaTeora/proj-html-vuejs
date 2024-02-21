<script>
import { store } from '../store/store';

export default {
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <section>
        
        <div class="container-one ">
            <div class="container-two">
                <ul>
                    <li class="sm-title">HERE YOU CAB GET 100% FRESH ORGANIC FOOD</li>
                    <li class="bg-title"><h2>Best orgnaic food up to 25% off for all product</h2></li>
                    <li><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sunt quaerat sint, quis ut quae assumenda odit voluptate doloribus repudiandae non cum amet illum autem veritatis libero? Enim, odit quae?</p></li>
                </ul>
                <button class="call">+89 86565465</button>
                <button class="appoinment">Appoinment</button>
            </div>
        </div>
        
    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

section{
    margin: 3rem auto;
}
.container-one{
    background-image: url('./assets/img/call-to-bg.jpg');
    background-size: cover;
    padding: 2rem;
    text-align: center;
    .container-two{
        color: whitesmoke;
        ul{
            li{
                margin: 10px 0;
                cursor: context-menu;
            }
            .sm-title,
            .bg-title{
                font-weight: bold;
            }
            .bg-title{
                font-size: 30px;
            }
        }
        .call, .appoinment{
            margin: 1rem;
            padding: 15px 20px;
            border-radius: 5px;
            border: none;
            color: white;
            font-size: 12px;
            font-weight: bold;
            cursor: pointer;
        }
        .call{
            background-color: $color-evidence;
            &:hover{ background-color: $color-title;}
        }
        .appoinment{
            background-color: $color-title;
            &:hover{ background-color: $color-evidence;}
        }
    }
}
</style>