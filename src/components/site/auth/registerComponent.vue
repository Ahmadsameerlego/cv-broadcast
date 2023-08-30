<template>
  <section id="register" class="mt-4">
    <div class="container">
      <!-- start breadcrumb  -->
      <div class="breadcrumb d-flex">
        <router-link to="/" class="inActive"> {{ $t('nav.main')  }} </router-link>&nbsp; - &nbsp;
        <p class="active mainColor"> {{ $t('auth.reg') }} </p>

        <section class="loginSection" style="width:93%;margin:auto" >
          <h3 class="fw-bold mb-3"> {{$t('auth.reg')}} </h3>
          <p class="registerParagraph fw-bold d-flex align-items-center"> 
            <span class="step flex_center">1</span>
            {{ $t('auth.regPlc')  }}
          </p>



          <form class="flex flex-wrap gap-3 p-fluid mt-4" ref="registerForm" @submit.prevent="register">

            <div class="row">

              <div class="col-md-6 mb-2">
                <!-- user name  -->
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.user')  }} </label>
                    <InputText type="text" class="defaultInput2" v-model="username" name="name" :placeholder="$t('auth.userPlc')" @input="checkValid" />
                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/user.svg')" alt="">
                    </div>

                </div>
              </div>

              <div class="col-md-6 mb-2">
                <!-- phone  -->
                <div class="position-relative flex-auto defaultInput" >

                    <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.phone')  }} </label>
                    <input type="text" class="form-control defaultInput" name="phone" :placeholder="$t('auth.phonePlc')" v-model="phone" @input="checkValid">


                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/phone.svg')" alt="">
                    </div>

                    <!-- select phone  -->
                    <Dropdown v-model="selectedCity" @change="chooseCountry" :options="countries" optionLabel="name"  class="w-full md:w-14rem" />

                </div>
                <div>
                  <span v-if="phoneValid" class="text-danger"> يجب ان يكون رقم الهاتف بين ٩ او ١٠ ارقام </span>
                </div>
              </div>

              

              <div class="col-md-6 mb-2">
                <!-- password  -->
                <div class="position-relative flex-auto mt-3">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.pass')  }} </label>
                    <Password v-model="password"  toggleMask class="defaultInput" :placeholder="$t('auth.passPlc')" name="password" @input="checkValid" />

                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/lock.svg')" alt="">
                    </div>


                </div>
              </div>  

              <div class="col-md-6 mb-2">
                <!-- confirm password  -->
                <div class="position-relative flex-auto mt-3">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.confirmPass')  }} </label>
                    <Password v-model="confirm_password" :feedback="false" toggleMask class="defaultInput" name="password_confirmation" :placeholder="$t('auth.confirmPlc')"  @input="checkValid"/>

                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/lock.svg')" alt="">
                    </div>


                </div>

                <div v-if="showValid">
                  <p v-if="passwordMatch" class="passwordConfirmed d-flex align-items-center text-success">
                    <i class="fa-regular fa-circle-check"></i>
                    <span>{{ $t('auth.iden')  }}</span>
                  </p>
                  <p v-else class="passwordWrong d-flex align-items-center text-danger">
                      <i class="fa-regular fa-circle-xmark"></i>
                      <span>{{ $t('auth.notIden') }}</span>
                  </p>
                </div>
              </div>
            </div>

            <!-- terms & conditions  -->
            <div class="d-flex align-items-center">
              <input type="checkbox" class="checkCondition" v-model="conditions" >
              <span class="mx-2"> الموافقة على <router-link to="/termsCondition" class="terms"> الشروط والأحكام </router-link> </span>
            </div>

            <div class="mt-3">
                <button class="main_btn w-50 mx-auto flex_center pt-3 pb-3 fs-5" :disabled="disabled"> {{ $t('auth.keep')  }} </button>
            </div>


            <!-- new account  -->
              <div class="flex_center newAcc">
                <p class="fs-6 mt-4 fw-6"> {{  $t('auth.haveAcc')  }} <router-link to="/login" class="mainColor fw-bold"> {{ $t('auth.login') }} </router-link> </p>  
              </div>

          </form>
        </section>

      </div>
    </div>
  </section>

  <Toast />
  <sendOtp :openOtp="openOtp"/>
</template>

<script>
import InputText from 'primevue/inputtext';
// import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Password from 'primevue/password';

import axios from 'axios';
import Toast from 'primevue/toast';

import sendOtp from './sendOtp.vue';

export default {
  data(){
    return{
      username : '',
      phone : '',
      selectedCity : 
        {
            "id": 1,
            "name": "السعودية",
            "key": "+966"
        },
    
      countries : [],
      password : '',
      confirm_password : '',
      disabled : true,

      phoneValid : false,
      conditions : false,
      openOtp : false

    }
  },
  watch:{
     confirm_password(){
          this.showValid = true ;
      },
      passwordMatch(){
        if( this.passwordMatch == true ){
          this.disabled = false;
        }else{
          this.disabled = true;
        }
      },
      phone(){    
        if( this.phoneMatch === true ){
          this.phoneValid = true ;
        }else{
          this.phoneValid = false ;
        }
        this.phone = this.phone.replace(/[^0-9]/g, '');
      },
      // conditions(){
      //   if(  ){
      //     this.disabled = false ;
      //   }else{
      //     this.disabled = true ;
      //   }
      // }
  },
  computed:{
      passwordMatch() {
          return this.password === this.confirm_password;  
      },
      phoneMatch(){
        return this.phone.length < 9 ;
      },
      passwordLength(){
        return this.password.length < 6 ;
      },
      
  },
  methods:{
    // register function 
    async register(){
      const fd = new FormData(this.$refs.registerForm);
      fd.append('country_code', this.selectedCity.key);
      fd.append( 'password', this.password );
      fd.append( 'password_confirmation', this.confirm_password );
      await axios.post('user/register', fd)
      .then( (res)=>{
        if(res.data.key === 'success'){
          this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
          // this.$router.push('/compeleteRegister')
        }else if( res.data.key === 'fail' ){
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
        }
      } )
      
    },
    // get countries keies 
    async getCountries(){
      await axios.get('countries')
      .then( (res)=>{
        this.countries = res.data.data ;
      } )
    },
    checkValid(){
      if( this.username === '' || this.phone === '' || this.password === '' || this.confirm_password === '' || this.passwordMatch === false || this.phoneMatch === true  ){
        this.disabled = true;
      }else if(this.username !== '' && this.phone !== '' && this.password !== '' && this.confirm_password !== ''&& this.passwordMatch === true && this.phoneMatch === false ){
        this.disabled = false ;
      }
    },
    chooseCountry(){
      console.log(this.selectedCity)
      document.querySelector('.p-dropdown-label').innerHTML = this.selectedCity.key ;
    }
  },
  components:{
    InputText,
    // InputNumber,
    Dropdown,
    Password,
    Toast,
    sendOtp
  },
  mounted(){
    this.getCountries();
    document.querySelector('.p-dropdown-label').innerHTML = this.selectedCity.key ;
  }
}
</script>

<style scoped>
.p-dropdown{
  width:25%;
  top: 32px !important;
}
.checkCondition{
    accent-color: #2a3255;
    width: 16px;
    height: 16px;
}
</style>

<style lang="scss">
  .registerParagraph{
    position: relative;
    font-size: 17px !important;
    .step{
      width: 35px;
      height: 35px;
      margin-left: 9px;
      background-color: #feede7;
      border-radius: 50%;
      border: 1px solid #e57d61;
      color: #e57d61;
      font-size: 21px !important;
    }
  }
</style>