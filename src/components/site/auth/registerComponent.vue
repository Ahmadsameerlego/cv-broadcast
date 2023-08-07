<template>
  <section id="register" class="mt-4">
    <div class="container">
      <!-- start breadcrumb  -->
      <div class="breadcrumb d-flex">
        <router-link to="/" class="inActive"> الرئيسية </router-link>&nbsp; - &nbsp;
        <p class="active mainColor"> حساب جديد </p>

        <section class="loginSection" style="width:93%;margin:auto" >
          <h3 class="fw-bold mb-3"> حساب جديد </h3>
          <p class="registerParagraph fw-bold d-flex align-items-center"> 
            <span class="step flex_center">1</span>
            برجاء ادخال البيانات التاليه لتتمكن من انشاء حساب جديد خاص بك لتستطيع البحث عن الوظائف الجديدة التي تناسبك في اسرع وقت  
          </p>



          <form class="flex flex-wrap gap-3 p-fluid mt-4" @submit.prevent="register">

            <div class="row">

              <div class="col-md-6 mb-2">
                <!-- user name  -->
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

              <div class="col-md-6 mb-2">
                <!-- password  -->
                <div class="position-relative flex-auto mt-3">

                    <label for="integeronly" class="label fw-bold block mb-2"> كلمة المرور </label>
                    <Password v-model="oldPass"  toggleMask class="defaultInput" placeholder="الرجاء ادخال كلمة المرور" />

                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/lock.svg')" alt="">
                    </div>


                </div>
              </div>  

              <div class="col-md-6 mb-2">
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
            </div>

            <div class="mt-3">
                <button class="main_btn w-50 mx-auto flex_center pt-3 pb-3 fs-5"> استكمال البيانات </button>
            </div>


            <!-- new account  -->
              <div class="flex_center newAcc">
                <p class="fs-6 mt-4 fw-6"> هل لديك حساب ؟  <router-link to="/login" class="mainColor fw-bold"> تسجيل الدخول </router-link> </p>  
              </div>

          </form>
        </section>

      </div>
    </div>
  </section>
</template>

<script>
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Password from 'primevue/password';


export default {
  data(){
    return{
      name : null,
      value1 : null,
      selectedCity : null,
      cities: [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ],
      oldPass : null,
      newPass : null,

    }
  },
  watch:{
     newPass(){
            // if( this.passwordMatch == true ){
            //     this.disabled = false;
            // }else{
            //     this.disabled = true;
            // }
            this.showValid = true ;
        }
  },
  computed:{
      passwordMatch() {
          return this.oldPass === this.newPass;  
      }
  },
  methods:{
    register(){
      this.$router.push('/compeleteRegister')
    }
  },
  components:{
    InputText,
    InputNumber,
    Dropdown,
    Password
  }
}
</script>

<style lang="scss">

  .registerParagraph{
    position: relative;
    font-size: 17px !important;
    .step{
      width: 35px;
      height: 35px;
      margin-left: 9px;
      background-color: #feede7;
      border-radius: 50%;
      border: 1px solid #e57d61;
      color: #e57d61;
      font-size: 21px !important;
    }
  }
</style>