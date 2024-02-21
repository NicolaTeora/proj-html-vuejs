<script>
export default{
    data(){
        return{
            saluto:'ciao section'
        }
    }
}
</script>

<template>
    <section>
        <img class="certificate" src="../components/assets/img/fe-shap1-1.png" alt="">
        <div class="container-two">
            <div style="display: flex;">
                <div class="prev-zero">
                    <p class="frist-p">
                        <span>Look what</span> 
                        consumer power has done with 
                        <span>organic food;</span> 
                        we can do the same with clothes.
                    </p>
                </div>
                <div class="preview-one">
                    <p class="">
                        I have a need to make these sorts of connections literal sometimes, and a vehicle often helps to that.
                        I have a relationship to hosting culture. <span>It isn't really about it helps to do that. I have a relationship to hosting culture.</span>
                    </p>
                    <p class="bottom-p">
                        Need to make these sorts of connections literal sometimes, and a vehicle often helps to that.
                        I have a relationship to hosting culture.
                    </p>
                </div>
            </div>
            
            <div class="preview-two">
                <span class="arrow "><i class="fa-solid fa-chevron-left"></i></span>
                <img src="../components/assets/img/fe3.jpg" alt="">
                <img src="../components/assets/img/fe1.jpg" alt="">
                <img src="../components/assets/img/fe2.jpg" alt="">
                <img src="../components/assets/img/fe1.jpg" alt="">
                <span class="arrow next"><i class="fa-solid fa-chevron-right"></i></span>
            </div>    
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
    section{
        position: relative;
        .certificate{
            width: 120px;
            position: absolute;
            right: 0;
        }
    }
    p{ color: #007166; font-size: x-large; }
    span{ color:#EF9E03 }
    
    .prev-zero,
    .preview-one{
        width: 50%;
        position: relative;
        .frist-p{ font-size: 60px }
        .bottom-p{ position: absolute; bottom: 0 }
    }
    
    img{
        width: calc(25% - 20px);
        margin: 15px 10px;
    }

    .preview-two{
        position: relative;
        &:hover{
            .arrow{ display: block; }
        }
        .arrow{
            display: none;
            position: absolute;
            padding: 15px;
            color: whitesmoke;
            background-color: #EF9E03;
            top: 100px;
            &:hover{ background-color: #007166; cursor: pointer; }
        }
        .next{ right: -5px }
    }
</style>