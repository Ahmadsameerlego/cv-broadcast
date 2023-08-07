<template>
  <section id="login" class="mt-4">
    <div class="container">
      <!-- start breadcrumb  -->
      <div class="breadcrumb d-flex">
        <router-link to="/" class="inActive"> الرئيسية </router-link>&nbsp; - &nbsp;
        <p class="active mainColor"> تسجيل الدخول </p>
      </div>

      <!-- start login section  -->
      <section class="loginSection" style="width:93%;margin:auto" >
        <h3 class="fw-bold mb-3"> تسجيل الدخول </h3>
        <p class="loginParagraph fw-bold"> برجاء ادخال البيانات التاليه لتتمكن من تسجيل الدخول الي حسابك </p>
        <div class="row" style="width:93%;margin:auto">

          <!-- right side  -->
          <div class="col-md-6 mb-2">

            <form ref="loginForm" class="flex flex-wrap gap-3 p-fluid">

              <!-- phone  -->
              <div class="position-relative flex-auto">

                  <label for="integeronly" class="label fw-bold block mb-2"> رقم الجوال </label>
                  <InputNumber v-model="value1" class="defaultInput" inputId="integeronly" placeholder="الرجاء ادخال رقم الجوال" />

                  <!-- icon  -->
                  <div class="inputIcon">
                    <img :src="require('@/assets/imgs/phone.svg')" alt="">
                  </div>

                  <!-- select phone  -->
                  <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"  class="w-full md:w-14rem" />

              </div>


              <!-- password  -->
              <div class="position-relative flex-auto mt-3">

                  <label for="integeronly" class="label fw-bold block mb-2"> كلمة المرور </label>
                  <Password v-model="value" :feedback="false" toggleMask class="defaultInput" placeholder="الرجاء ادخال كلمة المرور" />

                  <!-- icon  -->
                  <div class="inputIcon">
                    <img :src="require('@/assets/imgs/lock.svg')" alt="">
                  </div>


              </div>

              <div class="d-flex justify-content-end mt-2">
                <button class="btn forgetPass" type="button" @click="visible=true"> نسيت كلمة المرور </button>
              </div>

              <!-- submit  -->
              <div class="mt-4">
                <button class="main_btn w-100 pt-3 pb-3 fs-5"> تسجيل الدخول </button>
              </div>

              <!-- new account  -->
              <div class="flex_center newAcc">
                <p class="fs-6 mt-4 fw-6"> هل لديك حساب ؟  <router-link to="/register" class="mainColor fw-bold"> حساب جديد </router-link> </p>  
              </div>


              <!-- register problem  -->
              <div class="flex_center newAcc">
                <p class="fs-6 mt-0 fw-6"> هل لديك مشكلة اثناء التسجيل <button  class="btn  mainColor contactUs" @click="visible2=true" type="button"> يرجى التواصل معنا </button> </p>  
              </div>

            </form>
          </div>

          <!-- left side  -->
          <div class="col-md-6 mb-2">
            <div class="">
              <img  class="loginImage w-100 h-100" :src="require('@/assets/imgs/login.png')" alt="">
            </div>
          </div>
        </div>
      </section>


      <!-- forget pass modal  -->      
      <Dialog v-model:visible="visible" modal :style="{ width: '50vw' }">
          <h5 class="fw-bold text-center"> نسيت كلمة المرور </h5>
          <p class=" text-center"> الرجاء ادخال رقم الجوال ليتم ارسال كود التحقق الخاص بك </p>
          <div class="logo">
            <img :src="require('@/assets/imgs/forget1.svg')" alt="">
          </div>

          <form ref="loginForm" @submit.prevent="sendPhone" class="flex flex-wrap gap-3 p-fluid">

              <!-- phone  -->
              <div class="position-relative flex-auto">

                  <label for="integeronly" class="label fw-bold block mb-2"> رقم الجوال </label>
                  <InputNumber v-model="value1" class="defaultInput" inputId="integeronly" placeholder="الرجاء ادخال رقم الجوال" />

                  <!-- icon  -->
                  <div class="inputIcon">
                    <img :src="require('@/assets/imgs/phone.svg')" alt="">
                  </div>

                  <!-- select phone  -->
                  <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"  class="w-full md:w-14rem" />

              </div>



              <!-- submit  -->
              <div class="mt-4">
                <button class="main_btn  pt-3 pb-3 fs-5 w-75 mx-auto flex_center"> تحقق </button>
              </div>

            </form>
      </Dialog>

       <!-- otp modal  -->      
      <Dialog v-model:visible="otp" modal :style="{ width: '50vw' }">
          <h5 class="fw-bold text-center"> كود التحقق </h5>
          <p class=" text-center"> الرجاء ادخال كود التحقق الذي تم ارساله الي رقم جوالك ليتم تفعيل الحساب الخاص بك </p>
          <div class="logo">
            <img :src="require('@/assets/imgs/forget2.svg')" alt="">
          </div>

          <form ref="loginForm" @submit.prevent="sendOtp" class="flex flex-wrap gap-3 p-fluid">

              <!-- otp  -->
              <div class="position-relative flex-auto">
                  <div
                      style="
                        display: flex;
                        flex-direction: row;
                        justify-content: space-evenly;
                      "
                    >
                      <v-otp-input
                        ref="otpInput"
                        v-model:value="code"
                        name="code"
                        input-classes="otp-input"
                        separator=""
                        :num-inputs="6"
                        :should-auto-focus="true"
                        input-type="letter-numeric"
                      />
                  </div>

                  
              </div>



              <!-- submit  -->
              <div class="mt-4">
                <button class="main_btn  pt-3 pb-3 fs-5 w-75 mx-auto flex_center"> تحقق </button>
              </div>


              <div class="flex_between w-75 mx-auto d-flex">
                    <div class="flex_center newAcc">
                      <p class="fs-6 mt-4 fw-6"> لم تستلم الكود ؟  <button type="button" class="mainColor fw-bold btn p-0"> اعد الارسال </button> </p>  
                    </div>
                    
                    <p v-if="timer > 0" class="text-center mt-3">الوقت المتبقي  <span class="mainColor">{{ timer }} ثانية</span> </p>

              </div>

            </form>
      </Dialog>

      <!-- contact problem  -->
      <Dialog class="contactModal" v-model:visible="visible2" modal :style="{ width: '50vw' }">
          <div class="logo">
            <img :src="require('@/assets/imgs/logo.png')" alt="">
          </div>

          <p class="fw-6 text-center mt-2 mb-2"> هذا النص هو مثال على نص يمكن ان يستبدل </p>

          <form class="flex flex-wrap gap-3 p-fluid">
            <div class="row">
              <div class="col-md-6 mb-2">
                <!-- phone  -->
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> اسم المستخدم </label>
                    <InputText type="text" class="defaultInput2" v-model="name" placeholder="الرجاء ادخال اسم المستخدم" />
                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/user.svg')" alt="">
                    </div>

                </div>
              </div>

              <div class="col-md-6 mb-2">
                <!-- phone  -->
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> رقم الجوال </label>
                    <InputNumber v-model="value1" class="defaultInput" inputId="integeronly" placeholder="الرجاء ادخال رقم الجوال" />

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

                    <label for="integeronly" class="label fw-bold block mb-2"> الرسالة </label>
                    <Textarea v-model="value" rows="5" cols="30" placeholder="الرجاء اكتب رسالتك هنا" class="defaultInput2" />

                </div>
              </div>

              <div class="mt-4">
                <button class="main_btn w-100 pt-3 pb-3 fs-5"> ارسال </button>
              </div>



            </div>
          </form>

      </Dialog>


      <!-- reset password  -->
      <Dialog class="contactModal" v-model:visible="resetPassword" modal :style="{ width: '50vw' }">
          
          <h5 class="fw-bold text-center mb-3"> اعادة تعيين كلمة المرور </h5>
          <div class="logo">
            <img :src="require('@/assets/imgs/logo.png')" alt="">
          </div>


          <form class="flex flex-wrap gap-3 p-fluid">
            <div class="row">
              <div class="col-md-12 mb-2">
                <!-- password  -->
                <div class="position-relative flex-auto mt-3">

                    <label for="integeronly" class="label fw-bold block mb-2"> كلمة المرور </label>
                    <Password v-model="oldPass"  toggleMask class="defaultInput" placeholder="الرجاء ادخال كلمة المرور" />

                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/lock.svg')" alt="">
                    </div>


                </div>

                <!-- confirm password  -->
                <div class="position-relative flex-auto mt-3">

                    <label for="integeronly" class="label fw-bold block mb-2"> تأكيد كلمة المرور </label>
                    <Password v-model="newPass" :feedback="false" toggleMask class="defaultInput" placeholder="الرجاء تأكيد كلمة المرور" />

                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/lock.svg')" alt="">
                    </div>


                </div>

                <div v-if="showValid">
                  <p v-if="passwordMatch" class="passwordConfirmed d-flex align-items-center text-success">
                    <i class="fa-regular fa-circle-check"></i>
                    <span>كلمة السر متطابقة</span>
                  </p>
                  <p v-else class="passwordWrong d-flex align-items-center text-danger">
                      <i class="fa-regular fa-circle-xmark"></i>
                      <span>كلمة السر غير متطابقة</span>
                  </p>
                </div>
              </div>



              <div class="mt-4">
                <button class="main_btn w-100 pt-3 pb-3 fs-5"> تعيين </button>
              </div>



            </div>
          </form>

      </Dialog>


    </div>
  </section>
</template>

<script>
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Password from 'primevue/password';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
import InputText from 'primevue/inputtext';



export default {
  data(){
    return{
      value1 : null,
      value : null ,
      selectedCity: null,
      visible : false ,
      visible2 : false ,
      otp : false,
      name : null ,
      timer: 180,
      intervalId: null,
      resetPassword : false,
      oldPass : null,
      newPass : null,

      cities: [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ]


    }
  },
  watch:{
        // oldPass(){
        //     // if( this.passwordMatch == true ){
        //     //     this.disabled = false;
        //     // }else{
        //     //     this.disabled = true;
        //     // }
        //     this.showValid = true ;
        // },
        newPass(){
            // if( this.passwordMatch == true ){
            //     this.disabled = false;
            // }else{
            //     this.disabled = true;
            // }
            this.showValid = true ;
        }

  },
  components:{
    InputNumber ,
    Dropdown,
    Password,
    Dialog,
    Textarea,
    InputText
  },
  computed:{
      passwordMatch() {
          return this.oldPass === this.newPass;  
      }
  },
  methods:{
    sendPhone(){
      this.visible = false;
      this.otp = true;
    },
    startTimer() {
      this.intervalId = setInterval(() => {
        if (this.timer > 0) {
          this.timer--;
        } else {
          clearInterval(this.intervalId);
          this.disabled = false
        }
      }, 1000);
    },
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  mounted() {
    this.startTimer();
  },
}
</script>

<style lang="scss">
  .otp-input{
    width: 60px;
    height: 60px;
    border-radius: 3px;
    border: 1px solid #ddd;
    background: #fafafa;
    margin: 0 15px;
    padding: 20px;
    font-size: 23px;
    &.is-complete{
      border: 2px solid #293255 !important;
      color: #293255 !important;
    }
    &:focus{
      border: 2px solid #293255 !important;
      color: #293255 !important;
    }
  }
  .p-component{
    font-family: inherit !important;
  }
  .logo{
    img{
      width: 150px;
      display: flex;
      justify-content: center;
      margin:auto;
      margin-bottom: 12px;
    }
  }
  .p-dialog-header{
    display: flex !important;
    justify-content: end !important;
    .p-dialog-header-icon{
      border: 1px solid #ccc !important;
    }
  }
  .contactUs{
    padding: 0 !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    border-bottom: 1px solid #293255  !important;
    border-radius: 0 !important;
  }
  .loginImage{
    transform: translateY(-28%);
  }
  .newAcc{
    p{
      color:#4F4F4F !important
    }
  }
  .forgetPass{
          color: #9B9B9B !important;
  }
  .breadcrumb{
    .inActive{
      color: #9B9B9B;
    }
    a,p{
      font-size: 14px;
      font-weight: 600;
    }
  }
  .loginParagraph{
    font-size: 16px;
  }
  .label{
    font-size: 16px;
  }
  .defaultInput input{
    background-color: #f8f8f8 ;
    padding-left:  40px ;
    padding-right:  40px ;
  }
  .defaultInput2{
    background-color: #f8f8f8 !important;
    padding-left:  40px !important;
    padding-right:  40px !important;

  }
  .inputIcon{
    position: absolute;
    top: 57%;
    right: 10px;
  }
  .p-dropdown {
    position: absolute;
    left: 0px;
    top: 32px !important;
    width: 17%;
    background-color: #f8f8f8 !important;
  }
  .p-dropdown .p-dropdown-trigger{
    width: 25px !important;
  }
  .p-input-icon-right > svg:last-of-type {
    left: 0.75rem !important;
    right: auto !important;
}


</style>