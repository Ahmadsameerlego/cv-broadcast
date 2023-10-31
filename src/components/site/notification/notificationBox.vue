<template>
    <div class="container mt-5">
        <!-- breadcrumb  -->
        <div class="breadcrumb d-flex">
            <router-link to="/" class="inActive"> {{ $t('nav.main')  }} </router-link>&nbsp; - &nbsp;
            <p class="active mainColor"> {{ $t('nav.alert') }} </p>
        </div>

        <div class="row">
            <h5 class="fw-bold red mb-3"> {{ $t('nav.alert') }} </h5>

            <section v-if="notifications.length>0">
                <!-- single not  -->
                <div class="col-md-10 col-12" v-for="not in notifications" :key="not.id">

                    <div class="mt-3 mb-3" v-if="not.type=='admin_notify'">
                        <div class="notificationBox position-relative">
                            <div class="d-flex align-items-center gap-10">
                                <img :src="require('@/assets/imgs/SSM 1.png')" alt="" class="notificationLogo">
                                <!-- body  -->
                                <div>
                                    <h6 class="fw-6"> {{ not.title }} </h6>
                                    <div class="grow-1"> 
                                        {{ not.body }}
                                    </div>
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

                            <!-- delete not  -->
                            <button class="btn btn-danger text-white delete_not" @click="deleteNotification(not.id)" >
                                    <i class="fa-solid fa-trash-can" ></i>     
                                
                            </button>
                        </div>
                    </div>
                    <div class="mt-3 mb-3" v-else-if="not.type=='job_application_status'">
                        <router-link :to="'/jobApplication/'+not.data.job_application_id" style="color:inherit">
                            <div class="notificationBox position-relative">
                                <div class="d-flex align-items-center gap-10">
                                    <img :src="require('@/assets/imgs/SSM 1.png')" alt="" class="notificationLogo">
                                    <!-- body  -->
                                    <div>
                                        <h6 class="fw-6"> {{ not.title }} </h6>
                                        <div class="grow-1"> 
                                            {{ not.body }}
                                        </div>
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

                                <!-- delete not  -->
                                <button class="btn btn-danger text-white delete_not" @click="deleteNotification(not.id)" >
                                        <i class="fa-solid fa-trash-can" ></i>     
                                    
                                </button>
                            </div>
                        </router-link>
                        
                    </div>
                    <div class="mt-3 mb-3" v-else-if="not.type=='advertisement_created'">
                        <router-link :to="'/jobDetails/'+not.data.advertisement_id" style="color:inherit">
                            <div class="notificationBox position-relative">
                                <div class="d-flex align-items-center gap-10">
                                    <img :src="require('@/assets/imgs/SSM 1.png')" alt="" class="notificationLogo">
                                    <!-- body  -->
                                    <div>
                                        <h6 class="fw-6"> {{ not.title }} </h6>
                                        <div class="grow-1"> 
                                            {{ not.body }}
                                        </div>
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

                                <!-- delete not  -->
                                <button class="btn btn-danger text-white delete_not" @click="deleteNotification(not.id)" >
                                        <i class="fa-solid fa-trash-can" ></i>     
                                    
                                </button>
                            </div>
                        </router-link>
                        
                    </div>
                    <div class="mt-3 mb-3" v-else>
                        <!-- <router-link :to="'/jobDetails/'+not.data.advertisement_id" style="color:inherit"> -->
                            <div class="notificationBox position-relative">
                                <div class="d-flex align-items-center gap-10">
                                    <img :src="require('@/assets/imgs/SSM 1.png')" alt="" class="notificationLogo">
                                    <!-- body  -->
                                    <div>
                                        <h6 class="fw-6"> {{ not.title }} </h6>
                                        <div class="grow-1"> 
                                            {{ not.body }}
                                        </div>
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

                                <!-- delete not  -->
                                <button class="btn btn-danger text-white delete_not" @click="deleteNotification(not.id)" >
                                        <i class="fa-solid fa-trash-can" ></i>     
                                    
                                </button>
                            </div>
                        <!-- </router-link> -->
                        
                    </div>

                </div>
            </section>

            <section v-else class="text-center text-danger">
                لا توجد اشعارات الى الان
            </section>

            <div class="d-flex justify-content-end">
                <paginate
                    v-model="currentPage"
                    :page-count="totalPages"
                    :click-handler="page => pageClickHandler(page)"
                    :prev-text="'<<'"
                    :next-text="'>>'"
                    :container-class="'pagination'"
                    :page-class="'page-item'"    
                    :no-li-surround="true"   
                    v-if="notifications.length>0"        
                >
                </paginate>
            </div>
            
        </div>

    </div>
    <Toast />
</template>
<script>
import axios from 'axios';
import Paginate from 'vuejs-paginate-next';
import Toast from 'primevue/toast';

export default {
    data(){
        return{
            notifications : [],
            currentPage: 1,
            perPage: 10,
            totalPages: 0,
            disabled : false
        }
    },
    components:{
        Paginate,
        Toast
    },
    methods:{
        // get notifications 
        async getNotification(){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            await axios.get(`user/notifications?page=${this.currentPage}`,{headers} )
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.notifications = res.data.data.data ;
                    this.currentPage = res.data.data.pagination.current_page ;
                    this.totalPages = res.data.data.pagination.total_pages ;
                    this.per_page = res.data.data.pagination.per_page ;
                }
            } )
        },
        // delete notification
        async deleteNotification(id){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const fd = new FormData();
            fd.append('notification_id', id)
            await axios.post('user/notification/delete',fd, {headers} )
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    setTimeout(() => {
                        this.getNotification();
                    }, 1000);
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                }
            } )  
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err, life: 3000 });
                this.disabled = false ;
            } )
        },
        pageClickHandler(page) {
            this.currentPage = page
            this.getNotification()
        },
    },
    created() {
        this.totalPages = Math.ceil(this.notifications.length / this.perPage)
    },
    mounted(){
        this.getNotification();
    }
}
</script>

<style lang="scss">
    .delete_not{
        position:absolute;
        left: 20px;
        top: 10px;
    }
    .page-link{
        font-size: 11px !important;
        width: 30px !important;
        height: 30px !important;
        display: flex !important;
        justify-content: center !important;
        border-radius: 50% !important;
        margin: 0 5px;
        color: #333 !important;
        &.active{
            background: #2a3255 !important;
            border: 1px solid #2a3255 !important;
            color: #fff !important;
        }
    }
</style>
<style  scoped lang="scss">
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