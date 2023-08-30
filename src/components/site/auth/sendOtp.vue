<template>
    <Dialog v-model:visible="otp" modal :style="{ width: '50vw' }">
        <h5 class="fw-bold text-center"> {{  $t('auth.otp')  }} </h5>
        <p class=" text-center"> {{  $t('auth.otpPlc')  }} </p>
        <div class="logo">
        <img :src="require('@/assets/imgs/forget2.svg')" alt="">
        </div>

        <form ref="loginForm" @submit.prevent="sendOtp" class="flex flex-wrap gap-3 p-fluid">

            <!-- otp  -->
            <div class="position-relative flex-auto">
                <div
                    style="
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                    "
                >
                    <v-otp-input
                    ref="otpInput"
                    v-model:value="code"
                    name="code"
                    input-classes="otp-input"
                    separator=""
                    :num-inputs="6"
                    :should-auto-focus="true"
                    input-type="letter-numeric"
                    />
                </div>

                
            </div>



            <!-- submit  -->
            <div class="mt-4">
            <button class="main_btn  pt-3 pb-3 fs-5 w-75 mx-auto flex_center"> {{ $t('auth.confirm')  }} </button>
            </div>


            <div class="flex_between w-75 mx-auto d-flex">
                <div class="flex_center newAcc">
                    <p class="fs-6 mt-4 fw-6"> {{ $t('auth.haveNot') }} <button type="button" class="mainColor fw-bold btn p-0"> {{ $t('auth.resend') }} </button> </p>  
                </div>
                
                <p v-if="timer > 0" class="text-center mt-3">{{ $t('auth.remain')  }}  <span class="mainColor">{{ timer }} {{ $t('auth.second') }}</span> </p>

            </div>

        </form>
    </Dialog>

    <!-- reset password  -->
    <resetPass :openReset="openReset" />

</template>

<script>
import Dialog from 'primevue/dialog';
// reset passwrod component 
import resetPass from './resetPassword.vue'
export default {
    data(){
        return{
            otp : false,
            timer: 180,
            intervalId: null,
            openReset : false
        }
    },
    components:{
        Dialog,
        resetPass 
    },
    watch:{
        openOtp(){
            if( this.openOtp == true || this.openOtp == false ){
                this.otp = true ;
            }
        }
    },  
    methods:{
        startTimer() {
            this.intervalId = setInterval(() => {
                if (this.timer > 0) {
                this.timer--;
                } else {
                clearInterval(this.intervalId);
                this.disabled = false
                }
            }, 1000);
        },
        // submit otp form 
        sendOtp(){
            if( this.openReset == true || this.openReset == false ){
                this.openReset = !this.openReset ;
            }
        }
    },
    props:{
        openOtp : Boolean
    },
    beforeUnmount() {
        clearInterval(this.intervalId);
    },
    mounted() {
        this.startTimer();
    },
}
</script>

<style>

</style>