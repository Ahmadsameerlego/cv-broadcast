<template>
    <section id="contactUs" class="m-5">
        <div class="container">

            <div class="breadcrumb d-flex  mb-0">
                <router-link to="/" class="inActive"> {{  $t('nav.main')  }}  </router-link>&nbsp; - &nbsp;
                <p class="active mainColor"> {{  $t('common.contact')  }} </p>
            </div>

            <h6 class="fw-bold red mb-5"> {{  $t('common.contact')  }} </h6>

            <h3 class="fw-bold mt-3"> {{  $t('common.contact')  }} </h3>
            <p class="fw-bold fs-16">
                {{ $t('common.contactPlc') }}
            </p>

            <form class="flex flex-wrap gap-3 p-fluid">
                <div class="row">

                    <div class="col-md-6 mb-2">

                        <div class="row">
                            <div class="col-md-6 mb-2">
                                <!-- user name  -->
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-bold block mb-2 fs-13"> {{  $t('auth.user')  }} </label>
                                    <InputText type="text" class="defaultInput2" v-model="name" :placeholder="$t('auth.userPlc')" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                    <img :src="require('@/assets/imgs/user.svg')" alt="">
                                    </div>

                                </div>
                            </div>

                            <div class="col-md-6 mb-2">
                                <!-- phone  -->
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-bold block mb-2 fs-13"> {{  $t('auth.phone')  }} </label>
                                    <InputNumber v-model="value1" class="defaultInput" inputId="integeronly" :placeholder="$t('auth.phonePlc')" />

                                    <!-- icon  -->
                                    <div class="inputIcon">
                                    <img :src="require('@/assets/imgs/phone.svg')" alt="">
                                    </div>

                                    <!-- select phone  -->
                                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"  class="w-full md:w-14rem" />

                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <!-- user name  -->
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-bold block mb-2 fs-13"> {{ $t('auth.message') }}  </label>
                                    <!-- <InputText type="text"  v-model="name" placeholder="الرجاء ادخال اسم المستخدم" /> -->
                                    <Textarea v-model="value" class="defaultInput2" rows="5" cols="30" :placeholder="$t('auth.messagePlc')" />
                             
                                </div>
                            </div>

                        </div>

                        <div class="d-flex justify-content-center">
                            <button class="main_btn w-75 mx-auto pt-3 pb-3 fs-15">
                                {{  $t('auth.send')  }}
                            </button>
                        </div>

                    </div>

                    <div class="col-md-6 mb-2">
                        <div class="job_image">
                            <img class="w-100 h-100 lazy" :src="require('@/assets/imgs/contactSvg.png')" alt="contact canvas">
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </section>
</template>

<script>
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';

export default {
    data(){
        return{
            cities : []
        }
    },
    components:{
        InputText,
        InputNumber,
        Dropdown,
        Textarea
    }
}
</script>

<style scoped>
    .p-dropdown {
        top: 27px;
        width: 20%;
    }
    input, textarea, .p-dropdown{
        border: none !important;
    }
    .job_image {
        height: 360px;
    }
</style>

<style>
    .p-fluid .p-inputnumber .p-inputnumber-input{
        border: none;
    }
</style>