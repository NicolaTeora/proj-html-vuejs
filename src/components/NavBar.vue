<script>
export default {
    data(){
        return{
            // TODO: da passare tramite props.
            overview: [
                {
                    tag: 'fa-solid fa-location-dot fa-xs',
                    name: 'geolocalization'
                },
                {
                    tag: 'fa-solid fa-envelope fa-xs',
                    name: 'name@boolemail.com',
                }
            ],
            socials: [
                {
                    name: 'facebook',
                    tag: 'fa-brands fa-facebook-f fa-xs',
                },
                {
                    name: 'twitter',
                    tag: 'fa-brands fa-x-twitter fa-xs',
                },
                {
                    name: 'instagram',
                    tag: 'fa-brands fa-instagram fa-xs',
                },
                {
                    name: 'pinterest',
                    tag: 'fa-brands fa-pinterest-p fa-xs',
                }
            ],

            openCloseStore: { tag:'fa-solid fa-clock fa-xs', time:'8:00AM - 8:30PM'},
        }
    }
}
</script>

<template>
    <nav class="top-nav">
        <div class="container-one">
            <ul>
                <!-- TODO: in "li" ancor tag -->
                <li v-for="contact of overview">
                    <i :class="contact.tag"></i>
                    {{ contact.name }}
                </li>
            </ul>
            <ul>
                <li>
                    <i :class="openCloseStore.tag"></i>
                    {{ openCloseStore.time }}   
                </li>
                <li v-for="social of socials"><i :class="social.tag"></i></li>
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
    .container-one{
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
