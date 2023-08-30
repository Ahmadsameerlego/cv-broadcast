<template>
  <header id="header" class="pt-4 pb-4">
    <div class="container">
        <!-- full header  -->
        <div class="d-flex justify-content-between align-items-center">

                
            <!-- logo  -->
            <div class="logo">
                <img :src="require('@/assets/imgs/logo.png')" alt="site logo">
            </div>

            <!-- nav bar  -->
            <nav class="navbar navbar-expand-lg" ref="toggle_nv">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link fw-bold" to="/"> {{ $t('nav.main') }} </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link fw-bold" to="/exploreJobs">{{ $t('nav.exploreJobs') }}</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link fw-bold" to="/termsCondition"> {{ $t('nav.terms') }} </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link fw-bold" to="/whoUs"> {{ $t('nav.whoUs') }} </router-link>
                    </li>
                </ul>
            </nav>

            <!-- toggle icon  -->
            <span class="toggle_bar" @click="toggle_bar" ref="toggleICon">
                <i class="fa-solid fa-bars"></i>
                <!-- <i class="fa-solid fa-x" v-else-if="open==false"></i> -->
            </span>

            <!-- user interaction  -->
            <div class="user_interaction d-flex justify-content-between align-items-center">
                <!-- alert  -->
                <router-link to="/notificationPage" class="alert flex_center mb-0 mx-2">
                    <i class="fa-regular fa-bell"></i>
                </router-link>

                <!-- search  -->
                <router-link to="/" class="search flex_center mb-0 mx-2">
                    <img :src="require('@/assets/imgs/Vector.png')" alt="">
                </router-link>

                <!-- messages  -->
                <router-link to="/" class="message flex_center mb-0 mx-2">
                    <img :src="require('@/assets/imgs/messages.png')" alt="">
                </router-link>


                <!-- lang  -->
                <button class="lang flex_center mx-2" @click="switchLang"> 
                    <span v-if="$i18n.locale=='en'" >AR</span>
                    <span v-else-if="$i18n.locale=='ar'" >EN</span> 
                </button>

                <!-- login  -->
                <!-- <router-link class="bordered_btn mx-2" to="/login"> {{ $t('nav.login') }} </router-link> -->
                <!-- register  -->
                <!-- <router-link class="main_btn mx-2" to="/register"> {{ $t('nav.register') }} </router-link> -->

                <!-- profile dropdown  -->
                <div class="dropdown profile br-5">
                    <button class="btn dropdown-toggle px-4 br-5 pt-2 pb-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://lottiefiles.com/113472-happy-eye-emoji-animation" class="mx-2 imoji" width="20" height="20" alt="">
                        <span class="name">اهلا احمد</span>

                        <i class="fa-regular fa-user user_profile"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li class="mb-3">
                            <router-link class="dropdown-item d-flex justify-content-start align-items-center" to="/profile">
                                <span class="profile_icon flex_center">
                                    <i class="fa-solid fa-user-pen"></i>
                                </span>
                                <span class="mx-2 fw-6">
                                    الملف الشخصي
                                </span>
                            </router-link>
                        </li>

                        <li class="mb-3">
                            <router-link class="dropdown-item d-flex justify-content-start align-items-center" to="/orders">
                                <span class="profile_icon flex_center">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </span>
                                <span class="mx-2 fw-6">
                                    الطلبات
                                </span>
                            </router-link>
                        </li>

                        <li class="mb-3">
                            <button class="dropdown-item d-flex justify-content-start align-items-center" >
                                <span class="profile_icon logout flex_center">
                                    <i class="fa-solid fa-right-from-bracket"></i>
                                </span>
                                <span class="mx-2 fw-6">
                                    تسجيل الخروج
                                </span>
                            </button>
                        </li>

                    </ul>
                </div>

            </div>


        </div>
    </div>
  </header>
</template>


<script>
export default {
    data(){
        return{
            open : true
        }
    },
    methods:{
        // switch lang     
        switchLang(){
            let lang = 'ar';
            if(this.$i18n.locale == 'ar'){
                lang = 'en';
                this.arabic = false;
            }

            if(localStorage.getItem('locale')){
                localStorage.removeItem('locale');
            }

            localStorage.setItem('locale' ,lang);
            this.arabic = true;

            location.reload()
        },

        // toggle bar 
        toggle_bar(){
            this.$refs.toggle_nv.classList.toggle('active');

            let icon = this.$refs.toggleICon.children[0] ;
            if( !icon.classList.contains('fa-x') ){
                icon.classList.add('fa-x');
            }else{
                icon.classList.add('fa-bars');
            }
        },

        // close nav bar outside
        // closeNavbarOnClickOutside(event) {
        //     const navBar = this.$refs.toggle_nv;
        //     const bar = this.$refs.toggleICon.children[0];

        //     if (!navBar.contains(event.target) && !bar.contains(event.target)) {
        //         this.$refs.toggle_nv.classList.remove('active');
        //         this.$refs.toggleICon.children[0].classList.add('fa-bars');
        //     }
        // },
    },

    mounted(){
        // window.addEventListener('click', this.closeNavbarOnClickOutside);

    },
    beforeUnmount(){
        // window.addEventListener('click', this.closeNavbarOnClickOutside);
    }
}
</script>


<style lang="scss">
    .user_profile, .toggle_bar{
        display: none;
    }
    .toggle_bar{
        cursor: pointer;
        svg{
            font-size: 25px;
        }
    }
    .profile_icon{
        border: 1px solid #ccc;
        border-radius: 50%;
        padding: 5px;
        width: 25px;
        height: 25px;
        svg{
            color:#333;
            font-size: 12px;
        }
        &.logout{
            background-color:red;
            border: 1px solid red;
            svg{
                color:#fff;
                transform: rotate(180deg);
            }
        }
    }
    .dropdown-menu{
        border: none !important;
        box-shadow: 0px 0px 10px #33333346;
    }
    .dropdown{
        &.profile{
            background-color: #293255  !important;
            button.dropdown-toggle{
                background-color: #293255  !important;
                color:#fff
            }
        }
    }
    header{
        .logo{
            width: 135px;
            height: 120px;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        .user_interaction{
            .lang, .alert, .search, .message{
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }
            .alert{
                background-color: #C5CCDA7D;
                color: #414E67;
                border: 1px solid #94A3C0;
                font-size: 18px;
            }
            .lang{
                background-color: #fff;
                color: #E57D61;
                border: 1px solid #E57D61;
                font-size: 13px;
                font-weight: 600;
                width: 34px;
                height: 34px;

            }
            .search{
                background-color: #e983852e;
                border: 1px solid #E98385;
                width: 34px;
                height: 34px;
                img{
                    width: 16px;
                    height: 16px;
                }
            }
            .message{
                background-color: #f1a3ff35;
                border: 1px solid #F1A3FF;
                width: 34px;
                height: 34px;
                img{
                    width: 19px;
                    height: 19px;
                }
            }
        }
        .navbar{
            a{
                color: #1D1D1D;
                font-size: 16px;
                font-weight: 600;
                margin: 0 12px;
                &.router-link-active{
                    color: #253974;
                }
            }
        }
    }  
</style>