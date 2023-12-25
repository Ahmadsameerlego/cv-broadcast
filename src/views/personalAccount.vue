<template>
    <!-- header -->
    <siteHeaderVue />
    <!-- content -->
    <div class="mt-3 mb-3 mx-5">
        <div class="breadcrumb d-flex mb-0">
            <router-link to="/" class="inActive"> {{ $t('nav.main') }} </router-link>&nbsp; - &nbsp;
            <p class="active mainColor"> {{ $t('auth.profile') }} </p>
        </div>

        <h6 class="fw-bold red mb-4 mt-3"> {{ $t('auth.profile') }} </h6>

        <section class="loginSection" >
            <form action="" class="flex flex-wrap gap-3 p-fluid mt-4" ref="profile" @submit.prevent="updateProfile">
                <!-- البيانات الشخصية  -->
                <div class="base-card" >
                    <header class="p-3">
                        <h6 class="fw-bold"> {{ $t('auth.info') }}</h6>
                    </header>
                    <div class="p-3">
                        <div class="row">
                            <!-- user name  -->
                            <div class="col-md-6 mb-2">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> {{ $t('auth.user') }} </label>
                                    <InputText type="text" class="defaultInput2" v-model="name" name="name"
                                        :placeholder="$t('auth.userPlc')" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/user.svg')" alt="">
                                    </div>

                                </div>
                            </div>
                            <!-- phone  -->
                            <div class="col-md-6 mb-2">
                                <div class="position-relative flex-auto defaultInput">
                                    <label for="integeronly" class="label fw-6 block mb-2"> {{ $t('auth.phone') }} </label>
                                    <!-- <InputNumber v-model="phone" class="defaultInput" inputId="integeronly"
                                        placeholder="الرجاء ادخال رقم الجوال" /> -->
                                    <input type="number" v-model="phone" class="form-control"  :placeholder="$t('auth.phonePlc')" @focus="changeNumber = true" >

                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/phone.svg')" alt="">
                                    </div>

                                    <span class="editPhone">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </span>
                                </div>
                            </div>
                            <!-- email  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> {{ $t('auth.email') }} </label>
                                    <InputText type="email" class="defaultInput2" v-model="email"
                                        :placeholder="$t('auth.emailPlc')" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/sms.svg')" alt="">
                                    </div>

                                </div>
                            </div>
                            <!-- gender -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> {{ $t('auth.gender') }} </label>
                                    <Dropdown v-model="gender" :options="genders" optionLabel="title"
                                        class="w-full md:w-14rem w-100 position-relative"
                                        :placeholder="$t('auth.genderPlc')" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/sms.svg')" alt="">
                                    </div>

                                </div>
                            </div>
                            <!-- birthday  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> {{ $t('auth.birth') }} </label>
                                    <Calendar v-model="birth_date" class="defaultInput"
                                        :placeholder="$t('auth.birthPlc')" />

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

                                    <label for="integeronly" class="label fw-6 block mb-2"> {{ $t('auth.nat') }} </label>
                                    <InputText type="text" class="defaultInput2" v-model="nationality"
                                        :placeholder="$t('auth.natPlc')" />
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
                        <h6 class="fw-bold"> {{ $t('auth.location') }}</h6>
                    </header>
                    <div class="p-3">
                        <div class="row">
                            <!-- city  -->
                            <div class="col-md-6 mb-3">

                                <div class="position-relative    flex justify-content-center">

                                    <label for="integeronly" class="label fw-6 block mb-2"> {{ $t('auth.city') }} </label>

                                    <Dropdown v-model="selectedCity" :options="cities" filter optionLabel="name"
                                        class="w-full md:w-14rem w-100 position-relative"
                                        :placeholder="$t('auth.cityPlc')">
                                        <template #value="slotProps">
                                            <div v-if="slotProps.value" class="d-flex align-items-center">
                                                <div>{{ slotProps.value.name }}</div>
                                            </div>
                                            <span v-else>
                                                {{ $t('auth.noCity') }}
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

                                    <label for="integeronly" class="label fw-6 block mb-2"> {{ $t('auth.place') }} </label>
                                    <InputText type="text" class="defaultInput2" v-model="map_desc" @focus="googleMap = true"
                                        :placeholder="$t('auth.placePlc')" />
                                    <!-- icon  -->
                                    <div class="inputIcon2">
                                        <img :src="require('@/assets/imgs/location.svg')" alt="">
                                    </div>

                                </div>

                                <!-- google map modal  -->
                                <Dialog v-model:visible="googleMap" modal :style="{ width: '50vw' }">
                                    <GMapMap :center="locations" :zoom="11" map-type-id="terrain"
                                        style="width: 100vw; height: 900px">
                                        <GMapAutocomplete placeholder="ابحث عن موقعك"
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
                                {{ $t('auth.qualTitle') }}
                        </h6>
                    </header>
                    <div class="p-3">
                        <div class="row">
                            <!-- cv  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> {{ $t('auth.cv') }} </label>
                                    <Toast />
                                    <input type="text" :placeholder="cv_link" class="form-control cv_placeholder px-4" style="background: #f8f8f8;" readonly>
                                    <input type="file" class="form-control" id="cv" name="cv"  style="background: #f8f8f8;" accept="application/pdf,application/vnd.ms-excel"  @change="uploadCv">
                                    
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/pdf.svg')" alt="">
                                    </div>
                                </div>

                                <a :href="cv_link" target="_blank" v-if="cv_link!=''"> 
                                    اطلع على الملف
                                </a>
                            </div>


                            <!-- qualifications  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> {{ $t('auth.qual') }} </label>
                                    <Dropdown v-model="qualification" :options="qualifications" filter optionLabel="title"
                                        class="w-full md:w-14rem w-100 position-relative"
                                        :placeholder="$t('auth.qualPlc')" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/book.svg')" alt="">
                                    </div>

                                </div>
                            </div>

                            <!-- employments  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> {{ $t('auth.field') }} </label>
                                    <Dropdown v-model="employment" :options="emps" filter optionLabel="title"
                                        class="w-full md:w-14rem w-100 position-relative"
                                        :placeholder="$t('auth.fieldPlc')" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                                    </div>

                                </div>
                            </div>

                            <!-- specializes  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> {{ $t('auth.special') }} </label>
                                    <Dropdown v-model="specialization" :options="specs" filter optionLabel="title"
                                        class="w-full md:w-14rem w-100 position-relative"
                                        :placeholder="$t('auth.specialPlc')" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                                    </div>

                                </div>
                            </div>

                            <!-- certifications  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> {{ $t('auth.cer') }} </label>
                                    <MultiSelect v-model="selectedCer" filter :options="certifications" optionLabel="title"
                                        class="w-full md:w-14rem w-100 position-relative"
                                        :maxSelectedLabels="5"
                                        :placeholder="$t('auth.cerPlc')" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                                    </div>

                                </div>
                                <div class="mt-2 mb-2 fs-13">
                                    اذ لم تجد الشهادات  <span class="text-danger" @click="addCer=true" style="cursor:pointer">اضغط هنا</span>
                                </div>
                                <!-- add cer  Dialog -->
                                <Dialog v-model:visible="addCer" modal :style="{ width: '50vw' }">
                                

                                    <form ref="addCert" @submit.prevent="addNewCertification" class="flex flex-wrap gap-3 p-fluid">

                                    <h5 class="fw-bold text-center"> اضافة شهادة </h5>  


                                    <div class="form-group mb-3">
                                        <label for="">  اسم الشهادة بالعربية </label>
                                        <input type="text" class="form-control" name="title[ar]" v-model="cer_name_ar" placeholder=" الرجاء ادخال اسم الشهادة بالعربية">
                                    </div>

                                    <div class="form-group">
                                        <label for="">  اسم الشهادة بالانجليزية </label>
                                        <input type="text" class="form-control" name="title[en]" v-model="cer_name_en" placeholder="الرجاء ادخال اسم الشهادة بالانجليزية">
                                    </div>

                                    <!-- submit  -->
                                    <div class="mt-4">
                                        <button class="main_btn  fs-5 w-75 mx-auto flex_center" :disabled="cer_disabled"> 
                                            <span  v-if="!cer_disabled"> تأكيد </span>
                                            <div class="spinner-border" role="status" v-if="cer_disabled">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </button>
                                    </div>


                                    

                                    </form>
                                </Dialog>
                            </div>

                            <!-- skills  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> {{ $t('auth.skills') }} </label>
                                    <MultiSelect v-model="selectedSkill" filter :options="skills" optionLabel="title"
                                        :placeholder="$t('auth.skillsPlc')" :maxSelectedLabels="5"
                                        class="w-full md:w-20rem defaultInput2 position-relative" />

                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                                    </div>

                                </div>

                                <div class="mt-2 mb-2 fs-13">
                                    اذ لم تجد المهارات  <span class="text-danger" @click="addSkill=true" style="cursor:pointer">اضغط هنا</span>
                                </div>
                                <!-- add cer  Dialog -->
                                <Dialog v-model:visible="addSkill" modal :style="{ width: '50vw' }">
                                    

                                    <form ref="addSkills" @submit.prevent="addNewSkill" class="flex flex-wrap gap-3 p-fluid">

                                        <h5 class="fw-bold text-center"> اضافة مهادة </h5>  


                                        <div class="form-group mb-3">
                                        <label for="">  اسم المهارة بالعربية </label>
                                        <input type="text" class="form-control" name="title[ar]" v-model="skill_name_ar" placeholder=" الرجاء ادخال اسم المهارة بالعربية">
                                        </div>

                                        <div class="form-group">
                                        <label for="">  اسم المهارة بالانجليزية </label>
                                        <input type="text" class="form-control" name="title[en]" v-model="skill_name_en" placeholder="الرجاء ادخال اسم المهارة بالانجليزية">
                                        </div>

                                        <!-- submit  -->
                                        <div class="mt-4">
                                            <button class="main_btn  fs-5 w-75 mx-auto flex_center" :disabled="skill_disabled"> 
                                                <span  v-if="!skill_disabled"> تأكيد </span>
                                                <div class="spinner-border" role="status" v-if="skill_disabled">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                            </button>
                                        </div>


                                        

                                    </form>
                                </Dialog>

                            </div>

                            <!-- job name  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2">
                                        {{ $t('auth.jobName') }}
                                        <span class="ifExist mx-2">
                                            {{ $t('auth.ifExist') }}
                                            <i class="fa-solid fa-star-of-life"></i>
                                        </span>
                                    </label>
                                    <InputText type="text" class="defaultInput2" v-model="job_title"
                                        :placeholder="$t('auth.namePlc')" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                                    </div>

                                </div>
                            </div>

                            <!-- yearsExperience  -->
                            <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2"> {{ $t('auth.yearsExper') }} </label>
                                    <Dropdown v-model="experience" :options="experiences" filter optionLabel="title"
                                        class="w-full md:w-14rem w-100 position-relative"
                                        :placeholder="$t('auth.yearPlc')" />
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
                                        {{ $t('auth.current') }}
                                        <span class="ifExist mx-2">
                                            {{ $t('auth.ifExist') }} 
                                            <i class="fa-solid fa-star-of-life"></i>
                                        </span>
                                    </label>
                                    <InputText type="text" class="defaultInput2" v-model="company_name"
                                        :placeholder="$t('auth.currentPlc')" />
                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                                    </div>

                                </div>
                            </div>

                             <!-- personal image  -->
                             <div class="col-md-6 mb-3">
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-6 block mb-2">
                                        الصورة الشخصية
                                        
                                    </label>

                                    <input type="file" class="form-control"  name="image" style="background: #f8f8f8;">
                                    
                                    <!-- icon  -->
                                    <div class="inputIcon" style="left:15px;right:auto;color:#ccc">
                                        <i class="fa-solid fa-upload"></i>
                                    </div>

                                </div>

                                <div v-if="image!=''" class="profile_image mt-2" style="width: 100%;height: 100px;">
                                    <img :src="image" alt="" style="width:100%;height:100%;object-fit:contain">
                                </div>
                            </div>





                        </div>
                    </div>
                </div>
                <!-- الفيديو  -->
                <div class="base-card" >
                    <header class="p-3">
                        <h6 class="fw-bold"> {{ $t('auth.video') }} </h6>
                    </header>
                    <div class="p-3">
                        <div class="row justify-content-center">
                            <div class="col-md-4">

                                <div class="position-relative flex-auto">

                                    <label for="video" class="label fw-bold block mb-2">
                                        {{ $t('auth.video') }}
                                        <span class="ifExist mx-2">
                                            {{ $t('auth.ifExist') }}
                                            <i class="fa-solid fa-star-of-life"></i>
                                        </span>
                                    </label>

                                    <!-- <input ref="video" type="file" accept="video/*" class="defaultInput2 " id="video"
                                        hidden />

                                    <div v-if="!showVideo">
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
                                    </label> -->


                                    <!-- upload video  -->
                                    <section id="video" class="position-relative flex_column mb-3" v-if="lockInput">

                                        <div class="video_img mb-2">
                                            <img :src="require('@/assets/imgs/video.png')" alt="">
                                        </div>
                                        <span class="mb-2">{{ $t('auth.videoE') }}</span>
                                        <span class="fs-13 gray"> اقصى مدة للفيديو15 دقيقة </span>

                                        <!-- file video  -->
                                        <input type="file" class="uploadVideo" ref="videoInput" @change="handleVideoChange" accept="video/*">


                                    </section>


                                    <!-- video preview  -->
                                    <div v-if="videoFile" class="video-preview mb-3">
                                        <video :src="videoSource" name="video" controls></video>
                                    </div>

                                    <!-- reload button  -->
                                    <div class="d-flex justify-content-center align-items-center" v-if="reOpen">
                                        <button class="main_btn pt-2 pb-2 w-50" @click="reUpload">
                                            اعادة رفع
                                        </button>
                                    </div>

                                    
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="profile_handle d-flex justify-content-center" >
                    <router-link to="/updatePassword" class="main_btn pt-3 pb-3 w-25 text-center"> {{ $t('auth.resetPass') }}
                    </router-link>
                    <button class="sec_btn pt-3 pb-3 w-25 mx-3 fw-bold" :disabled="disabled"> 
                        <span v-if="!disabled"> {{ $t('common.save') }}  </span>
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


    <!-- change phone step 1 => password  -->
    <Dialog v-model:visible="changeNumber" modal :style="{ width: '50vw' }">
        <h6 class="fw-bold text-center"> {{ $t('auth.changePhone') }} </h6>
        <p class=" text-center"> {{ $t('auth.changePlc') }} </p>

        
        <form ref="loginForm" @submit.prevent="checkPassword" class="flex flex-wrap gap-3 p-fluid">

            <!-- email  -->

            <!-- password  -->
            <div class="position-relative flex-auto mt-3">
                <label for="integeronly" class="label fw-6 block mb-2"> {{ $t('auth.pass') }} </label>
                <Password v-model="password" :feedback="false" toggleMask class="defaultInput"
                    :placeholder="$t('auth.passPlc')" />
                <!-- icon  -->
                <div class="inputIcon">
                    <img :src="require('@/assets/imgs/lock.svg')" alt="">
                </div>
            </div>
            <!-- submit  -->
            <div class="mt-4">
                <button class="main_btn  pt-3 pb-3 fs-5 w-75 mx-auto flex_center" :disabled="passDisabled"> 
                     
                    <span v-if="!passDisabled"> {{ $t('auth.confirm') }} </span>
                    <div class="spinner-border mx-2" role="status" v-if="passDisabled">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </button>
            </div>

        </form>
    </Dialog>

    <!-- change phone step 2 => phone  -->
    <Dialog v-model:visible="changePhone" modal :style="{ width: '50vw' }">
        <h6 class="fw-bold text-center"> {{ $t('auth.phone') }} </h6>
        <p class=" text-center"> {{ $t('auth.newPhone') }} </p>



        <form ref="loginForm" @submit.prevent="changePhoneFunc" class="flex flex-wrap gap-3 p-fluid">

            <!-- phone  -->
            <div class="position-relative flex-auto defaultInput">
                  <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.phone')  }} </label>

                  <input type="number" class="form-control defaultInput" :placeholder="$t('auth.phonePlc')" v-model="newPhone" @input="showValid">

                  <!-- icon  -->
                  <div class="inputIcon">
                    <img :src="require('@/assets/imgs/phone.svg')" alt="">
                  </div>

                  <!-- select phone  -->
                  <Dropdown v-model="selectedCityPhone" :options="common.countries" optionLabel="key" @change="chooseCountry"  class="w-full md:w-14rem" style="top: 32px !important;" />
            </div>


            <!-- submit  -->
            <div class="mt-4">
                <button class="main_btn  pt-3 pb-3 fs-5 w-75 mx-auto flex_center" :disabled="phoneDisabled">
                    <span v-if="!phoneDisabled"> {{ $t('auth.confirm') }} </span>
                    <div class="spinner-border mx-2" role="status" v-if="phoneDisabled">
                        <span class="visually-hidden">Loading...</span>
                    </div> 

                </button>
            </div>

        </form>
    </Dialog>

    <!-- otp modal  -->
    <Dialog v-model:visible="otp" modal :style="{ width: '50vw' }">
        <h6 class="fw-bold text-center"> {{ $t('auth.otp') }} </h6>
        <p class=" text-center"> {{ $t('auth.otpPlc') }} </p>
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
                    <v-otp-input
                        ref="otpInput" 
                        v-model:value="code" 
                        name="code" 
                        input-classes="otp-input" 
                        separator=""
                        :num-inputs="4" 
                        autofocus
                        :should-auto-focus="true"
                        input-type="letter-numeric" 
                        style="flex-direction: row-reverse;"
                    />
                </div>


            </div>



            <!-- submit  -->
            <div class="mt-4">
                <button class="main_btn  pt-3 pb-3 fs-5 w-75 mx-auto flex_center" :disabled="otpDisabled">
                    <span v-if="!otpDisabled"> {{ $t('auth.confirm') }} </span>
                    <div class="spinner-border mx-2" role="status" v-if="otpDisabled">
                        <span class="visually-hidden">Loading...</span>
                    </div> 

                </button>
            </div>


            <div class="flex_between w-75 mx-auto d-flex">
                <div class="flex_center newAcc">
                    <p class="fs-6 mt-4 fw-6"> {{ $t('auth.haveNot') }}
                        <button type="button" class="mainColor fw-bold btn p-0" @click.prevent="resendCode" :disabled="isCodeSent"> {{ $t('auth.resend') }} </button> 
                    </p>  
                </div>
                
                <div v-if="resendTime">
                    <p v-if="timer > 0" class="text-center mt-3">{{ $t('auth.remain')  }}  <span class="mainColor">{{ timer }} {{ $t('auth.second') }}</span> </p>
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
//import InputNumber from 'primevue/inputnumber';
import Dialog from 'primevue/dialog';
//import FileUpload from 'primevue/fileupload';
import MultiSelect from 'primevue/multiselect';
import Password from 'primevue/password';
// import Galleria from 'primevue/Galleria'
import AOS from "aos";

import {mapGetters, mapActions, mapState} from 'vuex';

import axios from 'axios';
import Toast from 'primevue/toast';
// import { mapActions,  } from 'vuex';

// import router from '@/router';
export default {
    components: {
        // Toast,
        siteHeaderVue,
        siteFooterVue,
        Dropdown,
        InputText,
       // InputNumber,
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
            addCer : false ,
            cer_disabled : false ,
            skill_disabled : false ,
            addSkill : false ,

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
            timer: 5,
            done: false,

            //new data 
            name : null,
            phone : null,
            email : null,
            genders : [
                {
                id : 1,
                name : 'male',
                title : 'ذكر'
                },
                {
                id : 2,
                name : 'female',
                title : 'انثى'
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
            disabled: false,
            cv_link : '',

            videoFile: null,
            lockInput : true,
            reOpen : false,

            password : null,
            changePhone : false,
            selectedCityPhone : {
                "id": 1,
                "name": "السعودية",
                "key": "+966"
            },
            passDisabled : false,
            phoneDisabled : false,
            newPhone : '',
            newCountryCode : "" ,
            actualCountryCode : '',
            code : '',
            isCodeSent : false,
            resendTime : false,
            otpDisabled : false,
            image : ''
            
        }
    },
    computed:{
        ...mapState(["common"])  ,
        ...mapGetters('common',['nationalities', 'cities', 'qualifications', 'emps', 'specs', 'certifications', 'skills', 'experiences']),
        passwordMatch() {
            return this.oldPass === this.newPass;
        }
    },
    methods: {
        // add certification 
        async addNewCertification(){
          this.cer_disabled = true ;
          const fd = new FormData(this.$refs.addCert);

          await axios.post('user/certifications/store', fd , {
            headers: {
              Authorization : `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then( (res)=>{
            if( res.data.key === 'success' ){
              this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
              this.addCer = false ;
              setTimeout(() => {
                this.getCertifications();
              }, 1000);
            }else{
              this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
            }
            this.cer_disabled = false ;

          } )
          
        },
        // add skill 
        async addNewSkill(){
          this.skill_disabled = true ;
          const fd = new FormData(this.$refs.addSkills);

          await axios.post('user/skills/store', fd , {
            headers: {
              Authorization : `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then( (res)=>{
            if( res.data.key === 'success' ){
              this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
              this.addSkill = false ;
              setTimeout(() => {
                this.getSkills();
              }, 1000);
            }else{
              this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
            }
            this.skill_disabled = false ;

          } )
          
        },
        ...mapActions('common',['getNations', 'getCities','getQualifications', 'getEmployment', 'getSpecilizations', 'getCertifications', 'getSkills', 'getExperiences', 'getCountries']),
        chooseCountry(){
            document.querySelector('.p-dropdown-label').innerHTML = this.selectedCityPhone.key ;
        },

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
                    this.isCodeSent = false
                }
            }, 1000);
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

        uploadCv(e){
            // console.log(e)
            this.cv_link = e.target.files[0].name ;
        },

        handleVideoChange(event){
            this.videoFile = event.target.files[0];
            // // check video size 
            // if( this.videoFile && this.videoFile.size > 15 * 60  ){
            //     this.videoFile = null;
            //     this.videoFileUrl = null ;
            // }else{
                this.videoSource = URL.createObjectURL(this.videoFile);
                this.lockInput = false ;
                this.reOpen = true ;
            // }
        },
        reUpload(){
            this.lockInput = true ;
            this.videoFile = null ;
            this.reOpen = false ;
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
                        this.lockInput = false;
                        this.videoFile = true;
                        this.reOpen = true ;
                    }     
                    if( data.gender == 'ذكر' ){
                        this.gender = this.genders[0];
                    }else if( data.gender == 'انثي' ){
                        this.gender = this.genders[1];
                    }
                    

                    this.cv_link = data.cv ;

                    this.actualCountryCode = data.country_code ;
                    this.image = data.image ;
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
            if( this.company_name ){
                fd.append('company_name', this.company_name);
            }
            if( this.job_title ){
                fd.append('job_title', this.job_title);
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
            if( this.videoFile ){
                fd.append('video', this.videoFile)
            }
            if( this.name ){
                fd.append('name', this.name)
            }
            if( this.email ){
                fd.append('email', this.email)
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

        },

        // check password 
        async checkPassword(){
            this.passDisabled = true ;
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const fd = new FormData ;
            fd.append('password', this.password);
            fd.append('country_code', this.actualCountryCode);
            fd.append('phone', this.phone);
            await axios.post('user/password/check', fd , {headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    this.passDisabled = false ;
                    setTimeout(() => {
                        this.changeNumber = false ;
                        this.changePhone = true ;

                    }, 3000);

                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                    this.passDisabled = false ;
                }
            } )
        },

        // change phone 
        async changePhoneFunc(){
            this.phoneDisabled = true ;
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const fd = new FormData ;
            fd.append('password', this.password);
            fd.append('country_code', this.selectedCityPhone.key);
            fd.append('phone', this.newPhone);
            await axios.post('user/phone/change', fd , {headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    this.phoneDisabled = false ;
                    setTimeout(() => {
                        this.changePhone = false ;
                        this.otp = true ;
                    }, 3000);

                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                    this.phoneDisabled = false ;
                }
            } )
        },

        // send otp 
        async sendOtp(){
            this.otpDisabled = true ;
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const fd = new FormData ;
            fd.append('code', this.code);
            // fd.append('country_code', this.selectedCityPhone.key);
            // fd.append('phone', this.newPhone);
            await axios.post('user/phone/change/check-code', fd , {headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    this.otpDisabled = false ;
                    setTimeout(() => {
                        this.otp = false ;
                        this.getProfile();
                    }, 3000);

                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                    this.otpDisabled = false ;
                }
            } )

        },

        // resend code 
        async resendCode(){
            const fd = new FormData ;
            fd.append('phone', this.newPhone);
            fd.append('country_code', this.selectedCityPhone.key);

            try{
                const res = await this.$store.dispatch('auth/resend', fd)
                if( res.success == true ){
                    this.$toast.add({ severity: 'success', summary: res.message, life: 3000 });
                    this.startTimer()
                    this.timer = 5 ;
                    this.isCodeSent = true ;
                    this.resendTime = true ;
                }else{
                    this.$toast.add({ severity: 'error', summary: res.message, life: 3000 });
                    
                    }
            }catch(err){
                console.error(err)
            }
        }
    },
    mounted() {
        // this.getCountries();
        // document.querySelector('.p-dropdown-label').innerHTML = this.selectedCityPhone.key ;
        this.getCountries();
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
    },
    beforeUnmount() {
        clearInterval(this.intervalId);
    },
}
</script>

<style scoped>
.p-multiselect{
    background: #f8f8f8;
    padding: 0px 20px;
}
.editPhone{
    position: absolute;
    left: 5%;
    font-size: 19px;
    color: #ccc;
    top: 49%;
    z-index: 1;
    width: 30px;
    height: 30px;
    background: #f8f8f8;
}
</style>
<style>

#cv{
    opacity:0;
    position:absolute;
    top:0;
    right:0;
    width:100%;
    height:100%;
}
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
