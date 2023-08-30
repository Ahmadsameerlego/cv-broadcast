<template>
    <section id="companyProfile">
        <div class="container">
            <!-- bread crumb  -->
            <div class="breadcrumb d-flex mb-0">
                <router-link to="/" class="inActive"> {{ $t('nav.main') }} </router-link>&nbsp; - &nbsp;
                <router-link to="/exploreJobs" class="inActive"> {{ $t('nav.exploreJobs') }} </router-link>&nbsp; - &nbsp;
                <router-link to="/jobDetails/1" class="inActive"> {{ $t('common.jobDetails') }} </router-link>&nbsp; - &nbsp;
                <p class="active mainColor"> {{  $t('common.company')  }} </p>
            </div>


            <!-- content  -->
            <section>
                <div class="row">
                <div class="col-md-8 mb-3">
                    
                    <!-- company cover  -->
                    <div class="company_cover position-relative">
                        <!-- cover  -->
                        <div class="cover">
                            <img :src="require('@/assets/imgs/cover.png')" alt="company cover">
                        </div>
                        <!-- profile pic  -->
                        <div class="pic">
                            <img :src="require('@/assets/imgs/logo.png')" alt="company profile">
                        </div>
                    </div>

                    <!-- company details  -->
                    <section class="company_details">
                        <h4 class="fw-bold"> شركة أوامر الشبكة </h4>

                        <div class="d-flex align-items-center mt-3">
                            <img :src="require('@/assets/imgs/dot.svg')" class="dotImage" alt="">

                            <span class="d-block fs-18 fw-6 mainColor2 mx-2"> الرياض </span>
                        </div>

                        <div class="d-flex align-items-center mt-3">
                            <img :src="require('@/assets/imgs/phone1.svg')" alt="">

                            <span class="d-block fs-18 fw-6  mx-2"> 01013746111 </span>
                        </div>

                        <div class="d-flex align-items-center mt-3">
                            <img :src="require('@/assets/imgs/globe.svg')" alt="">

                            <span class="d-block fs-18 fw-6  mx-2"> ahmadsamerlego@gmail.com </span>
                        </div>

                        <!-- bio  -->
                        <div class="mt-4">
                            <h5 class="mainColor fw-bold"> نبذه عن الشركة </h5>
                            <p class="bio fw-6 fs-15 mt-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore explicabo laboriosam ex iusto consequuntur provident nulla est velit veritatis modi?
                            </p>
                        </div>
                    </section>

                </div>



                <div class="col-md-4">
                    <div class="otherHeader grayBg pt-3 pb-3 br-7 px-3 fw-bold mainColor mb-3 fs-15">
                        {{  $t('common.avilable')  }}
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
    .dotImage{
        width: 14px;
        margin-left: 4px;
        margin-right: 9px;
    }
    .company_details{
        margin-top: 80px;
    }
    .company_cover{
        .cover{
            width: 100%;
            height: 200px;
            border-radius: 7px;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 7px;
            }
        }
        .pic{
            position: absolute;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            bottom: -23%;
            right: 6%;
            border: 5px solid #fff;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
    }
    .bio{
        line-height: 20px;
        color: #4F4F4F;
    }
</style>