<template>
  <section id="jobDetails">
    <div class="container">
        <!-- bread crumb  -->
        <div class="breadcrumb d-flex mb-0">
            <router-link to="/" class="inActive"> {{ $t('nav.main') }} </router-link>&nbsp; - &nbsp;
            <router-link to="/exploreJobs" class="inActive"> {{ $t('nav.exploreJobs') }} </router-link>&nbsp; - &nbsp;
            <p class="active mainColor"> {{ $t('common.jobDetails') }} </p>
        </div>

        <section class="details">
            <h6 class="fw-bold red mb-3"> {{ $t('common.jobDetails') }} </h6>

            <div class="row">
                <div class="col-md-8 mb-3">
                    <!-- single card  -->
                    <div class="single_card d-flex">
                        <!-- card image  -->
                        <div class="card_image">
                            <img :src="require('@/assets/imgs/SSM 1.png')" alt="">
                        </div>

                        <!-- card details  -->
                        <div class="card_details mx-3">
                            <h6 class="mainColor fw-bold mb-3"> مهندس كمبيوتر </h6>

                            <div class="d-flex mb-3">
                                <img :src="require('@/assets/imgs/dot.svg')"  alt="">
                                <span class="mainColor2 fw-6 mx-2">الرياض</span>
                            </div>



                            <router-link to="/company" style="color:inherit" class="d-flex align-items-baseline">
                                <img class="br-50 company_image" :src="require('@/assets/imgs/bag.svg')" alt="">
                                <p class="fw-bold mx-2"> شركة أوامر الشبكة </p>
                            </router-link>
                        </div>

                        <!-- absolute places  -->

                        <!-- time  -->
                        <div class="abs_time d-flex align-items-baseline">
                            <img :src="require('@/assets/imgs/clock.svg')" alt="">
                            <span class="grayColor mx-2"> {{  $t('common.date')  }}: </span>
                            <span > منذ ساعة </span>
                        </div>

                    </div>

                    <!-- job conditions  -->
                    <section class="job_conditions mt-5">
                        <div class="condition_header mainColor pt-3 pb-3 px-3 fs-16 fw-bold">
                            {{  $t('job.cond')  }}
                        </div>
                        <div class="condition_body pt-3 pb-3 px-3">
                            <div class="row">

                                <div class="col-md-5">
                                    <div class="d-flex">
                                        <img :src="require('@/assets/imgs/bluebook.svg')" alt="">
                                        <span class="grayColor mx-2"> {{ $t('job.qual') }} :  </span>
                                    </div>
                                    <p class="fw-bold fs-15 mb-4"> بكالربوس حاسات ومعلومات </p>


                                    <div class="d-flex">
                                        <img :src="require('@/assets/imgs/bluetimer.svg')" alt="">
                                        <span class="grayColor mx-2"> {{ $t('common.jobType')  }} :  </span>
                                    </div>
                                    <p class="fw-bold fs-15"> بكالربوس حاسات ومعلومات </p>

                                </div>

                                <div class="col-md-3">
                                    <div class="d-flex">
                                        <img :src="require('@/assets/imgs/bluebag.svg')" alt="">
                                        <span class="grayColor mx-2"> {{  $t('common.exper')  }} :  </span>
                                    </div>
                                    <p class="fw-bold fs-15 mb-4"> 2-5 سنة </p>


                                    <div class="d-flex">
                                        <img :src="require('@/assets/imgs/bluetimer.svg')" alt="">
                                        <span class="grayColor mx-2"> {{ $t('common.salary') }} :  </span>
                                    </div>
                                    <p class="fw-bold fs-15"> يحدد في المقابلة </p>

                                </div>

                                <div class="col-md-2">
                                    <div class="d-flex">
                                        <img :src="require('@/assets/imgs/bluegender.svg')" alt="">
                                        <span class="grayColor mx-2"> {{  $t('auth.gender')  }} :  </span>
                                    </div>
                                    <p class="fw-bold fs-15 mb-4"> ذكور فقط </p>

                                </div>

                                <div class="col-md-2">
                                    <div class="d-flex">
                                        <span class="grayColor mx-2"> {{ $t('common.type')}} :  </span>
                                    </div>
                                    <p class="fw-bold fs-15 mb-4"> سعودي </p>

                                </div>


                            </div>
                        </div>
                    </section>


                </div>


                <div class="col-md-4">
                    <div class="otherHeader grayBg pt-3 pb-3 br-7 px-3 fw-bold mainColor mb-3 fs-15">
                        {{  $t('job.similar')  }}
                    </div>

                    <!-- single card  -->
                    <div class="single_card other_single_card d-flex">
                        <!-- card image  -->
                        <div class="card_image">
                            <img :src="require('@/assets/imgs/SSM 1.png')" alt="">
                        </div>

                        <!-- card details  -->
                        <div class="card_details mx-3">
                            <p class="mainColor fw-bold mb-3"> مهندس كمبيوتر </p>

                            <div class="d-flex mb-3">
                                <img :src="require('@/assets/imgs/dot.svg')"  alt="">
                                <span class="mainColor2 fw-6 mx-2">الرياض</span>
                            </div>



                            <div class="d-flex align-items-baseline">
                                <img :src="require('@/assets/imgs/bag.svg')" alt="">
                                <span class="grayColor mx-2 fs-9"> {{ $t('common.jobType') }}: </span>
                                <h6 class="fw-bold fs-12"> دوام كامل </h6>
                            </div>
                        </div>

                        <!-- absolute places  -->

                        <!-- time  -->
                        <div class="abs_time d-flex align-items-center">
                            <img :src="require('@/assets/imgs/clock.svg')" alt="">
                            <span class="fs-10 mx-1"> منذ ساعة </span>
                        </div>

                        <!-- details  -->
                        <router-link to="/jobDetails/1" class="abs_details fs-10 grayColor"> 
                            {{  $t('common.showDetails')  }}
                            <i class="fa-solid fa-chevron-left"></i> 
                        </router-link>

                    </div>
                </div>

            </div>


        </section>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .company_image{
        width: 17px;
        height:17px;
    }
    .other_single_card {
        border-top: none;
        background-color: #FDFDFDF7;
        .card_image{
            border-radius: 7px;
            img{
                width: 70px;
                height: 70px;
                border-radius: 7px;
            }
        }
        .abs_details {
            bottom: 27px;
        }
    }
    
    .job_conditions{
        border: 1px solid #F0F0F0;
        border-radius: 7px;
        .condition_header{
            padding-top: 20px;
            padding-bottom:20px;
            border-bottom: 1px solid #F0F0F0;
        }
    }
</style>