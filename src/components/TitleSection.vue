<script>
export default{
    data(){
        return{}
    }
}
</script>

<template>
    <section>
        <div class="container-one">
            <div class="title">
                <p>Running week top selling</p>
                <h2>TOP <span>TRENDING</span> ORGANIC FOOD</h2>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;
.title{
    padding-top: 30px;
    //height: 150px;
    background-image: url('./assets/img/title-shap.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin: auto;
    text-align: center;
    p,
    span{ color: #EF9E03 }
    h2{ color: #007166; }
}
</style>