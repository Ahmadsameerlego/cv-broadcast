<template>
    <div class="container mt-5">
        <!-- breadcrumb  -->
        <div class="breadcrumb d-flex">
            <router-link to="/" class="inActive"> {{ $t('nav.main')  }} </router-link>&nbsp; - &nbsp;
            <p class="active mainColor"> {{ $t('nav.alert') }} </p>
        </div>

        <div class="row">
            <h5 class="fw-bold red mb-3"> {{ $t('nav.alert') }} </h5>
            <!-- single not  -->
            <div class="col-md-10 col-12" v-for="not in notifications" :key="not.id">

                <div class="mt-3 nb-3">
                    <div class="notificationBox">
                        <div class="d-flex align-items-center gap-10">
                            <img :src="require('@/assets/imgs/SSM 1.png')" alt="" class="notificationLogo">
                            <!-- body  -->
                            <h5 class="fw-6"> {{ not.title }} </h5>
                            <div class="grow-1"> 
                                {{ not.body }}
                            </div>
                        </div>
                        <div class="text-start">
                            <span class="date"> 
                                <i class="fa-solid fa-clock m-end-5 "></i>
                            </span>
                            <span class="date">
                                {{  not.created_at  }}
                            </span>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            notifications : []
        }
    },
    methods:{
        // get notifications 
        async getNotification(){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            await axios.get('user/notifications',{headers} )
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.notifications = res.data.data ;
                }
            } )
        }
    },
    mounted(){
        this.getNotification();
    }
}
</script>
<style  scoped>

.notificationBox {
    gap: 10px;
    padding: 10px;
    background-color: #fbfbfb;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    margin-bottom: 10px;
}
.notificationLogo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid f0f0f0
}
.date{
    color:#c9c9c9 ;
}
</style>