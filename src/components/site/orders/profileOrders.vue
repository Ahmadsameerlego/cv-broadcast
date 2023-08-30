<template>
    <section id="orders">
        <div class="container">
            <!-- breadcrumb  -->
            <div class="breadcrumb d-flex">
                <router-link to="/" class="inActive"> {{ $t('nav.main') }} </router-link>&nbsp; - &nbsp;
                <p class="active mainColor"> {{ $t('common.order') }} </p>
            </div>

            <!-- content  -->
            <section>
                <h5 class="fw-bold red mb-3"> {{ $t('common.order') }} </h5>
                <div class="row">
                    <div class="col-md-6">
                        <!-- single card  -->
                        <div class="single_card d-flex">
                            <!-- card image  -->
                            <div class="card_image">
                                <img :src="require('@/assets/imgs/SSM 1.png')" alt="">
                            </div>

                            <!-- card details  -->
                            <div class="card_details mx-3">
                                <h6 class="mainColor fw-bold mb-3"> مهندس كمبيوتر </h6>

                                <p class="fw-bold"> شركة اوامر الشبكة </p>

                                <div class="d-flex align-items-baseline">
                                    <img :src="require('@/assets/imgs/bag.svg')" alt="">
                                    <p class="fw-bold mx-2"> دوام كامل </p>
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
                                <div class="orderStatus applied">
                                    <img :src="require('@/assets/imgs/load.svg')" alt="">
                                    <span class="mx-1 mainColor fw-6"> {{  $t('common.applied')  }}  </span>
                                </div>

                                <!-- accepted  -->
                                <div class="orderStatus accepted">
                                    <img :src="require('@/assets/imgs/true.svg')" alt="">
                                    <span class="mx-1  fw-6"> {{  $t('common.accepted')  }} </span>
                                </div>
                                <!-- refused  -->
                                <div class="orderStatus refused">
                                    <img :src="require('@/assets/imgs/false.svg')" alt="">
                                    <span class="mx-1  fw-6"> {{  $t('common.refused')  }} </span>
                                </div>

                                <!-- finished  -->
                                <div class="orderStatus finished">
                                    <span class="mx-1  fw-6"> {{ $t('common.finish') }} </span>
                                </div>




                            </div>

                            <!-- time  -->
                            <div class="abs_details">
                                <img :src="require('@/assets/imgs/clock.svg')" alt="">
                                <span class="grayColor mx-2"> {{ $t('common.date') }}: </span>
                                <span > منذ ساعة </span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <paginationComponentVue />
        </div>
    </section>
</template>

<script>
import paginationComponentVue from '../layout/paginationComponent.vue'
export default {
    components:{
        paginationComponentVue
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