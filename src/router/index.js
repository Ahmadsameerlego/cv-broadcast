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
import personalAccount from '@/views/personalAccount.vue'


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
  

  // whoAreWe.vue

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
