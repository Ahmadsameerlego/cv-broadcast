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

            <form class="flex flex-wrap gap-3 p-fluid" @submit.prevent="sendMessage">
                <div class="row">

                    <div class="col-md-6 mb-2">

                        <div class="row">
                            <div class="col-md-6 mb-2">
                                <!-- user name  -->
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-bold block mb-2 fs-13"> {{  $t('auth.user')  }} </label>
                                    <InputText type="text" class="defaultInput2" v-model="user_name" :placeholder="$t('auth.userPlc')" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                    <img :src="require('@/assets/imgs/user.svg')" alt="">
                                    </div>

                                </div>
                            </div>

                            <div class="col-md-6 mb-2">
                                <!-- phone  -->
                                <div class="position-relative flex-auto defaultInput">

                                    <label for="integeronly" class="label fw-bold block mb-2 fs-13"> {{  $t('auth.phone')  }} </label>
                                    <!-- <InputNumber v-model="phone" class="defaultInput" inputId="integeronly" :placeholder="$t('auth.phonePlc')" /> -->
                                    <input type="number" class="form-control" v-model="phone" :placeholder="$t('auth.phonePlc')">

                                    <!-- icon  -->
                                    <div class="inputIcon">
                                    <img :src="require('@/assets/imgs/phone.svg')" alt="">
                                    </div>

                                    <!-- select phone  -->
                                    <Dropdown v-model="selectedCity" :options="common.countries" optionLabel="key"  class="w-full md:w-14rem"  @change="chooseCountry" />

                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <!-- user name  -->
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-bold block mb-2 fs-13"> {{ $t('auth.message') }}  </label>
                                    <Textarea v-model="complaint" class="defaultInput2" rows="5" cols="30" :placeholder="$t('auth.messagePlc')" />
                             
                                </div>
                            </div>

                        </div>

                        <div class="d-flex justify-content-center">
                            <button class="main_btn w-75 mx-auto pt-3 pb-3 fs-15" :disabled="disabled">
                                <span v-if="!disabled">{{ $t('auth.send')  }} </span>
                                <div class="spinner-border mx-2" role="status" v-if="disabled">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
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
    <Toast />
</template>

<script>
import InputText from 'primevue/inputtext';
// import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import { mapActions, mapState } from 'vuex';
export default {
    data(){
        return{
            selectedCity : {
                "id": 1,
                "name": "السعودية",
                "key": "+966"
            },
            disabled : false,
            user_name : null,
            phone : null,
            complaint : null
        }
    },
    components:{
        InputText,
        // InputNumber,
        Dropdown,
        Textarea,
        Toast
    },
    computed:{
        ...mapState(["common"])  
    },
    methods:{
      ...mapActions('common',['getCountries']),

      async sendMessage(){
        this.disabled = true ;
        const fd = new FormData();
        fd.append('phone', this.phone);
        fd.append('user_name', this.user_name);
        fd.append('complaint', this.complaint);
        fd.append('country_code', this.selectedCity.key.replace(/\+/g, ''));

        const res = await this.$store.dispatch('logic/sendCompaint', fd)
        if( res.success == true ){
            this.$toast.add({ severity: 'success', summary: res.message, life: 3000 });
            this.disabled = false ;
            setTimeout(() => {
                this.open = false ;
            }, 3000);

            this.phone = null ;
            this.complaint = null ;
            this.user_name = null ;
        }else{
            this.$toast.add({ severity: 'error', summary: res.message, life: 3000 });
            this.disabled = false ;
        }
      },

      chooseCountry(){
            document.querySelector('.p-dropdown-label').innerHTML = this.selectedCity.key ;
        },
    },

    mounted(){
        document.querySelector('.p-dropdown-label').innerHTML = this.selectedCity.key ;
        this.getCountries()
    }
}
</script>

<style scoped>
    
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

<style scoped>
    .p-dropdown{
        position: absolute !important;
        top:32px !important;
        width:35% !important;
    }
</style>