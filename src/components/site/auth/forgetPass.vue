<template>
    <!-- forget pass modal  -->      
    <Dialog v-model:visible="open" modal :style="{ width: '50vw' }">

        <h5 class="fw-bold text-center"> {{ $t('auth.fotgetPass')  }} </h5>
        <p class=" text-center"> {{ $t('auth.forgetPlc')  }} </p>

        <div class="logo">
            <img :src="require('@/assets/imgs/forget1.svg')" alt="">
        </div>

        <form ref="loginForm" @submit.prevent="forgetPassword" class="flex flex-wrap gap-3 p-fluid">
            <!-- phone  -->
            <div class="position-relative flex-auto defaultInput">

                <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.phone')  }} </label>
                <!-- <InputNumber v-model="phone" class="defaultInput" inputId="integeronly" :placeholder="$t('auth.phonePlc')" /> -->
                <input type="number" class="form-control defaultInput" :placeholder="$t('auth.phonePlc')" v-model="phone" @input="showValid">


                <!-- icon  -->
                <div class="inputIcon">
                <img :src="require('@/assets/imgs/phone.svg')" alt="">
                </div>

                <!-- select phone  -->
                <Dropdown v-model="selectedCity" :options="common.countries" optionLabel="key"  class="w-full md:w-14rem" style="top:32px!important;width:25%"  />

            </div>
            <!-- submit  -->
            <div class="mt-4">
                <button class="main_btn  pt-3 pb-3 fs-5 w-75 mx-auto flex_center" :disabled="disabled"> 
                    <span v-if="!disabled">{{ $t('auth.confirm')  }}</span>
                    <div class="spinner-border mx-2" role="status" v-if="disabled">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </button>
            </div>
        </form>

    </Dialog>

    <!-- send otp  -->
    <sendOtp :openOtp="openOtp"/>

    <Toast />
</template>

<script>
// import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';


// otp component 
import sendOtp from './sendOtp.vue'
import { mapActions, mapState } from 'vuex';
import Toast from 'primevue/toast';

export default {
    data(){
        return{
            phone : null, 
            open : false,
            openOtp : false,
            selectedCity : {
                "id": 1,
                "name": "السعودية",
                "key": "+966"
            },
            disabled : false
        }
    },
    watch:{
        visible(){
            if(this.visible == true || this.visible == false){
                this.open = true ;   
            }          
        }
    },
    methods:{
        ...mapActions('common',['getCountries']),

        // main function 
        async forgetPassword(){
            this.disabled = true ;
            const fd = new FormData();
            fd.append('phone', this.phone);
            fd.append('country_code', this.selectedCity.key);

            try{
                const res = await this.$store.dispatch('auth/forgetPass', fd)
                if( res.success == true ){
                    this.$toast.add({ severity: 'success', summary: res.message, life: 3000 });
                    this.disabled = false ;
                    setTimeout(() => {
                        if( this.openOtp == true || this.openOtp == false ){
                            this.openOtp = !this.openOtp ;
                            this.open = false ;
                        }
                    }, 3000);

                    // reset phone in localStorage 
                    localStorage.setItem('phone', this.phone);
                    localStorage.setItem('country_code', this.selectedCity.key);
                    localStorage.setItem('otpType', 'forget')
                }else{
                    this.$toast.add({ severity: 'error', summary: res.message, life: 3000 });
                    this.disabled = false ;
                }
            }catch(err){
                console.error(`login error is ${err}`)
            }
            
        },
        chooseCountry(){
            document.querySelector('.p-dropdown-label').innerHTML = this.selectedCity.key ;
        },
    },
    computed:{
        ...mapState(["common"])  
    },
    components:{
        // InputNumber,
        Dropdown,
        Dialog  ,
        sendOtp,
        Toast
    },
    props:{
        visible : Boolean
    },
    mounted(){
        document.querySelector('.p-dropdown-label').innerHTML = this.selectedCity.key ;
    }
}
</script>

<style scoped>
    .p-dropdown{
        top:32px !important
    }
</style>