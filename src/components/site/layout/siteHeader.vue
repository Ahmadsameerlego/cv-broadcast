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
            <nav class="navbar navbar-expand-lg">
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

            <!-- user interaction  -->
            <div class="user_interaction d-flex justify-content-between align-items-center">
                <!-- alert  -->
                <router-link to="/notificationPage" class="alert flex_center mb-0 mx-2">
                    <i class="fa-regular fa-bell"></i>
                </router-link>
                <!-- lang  -->
                <button class="lang flex_center mx-2" @click="switchLang"> 
                    <span v-if="$i18n.locale=='en'" >AR</span>
                    <span v-else-if="$i18n.locale=='ar'" >EN</span> 
                </button>
                <!-- login  -->
                <router-link class="bordered_btn mx-2" to="/login"> {{ $t('nav.login') }} </router-link>
                <!-- register  -->
                <router-link class="main_btn mx-2" to="/register"> {{ $t('nav.register') }} </router-link>
            </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {
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
    }
}
</script>

<style lang="scss">
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
            .lang, .alert{
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