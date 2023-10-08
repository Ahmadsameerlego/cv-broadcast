<template>
    <!-- header -->
    <siteHeaderVue />
    <!-- content  -->

    <section class="mt-3 mb-3 mx-5">

        <!-- breadcrumd  -->
        <div class="breadcrumb d-flex mb-0">
            <router-link to="/" class="inActive"> الرئيسية </router-link>&nbsp; - &nbsp;
            <router-link to="/profile" class="inActive"> الملف الشخصي </router-link>&nbsp; - &nbsp;
            <p class="active mainColor"> اعادة تعيين كلمة المرور </p>
        </div>

        <!-- title  -->
        <h6 class="fw-bold red mb-4 mt-3"> اعادة تعيين كلمة المرور </h6>

        <!-- form  -->
        <section class="loginSection">
            <form class="flex flex-wrap gap-3 p-fluid mt-4" ref="updatePassword" @submit.prevent="updatePassword">
                <div class="base-card" >
                    <header class="p-3">
                        <h6 class="fw-bold"> كلمة المرور : </h6>
                    </header>
                    
                    <div class="p-3">
                        <div class="row">

                            <div class="col-md-6 mb-2">

                                <div class="position-relative flex-auto">
                                    <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.oldPass') }} </label>
                                    <Password v-model="old_password"  toggleMask class="defaultInput" :placeholder="$t('auth.oldPassPlace')" :feedback="false" />

                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/lock.svg')" alt="">
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-6 mb-2">

                                <div class="position-relative flex-auto">
                                    <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.pass1')  }} </label>
                                    <Password v-model="password"  toggleMask class="defaultInput" :placeholder="$t('auth.passPlc1')" />

                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/lock.svg')" alt="">
                                    </div>
                                </div>
                                
                            </div>



                            <div class="col-md-6 mb-2">

                                 <!-- confirm password  -->
                                <div class="position-relative flex-auto">

                                    <label for="integeronly" class="label fw-bold block mb-2"> {{  $t('auth.confirmPass1')  }} </label>
                                    <Password v-model="password_confirmation" :feedback="false" toggleMask class="defaultInput" :placeholder="$t('auth.confirmPlc1')" />

                                    <!-- icon  -->
                                    <div class="inputIcon">
                                        <img :src="require('@/assets/imgs/lock.svg')" alt="">
                                    </div>

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

                        <div class="flex_center">
                            <button class="main_btn pt-3 pb-3 w-25 mx-3 fw-bold" :disabled="disabled">
                                <span v-if="!disabled">حفظ التغييرات </span>
                                <div class="spinner-border mx-2" role="status" v-if="disabled">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </button>
                        </div>
                    </div>        
                </div>    
            </form>
        </section>
    </section>


    <!-- footer -->
    <siteFooterVue />
    <Toast />


    <Dialog v-model:visible="success" modal :style="{ width: '50vw' }">
       
        
        <div class="logo">
        <img :src="require('@/assets/imgs/logo.png')" alt="">
        </div>
        <h5 class="fw-bold text-center"> {{ $t('common.success') }} </h5>

    </Dialog>    
</template>

<script>
import siteHeaderVue from '@/components/site/layout/siteHeader.vue';
import siteFooterVue from '@/components/site/layout/siteFooter.vue';
import Password from 'primevue/password';
import Toast from 'primevue/toast';
import axios from 'axios';
import Dialog from 'primevue/dialog';

export default {
    data(){
        return{
            password : null,
            password_confirmation : null,
            old_password : null,
            showValid : false,
            disabled : false,
            success : false
        }
    },
    components:{
        siteHeaderVue,
        siteFooterVue,
        Password,
        Toast,
        Dialog
    },
    computed:{
        passwordMatch() {
            return this.password === this.password_confirmation;  
        }
    },
    watch:{
        password_confirmation(){
            this.showValid = true ;
        }
    },
    methods:{
        async updatePassword(){
            this.disabled = true ;
            const fd = new FormData();
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            fd.append( 'old_password', this.old_password );
            fd.append( 'password', this.password );
            fd.append( 'password_confirmation', this.password_confirmation );
            fd.append( '_method', 'patch' );
            
            await axios.post('user/update-password', fd , {headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    this.disabled = false ;
                    this.success = true ;
                    setTimeout(() => {
                        this.success = false ;
                        this.$router.push('/')
                    }, 3000);
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                    this.disabled = false ;
                }
            } )
        } 
    }
    
}
</script>

<style>

</style>