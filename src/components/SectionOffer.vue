<script>
export default{
    data(){
        return{}
    }
}
</script>

<template>

<section>
    
    <div class="container-two">
        <div class="cit ">
            <i class="fa-solid fa-quote-left fa-2xl"></i>
            <!-- <img src="./assets/img/testi-icon.png" alt=""> -->
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis, pariatur nihil facilis corrupti consectetur culpa velit reprehenderit atque asperiores, rem qui assumenda vel aspernatur hic numquam, perspiciatis tempora cum!</p>
            <span>Martha Alex</span> <br>
            <span class="position">Manager</span>

        </div>
        <div class="offer-advertising ">
            <div class="offer-card ">
                <div class="title-offer"><p>Fresh gurden tomato combo offer...$37</p></div>
                <img src="../components/assets/img/offer-img01.jpg" alt="">
                <a href="#">SHOP NOW</a>
            </div>
            <div class="offer-card ">
                <div class="title-offer"><p>Some organic healty fruits combo offer...$49</p></div>
                <img src="../components/assets/img/offer-img02.jpg" alt="">
                <a href="#">SHOP NOW</a>
            </div>
        </div>
    </div>

</section>

</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/variables' as *;

section{
    margin-top: 3rem;
}
.cit{
    width: 55%;
    margin: auto;
    padding: 10px;
    text-align: center;
    i{
        margin-bottom: 1rem;
        color: #007166;

    }
    p{ margin: 1rem 0; }
    span{ font-weight: bold }
    .position{ color: #EF9E03; }
}
.offer-advertising{
    margin-top: 2rem;
    display: flex;
    .offer-card{
        position: relative;
        width: 50%;
        padding: 5px;
        .title-offer{
            width: 70%;
            padding: 20px;
            position: absolute;
            color: whitesmoke;
            p{ font-size: xx-large; font-weight: bold; }
        }
        img{ width: 100% }
        a{
            position: absolute;
            //width: 100%;
            text-decoration: none;
            color: whitesmoke;
            bottom: 25px;
            left: 25px;
            font-weight: bold;
            padding: 5px 0;
            &:hover{ background-color:#EF9E03 }
        }
    }
}
</style>