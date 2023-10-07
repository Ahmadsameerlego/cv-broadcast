<template>
    <Dialog v-model:visible="video" modal :style="{ width: '50vw' }">
       
        <h5 class="fw-bold text-center"> 
            شكرا لاستكمال بياناتك الشخصية
        </h5>
        <p class="fw-6 fs-15 text-center"> 
                اصبحت مؤهل لاستقبال الوظيفة التي تناسبك
        </p>
        

        <form ref="loginForm" @submit.prevent="uploadVideo" class="flex flex-wrap gap-3 p-fluid">
            <!-- upload video  -->
            <section id="video" class="position-relative flex_column mb-3" v-if="lockInput">

                <div class="video_img mb-2">
                    <img :src="require('@/assets/imgs/video.png')" alt="">
                </div>
                <span class="mb-2">رفع فيديو تعريفي</span>
                <span class="fs-13 gray"> اقصى مدة للفيديو15 دقيقة </span>

                <!-- file video  -->
                <input type="file" class="uploadVideo" ref="videoInput" @change="handleVideoChange" accept="video/*">


            </section>


            <!-- video preview  -->
            <div v-if="videoFile" class="video-preview mb-3">
                <video :src="videoFileUrl" controls></video>
            </div>

            <!-- reload button  -->
            <div class="d-flex justify-content-center align-items-center" v-if="reOpen">
                <button class="main_btn pt-2 pb-2 w-50" @click="reUpload">
                    اعادة رفع
                </button>
            </div>
            <p class="text-center fs-13 ">
                لزيادة فرص الحصول على وظيفة الرجاء رفع فيديو لك يختصر ابرز النقاط في سيرتك الذاتية
            </p>
            <div class="d-flex justify-content-center">
              <button class="main_btn pt-3 pb-3 w-50" :disabled="disabled">
                    حفظ
              </button>
              <button class="sec_btn pt-3 pb-3 w-50 mx-3 fw-bold" type="button"> {{  $t('auth.skip')  }} </button>
            </div>

        </form>
    </Dialog>
    <Toast />
</template>

<script>
import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';

import axios from 'axios';
export default {
    data(){
        return{
            video : false,
            disabled : false,  // for video length 
            videoFile: null,
            videoFileUrl: null, // URL for the video preview
            lockInput : true,
            reOpen : false
        }
    },
    components:{
        Dialog,
        Toast
    },
    watch:{
        openVideo(){
            this.video = true ;
        },
    },  
    methods:{
        handleVideoChange(event){
            this.videoFile = event.target.files[0];
            // // check video size 
            // if( this.videoFile && this.videoFile.size > 15 * 60  ){
            //     this.videoFile = null;
            //     this.videoFileUrl = null ;
            // }else{
                this.videoFileUrl = URL.createObjectURL(this.videoFile);
                this.lockInput = false ;
                this.reOpen = true ;
            // }
        },
        reUpload(){
            this.lockInput = true ;
            this.videoFile = null ;
            this.reOpen = false ;
        },

        // upload video 
        async uploadVideo(){
            this.disabled = true ;
            const fd = new FormData();
            const token = localStorage.getItem('token');
            // const token = JSON.parse(localStorage.getItem('user'))[0].token;
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            fd.append('video', this.videoFile);
            await axios.post('user/upload/video', fd, {headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    this.disabled = false ;
                    setTimeout(() => {
                        this.video = false;
                        this.$router.push('/')
                    }, 3000);
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                    this.disabled = false ;
                }
            } )
        }
    },
    props:{
        openVideo : Boolean
    }
}
</script>

<style lang="scss">
    #video{
        position: relative;
        background-color: #ECF0FF73;
        border-radius: 6px;
        width: 60%;
        margin:auto;
        padding: 30px 0px;
        .uploadVideo{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
            opacity: 0;
        }
        .gray{
            color: #9B9B9B;
        }
    }
    .video-preview{
        width:60%;
        margin:auto;
        height: 300px;
        video{
            height: 100% !important;
        }
    }
</style>