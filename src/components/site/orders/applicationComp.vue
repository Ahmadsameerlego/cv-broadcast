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
                    <!-- applied alert  -->
                    <div class="job_alert applied mb-2 d-flex align-items-center pt-3 pb-3 px-4" v-if="job.status=='pending'">
                        <img :src="require('@/assets/imgs/Group 101054.png')" alt="">
                        <span class="mx-3 fw-6"> {{ $t('common.appliedDone') }} </span>
                    </div>
                    <!-- refused alert  -->
                    <div class="job_alert refuse mb-2 d-flex align-items-start pt-3 pb-3 px-4"  v-if="job.status=='rejected'">
                        <img :src="require('@/assets/imgs/refuse.png')" alt="">
                        <div class="mx-2">
                            <h6 class="fw-6"> {{ $t('common.rejected') }} </h6>
                            <p>
                                {{  advertisement.rejected_to}}
                            </p>
                        </div>
                    </div>

                    <!-- success alert  -->
                    <div class="job_alert accept mb-2 d-flex align-items-center pt-3 pb-3 px-4" v-if="job.status=='accepted'">
                        <img :src="require('@/assets/imgs/accept.png')" alt="">
                        <span class="mx-3 fw-6"> {{ $t('common.acceptedDone') }} </span>
                    </div>

                    
                      <!-- single card  -->
                      <div class="single_card d-flex">
                          <!-- card image  -->
                          <div class="card_image">
                              <img :src="company.image" alt="">
                          </div>
  
                          <!-- card details  -->
                          <div class="card_details mx-3">
                              <h6 class="mainColor fw-bold mb-3"> {{ advertisement.job_name  }} </h6>
  
                              <div class="d-flex mb-3">
                                  <img :src="require('@/assets/imgs/dot.svg')"  alt="">
                                  <span class="mainColor2 fw-6 mx-2">
                                      {{  city.name  }}
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
                              <span > {{ job.created_at  }} </span>
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
                                          {{ advertisement.salary }}
                                      </p>
  
                                  </div>
  
                                  <div class="col-md-2">
                                      <div class="d-flex">
                                          <img :src="require('@/assets/imgs/bluegender.svg')" alt="">
                                          <span class="grayColor mx-2"> {{  $t('auth.gender')  }} :  </span>
                                      </div>
                                      <p class="fw-bold fs-15 mb-4"> {{  advertisement.gender  }} </p>
  
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
                             {{ $t('common.res') }}
                          </div>
                          <div class="condition_body pt-3 pb-3 px-3">
                              <p>
                                  - {{  advertisement.tasks  }}
                              </p>
                          </div>
                      </section>
  
                       <!-- conditions  -->
                       <section class="job_conditions gray mt-5">
                          <div class="condition_header mainColor pt-3 pb-3 px-3 fs-16 fw-bold">
                             {{ $t('common.conditions') }}
                          </div>
                          <div class="condition_body pt-3 pb-3 px-3">
                              <p>
                                  - {{  advertisement.conditions  }}
                              </p>
                          </div>
                      </section>
  
                      <!-- skills  -->
                      <section class="job_conditions gray mt-5">
                          <div class="condition_header mainColor pt-3 pb-3 px-3 fs-16 fw-bold">
                             {{ $t('auth.skills') }}
                          </div>
                          <div class="condition_body pt-3 pb-3 px-3">
                              <p v-for="skill in advertisement.skills" :key="skill.id">
                                  - {{  skill.title  }}
                              </p>
                          </div>
                      </section>
                  </div>
  
  
                  <div class="col-md-4">
                      <div class="otherHeader grayBg pt-3 pb-3 br-7 px-3 fw-bold mainColor mb-3 fs-15">
                          {{  $t('job.similar')  }}
                      </div>
                    <section v-if="similars.length>0">
                        <!-- single card  -->
                        <div class="single_card other_single_card d-flex mb-2" v-for="similar in similars" :key="similar.id">
                            <!-- card image  -->
                            <div class="card_image">
                                <img :src="similar.company.image" alt="">
                            </div>

                            <!-- card details  -->
                            <div class="card_details mx-3">
                                <p class="mainColor fw-bold mb-3"> {{ similar.job_name }} </p>

                                <div class="d-flex mb-3">
                                    <img :src="require('@/assets/imgs/dot.svg')"  alt="">
                                    <span class="mainColor2 fw-6 mx-2">
                                        {{ similar.city }}
                                    </span>
                                </div>



                                <div class="d-flex align-items-baseline">
                                    <img :src="require('@/assets/imgs/bag.svg')" alt="">
                                    <span class="grayColor mx-2 fs-9"> {{ $t('common.jobType') }}: </span>
                                    <h6 class="fw-bold fs-12"> {{ similar.type }} </h6>
                                </div>
                            </div>

                            <!-- absolute places  -->

                            <!-- time  -->
                            <div class="abs_time d-flex align-items-center">
                                <img :src="require('@/assets/imgs/clock.svg')" alt="">
                                <span class="fs-10 mx-1"> {{ similar.published_at }} </span>
                            </div>

                            <!-- details  -->
                            <router-link :to="'/jobDetails/'+similar.id" class="abs_details fs-10 grayColor"> 
                                {{  $t('common.showDetails')  }}
                                <i class="fa-solid fa-chevron-left"></i> 
                            </router-link>

                        </div>
                    </section>

                    <section v-else class="text-danger text-center">
                        لا توجد وظائف مشابهة
                    </section>
                     
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
              advertisement : {},
              ad_id : null,
              company : {},
              qualification : {},
              experience : {},
              category: {},
              type : {},
              city : {},
              similars : [],
              disabled : false
          }
      },
      methods:{
        async getJobDetails(){
            const fd = new FormData();
            fd.append('job_application_id', this.$route.params.id);
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            await axios.post( 'user/job-applications/show', fd , {headers})
            .then( (res) =>{
                this.job = res.data.data;  
                this.advertisement = res.data.data.advertisement ;
                this.ad_id = res.data.data.advertisement.id ;
                this.city = res.data.data.advertisement.city ;
                this.qualification = res.data.data.advertisement.qualification ;
                this.experience = res.data.data.advertisement.experience ;
                this.category = res.data.data.advertisement.category ;
                this.type = res.data.data.advertisement.type ;
                this.company = res.data.data.advertisement.company;
                setTimeout(() => {
                    this.getSimilar();
                }, 500);
            } )
        },
          // get similar jobs 
        async getSimilar(){
            const fd = new FormData();
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            fd.append('advertisement_id', this.ad_id);
            await axios.post( 'user/advertisements/like', fd , {headers})
            .then( (res)=>{
                this.similars = res.data.data ;
            } )
        },
        showAgain(){
            setTimeout(() => {
                this.getJobDetails();
            }, 500);
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
    .details{
        .applied{
            background-color: #F8F2ED;
            border-radius: 3px;
            border: 1px solid #DDDADD;
        }
        .refuse{
            background-color: #DFC4C3;
            border-radius: 3px;
            border: 1px solid #DDDADD;
        }
        .accept{
            background-color:#D7E7D2;
            border-radius: 3px;
            border: 1px solid #DDDADD;
        }
    }
    
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