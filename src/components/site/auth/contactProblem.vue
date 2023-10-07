<template>
  <Dialog class="contactModal" v-model:visible="open" modal :style="{ width: '50vw' }">
          <div class="logo">
            <img :src="require('@/assets/imgs/logo.png')" alt="">
          </div>

          <p class="fw-6 text-center mt-2 mb-2"> هذا النص هو مثال على نص يمكن ان يستبدل </p>

          <form class="flex flex-wrap gap-3 p-fluid" @submit.prevent="sendMessage">
            <div class="row">
              <div class="col-md-6 mb-2">
                <!-- phone  -->
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.user') }} </label>
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

                    <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.phone')  }} </label>
                    <input type="number" class="form-control" v-model="phone" :placeholder="$t('auth.phonePlc')">

                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/phone.svg')" alt="">
                    </div>

                    <!-- select phone  -->
                    <Dropdown  v-model="selectedCity" :options="common.countries" optionLabel="key"  class="w-full md:w-14rem" />

                </div>
              </div>

              <div class="col-md-12">
                <!-- phone  -->
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.message')  }} </label>
                    <Textarea v-model="complaint" rows="5" cols="30" :placeholder="$t('auth.messagePlc')" class="defaultInput2" />

                </div>
              </div>

              <div class="mt-4">
                <button class="main_btn w-100 pt-3 pb-3 fs-5" :disabled="disabled"> 
                  
                  <span v-if="!disabled">{{ $t('auth.send')  }} </span>
                    <div class="spinner-border mx-2" role="status" v-if="disabled">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </button>
              </div>



            </div>
          </form>

      </Dialog>

      <Toast />
</template>

<script>
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import { mapActions, mapState } from 'vuex';

export default {
    data(){
        return{
            open : false,
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
        Textarea,
        Dialog,
        Dropdown,
        InputText,
        Toast
    },
    watch:{
        openContactModal(){
            if( this.openContactModal == true || this.openContactModal == false ){
                this.open = true ;
            }
        }
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

        const res = await this.$store.dispatch('logic/sendCompaint', fd)
        if( res.success == true ){
            this.$toast.add({ severity: 'success', summary: res.message, life: 3000 });
            this.disabled = false ;
            setTimeout(() => {
                this.open = false ;
            }, 3000);

            
        }else{
            this.$toast.add({ severity: 'error', summary: res.message, life: 3000 });
            this.disabled = false ;
        }
      },

      chooseCountry(){
            document.querySelector('.p-dropdown-label').innerHTML = this.selectedCity.key ;
        },
    },
    props:{
        openContactModal : Boolean
    },
    mounted(){
        document.querySelector('.p-dropdown-label').innerHTML = this.selectedCity.key ;
    }
}
</script>

<style scoped>
    .p-dropdown{
        top:32px !important;
        width:35% !important;
    }
</style>