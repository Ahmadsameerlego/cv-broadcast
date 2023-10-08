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
    component: HomeView
  },{
    path : '/login',
    name : 'login',
    component : login
  },

  {
    path : '/register',
    name : 'register',
    component : register
  },
  {
    path : '/compeleteRegister',
    name : 'compeleteRegister',
    component : compeleteRegister
  },
  {
    path : '/exploreJobs',
    name : 'exploreJobs',
    component : exploreJobs
  },
  {
    path : '/jobDetails/:id',
    name : 'jobDetails',
    component : jobDetails
  },
  {
    path : '/termsCondition',
    name : 'termsCondition',
    component : termsCondition
  },
  {
    path : '/whoUs',
    name : 'whoUs',
    component : whoAreWe
  },
  {
    path: '/notificationPage',
    name: 'notificationPage',
    component: notificationPage
  },
  {
    path: '/personalAccount',
    name: 'personalAccount',
    component: personalAccount
  },
  {
    path : '/orders',
    name : 'orders',
    component : orders
  },
  {
    path : '/company/:id',
    name : 'company',
    component : company
  },
  {
    path : '/contact',
    name : 'contact',
    component : contact
  },
  {
    path : '/rooms',
    name : 'rooms',
    component : rooms
  },
  {
    path : '/singleChat/:id',
    name : 'singleChat',
    component : singleChat
  },
  {
    path : '/profile',
    name : 'profile',
    component : profile
  },
  {
    path : '/privacy',
    name : 'privacy',
    component : privacy
  },
  {
    path : '/allAds',
    name : 'allAds',
    component : allAds
  },
  {
    path : '/updatePassword',
    name : 'updatePassword',
    component : updatePassword
  },
  {
    path : '/jobApplication/:id',
    name : 'jobApplication',
    component  : jobApplication 
  },
  {
    path: '/:catchAll(.*)*',
    name: "error404",
    component: error404,
  }

  // whoAreWe.vue

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
