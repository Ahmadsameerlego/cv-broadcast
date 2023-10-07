<template>
    <!-- header -->
    <siteHeaderVue />
    <!-- content -->
    <div class="mt-3 mb-3 mx-5">
        <div class="breadcrumb d-flex mb-0">
            <router-link to="/" class="inActive"> الرئيسية </router-link>&nbsp; - &nbsp;
            <p class="active mainColor"> الملف الشخصي </p>
        </div>

        <h6 class="fw-bold red mb-4 mt-3"> الملف الشخصي </h6>

        <section class="loginSection" >
            <form action="" class="flex flex-wrap gap-3 p-fluid mt-4" ref="profile" @submit.prevent="updateProfile">
                <!-- البيانات الشخصية  -->
                <div class="base-card" >
                    <header class="p-3">
                        <h6 class="fw-bold"> {{ personalAccTitle }}</h6>
                    </header>
                    <div class="p-3">
                        <div class="row">
                            <!-- user name  -->
                            <div class="col-md-6 mb-2">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> اسم المستخدم </label>
                                    <InputText type="text" class="defaultInput2" v-model="name" name="name"
                                        placeholder="الرجاء ادخال اسم المستخدم" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/user.svg')" alt="">
                                    </div>

                                </div>
                            </div>
                            <!-- phone  -->
                            <div class="col-md-6 mb-2">
                                <div class="position-relative flex-auto defaultInput">
                                    <label for="integeronly" class="label fw-6 block mb-2"> رقم الجوال </label>
                                    <!-- <InputNumber v-model="phone" class="defaultInput" inputId="integeronly"
                                        placeholder="الرجاء ادخال رقم الجوال" /> -->
                                    <input type="number" v-model="phone" class="form-control"  placeholder="الرجاء ادخال رقم الجوال" @focus="changeNumber = true" >

                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/phone.svg')" alt="">
                                    </div>

                                </div>
                            </div>
                            <!-- email  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> البريد الألكتروني </label>
                                    <InputText type="email" class="defaultInput2" v-model="email" name="email"
                                        placeholder="الرجاء ادخال البريد الألكتروني" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/sms.svg')" alt="">
                                    </div>

                                </div>
                            </div>
                            <!-- gender -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> الجنس </label>
                                    <Dropdown v-model="gender" :options="genders" optionLabel="name"
                                        class="w-full md:w-14rem w-100 position-relative"
                                        placeholder="الرجاء تحديد الجنس" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/sms.svg')" alt="">
                                    </div>

                                </div>
                            </div>
                            <!-- birthday  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> تاريخ الميلاد </label>
                                    <Calendar v-model="birth_date" class="defaultInput"
                                        placeholder="الرجاء ادخال تاريخ الميلاد" />

                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/calendar-2.svg')" alt="">
                                    </div>

                                </div>
                            </div>
                            <!-- nationality -->
                            <div class="col-md-6 mb-2">
                                <!-- user name  -->
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> الجنسية </label>
                                    <InputText type="text" class="defaultInput2" v-model="nationality"
                                        placeholder="الرجاء ادخال الجنسية" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/card-pos.svg')" alt="">
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <!-- العنوان  -->
                <div class="base-card" >
                    <header class="p-3">
                        <h6 class="fw-bold"> {{ location }}</h6>
                    </header>
                    <div class="p-3">
                        <div class="row">
                            <!-- city  -->
                            <div class="col-md-6 mb-3">

                                <div class="position-relative    flex justify-content-center">

                                    <label for="integeronly" class="label fw-6 block mb-2"> المدينة </label>

                                    <Dropdown v-model="selectedCity" :options="cities" filter optionLabel="name"
                                        class="w-full md:w-14rem w-100 position-relative"
                                        placeholder="الرجاء تحديد المدينة">
                                        <template #value="slotProps">
                                            <div v-if="slotProps.value" class="d-flex align-items-center">
                                                <div>{{ slotProps.value.name }}</div>
                                            </div>
                                            <span v-else>
                                                لا توجد مدينة
                                            </span>
                                        </template>
                                        <template #option="slotProps">
                                            <div class="d-flex align-items-center">
                                                <div>{{ slotProps.option.name }}</div>
                                            </div>
                                        </template>
                                    </Dropdown>

                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/calendar-2.svg')" alt="">
                                    </div>
                                </div>
                            </div>

                            <!-- google map stay  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> مكان الإقامة </label>
                                    <InputText type="text" class="defaultInput2" v-model="map_desc" @focus="googleMap = true"
                                        placeholder="الرجاء ادخال مكان الإقامة" />
                                    <!-- icon  -->
                                    <div class="inputIcon2">
                                        <img :src="require('@/assets/imgs/location.svg')" alt="">
                                    </div>

                                </div>

                                <!-- google map modal  -->
                                <Dialog v-model:visible="googleMap" modal :style="{ width: '50vw' }">
                                    <GMapMap :center="locations" :zoom="11" map-type-id="terrain"
                                        style="width: 100vw; height: 900px">
                                        <GMapAutocomplete placeholder="This is a placeholder"
                                            @place_changed="onPlaceChanged">
                                        </GMapAutocomplete>
                                        <GMapMarker :position="locations" :clickable="true" :draggable="true"
                                            @mouseover="onMarkerDragEnd($event)" />
                                    </GMapMap>

                                </Dialog>

                            </div>
                        </div>
                    </div>
                </div>

                <!-- المؤهلات  -->
                <div class="base-card" >
                    <header class="p-3">
                        <h6 class="fw-bold">
                                المؤهلات
                        </h6>
                    </header>
                    <div class="p-3">
                        <div class="row">
                            <!-- cv  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> السيرة الذاتية </label>
                                    <Toast />

                                    <input type="file" class="form-control" name="cv"  style="background: #f8f8f8;">
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/pdf.svg')" alt="">
                                    </div>

                                </div>
                            </div>


                            <!-- qualifications  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> المؤهل </label>
                                    <Dropdown v-model="qualification" :options="qualifications" optionLabel="title"
                                        class="w-full md:w-14rem w-100 position-relative"
                                        placeholder="الرجاء تحديد المؤهل" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/book.svg')" alt="">
                                    </div>

                                </div>
                            </div>

                            <!-- employments  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> مجال العمل </label>
                                    <Dropdown v-model="employment" :options="emps" optionLabel="title"
                                        class="w-full md:w-14rem w-100 position-relative"
                                        placeholder="الرجاء تحديد مجال العمل" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                                    </div>

                                </div>
                            </div>

                            <!-- specializes  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> التخصص </label>
                                    <Dropdown v-model="specialization" :options="specs" optionLabel="title"
                                        class="w-full md:w-14rem w-100 position-relative"
                                        placeholder="الرجاء تحديد التخصص" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                                    </div>

                                </div>
                            </div>
                            <!-- certifications  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> الشهادات المهنية </label>
                                    <MultiSelect v-model="selectedCer" :options="certifications" optionLabel="title"
                                        class="w-full md:w-14rem w-100 position-relative"
                                        :maxSelectedLabels="5"
                                        placeholder="الرجاء تحديد الشهادات المهنية" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                                    </div>

                                </div>
                            </div>

                            <!-- skills  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> المهارات </label>
                                    <MultiSelect v-model="selectedSkill" :options="skills" optionLabel="title"
                                        placeholder="الرجاء تحديد المهارات" :maxSelectedLabels="5"
                                        class="w-full md:w-20rem defaultInput2 position-relative" />

                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                                    </div>

                                </div>
                            </div>

                            <!-- job name  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2">
                                        المسمى الوظيفي
                                        <span class="ifExist mx-2">
                                            ان وجد
                                            <i class="fa-solid fa-star-of-life"></i>
                                        </span>
                                    </label>
                                    <InputText type="text" class="defaultInput2" v-model="job_title"
                                        placeholder="الرجاء ادخال المسمى الوظيفي" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                                    </div>

                                </div>
                            </div>

                            <!-- yearsExperience  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> سنوات الخبرة </label>
                                    <Dropdown v-model="experience" :options="experiences" optionLabel="title"
                                        class="w-full md:w-14rem w-100 position-relative"
                                        placeholder="الرجاء تحديد سنوات الخبرة" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                                    </div>

                                </div>
                            </div>

                            <!-- current company  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2">
                                        الشركة الحالية
                                        <span class="ifExist mx-2">
                                            ان وجد
                                            <i class="fa-solid fa-star-of-life"></i>
                                        </span>
                                    </label>
                                    <InputText type="text" class="defaultInput2" v-model="company_name"
                                        placeholder="الرجاء ادخال الشركة الحالية" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <!-- الفيديو  -->
                <div class="base-card" >
                    <header class="p-3">
                        <h6 class="fw-bold"> {{ video }}</h6>
                    </header>
                    <div class="p-3">
                        <div class="row justify-content-center">
                            <div class="col-md-4">

                                <div class="position-relative flex-auto">

                                    <label for="video" class="label fw-bold block mb-2">
                                        الفيديو
                                        <span class="ifExist mx-2">
                                            ان وجد
                                            <i class="fa-solid fa-star-of-life"></i>
                                        </span>
                                    </label>

                                    <input ref="video" type="file" accept="video/*" class="defaultInput2 " id="video"
                                        hidden />

                                    <div v-if="showVideo">
                                        <video ref="video" controls @loadedmetadata="logDuration">
                                            <source ref="videoSource" :src="videoSource" />
                                        </video>
                                    </div>
                                    <label v-else class="uplaodVideo" for="video" @click="handleUpload">
                                        <div class="position-relative">
                                            <i class="fa-brands fa-youtube youtubeIcon"></i>
                                            <div class="upIcon">
                                                <i class="fa-solid fa-circle-arrow-up "></i>
                                            </div>
                                        </div>
                                        <p class="p-0 m-0 mainColor">
                                            رفع فيديو تعريفي
                                        </p>
                                        <p class="p-0 m-0 text-muted validateVideo">اقصي مده للفيديو ١٥ دقيقه</p>

                                        <div>

                                        </div>
                                    </label>
                                    <div class="d-flex justify-content-center align-items-center my-3">
                                        <button type="button" class="main_btn m-auto upBtn" @click="handleUpload">Upalod
                                            preview</button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center" >
                    <router-link to="/" class="main_btn pt-3 pb-3 w-25 text-center"> اعادة تعيين كلمة المرور
                    </router-link>
                    <button class="sec_btn pt-3 pb-3 w-25 mx-3 fw-bold" :disabled="disabled"> 
                        <span v-if="!disabled">حفظ التغييرات </span>
                        <div class="spinner-border mx-2" role="status" v-if="disabled">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </button>

                </div>

            </form>
        </section>

    </div>
    <!-- forget pass modal  -->
    <Dialog v-model:visible="done" class="done" modal :style="{ width: '50vw' }">
        <div class="logo">
            <img :src="require('@/assets/imgs/logo.png')" alt="">
        </div>
        <p class=" text-center"> تم حفظ التغييرات </p>


    </Dialog>
    <!-- forget pass modal  -->
    <Dialog v-model:visible="changeNumber" modal :style="{ width: '50vw' }">
        <h6 class="fw-bold text-center"> تغيير رقم الجوال </h6>
        <p class=" text-center"> الرجاءادخال كلمة المرور الخاصه بك لتتمكن من تغيير رقم الجوال </p>



        <form ref="loginForm" @submit.prevent="sendMail" class="flex flex-wrap gap-3 p-fluid">

            <!-- email  -->

            <!-- password  -->
            <div class="position-relative flex-auto mt-3">
                <label for="integeronly" class="label fw-6 block mb-2"> كلمة المرور </label>
                <Password v-model="value" :feedback="false" toggleMask class="defaultInput"
                    placeholder="الرجاء ادخال كلمة المرور" />
                <!-- icon  -->
                <div class="inputIcon">
                    <img :src="require('@/assets/imgs/lock.svg')" alt="">
                </div>
            </div>
            <!-- submit  -->
            <div class="mt-4">
                <button class="main_btn  pt-3 pb-3 fs-5 w-75 mx-auto flex_center"> تحقق </button>
            </div>

        </form>
    </Dialog>
    <!-- otp modal  -->
    <Dialog v-model:visible="otp" modal :style="{ width: '50vw' }">
        <h6 class="fw-bold text-center"> كود التحقق </h6>
        <p class=" text-center"> الرجاء ادخال كود التحقق الذي تم ارساله الي رقم جوالك ليتم تفعيل الحساب الخاص بك </p>
        <div class="logo">
            <img :src="require('@/assets/imgs/forget2.svg')" alt="">
        </div>

        <form ref="loginForm" @submit.prevent="sendOtp" class="flex flex-wrap gap-3 p-fluid">

            <!-- otp  -->
            <div class="position-relative flex-auto">
                <div style="
                        display: flex;
                        flex-direction: row;
                        justify-content: space-evenly;
                      ">
                    <v-otp-input ref="otpInput" v-model:value="code" name="code" input-classes="otp-input" separator=""
                        :num-inputs="6" :should-auto-focus="true" input-type="letter-numeric" />
                </div>


            </div>



            <!-- submit  -->
            <div class="mt-4">
                <button class="main_btn  pt-3 pb-3 fs-5 w-75 mx-auto flex_center"> تحقق </button>
            </div>


            <div class="flex_between w-75 mx-auto d-flex">
                <div class="flex_center newAcc">
                    <p class="fs-6 mt-4 fw-6"> لم تستلم الكود ؟ <button type="button" class="mainColor fw-bold btn p-0"> اعد
                            الارسال </button> </p>
                </div>

                <p v-if="timer > 0" class="text-center mt-3">الوقت المتبقي <span class="mainColor">{{ timer }} ثانية</span>
                </p>

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

                        <label for="integeronly" class="label fw-6 block mb-2"> اسم المستخدم </label>
                        <InputText type="text" class="defaultInput2" v-model="name"
                            placeholder="الرجاء ادخال اسم المستخدم" />
                        <!-- icon  -->
                        <div class="inputIcon">
                            <img :src="require('@/assets/imgs/user.svg')" alt="">
                        </div>

                    </div>
                </div>

                <div class="col-md-6 mb-2">
                    <!-- phone  -->
                    <div class="position-relative flex-auto">

                        <label for="integeronly" class="label fw-6 block mb-2"> رقم الجوال </label>
                        <InputNumber v-model="value1" class="defaultInput" inputId="integeronly"
                            placeholder="الرجاء ادخال رقم الجوال" />

                        <!-- icon  -->
                        <div class="inputIcon">
                            <img :src="require('@/assets/imgs/phone.svg')" alt="">
                        </div>

                        <!-- select phone  -->
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-14rem" />

                    </div>
                </div>

                <div class="col-md-12">
                    <!-- phone  -->
                    <div class="position-relative flex-auto">

                        <label for="integeronly" class="label fw-6 block mb-2"> الرسالة </label>
                        <Textarea v-model="value" rows="5" cols="30" placeholder="الرجاء اكتب رسالتك هنا"
                            class="defaultInput2" />

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

        <h6 class="fw-bold text-center mb-3"> اعادة تعيين كلمة المرور </h6>
        <div class="logo">
            <img :src="require('@/assets/imgs/logo.png')" alt="">
        </div>


        <form class="flex flex-wrap gap-3 p-fluid">
            <div class="row">
                <div class="col-md-12 mb-2">
                    <!-- password  -->
                    <div class="position-relative flex-auto mt-3">

                        <label for="integeronly" class="label fw-6 block mb-2"> كلمة المرور </label>
                        <Password v-model="oldPass" toggleMask class="defaultInput"
                            placeholder="الرجاء ادخال كلمة المرور" />

                        <!-- icon  -->
                        <div class="inputIcon">
                            <img :src="require('@/assets/imgs/lock.svg')" alt="">
                        </div>


                    </div>

                    <!-- confirm password  -->
                    <div class="position-relative flex-auto mt-3">

                        <label for="integeronly" class="label fw-6 block mb-2"> تأكيد كلمة المرور </label>
                        <Password v-model="newPass" :feedback="false" toggleMask class="defaultInput"
                            placeholder="الرجاء تأكيد كلمة المرور" />

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

    <!-- footer -->
    <siteFooterVue />
</template>

<script>

import siteHeaderVue from '@/components/site/layout/siteHeader.vue';
import Calendar from 'primevue/calendar';
import siteFooterVue from '@/components/site/layout/siteFooter.vue';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Dialog from 'primevue/dialog';
//import FileUpload from 'primevue/fileupload';
import MultiSelect from 'primevue/multiselect';
import Password from 'primevue/password';
// import Galleria from 'primevue/Galleria'
import AOS from "aos";

import {mapGetters, mapActions} from 'vuex';

import axios from 'axios';
import Toast from 'primevue/toast';

// import router from '@/router';
export default {
    components: {
        // Toast,
        siteHeaderVue,
        siteFooterVue,
        Dropdown,
        InputText,
        InputNumber,
        Calendar,
        //FileUpload,
        Dialog,
        MultiSelect,
        Password,
        Toast
        // Galleria
    },
   
    data() {
        return {
            images: null,
            responsiveOptions: [
                {
                    breakpoint: '1500px',
                    numVisible: 5
                },
                {
                    breakpoint: '1024px',
                    numVisible: 3
                },
                {
                    breakpoint: '768px',
                    numVisible: 2
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ],
            displayBasic: false,
            personalAccTitle: 'البيانات الشخصيه ',
            location: 'العنوان',
            video: 'الفيديو',
            showVideo: false,
            videoSource: '',
            locations:
            {
                lat: 0,
                lng: 0
            },
            currentLocation: {},
            googleMap: false,
            changeNumber: false,
            resetPassword: false,
            visible: false,
            visible2: false,
            otp: false,
            timer: 180,
            done: false,

            //new data 
            name : '',
            phone : '',
            email : '',
            genders : [
                {
                id : 1,
                name : 'male'
                },
                {
                id : 2,
                name : 'female'
                }
            ],
            gender : '',
            birth_date : '',
            nationality : '',
            selectedCity : null,
            map_desc : '',
            cv : null,
            qualification : null,
            employment : null,
            specialization : null,
            selectedCer : null,
            selectedSkill : null,
            job_title : '',
            experience : null,
            company_name : '',
            disabled: false
        }
    },
    computed:{
        ...mapGetters('common',['nationalities', 'cities', 'qualifications', 'emps', 'specs', 'certifications', 'skills', 'experiences']),
        passwordMatch() {
            return this.oldPass === this.newPass;
        }
    },
    methods: {
        ...mapActions('common',['getNations', 'getCities','getQualifications', 'getEmployment', 'getSpecilizations', 'getCertifications', 'getSkills', 'getExperiences']),

        logDuration() {
                    console.log(this.$refs.video.duration)
                    if (this.$refs.video.duration <= 1040) {
                        console.log('yes')
                        
                       return
                    } else if(this.$refs.video.duration > 540){
                        this.$refs.video.value = ''
                        document.querySelector('.validateVideo').style.color = 'red'
                        console.log('no')
                    }
                },
        handleUpload() {
            if (document.querySelector('#video').value != '') {
                this.showVideo = true
                let postFile = this.$refs.video.files[0]
                console.log(document.querySelector('.upBtn'))
                this.$nextTick(() => {
                    this.videoSource = window.URL.createObjectURL(postFile)
                    this.$refs.videoSource.parentElement.load()

                })
               
            } else {
                return
            }

        },
        onUpload(e) {
            console.log(this.cv)
            console.log(e)
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        },
        sendMail() {
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
        beforeUnmount() {
            clearInterval(this.intervalId);
        },
        
        // get current location  
        geolocation() {
            navigator.geolocation.getCurrentPosition((position) => {
                this.locations = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
            });
        },

        // get new value after dragged 
        onMarkerDragEnd(event) {
            // get new lat lang value 
            const newLat = event.latLng.lat()
            const newLng = event.latLng.lng()
            this.locations = {
                lat: newLat,
                lng: newLng
            }

            // get format_address 
            const latLng = event.latLng
            const geocoder = new window.google.maps.Geocoder()
            geocoder.geocode({ location: latLng }, (results, status) => {
                if (status === 'OK') {
                    this.map_desc = results[0].formatted_address
                } else {
                    console.error('Geocode was not successful for the following reason: ' + status)
                }
            })

        },

        onPlaceChanged(place) {
            if (place.geometry) {
                this.locations = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                };
                this.map_desc = place.formatted_address;
            }
        },
        routeHome() {
            setTimeout(function () {
                this.done = false
                // this.$router.push({ path: '/' })   
                document.querySelector('.p-dialog-header-close').click()
            }, 2000)
        },



        // get profile 
        async getProfile(){
            const fd = new FormData();
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            await axios.post('user/profile',fd , {headers})
            .then((res)=>{
                const data = res.data.data ;
                if( res.data.key === 'success' ){
                    this.name = data.name ;
                    this.email = data.email ;
                    this.phone = data.phone ;
                    this.birth_date = data.birth_date ;
                    this.company_name = data.company_name ;
                    this.selectedCer = data.certifications ;
                    this.map_desc = data.map_desc ;
                    this.selectedSkill = data.skills ;
                    this.qualification = data.qualification ;
                    this.specialization = data.specialization ;
                    this.selectedCity = data.city ;
                    this.cv = data.cv ;
                    // document.querySelector('#cv .p-button-label').innerHTML = data.cv ;
                    this.job_title = data.job_title ;
                    this.employment = data.employment ;
                    this.experience = data.experience ;
                    this.locations.lat = data.lat ;
                    this.locations.lng = data.lat ;
                    this.videoSource = data.video ;
                    this.nationality = data.nationality ;
                    if( data.video != '' ){
                        this.showVideo = true;
                    }     
                    if( data.gender == 'ذكر' ){
                        this.gender = this.genders[0];
                    }else if( data.gender == 'انثي' ){
                        this.gender = this.genders[1];
                    }
                }
            })
        },

        // update profile 
        async updateProfile(){
            this.disabled = true ;
            const fd = new FormData( this.$refs.profile );
            
            // common share function 
            function appendedIfSelected( formData, key , selectedValue ){
                if( selectedValue ){
                    formData.append(key , selectedValue.id)
                }
            }
            // append id 
            appendedIfSelected(fd, 'employment_id', this.employment);
            appendedIfSelected(fd, 'specialization_id', this.specialization);
            appendedIfSelected(fd, 'qualification_id', this.qualification);
            appendedIfSelected(fd, 'experience_id', this.experience);
            appendedIfSelected(fd, 'city_id', this.selectedCity);

            // append locations 
            if( this.map_desc ){
                fd.append('map_desc', this.map_desc)
            }
            if( this.locations ){
                fd.append('lat', this.locations.lat)
                fd.append('lng', this.locations.lng)
            }
            // append skills 
            for (let i = 0; i < this.selectedSkill.length; i++) {
            appendedIfSelected(fd, `skills[${i}]`, this.selectedSkill[i]);
            }
            // append certifications 
            for (let i = 0; i < this.selectedCer.length; i++) {
            appendedIfSelected(fd, `certifications[${i}]`, this.selectedCer[i]);
            }

            // append gender
            if( this.gender ){
                fd.append('gender', this.gender.name)
            }
            // append cv 
            // if( this.cv ){
            //     fd.append('cv', this.cv)
            // }
            // append birth date 
            if( this.birth_date ){
                const date = new Date(this.birth_date);
                // Extract day, month, and year from the Date object
                const day = date.getDate();
                const month = date.getMonth() + 1; // Months are zero-based, so add 1
                const year = date.getFullYear();
                // Format the date components as a string in the desired format
                const formattedDate = `${day}-${month}-${year}`;

                fd.append('birth_date', formattedDate)
            }
            // append nation 
            if( this.nationality ){
            fd.append('nationality', this.nationality)
            }
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            await axios.post('user/profile/update', fd , {headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.disabled = false ;
                    this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    setTimeout(() => {
                        this.getProfile()
                    }, 3000);
                }else{
                    this.disabled = false ;
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                }
            } )

        }
    },
    mounted() {
        this.geolocation();
        this.startTimer();

        this.getNations();
        this.getCities();
        this.getQualifications();
        this.getEmployment();
        this.getSpecilizations();
        this.getCertifications();
        this.getSkills();
        this.getExperiences();

        this.getProfile();


        AOS.init();
        // let filePlaceholder = document.querySelector('.p-button-label');
        // filePlaceholder.innerHTML = 'الرجاء اختيار السيرة الذاتية'
    }
}
</script>
<style>
.base-card {
    background: #FBFBFB;
    border-radius: 10px;
    margin-bottom: 30px;
}

.base-card header {
    border-bottom: 7px solid white;

}

.uplaodVideo {
    border: 1px dashed #293255;
    border-radius: 5px;
    background: #f4f6fd;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #293255;
    flex-direction: column;
    text-align: center;
    gap: 10px;

}

.youtubeIcon {
    font-size: 80px;
    color: 293255;

}

.upIcon {
    position: absolute;
    right: 0;
    background: white;
    color: #293255;
    border-radius: 50%;
    padding: 2px;
    font-size: 20px;
    bottom: 0;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
}

video {
    width: 100%;
    height: 300px;
}
</style>
