<template>
  <section id="jobDetails" class="mt-4">
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
                            <img :src="company.image" alt="">
                        </div>

                        <!-- card details  -->
                        <div class="card_details mx-3">
                            <h6 class="mainColor fw-bold mb-3"> {{ job.job_name  }} </h6>

                            <div class="d-flex mb-3">
                                <img :src="require('@/assets/imgs/dot.svg')"  alt="">
                                <span class="mainColor2 fw-6 mx-2">
                                    {{  job.map_desc  }}
                                </span>
                            </div>



                            <router-link :to="'/company/'+company.id" style="color:inherit" class="d-flex align-items-baseline">
                                <img class="br-50 company_image" :src="require('@/assets/imgs/bag.svg')" alt="">
                                <p class="fw-bold mx-2"> {{  company.name  }} </p>
                            </router-link>
                        </div>

                        <!-- absolute places  -->

                        <!-- time  -->
                        <div class="abs_time d-flex align-items-baseline">
                            <img :src="require('@/assets/imgs/clock.svg')" alt="">
                            <span class="grayColor mx-2"> {{  $t('common.date')  }}: </span>
                            <span > {{ job.published_at  }} </span>
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
                                    <p class="fw-bold fs-15 mb-4"> {{ qualification.title }} </p>


                                    <div class="d-flex">
                                        <img :src="require('@/assets/imgs/bluetimer.svg')" alt="">
                                        <span class="grayColor mx-2"> {{ $t('common.jobType')  }} :  </span>
                                    </div>
                                    <p class="fw-bold fs-15"> {{ type.title  }} </p>

                                </div>

                                <div class="col-md-3">
                                    <div class="d-flex">
                                        <img :src="require('@/assets/imgs/bluebag.svg')" alt="">
                                        <span class="grayColor mx-2"> {{  $t('common.exper')  }} :  </span>
                                    </div>
                                    <p class="fw-bold fs-15 mb-4"> {{ experience.title }} </p>


                                    <div class="d-flex">
                                        <img :src="require('@/assets/imgs/bluetimer.svg')" alt="">
                                        <span class="grayColor mx-2"> {{ $t('common.salary') }} :  </span>
                                    </div>
                                    <p class="fw-bold fs-15"> 
                                        {{ job.salary }}
                                    </p>

                                </div>

                                <div class="col-md-2">
                                    <div class="d-flex">
                                        <img :src="require('@/assets/imgs/bluegender.svg')" alt="">
                                        <span class="grayColor mx-2"> {{  $t('auth.gender')  }} :  </span>
                                    </div>
                                    <p class="fw-bold fs-15 mb-4"> {{  job.gender  }} </p>

                                </div>

                                <div class="col-md-2">
                                    <div class="d-flex">
                                        <span class="grayColor mx-2"> {{ $t('common.type')}} :  </span>
                                    </div>
                                    <p class="fw-bold fs-15 mb-4"> {{ category.title  }} </p>

                                </div>


                            </div>
                        </div>
                    </section>

                    <!-- res  -->
                    <section class="job_conditions gray mt-5">
                        <div class="condition_header mainColor pt-3 pb-3 px-3 fs-16 fw-bold">
                           المهام والمسئوليات
                        </div>
                        <div class="condition_body pt-3 pb-3 px-3">
                            <p>
                                - {{  job.tasks  }}
                            </p>
                        </div>
                    </section>

                     <!-- conditions  -->
                     <section class="job_conditions gray mt-5">
                        <div class="condition_header mainColor pt-3 pb-3 px-3 fs-16 fw-bold">
                           شروط الوظيفة
                        </div>
                        <div class="condition_body pt-3 pb-3 px-3">
                            <p>
                                - {{  job.conditions  }}
                            </p>
                        </div>
                    </section>

                    <!-- skills  -->
                    <section class="job_conditions gray mt-5">
                        <div class="condition_header mainColor pt-3 pb-3 px-3 fs-16 fw-bold">
                           المهارات
                        </div>
                        <div class="condition_body pt-3 pb-3 px-3">
                            <p v-for="skill in job.skills" :key="skill.id">
                                - {{  skill.title  }}
                            </p>
                        </div>
                    </section>


                    <!-- apply job  -->
                    <div class="apply_Job flex_center">
                        <button class="main_btn w-50 mx-auto  pt-3 pb-3 mt-3" :disabled="disabled" @click.prevent="applyJob()">
                             <span v-if="!disabled">التقدم للوظيفة </span>
                            <div class="spinner-border mx-2" role="status" v-if="disabled">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </button>
                    </div>


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
  <Toast />
</template>

<script>
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
    data(){
        return{
            job : {},
            company : {},
            qualification : {},
            experience : {},
            category: {},
            type : {},
            disabled : false
        }
    },
    methods:{
        async getJobDetails(){
            const fd = new FormData();
            fd.append('advertisement_id', this.$route.params.id);
            await axios.post( 'user/advertisements/show', fd )
            .then( (res) =>{
                this.job = res.data.data;
                this.qualification = res.data.data.qualification ;
                this.experience = res.data.data.experience ;
                this.category = res.data.data.category ;
                this.type = res.data.data.type ;
                this.company = res.data.data.company;
            } )
        },
        // apply job 
        async applyJob(){
            const fd = new FormData();
            this.disabled = true ;
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            fd.append('advertisement_id', this.$route.params.id);
            await axios.post( 'user/advertisements/apply', fd , {headers})
            .then( (res) =>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    this.disabled = false ;
                    setTimeout(() => {
                        this.$router.push('/exploreJobs');
                    }, 3000);
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                    this.disabled = false ;
                }
            } )
            .catch( (err)=> console.error(err) )
        }
    },
    components:{
        Toast
    },
    mounted(){
        this.getJobDetails();
    }
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
        &.gray{
            background-color: #fdfdfd;
        }
    }
</style>