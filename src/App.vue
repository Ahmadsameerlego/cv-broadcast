<template>
    <router-view/>
    <Toast />
  
  </template>
  <script>
  import '@/assets/css/site_style.scss';
  // import messaging config from firebase.js file and firebase/messaging module 
  import {messaging} from './firebase'
  import {getToken , onMessage }  from "firebase/messaging"
  
  import Toast from 'primevue/toast';
  
  export default {
      methods:{
        // making request permission to ask user to accept Notification  
        async requestPermission(){
          const permission = await Notification.requestPermission()
          if( permission === "granted" ){
  
            // console.log('granted')
            // Generate token
            // we get the token from project setting => cloud messaging => generateKey
            getToken( messaging , {VapidKey:"BEQx7vTT5nW0uqwkBz1NLsHyv_wqF47KJhKU105VZPrXedZMk_agXCohOP27eCLncZgTqJzyGZvgVWZUugCJglc"} )
            // {vapidKey:"BFpjV9Ma8fIm3fnaCxRZMuQM_iPkZcyUpmje05C7sG-S7K7MNcep0DLwwim9mKV0w6hyLKaPtyHQDiXlJBol64w"}
            .then((currentToken) => {
  
              if (currentToken) {
                localStorage.setItem('FCMToken', currentToken.toString());
                console.log(currentToken.toString())
              } else {
                    // Show permission request UI
                    console.log('No registration token available. Request permission to generate one.');
                }
              }).catch((err) => {
              console.log('An error occurred while retrieving token. ', err);
            });
  
  
            //To handle foreground messages
            onMessage(messaging, (message) => {
              // this.toastTitle = message.notification.title
              // this.toastBody = message.notification.body
              // this.snackbar = true
              this.$toast.add({ severity: 'success', summary: message.notification.body, life: 3000 });
              console.log(message)           
            })
  
  
  
          }else if( permission === "denied" ){
  
              console.log('you denied')
  
          }
        }
      },
      components:{
        Toast
      },
      mounted(){
        this.requestPermission();
        if (localStorage.getItem("locale") == "en") {
          document.querySelector("body").classList.add("ltr");
        } else {
          document.querySelector("body").classList.remove("ltr");
        }
    
      }
  }
  </script>
  <style lang="scss">
  
  </style>