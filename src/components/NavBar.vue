<script>
export default {
    data(){
        return{
            titlejumbo:'hello'
        }
    }
}
</script>

<template>
    <nav class="top-nav">
        <div class="container-one">
            <ul>
                <!-- TODO: in "li" ancor tag -->
                <li>
                    <i class="fa-solid fa-location-dot fa-xs"></i>
                    geolocalization
                </li>
                <li>
                    <i class="fa-solid fa-envelope fa-xs"></i>
                    name@boolemail.com
                </li>
            </ul>
            <ul>
                <li>
                    <i class="fa-solid fa-clock fa-xs"></i>
                    <!-- TODO: function time clock -->
                    8:00AM - 8:30PM   
                </li>
                <li><i class="fa-brands fa-facebook-f fa-xs"></i></li>
                <li><i class="fa-brands fa-x-twitter fa-xs"></i></li>
                <li><i class="fa-brands fa-instagram fa-xs"></i></li>
                <li><i class="fa-brands fa-pinterest-p fa-xs"></i></li>
            </ul>
        </div>
    </nav>
    <nav class="bottom-nav">
        <div class="container-one">
            <div class="nav-menu">
                <div class="logo">
                    <img src="../../public/logo.png" alt="">
                </div>
                <ul>
                    <li>
                    </li>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="">SERVICE</a></li>
                    <li><a href="#">PORTFOLIO</a></li>
                    <li><a href="#">SHOP</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
            <div class="option-shop">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                <button>Order now</button>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;

.top-nav{
    padding: 10px 0;
    background-color: #007166;
    color: white;
}
.container-one{
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul{
        display: flex;
        gap: 15px;
    }
}
.bottom-nav{
    margin-top: 0.8rem;
    .container-two{
        .nav-menu{
            display: flex;
            align-items: center;
            gap: 25px;
            font-size: small;
            .logo{
                img{
                    width: 150px;
                }
            }
        }
        .option-shop{
            button{
                @include btn-oranage-one();
            }
        }
    } 
}
</style>
