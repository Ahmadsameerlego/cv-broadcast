<template>
    <Dialog v-model:visible="payment" modal :style="{ width: '50vw' }">
        <div class="logo">
            <img :src="require('@/assets/imgs/logo.png')" alt="logo">
        </div>
        <p class=" text-center"> 
                لا بد من دفع مبلغ 150 ريال للإدارة لاستكمال الحساب الخاص بك
        </p>
        

        <form ref="loginForm" @submit.prevent="openVideoDialog" class="flex flex-wrap gap-3 p-fluid">

            <!-- submit  -->
            <div class="mt-4">
                <button class="main_btn  pt-3 pb-3 fs-5 w-75 mx-auto flex_center" > 
                    ادفع الان                  
                </button>
            </div>


            

        </form>
    </Dialog>
    
    <uploadVideo :openVideo="openVideo" />
</template>

<script>
import Dialog from 'primevue/dialog';
import uploadVideo from './uploadVideo.vue'
export default {
   data(){
        return{
            payment : false,
            openVideo : false
        }
    },
    components:{
        Dialog,
        uploadVideo
    },
    methods:{
        openVideoDialog(){
            if( this.openVideo == true || this.openVideo == false ){
                this.openVideo = !this.openVideo
            }
            this.payment = false ;
        }
    },
    watch:{
        openPayment(){
            this.payment = true ;
        },
    },  
    props:{
        openPayment : Boolean
    }
}
</script>

<style>

</style>