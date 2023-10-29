import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import login from '../views/loginPage.vue';
import register from '../views/registerPage.vue';
import compeleteRegister from '../views/compeleteRegister.vue';
import exploreJobs from '@/views/exploreJobs.vue';
import jobDetails from '@/views/jobDetails.vue'
import termsCondition from '@/views/termsCondition.vue';
import whoAreWe from '@/views/whoUs.vue';
import notificationPage from '@/views/notificationPage.vue'
import personalAccount from '@/views/personalAccount.vue';
import orders from '@/views/accOrders.vue';
import company from '@/views/companyProfile.vue';
import contact from '@/views/contactUs.vue';
import rooms from '@/views/chatRooms.vue';
import singleChat from '@/views/singleChatRoom.vue';
import profile from '@/views/personalAccount.vue';
import privacy from '@/views/privacyPolicy.vue';
import allAds from '@/views/avilableAds.vue';
import updatePassword from '@/views/updatePassword.vue';
import jobApplication from '@/views/jobApplication.vue'
import error404 from '@/views/notFound.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      title : 'الرئيسية'
    }
  },
  {
    path : '/login',
    name : 'login',
    component : login,
    meta : {
      title : 'تسجيل الدخول'
    },
    beforeEnter: (to, from, next) => {
      if( localStorage.getItem('token') ){
        next('/')
      }else{
        next()
      }
    },

  },
  {
    path : '/register',
    name : 'register',
    component : register ,
    meta : {
      title : 'تسجيل حساب'
    },
    beforeEnter: (to, from, next) => {
      if( localStorage.getItem('token') ){
        next('/')
      }else{
        next()
      }
    },
  },
  {
    path : '/compeleteRegister',
    name : 'compeleteRegister',
    component : compeleteRegister,
    meta : {
      title : 'تسجيل حساب'
    }
  },
  {
    path : '/exploreJobs',
    name : 'exploreJobs',
    component : exploreJobs,
    meta : {
      title : 'اكتشف الوظائف'
    }
  },
  {
    path : '/jobDetails/:id',
    name : 'jobDetails',
    component : jobDetails,
    meta : {
      title : 'تفاصيل الوظيفة'
    }
  },
  {
    path : '/termsCondition',
    name : 'termsCondition',
    component : termsCondition,
    meta : {
      title : 'الشروط والأحكام'
    }
  },
  {
    path : '/whoUs',
    name : 'whoUs',
    component : whoAreWe,
    meta : {
      title : 'من نحن'
    }
  },
  {
    path: '/notificationPage',
    name: 'notificationPage',
    component: notificationPage,
    meta : {
      title : 'الاشعارات',
      requiresAuth : true
    }
  },
  {
    path: '/personalAccount',
    name: 'personalAccount',
    component: personalAccount,
    meta : {
      title : 'الحساب الشخصي',
      requiresAuth : true
    }
  },
  {
    path : '/orders',
    name : 'orders',
    component : orders,
    meta : {
      title : 'الطلبات',
      requiresAuth : true
    }
  },
  {
    path : '/company/:id',
    name : 'company',
    component : company,
    meta : {
      title : 'حساب الشركة'
    }
  },
  {
    path : '/contact',
    name : 'contact',
    component : contact,
    meta : {
      title : 'تواصل معنا'
    }
  },
  {
    path : '/rooms',
    name : 'rooms',
    component : rooms,
    meta : {
      title : 'الدردشات',
      requiresAuth : true
    }
  },
  {
    path : '/singleChat/:id',
    name : 'singleChat',
    component : singleChat,
    meta : {
      title : 'دردشة',
      requiresAuth : true
    }
  },
  {
    path : '/profile',
    name : 'profile',
    component : profile,
    meta : {
      title : 'الحساب الشخصي',
      requiresAuth : true
    }
  },
  {
    path : '/privacy',
    name : 'privacy',
    component : privacy,
    meta : {
      title : 'سياسة الخصوصية'
    }
  },
  {
    path : '/allAds',
    name : 'allAds',
    component : allAds,
    meta : {
      title : 'الاعلانات'
    }
  },
  {
    path : '/updatePassword',
    name : 'updatePassword',
    component : updatePassword,
    meta : {
      title : 'تحديث الرقم السري',
      requiresAuth : true
    }
  },
  {
    path : '/jobApplication/:id',
    name : 'jobApplication',
    component  : jobApplication ,
    meta : {
      title : 'تفاصيل الطلب',
      requiresAuth : true
    }
  },
  {
    path: '/:catchAll(.*)*',
    name: "error404",
    component: error404,
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
const DEFAULT_TITLE = 'cv broadcast';
router.afterEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if ( !localStorage.getItem('token')  ) {
      next({ name: 'login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }

})

export default router
