<template>
  <!-- forget pass modal  -->      
  <Dialog v-model:visible="open" modal :style="{ width: '50vw' }">

        <h5 class="fw-bold text-center"> {{ $t('auth.fotgetPass')  }} </h5>
        <p class=" text-center"> {{ $t('auth.forgetPlc')  }} </p>

        <div class="logo">
            <img :src="require('@/assets/imgs/forget1.svg')" alt="">
        </div>

        <form ref="loginForm" @submit.prevent="sendPhone" class="flex flex-wrap gap-3 p-fluid">
            <!-- phone  -->
            <div class="position-relative flex-auto">

                <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.phone')  }} </label>
                <InputNumber v-model="value1" class="defaultInput" inputId="integeronly" :placeholder="$t('auth.phonePlc')" />

                <!-- icon  -->
                <div class="inputIcon">
                <img :src="require('@/assets/imgs/phone.svg')" alt="">
                </div>

                <!-- select phone  -->
                <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"  class="w-full md:w-14rem" />

            </div>
            <!-- submit  -->
            <div class="mt-4">
            <button class="main_btn  pt-3 pb-3 fs-5 w-75 mx-auto flex_center"> {{ $t('auth.confirm')  }} </button>
            </div>
        </form>

    </Dialog>

    <!-- send otp  -->
    <sendOtp :openOtp="openOtp"/>
</template>

<script>
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';


// otp component 
import sendOtp from './sendOtp.vue'

export default {
    data(){
        return{
            open : false,
            openOtp : false
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
        sendPhone(){
            if( this.openOtp == true || this.openOtp == false ){
                this.openOtp = !this.openOtp ;
            }
        }
    },
    components:{
        InputNumber,
        Dropdown,
        Dialog  ,
        sendOtp
    },
    props:{
        visible : Boolean
    },
}
</script>

<style>

</style>