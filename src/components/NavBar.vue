<script>
export default {
    // TODO: da passare tramite props.
    data(){
        return{
            openCloseStore: { tag:'fa-solid fa-clock fa-xs', time:'8:00AM - 8:30PM'},
        }
    },
    
    props:{
        overview: Array,
        tag: String,
        name: String,
        socials: Array,
        menus: Array,
        name: String,
        tag: String,
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
                    <li v-for="navigator of menus">
                        <!-- dropdown navbar -->
                        <div class="dropdown">
                            <button>
                                <a href="#">{{ navigator.name }}</a>
                                <i :class="navigator.tag"></i>
                            </button>
                            <div class="dropdwn-list ">
                                <ul>
                                    <li>
                                        <a href="#">link 1</a>
                                    </li>
                                    <li>
                                        <a href="#">link 2</a>
                                    </li>
                                    <li>
                                        <a href="#">link 3</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </li>
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
        li{
            padding: 5px 2px;
            &:hover{
                background-color: lightgray;
            }
        }
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
            .dropdown{
                button{
                    border: none;
                    background-color: inherit;
                }
                .dropdwn-list{
                    display: none;
                    position: absolute;
                    //display: flex;
                    //flex-direction: column;
                    z-index: 1;
                    //align-items: flex-end;
                    padding-right: 35px;
                    background-color: white;
                    box-shadow: 5px 5px 5px;
                    ul{
                        display: block;
                        li{ font-size: large }
                    }
                }
                &:hover{
                    .dropdwn-list{
                        display: block;
                    }
                }
            }
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
