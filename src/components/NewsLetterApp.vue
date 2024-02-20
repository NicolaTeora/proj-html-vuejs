<script>
export default{
    data(){
        return{
            titleSend: 'SUBSCRIBE OUR NEWSLETTER'
        }
    },
    pathImgBackG(){

    }
}
</script>

<template>
    <div class="container-two">
        <div class="news-letter">
            <label for="newsletters">{{ titleSend }}</label>
            <div>
                <input type="text" id="newsletters" placeholder="Your email">
                <button>SEND</button>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;
.news-letter{
    //position: absolute;
    display: flex;
    justify-content: space-between;
    background-image: url('./assets/img/milesim-bg.jpg');
    padding: 2rem 1rem;
    text-align: center;
    color: whitesmoke;
    label{ font-weight: bolder; }
    input{ 
        width: 400px;
        padding: 5px 
    }
    button{
        width: 200px;
        padding: 6px 25px;
        color: whitesmoke;
        background-color: #007166;
        border: none;
    }
}

</style>