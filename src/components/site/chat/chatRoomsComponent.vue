<template>
    <section id="rooms" class="mt-5">
      <div class="container">
           <!-- bread crumb  -->
          <div class="breadcrumb d-flex mb-0">
              <router-link to="/" class="inActive"> {{ $t('nav.main') }} </router-link>&nbsp; - &nbsp;
              <p class="active mainColor"> {{  $t('chat.chat')  }} </p>
          </div>
  
  
          <section class="content">
              <h5 class="fw-bold red mb-3"> {{  $t('chat.chat')  }} </h5>
              
              <!-- all rooms  -->
              <section class="allRooms mt-3">
                  <div class="row" v-if="rooms.length>0" >
                      <div class="col-md-9 mb-3"  v-for="room in rooms" :key="room.id">
  
                          <router-link :to="'/singleChat/'+room.id" class="colorInherit">
                              <!-- single room  -->
                              <section class="room pt-3 pb-3 px-3 position-relative d-flex align-items-center">
                                  <!-- chat image  -->
                                  <div class="chat_image">
                                      <img :src="room.members[0].image" alt="chat room image">
                                  </div>
                                  <!-- chat image  -->
                                  <div class="chat_details mx-3">
                                      <h5 class="fw-bold mb-3">  {{ room.members[0].name }} </h5>
                                      <p class="grayColor fs-16 fw-6"> {{room.last_message_body}} </p>
                                  </div>
  
                                  <!-- absolute  -->
  
                                  <!-- unreadCounter  -->
                                  <div class="unread_count br-50 flex_center whiteColor">
                                      2
                                  </div>
  
                                  <!-- time  -->
                                  <div class="time d-flex">
                                      <img :src="require('@/assets/imgs/clock.svg')" alt="">
                                      <span class="grayColor mx-2">{{ room.last_message_created_dt  }} </span>
                                  </div>
                              </section>
                          </router-link>
                          
  
                      </div>
                  </div>
                  <div v-else class="text-center text-danger fw-6 fs-15">
                        لا توجد محادثات بعد
                    </div>
              </section>
              
          </section>
  
      </div>
    </section>
  </template>
  
<script>
// import {mapState, mapActions} from 'vuex';
export default {
    data(){
    return{

        }
    },
    computed:{
        // rooms(){
        //     // return this.$store.state.rooms
        // },
        // ...mapState( 'logic', ['rooms'] )
        rooms(){
            return this.$store.state.rooms 
        }

    },
    methods:{
        // ...mapActions('logic', ['getchatRooms'])
    },
    created(){
        this.$store.dispatch('getchatRooms');
        // this.getchatRooms();
    }
}
</script>
  
  <style lang="scss">
      .allRooms{
          .room{
              border-radius: 10px;
              border: 1px solid #F0F0F0;
              background: rgba(251, 251, 251, 0.97);
              .chat_image{
                  width:75px;
                  height: 75px;
                  border-radius: 50%;
                  img{
                      width: 100%;
                      height: 100%;
                      border-radius: 50%;
                  }
              }
              .unread_count , .time{
                  position: absolute;
                  left: 20px;
              }
              .unread_count{
                  background-color: #F47B1D;
                  width: 30px;
                  height: 30px;
                  top: 20px;
              }
              .time{
                  bottom:20px;
              }
          }
      }
      
      .colorInherit{
          color:inherit 
      }
  </style>