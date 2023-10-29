<template>
    <section id="orders" class="mt-4">
        <div class="container">
            <!-- breadcrumb  -->
            <div class="breadcrumb d-flex">
                <router-link to="/" class="inActive"> {{ $t('nav.main') }} </router-link>&nbsp; - &nbsp;
                <p class="active mainColor"> {{ $t('common.order') }} </p>
            </div>

            <!-- content  -->
            <section>
                <h5 class="fw-bold red mb-3"> {{ $t('common.order') }} </h5>
                
                <div v-if="load" class="row">
                    <div class="col-md-6 mb-3" v-for="skeleton in 2" :key="skeleton">
                        <Skeleton style="width:100%" height="4rem"></Skeleton>
                    </div>
                </div>

                <div class="row" v-else>
                    <div class="col-md-6" v-for="order in orders" :key="order.id">
                        <router-link :to="'jobApplication/'+order.id">
                            <!-- single card  -->
                            <div class="single_card d-flex">
                                <!-- card image  -->
                                <div class="card_image">
                                    <img :src="order.company.image" alt="">
                                </div>

                                <!-- card details  -->
                                <div class="card_details mx-3">
                                    <h6 class="mainColor fw-bold mb-3"> {{ order.advertisement.job_name  }} </h6>

                                    <p class="fw-bold"> {{ order.company.name }}  </p>

                                    <div class="d-flex align-items-baseline">
                                        <img :src="require('@/assets/imgs/bag.svg')" alt="">
                                        <p class="fw-bold mx-2"> {{ order.advertisement.type  }} </p>
                                    </div>

                                    <div class="d-flex mb-3">
                                        <img :src="require('@/assets/imgs/dot.svg')"  alt="">
                                        <span class="mainColor2 fw-6 mx-2"> الرياض - تبعد 2 كم </span>
                                    </div>
                                </div>

                                <!-- absolute places  -->

                                <!-- status -->
                                <div class="abs_time">

                                    <!-- applied  -->
                                    <div class="orderStatus applied" v-if="order.status=='pending'">
                                        <img :src="require('@/assets/imgs/load.svg')" alt="">
                                        <span class="mx-1 mainColor fw-6"> {{  $t('common.applied')  }}  </span>
                                    </div>

                                    <!-- accepted  -->
                                    <div class="orderStatus accepted" v-if="order.status=='accepted'">
                                        <img :src="require('@/assets/imgs/true.svg')" alt="">
                                        <span class="mx-1  fw-6"> {{  $t('common.accepted')  }} </span>
                                    </div>
                                    <!-- refused  -->
                                    <div class="orderStatus refused" v-if="order.status=='rejected'">
                                        <img :src="require('@/assets/imgs/false.svg')" alt="">
                                        <span class="mx-1  fw-6"> {{  $t('common.refused')  }} </span>
                                    </div>

                                    <!-- finished  -->
                                    <div class="orderStatus finished" v-if="order.status=='expired'">
                                        <span class="mx-1  fw-6"> {{ $t('common.finish') }} </span>
                                    </div>




                                </div>

                                <!-- time  -->
                                <div class="abs_details">
                                    <img :src="require('@/assets/imgs/clock.svg')" alt="">
                                    <span class="grayColor mx-2"> {{ $t('common.date') }}: </span>
                                    <span > {{ order.created_at  }} </span>
                                </div>

                            </div>
                        </router-link>
                        
                    </div>
                </div>

                



                <div v-if="LenghtZero" class="text-center text-danger">
                    لا توجد طلبات الى الان
                </div>
            </section>


            <paginationComponentVue />
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Skeleton from 'primevue/skeleton';

import paginationComponentVue from '../layout/paginationComponent.vue'
export default {
    data(){
        return{
            orders : [],
            load : true,
            LenghtZero : false
        }
    },
    components:{
        paginationComponentVue ,
        Skeleton
    },
    methods:{
        // get orders 
        async getOrders(){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            await axios.get('user/job-applications', {headers})
            .then( (res)=>{
                if( res.data.data.length > 0 ){
                    this.orders = res.data.data ;
                    this.load = false ;
                }else{
                    this.LenghtZero = true ;
                    this.load = false ;
                }
            } )
        }
    },
    mounted(){
        this.getOrders()
    }
}
</script>

<style lang="scss">
    .orderStatus{
        width: 100px;
        height: 30px;
        border-radius: 4px;
        padding: 5px;
        &.applied{
            background-color: #F1DCC9;
        }
        &.accepted{
            background-color: #D5F2CB;
            span{
                color:#316D27
            }
        }
        &.refused{
            background-color: #F1C9C9;
            span{
             color: #F44336;   
            }
        }
        &.finished{
            background-color: #DCECFF;
            span{
             color: #253974;   
            }
        }
    }
</style>