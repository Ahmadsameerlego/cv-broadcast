<template>
    <section id="explore">
        <div class="breadcrumb d-flex externalBreadcrumb mb-0">
            <router-link to="/" class="inActive"> الرئيسية </router-link>&nbsp; - &nbsp;
            <p class="active mainColor"> اكتشف الوظائف </p>
        </div>

        <section id="searchJob" class="pt-5 pb-5">
            <div class="container">
                <h5 class="fw-bold red mb-5"> اكتشف الوظائف </h5>
                <form>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="" class="fw-bold mb-2"> المسمى الوظيفي </label>
                                <Dropdown v-model="jobName" :options="jobsName" optionLabel="name"
                                    placeholder="الرجاء اختيار المسمى الوظيفي"
                                    class="jobInput position-relative w-100 w-full md:w-14rem" />
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="" class="fw-bold mb-2"> فئة الوظيفة </label>
                                <Dropdown v-model="jobType" :options="jobTypes" optionLabel="name"
                                    placeholder="الرجاء اختيار فئة الوظيفة"
                                    class="jobInput position-relative w-100 w-full md:w-14rem" />
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="" class="fw-bold mb-2"> نوع الوظيفية </label>
                                <Dropdown v-model="type" :options="types" optionLabel="name"
                                    placeholder="الرجاء اختيار نوع الوظيفية"
                                    class="jobInput position-relative w-100 w-full md:w-14rem" />
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="" class="fw-bold mb-2"> المؤهل التعليمي </label>
                                <InputText type="text" v-model="qualification" placeholder="الرجاء اختيار المؤهل التعليمي"
                                    class="jobInput position-relative w-100 w-full md:w-14rem" />
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="" class="fw-bold mb-2"> التخصص العلمي </label>
                                <Dropdown v-model="specialize" :options="specializes" optionLabel="name"
                                    placeholder="الرجاء ادخال التخصص العلمي"
                                    class="jobInput position-relative w-100 w-full md:w-14rem" />
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="" class="fw-bold mb-2"> الخبرة </label>
                                <Dropdown v-model="specialize" :options="specializes" optionLabel="name"
                                    placeholder="الرجاء اختيار الخبرة"
                                    class="jobInput position-relative w-100 w-full md:w-14rem" />
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center">
                        <button class="main_btn search"> بحث </button>
                    </div>
                </form>
            </div>
        </section>

        <section id="jobs" class="mt-4">
            <div class="container">
                <h5 class="fw-bold red mb-4 mt-3"> 14 وظيفة متاحة </h5>
                <section class="cards">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <singleJobCardVue />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </section>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import singleJobCardVue from '@/components/site/jobs/singleJobCard.vue'
export default {
    data() {
        return {
            jobsName: [],
            jobName: null,
            jobTypes: [],
            jobType: null,
            types: [],
            type: null,
            qualification: null,
            specializes: [],
            specialize: null
        }
    },
    components: {
        Dropdown,
        InputText,
        singleJobCardVue
    }
} 
</script>

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