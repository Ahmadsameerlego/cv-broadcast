<template>
  <Dialog class="contactModal" v-model:visible="open" modal :style="{ width: '50vw' }">
          <div class="logo">
            <img :src="require('@/assets/imgs/logo.png')" alt="">
          </div>

          <p class="fw-6 text-center mt-2 mb-2"> هذا النص هو مثال على نص يمكن ان يستبدل </p>

          <form class="flex flex-wrap gap-3 p-fluid">
            <div class="row">
              <div class="col-md-6 mb-2">
                <!-- phone  -->
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.user') }} </label>
                    <InputText type="text" class="defaultInput2" v-model="name" :placeholder="$t('auth.userPlc')" />
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
                    <input type="tel" class="form-control" :placeholder="$t('auth.phonePlc')">

                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/phone.svg')" alt="">
                    </div>

                    <!-- select phone  -->
                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"  class="w-full md:w-14rem" />

                </div>
              </div>

              <div class="col-md-12">
                <!-- phone  -->
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.message')  }} </label>
                    <Textarea v-model="value" rows="5" cols="30" :placeholder="$t('auth.messagePlc')" class="defaultInput2" />

                </div>
              </div>

              <div class="mt-4">
                <button class="main_btn w-100 pt-3 pb-3 fs-5"> {{ $t('auth.send')  }} </button>
              </div>



            </div>
          </form>

      </Dialog>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
import InputText from 'primevue/inputtext';

export default {
    data(){
        return{
            open : false
        }
    },
    components:{
        Textarea,
        Dialog,
        Dropdown,
        InputText
    },
    watch:{
        openContactModal(){
            if( this.openContactModal == true || this.openContactModal == false ){
                this.open = true ;
            }
        }
    },  
    props:{
        openContactModal : Boolean
    }
}
</script>

<style>

</style>