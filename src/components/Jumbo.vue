<script>
export default {
    data(){
        return{}
    }
}
</script>

<template>
    <section class="jumbo-screen">
        <span class="arr-right">
            <i class="fa-solid fa-chevron-right"></i>
        </span>
        <span class="arr-left">
            <i class="fa-solid fa-chevron-left"></i>
        </span>
        <div class="title-jumbo container-two">
            <p>GOGRING ORGANIC FOOD STORE</p>
            <h1>Eating naturally & organic is always be healthy.</h1>
            <button class="btn-us">ABOUT US</button>
            <button class="btn-history">OUR HISTORY</button>
        </div>
        <img src="../components/assets/img/H3-slider3.jpg" alt="" width="100%">
    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;

.jumbo-screen{
    margin: 1rem 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    span{
        position: absolute;
        color: white;
    }
    .arr-right{ right: 5px; &:hover{
        cursor: pointer;
        padding: 25px 2px;
        background-color: rgba(8,8,8,0.5);
    }}
    .arr-left{ left: 5px; &:hover{
        cursor: pointer;
        padding: 25px 2px;
        background-color: rgba(8,8,8,0.5);}}
    .title-jumbo{
        position: absolute;
        color: white;
        width: 35%;
        p{
            font-size: smaller;
        }
        h1{
            font-size: xxx-large;
        }
        button{
            margin: 5px 10px;
        }
        .btn-us{
        @include btn-oranage-one();
        }
        .btn-history{
            @include btn-green-one();
        }
    }
}
</style>