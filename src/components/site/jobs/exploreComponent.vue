<template>
    <section id="explore">
        <div class="breadcrumb d-flex externalBreadcrumb mb-0">
            <router-link to="/" class="inActive"> {{ $t('nav.main')  }} </router-link>&nbsp; - &nbsp;
            <p class="active mainColor"> {{ $t('nav.exploreJobs') }} </p>
        </div>

        <section id="searchJob" class="pt-5 pb-5">
            <div class="container">
                <h5 class="fw-bold red mb-5"> {{  $t('home.explore')  }} </h5>
                <form @submit.prevent="search">
                    <div class="row">
                        <!-- job name  -->
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="" class="fw-bold mb-2"> {{ $t('auth.jobName') }} </label>

                                <InputText type="text" v-model="job_name" :placeholder="$t('auth.namePlc')"
                                class="jobInput position-relative w-100 w-full md:w-14rem" />
                            </div>
                        </div>

                        <!-- employments  -->
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="" class="fw-bold mb-2"> {{  $t('common.jobField')  }} </label>
                                <Dropdown v-model="selectedEmp" :options="emps" optionLabel="title"
                                    :placeholder="$t('common.fieldPlc')"
                                    class="jobInput position-relative w-100 w-full md:w-14rem" 
                                />
                            </div>
                        </div>

                        <!-- specilizations  -->
                         <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="" class="fw-bold mb-2"> التخصص الوظيفي </label>
                                <Dropdown v-model="selectedSpec" :options="specs" optionLabel="title"
                                    placeholder="الرجاء اختيار التخصص الوظيفي"
                                    class="jobInput position-relative w-100 w-full md:w-14rem" />
                            </div>
                        </div>

                        <!-- types  -->
                        <div class="col-md-6 mb-3">
                            <div class="position-relative flex-auto form-group">
                                <label for="" class="fw-bold mb-2"> {{ $t('common.jobType')  }} </label>
                                <Dropdown v-model="type" :options="types" optionLabel="title"
                                    :placeholder="$t('common.typePlc')"
                                    class="jobInput position-relative w-100 w-full md:w-14rem" 
                                />
                          </div>
                        </div>

                        <!-- qualifications  -->
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="" class="fw-bold mb-2"> {{ $t('common.edQual') }} </label>
                                <Dropdown v-model="selectedQual" :options="qualifications" optionLabel="title"
                                    :placeholder="$t('common.qualPlc')"
                                    class="jobInput position-relative w-100 w-full md:w-14rem" 
                                />
                            </div>
                        </div>

                        <!-- experiences  -->
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="" class="fw-bold mb-2"> {{ $t('common.exper') }} </label>
                                <Dropdown v-model="selectedExp" :options="experiences" optionLabel="title"
                                    :placeholder="$t('common.experPlc')"
                                    class="jobInput position-relative w-100 w-full md:w-14rem" />
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center">
                        <button class="main_btn search" :disabled="disabled"> 
                            <span v-if="!disabled">{{  $t('common.search')  }}  </span>
                            <div class="spinner-border mx-2" role="status" v-if="disabled">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </section>

        <section v-if="showAds">
            <section id="jobs" class="mt-4" v-if="ads.length>0">
                <div class="container">
                    <h5 class="fw-bold red mb-4 mt-3"> {{  ads.length  }} {{ $t('common.avilabe') }} </h5>
                    <section class="cards">

                        <div class="row" v-if="load">
                            <div class="col-md-6 mb-3" v-for="ad in ads" :key="ad.id">
                                <singleJobCardVue :ad="ad" />
                            </div>
                        </div>

                        <div class="row" v-else>
                            <div class="col-md-6 mb-3" v-for="skeleton in 2" :key="skeleton">
                                <Skeleton style="width:100%" height="4rem"></Skeleton>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <!-- not found -->
            <section v-else-if="ads.length==0" class="w-50 mx-auto">
                <Message severity="error">
                        لا توجد وظائف مشابهة
                </Message>
            </section>
        </section>
    </section>

    <Toast />
</template>

<script>
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import singleJobCardVue from '@/components/site/jobs/singleJobCard.vue';
import { mapGetters, mapActions } from 'vuex';
import Toast from 'primevue/toast';
import Message from 'primevue/message';

import Skeleton from 'primevue/skeleton';

export default {
    data() {
        return {
            job_name: "",
            selectedEmp : null,
            selectedSpec : null,
            type : null , 
            selectedQual : null,
            selectedExp : null, 
            disabled : false   ,
            load : false     ,
            showAds : false    
        }
    },
    computed:{
        ...mapGetters('common',['emps', 'specs', 'types', 'qualifications', 'experiences']),
        ...mapGetters('logic', ['ads'])
    },
    methods:{
        ...mapActions('common',['getEmployment', 'getSpecilizations', 'getTypes', 'getQualifications', 'getExperiences']),

        async search(){
            this.disabled = true ;
            const fd =  new FormData();
            // common share function 
            function appendedIfSelected( formData, key , selectedValue ){
                if( selectedValue ){
                    formData.append(key , selectedValue.id)
                }
            } 
            // append id 
            appendedIfSelected(fd, 'filters[employment_id]', this.selectedEmp);
            appendedIfSelected(fd, 'filters[specialization_id]', this.selectedSpec);
            appendedIfSelected(fd, 'filters[qualification_id]', this.selectedQual);
            appendedIfSelected(fd, 'filters[experience_id]', this.selectedExp);
            appendedIfSelected(fd, 'filters[type_id]', this.type);

            fd.append('job_name', this.job_name);

            // try catch 
            try{
            const res = await this.$store.dispatch('logic/search', fd);
            if( res.success == true ){
                this.$toast.add({ severity: 'success', summary: res.message, life: 3000 });
                this.disabled = false ;
                
                setTimeout(() => {
                    this.load = true ;
                }, 500);
            }else{
                this.$toast.add({ severity: 'error', summary: res.message, life: 3000 });
                this.disabled = false ;
                }
                this.showAds = true ;
            }catch(err){
                console.error(err)
            }

        }
    },
    components: {
        Dropdown,
        InputText,
        singleJobCardVue,
        Toast,
        Skeleton,
        Message
    },
    mounted(){
        this.getEmployment();
        this.getSpecilizations();
        this.getTypes();
        this.getQualifications();
        this.getExperiences();
    }
} 
</script>

<style scoped>
.p-dropdown{
    top:0 !important;
    padding-left:0 !important;
    padding-right: 0 !important ;
  }
</style>
<style lang="scss">
.single_card {
    position: relative;
    background-color: #F8F8F8F7;
    padding: 20px;
    border-radius: 10px;
    border-top: 3px solid #BACCED;

    .abs_time {
        position: absolute;
        top: 29px;
        left: 10px;
    }

    .abs_details {
        position: absolute;
        bottom: 10px;
        left: 19px;

    }

    .card_image {
        height: 100px;
        border-radius: 5px;

        img {
            width: 100px;
            height: 100%;
            object-fit: cover;
        }
    }
}

.card_para {
    color: #4F4F4F;
    line-height: 20px;
}

.jobInput {
    background-color: #fff;
    top: 0;
}

.externalBreadcrumb {
    margin: 0 122px;
}

.red {
    color: #EB5648
}

#searchJob {
    background-color: rgba(240, 244, 255, 0.35);

    .p-dropdown .p-dropdown-label,
    .p-dropdown .p-dropdown-trigger {
        background-color: #fff !important;
    }

    .p-dropdown-trigger {
        svg {
            transform: translateX(10px);
        }
    }

    .search {
        width: 175px;
        padding-top: 14px;
        padding-bottom: 14px;
        border-radius: 20px;
        margin-top: 28px;
        font-weight: 600;
    }
}

.p-dropdown {
    overflow: auto;
}</style>