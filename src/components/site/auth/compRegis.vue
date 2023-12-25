<template>
  <section id="compRegister" class="mt-4">
    <div class="container">

      <!-- breadcrumb  -->
      <div class="breadcrumb d-flex">
        <router-link to="/" class="inActive"> {{ $t('nav.main')  }} </router-link>&nbsp; - &nbsp;
        <p class="active mainColor"> {{ $t('auth.reg') }} </p>
      </div>

      <section class="loginSection" style="width:93%;margin:auto" >
          <h3 class="fw-bold mb-3"> {{ $t('auth.reg') }} </h3>
          <p class="registerParagraph fw-bold d-flex align-items-center"> 
            <span class="step flex_center">2</span>
            {{  $t('auth.regPlc')  }}
          </p>

          <form class="flex flex-wrap gap-3 p-fluid mt-4" @submit.prevent="setProfile" ref="register">
            <div class="row">
              
              <!-- email  -->
              <div class="col-md-6 mb-3">
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.email')  }} </label>
                    <InputText type="email" class="defaultInput2" name="email" required v-model="name" :placeholder="$t('auth.emailPlc')" />
                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/sms.svg')" alt="">
                    </div>

                </div>
              </div>

              <!-- gender  -->
              <div class="col-md-6 mb-3">
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.gender')  }} </label>
                    <Dropdown v-model="gender" :options="genders" optionLabel="title"  class="w-full md:w-14rem w-100 position-relative" :placeholder="$t('auth.genderPlc')"  />
                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/sms.svg')" alt="">
                    </div>

                </div>
              </div>

              <!-- birthday  -->
              <div class="col-md-6 mb-3">
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.birth')  }} </label>
                    <Calendar v-model="date" class="defaultInput" :placeholder="$t('auth.birthPlc')" />

                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/calendar-2.svg')" alt="">
                    </div>

                </div>
              </div>

              <!-- nationality  -->
              <div class="col-md-6 mb-3">
                <div class="position-relative flex-auto">
                    <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.nat')  }} </label>
                    <Dropdown v-model="nation" :options="nationalities" filter optionLabel="title"  class="w-full md:w-14rem w-100 position-relative" :placeholder="$t('auth.natPlc')"  />
                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/card-pos.svg')" alt="">
                    </div>
                </div>
              </div>

              <!-- city  -->
              <div class="col-md-6 mb-3">

                <div class="position-relative    flex justify-content-center">
                  
                  <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.city')  }} </label>

                  <Dropdown v-model="selectedCity" :options="cities" filter optionLabel="name"  class="w-full md:w-14rem w-100 position-relative" :placeholder="$t('auth.cityPlc')">
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

                    <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.place')  }} </label>
                    <InputText type="text" class="defaultInput2" v-model="address" @focus="googleMap=true" :placeholder="$t('auth.placePlc')" />
                    <!-- icon  -->
                    <div class="inputIcon2">
                      <img :src="require('@/assets/imgs/location.svg')" alt="">
                    </div>

                </div>

                  <!-- google map modal  -->      
                  <Dialog v-model:visible="googleMap" modal :style="{ width: '50vw' }">
                        <GMapMap
                            :center="locations"
                            :zoom="11"
                            map-type-id="terrain"
                            style="width: 100vw; height: 900px"
                        >
                         <GMapAutocomplete
                              placeholder="ابحث عن موقعك"
                              @place_changed="onPlaceChanged"
                            >
                          </GMapAutocomplete>
                        <GMapMarker
                          :position="locations"
                          :clickable="true"
                          :draggable="true"
                           @mouseover="onMarkerDragEnd($event)"
                        />
                        </GMapMap>

                  </Dialog>

              </div>


              <!-- cv  -->
              <div class="col-md-6 mb-3">
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.cv') }} </label>
                    <Toast />

                    <FileUpload mode="basic" name="cv"  accept=".pdf" class="defaultInput2" :maxFileSize="100000000000" @upload="onUpload" />
                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/pdf.svg')" alt="">
                    </div>

                </div>
              </div>

              <!-- qualifications  -->
              <div class="col-md-6 mb-3">
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.qual')  }} </label>
                    <Dropdown v-model="qualification" filter :options="qualifications" optionLabel="title"  class="w-full md:w-14rem w-100 position-relative" :placeholder="$t('auth.qualPlc')"  />
                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/book.svg')" alt="">
                    </div>

                </div>
              </div>

              <!-- work fields  -->
              <div class="col-md-6 mb-3">
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.field')  }} </label>
                    <Dropdown v-model="emp" filter :options="emps" optionLabel="title"  class="w-full md:w-14rem w-100 position-relative" :placeholder="$t('auth.fieldPlc')"  />
                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                    </div>

                </div>
              </div>

              <!-- specializes  -->
              <div class="col-md-6 mb-3">
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.special')  }} </label>
                    <Dropdown v-model="specialize" filter :options="specs" optionLabel="title"  class="w-full md:w-14rem w-100 position-relative" :placeholder="$t('auth.specialPlc')"  />
                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                    </div>

                </div>
              </div>

               <!-- certifications  -->
              <div class="col-md-6 mb-3">
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.cer') }} </label>
                    <MultiSelect v-model="cer" filter :options="certifications" optionLabel="title" :placeholder="$t('auth.cerPlc')"
                      :maxSelectedLabels="5" class="w-full md:w-20rem defaultInput2 position-relative" />
                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                    </div>

                </div>
              </div>


              <!-- skills  -->
              <div class="col-md-6 mb-3">
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.skills')  }} </label>
                    <MultiSelect v-model="skill" filter :options="skills" optionLabel="title" :placeholder="$t('auth.skillsPlc')"
                      :maxSelectedLabels="5" class="w-full md:w-20rem defaultInput2 position-relative" />

                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                    </div>

                </div>
              </div>

              <!-- job name  -->
              <div class="col-md-6 mb-3">
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> 
                      {{  $t('auth.jobName')  }} 
                      <span class="ifExist mx-2">
                        {{  $t('auth.ifExist')  }}
                        <i class="fa-solid fa-star-of-life"></i>
                      </span>
                    </label>
                    <InputText type="text" class="defaultInput2" v-model="job_title" name=job_title :placeholder="$t('auth.namePlc')" />
                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                    </div>

                </div>
              </div>

              <!-- yearsExperience  -->
              <div class="col-md-6 mb-3">
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.yearsExper')  }} </label>
                    <Dropdown v-model="experience" filter :options="experiences" optionLabel="title"  class="w-full md:w-14rem w-100 position-relative" :placeholder="$t('auth.yearPlc')"  />
                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                    </div>

                </div>
              </div>

               <!-- current company  -->
              <div class="col-md-6 mb-3">
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> 
                      {{  $t('auth.current')  }} 
                      <span class="ifExist mx-2">
                        {{  $t('auth.ifExist')  }}
                        <i class="fa-solid fa-star-of-life"></i>
                      </span>
                    </label>
                    <InputText type="text" class="defaultInput2" v-model="company_name" name="company_name" :placeholder="$t('auth.currentPlc')" />
                    <!-- icon  -->
                    <div class="inputIcon">
                      <img :src="require('@/assets/imgs/document-text.svg')" alt="">
                    </div>

                </div>
              </div>

              <!-- cv  -->
              <div class="col-md-6 mb-3">
                <div class="position-relative flex-auto">

                    <label for="integeronly" class="label fw-bold block mb-2"> الصورة الشخصية </label>

                    <FileUpload mode="basic" v-model="cv" name="image"  accept="image/*" class="defaultInput2" :maxFileSize="100000000000" @upload="onUpload" />
                    
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-center">
              <button class="main_btn pt-3 pb-3 w-25" :disabled="disabled">
                 <span v-if="!disabled">{{ $t('auth.keep') }} </span>
                 <div class="spinner-border mx-2" role="status" v-if="disabled">
                    <span class="visually-hidden">Loading...</span>
                  </div>
              </button>
              <button class="sec_btn pt-3 pb-3 w-25 mx-3 fw-bold" type="button" @click="skip"> {{  $t('auth.skip')  }} </button>
            </div>

            
          </form>
      </section>    

    </div>
    <Toast />
    <payment :openPayment="openPayment" />
  </section>
</template>

<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Dialog from 'primevue/dialog';
import FileUpload from 'primevue/fileupload';
import MultiSelect from 'primevue/multiselect';
import Toast from 'primevue/toast';

// payment modal 
import payment from './paymentDialog.vue'
import {mapGetters, mapActions} from 'vuex';
export default {
  data(){
    return{

      email : '',
      genders : [
        {
          id : 1,
          name : 'male',
          title : 'ذكر'
        },
        {
          id : 2,
          name : 'female' ,
          title : 'انثى'
        }
      ],
      gender : null,
      date : null,
      nation : null,
      selectedCity : null,
      locations:
      {
          lat: 0,
          lng: 0
      },
      currentLocation: {},
      address: '',
      googleMap : false,
      qualification : null,
      emp : null,
      specialize : null,
      cer : [],
      skill : [],
      job_title : null,
      company_name : null,
      experience : null,
      disabled : false,

      openPayment : false,
      cv : null
    }
  },
  computed:{
    ...mapGetters('common',['nationalities', 'cities', 'qualifications', 'emps', 'specs', 'certifications', 'skills', 'experiences'])
  },
  components:{
    InputText,
    Dropdown,
    Calendar,
    Dialog,
    FileUpload,
    MultiSelect,
    Toast,
    payment
  },
  methods:{
      ...mapActions('common',['getNations', 'getCities','getQualifications', 'getEmployment', 'getSpecilizations', 'getCertifications', 'getSkills', 'getExperiences']),
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
                  this.address = results[0].formatted_address
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
          this.address = place.formatted_address;
        }
      },
      onUpload(e) {
          this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        console.log(e)
      },


      // main function
      async setProfile(){
        this.disabled = true ;
        const fd = new FormData( this.$refs.register );
        
        // common share function 
        function appendedIfSelected( formData, key , selectedValue ){
          if( selectedValue ){
            formData.append(key , selectedValue.id)
          }
        }
        // append id 
        appendedIfSelected(fd, 'employment_id', this.emp);
        appendedIfSelected(fd, 'specialization_id', this.specialize);
        appendedIfSelected(fd, 'qualification_id', this.qualification);
        appendedIfSelected(fd, 'experience_id', this.experience);
        appendedIfSelected(fd, 'city_id', this.selectedCity);

        // append locations 
        if( this.address ){
          fd.append('map_desc', this.address)
        }
        if( this.locations ){
          fd.append('lat', this.locations.lat)
          fd.append('lng', this.locations.lng)
        }
        // append skills 
        for (let i = 0; i < this.skill.length; i++) {
          appendedIfSelected(fd, `skills[${i}]`, this.skill[i]);
        }
        // append certifications 
        for (let i = 0; i < this.cer.length; i++) {
          appendedIfSelected(fd, `certifications[${i}]`, this.cer[i]);
        }
        // append gender
        if( this.gender ){
          fd.append('gender', this.gender.name)
        }
        // append birth date 
        if( this.date ){
          const date = new Date(this.date);
          // Extract day, month, and year from the Date object
          const day = date.getDate();
          const month = date.getMonth() + 1; // Months are zero-based, so add 1
          const year = date.getFullYear();
          // Format the date components as a string in the desired format
          const formattedDate = `${day}-${month}-${year}`;

          fd.append('birth_date', formattedDate)
        }
        // append nation 
        if( this.nation ){
          fd.append('nationality', this.nation.title)
        }




        // try catch 
        try{
          const res = await this.$store.dispatch('auth/completeProfile', fd);
          if( res.success == true ){
              this.$toast.add({ severity: 'success', summary: res.message, life: 3000 });
              this.disabled = false ;

              setTimeout(() => {
                // open payment dialog 
                if( this.openPayment == true || this.openPayment == false ){
                  this.openPayment = !this.openPayment
                }
              }, 3000);
          }else{
              this.$toast.add({ severity: 'error', summary: res.message, life: 3000 });
              this.disabled = false ;
              }
        }catch(err){
            console.error(err)
        }
      },
      // skip 
      skip(){
        this.$router.push('/')
      }
  },
  mounted(){
    this.geolocation();
    let filePlaceholder = document.querySelector('.p-button-label');
    this.getNations();
    this.getCities();
    this.getQualifications();
    this.getEmployment();
    this.getSpecilizations();
    this.getCertifications();
    this.getSkills();
    this.getExperiences();
    filePlaceholder.innerHTML = 'الرجاء اختيار السيرة الذاتية'
  },
  created(){
     
  }
}
</script>

<style  >
  .p-dropdown{
    top:0 !important;
    padding-left:12px ;
    padding-right: 24px ;
  }
 
</style>
<style lang="scss">
.sec_btn{
  background-color: #CACACA;
  color:#333;
    padding: 7px 19px;
    border-radius: 5px;
    border: none;
}
.ifExist{
  color:#CE3932;
  font-weight: normal !important;
  svg{
    font-size: 9px !important;
    transform: translateY(-5px);
  }
}
.p-multiselect .p-multiselect-trigger {
    position: absolute;
    top: 17px;
    left:0;
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item .p-checkbox {
    margin-left: 0.5rem !important;
    margin-right: 0 !important;
}
.p-fluid .p-button {
    width: 100% !important;
    border: 1px solid #ccc;
    color: #6c757d;
}
.p-button .p-button-icon-left {
    margin-left: 0.5rem;
    margin-right: 0;
    position: absolute;
    left: 10px;
}
.p-button-label{
      text-align: right;
    font-weight: normal !important;
}
.p-button-label:hover , .p-button .p-button-icon-left:hover, .p-fluid .p-button:hover .p-button-label , .p-fluid .p-button:hover  .p-button-icon-left{
  color : #6c757d !important
}
  .pac-container{
    z-index: 9999 !important;
  }
  .vue-map-hidden{
    position: absolute  !important;
    top: 92px !important;
    right: 50% !important;
    transform: translate(50%, 50%) !important;
  }
 .p-dropdown-label{
    font-family: inherit !important;
  }
  .p-dropdown-panel .p-dropdown-header .p-dropdown-filter {
      padding-left: 1.75rem !important;
      margin-left: -1.75rem !important;
      padding-right: 35px !important;
      margin-right: 0 !important;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-prev, .p-datepicker .p-datepicker-header .p-datepicker-next{
    transform: rotate(180deg);
  }
  .inputIcon2{
    position: absolute;
    top: 57%;
    left: 10px;
  }
  .vue-map{
    width: 100% !important;
    height: 72vh !important;
    position: relative;
    overflow: hidden;
  }


.sec_btn{
  background-color: #CACACA;
  color:#333;
    padding: 7px 19px;
    border-radius: 5px;
    border: none;
}
.ifExist{
  color:#CE3932;
  font-weight: normal !important;
  svg{
    font-size: 9px !important;
    transform: translateY(-5px);
  }
}
.p-multiselect .p-multiselect-trigger {
    position: absolute;
    top: 17px;
    left:0;
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item .p-checkbox {
    margin-left: 0.5rem !important;
    margin-right: 0 !important;
}
.p-fluid .p-button {
    width: 100% !important;
    border: 1px solid #ccc;
    color: #6c757d;
}
.p-button .p-button-icon-left {
    margin-left: 0.5rem;
    margin-right: 0;
    position: absolute;
    left: 10px;
}
.p-button-label{
      text-align: right;
    font-weight: normal !important;
}
.p-button-label:hover , .p-button .p-button-icon-left:hover, .p-fluid .p-button:hover .p-button-label , .p-fluid .p-button:hover  .p-button-icon-left{
  color : #6c757d !important
}
  .pac-container{
    z-index: 9999 !important;
  }
  .vue-map-hidden{
    position: absolute  !important;
    top: 92px !important;
    right: 50% !important;
    transform: translate(50%, 50%) !important;
  }
 .p-dropdown-label{
    font-family: inherit !important;
  }
  .p-dropdown-panel .p-dropdown-header .p-dropdown-filter {
      padding-left: 1.75rem !important;
      margin-left: -1.75rem !important;
      padding-right: 35px !important;
      margin-right: 0 !important;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-prev, .p-datepicker .p-datepicker-header .p-datepicker-next{
    transform: rotate(180deg);
  }
  .inputIcon2{
    position: absolute;
    top: 57%;
    left: 10px;
  }
  .vue-map{
    width: 100% !important;
    height: 72vh !important;
    position: relative;
    overflow: hidden;
  }
</style>