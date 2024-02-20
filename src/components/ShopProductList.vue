<script>
export default {
    data(){
        return{}
    }
}
</script>

<template>
    <div class="container-one">
        <div class="container-two">
            <p>Trending Online Store</p>
            <h2>Gogrin all <span>organic</span> food</h2>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.container-one{
    margin-top: 5rem;
    background-image: url('../components/assets/img/shop-bg-img.jpg');
    .container-two{
        padding: 2rem;
        text-align: center;
    }
}
</style>