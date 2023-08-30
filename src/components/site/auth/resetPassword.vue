<template>
  <!-- reset password  -->
  <Dialog class="contactModal" v-model:visible="open" modal :style="{ width: '50vw' }">
          
          <h5 class="fw-bold text-center mb-3"> {{ $t('auth.resetPass')  }} </h5>
          <div class="logo">
            <img :src="require('@/assets/imgs/logo.png')" alt="">
          </div>


          <form class="flex flex-wrap gap-3 p-fluid">
            <div class="row">
              <div class="col-md-12 mb-2">
                <!-- password  -->
                <div class="position-relative flex-auto mt-3">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.pass')  }} </label>
                    <Password v-model="oldPass"  toggleMask class="defaultInput" :placeholder="$t('auth.passPlc')" />

                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/lock.svg')" alt="">
                    </div>


                </div>

                <!-- confirm password  -->
                <div class="position-relative flex-auto mt-3">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.confirmPass')  }} </label>
                    <Password v-model="newPass" :feedback="false" toggleMask class="defaultInput" :placeholder="$t('auth.confirmPlc')" />

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
                <button class="main_btn w-100 pt-3 pb-3 fs-5"> {{  $t('auth.set')  }} </button>
              </div>



            </div>
          </form>

      </Dialog>

</template>

<script>
import Password from 'primevue/password';
import Dialog from 'primevue/dialog';

export default {
    data(){
        return{
            open : false,
            newPass : null
        }
    },  
    components:{
        Password,
        Dialog
    },
    watch:{
        openReset(){
            if(this.openReset == true || this.openReset == false){
                this.open = true ;
            }
        },
        newPass(){
           
            this.showValid = true ;
        }
    },
    props:{
        openReset : Boolean
    },
    computed:{
        passwordMatch() {
            return this.oldPass === this.newPass;  
        }
    },
}
</script>

<style>

</style>