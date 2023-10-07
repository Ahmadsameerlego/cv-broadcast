<template>
  <!-- reset password  -->
  <Dialog class="contactModal" v-model:visible="open" modal :style="{ width: '50vw' }">
          
          <h5 class="fw-bold text-center mb-3"> {{ $t('auth.resetPass')  }} </h5>
          <div class="logo">
            <img :src="require('@/assets/imgs/logo.png')" alt="">
          </div>


          <form class="flex flex-wrap gap-3 p-fluid" @submit.prevent="resetPassword()">
            <div class="row">
              <div class="col-md-12 mb-2">
                <!-- password  -->
                <div class="position-relative flex-auto mt-3">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.pass')  }} </label>
                    <Password v-model="password"  toggleMask class="defaultInput" :placeholder="$t('auth.passPlc')" />

                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/lock.svg')" alt="">
                    </div>


                </div>

                <!-- confirm password  -->
                <div class="position-relative flex-auto mt-3">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.confirmPass')  }} </label>
                    <Password v-model="password_confirmation" :feedback="false" toggleMask class="defaultInput" :placeholder="$t('auth.confirmPlc')" />

                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/lock.svg')" alt="">
                    </div>


                </div>

                <div v-if="showValid">
                  <p v-if="passwordMatch" class="passwordConfirmed d-flex align-items-center text-success">
                    <i class="fa-regular fa-circle-check"></i>
                    <span>{{ $t('auth.iden') }}</span>
                  </p>
                  <p v-else class="passwordWrong d-flex align-items-center text-danger">
                      <i class="fa-regular fa-circle-xmark"></i>
                      <span>{{ $t('auth.notIden') }}</span>
                  </p>
                </div>
              </div>



              <div class="mt-4">
                <button class="main_btn w-100 pt-3 pb-3 fs-5" :disabled="disabled"> 
                  
                    <span v-if="!disabled">{{  $t('auth.set')  }} </span>
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
import Password from 'primevue/password';
import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';

export default {
    data(){
        return{
            open : false,
            password_confirmation : null,
            password : null ,
            disabled : false
        }
    },  
    components:{
        Password,
        Dialog,
        Toast
    },
    methods:{
      async resetPassword(){
        this.disabled = true ;
        const fd = new FormData();
        fd.append('code', localStorage.getItem('code'));
        fd.append('country_code', localStorage.getItem('country_code'));
        fd.append('phone', localStorage.getItem('phone'));
        fd.append('device_type', 'web');
        fd.append('device_id', localStorage.getItem('device_id'));
        fd.append('password', this.password);
        fd.append('password_confirmation', this.password_confirmation);

        try{
            const res = await this.$store.dispatch('auth/resetPassword', fd)
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
        }catch(err){
            console.error(`login error is ${err}`)
        }
      }

    },
    watch:{
        openReset(){
            if(this.openReset == true || this.openReset == false){
                this.open = true ;
            }
        },
        password_confirmation(){
           
            this.showValid = true ;
        }
    },
    props:{
        openReset : Boolean
    },
    computed:{
        passwordMatch() {
            return this.password === this.password_confirmation;  
        }
    },
}
</script>

<style>

</style>