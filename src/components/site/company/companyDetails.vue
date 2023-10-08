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
                            <img :src="company.banner" alt="company cover">
                        </div>
                        <!-- profile pic  -->
                        <div class="pic">
                            <img :src="company.image" alt="company profile">
                        </div>
                    </div>

                    <!-- company details  -->
                    <section class="company_details">
                        <h4 class="fw-bold"> {{ company.name }} </h4>

                        <div class="d-flex align-items-center mt-3">
                            <img :src="require('@/assets/imgs/dot.svg')" class="dotImage" alt="">

                            <span class="d-block fs-18 fw-6 mainColor2 mx-2"> {{ city.name }} </span>
                        </div>

                        <div class="d-flex align-items-center mt-3">
                            <img :src="require('@/assets/imgs/phone1.svg')" alt="">

                            <a :href="'tel:'+company.phone" class="d-block fs-18 fw-6  mx-2" style="color:inherit"> {{ company.phone }} </a>
                        </div>

                        <div class="d-flex align-items-center mt-3">
                            <img :src="require('@/assets/imgs/globe.svg')" alt="">

                            <a :href="'mailto:'+company.email" class="d-block fs-18 fw-6  mx-2"  style="color:inherit"> {{ company.email }} </a>
                        </div>

                        <!-- bio  -->
                        <div class="mt-4">
                            <h5 class="mainColor fw-bold"> نبذه عن الشركة </h5>
                            <p class="bio fw-6 fs-15 mt-3">
                                {{ company.description }}
                            </p>
                        </div>
                    </section>

                </div>



                <div class="col-md-4">
                    <div class="otherHeader grayBg pt-3 pb-3 br-7 px-3 fw-bold mainColor mb-3 fs-15">
                        {{  $t('common.avilable')  }}
                    </div>

                    <!-- single card  -->
                    <div class="single_card other_single_card d-flex mb-2" v-for="ad in ads" :key="ad.id">
                        <!-- card image  -->
                        <div class="card_image">
                            <img :src="ad.company.image" alt="">
                        </div>

                        <!-- card details  -->
                        <div class="card_details mx-3">
                            <p class="mainColor fw-bold mb-3"> {{ ad.job_name }} </p>

                            <div class="d-flex mb-3">
                                <img :src="require('@/assets/imgs/dot.svg')"  alt="">
                                <span class="mainColor2 fw-6 mx-2"> {{ ad.city }} </span>
                            </div>



                            <div class="d-flex align-items-baseline">
                                <img :src="require('@/assets/imgs/bag.svg')" alt="">
                                <span class="grayColor mx-2 fs-9"> {{ $t('common.jobType') }}: </span>
                                <h6 class="fw-bold fs-12"> {{ ad.type }} </h6>
                            </div>
                        </div>

                        <!-- absolute places  -->

                        <!-- time  -->
                        <div class="abs_time d-flex align-items-center">
                            <img :src="require('@/assets/imgs/clock.svg')" alt="">
                            <span class="fs-10 mx-1"> {{ ad.published_at }} </span>
                        </div>

                        <!-- details  -->
                        <router-link :to="'/jobDetails/'+ad.id" class="abs_details fs-10 grayColor"> 
                            {{  $t('common.showDetails')  }}
                            <i class="fa-solid fa-chevron-left"></i> 
                        </router-link>

                    </div>

                    <div class="d-flex justify-content-end">
                        <paginate
                            v-model="currentPage"
                            :page-count="totalPages"
                            :click-handler="page => pageClickHandler(page)"
                            :prev-text="'Prev'"
                            :next-text="'Next'"
                            :container-class="'pagination'"
                            :page-class="'page-item'"    
                            :no-li-surround="true"   
                            v-if="ads.length>0"        
                    >
                    </paginate>
                    </div>
                </div>

            </div>
            </section>

        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Paginate from 'vuejs-paginate-next';

export default {
    data(){
        return{
            company : {},
            city : {},
            ads : [],
            currentPage: 1,
            perPage: 10,
            totalPages: 0,

            
        }
    },
    created() {
        this.totalPages = Math.ceil(this.ads.length / this.perPage)
    },
    components:{
        Paginate
    },
    methods:{
        // get company profile 
        async getCompanyProfile(){
            const fd = new FormData();
            fd.append('company_id', this.$route.params.id);
            await axios.post('user/company/profile', fd)
            .then( (res)=>{
                this.company = res.data.data;
                this.city = res.data.data.city;
            } )
        },
        // get company advertisment 
        async getAdvertisement(){
            const fd = new FormData();
            fd.append('company_id', this.$route.params.id);
            await axios.post(`user/company/advertisements?page=${this.currentPage}`, fd)
            .then( (res)=>{
                this.ads = res.data.data;
            } )
        },
        pageClickHandler(page) {
            this.currentPage = page
            this.getAdvertisement()
        },

    },
    mounted(){
        this.getCompanyProfile();
        this.getAdvertisement();
    }
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