<template>
    <section id="singleChat" class="mt-5">
        <div class="container">
            <!-- bread crumb  -->
            <div class="breadcrumb d-flex mb-0">
                <router-link to="/" class="inActive"> {{ $t('nav.main') }} </router-link>&nbsp; - &nbsp;
                <router-link to="/chatRooms" class="inActive"> {{ $t('chat.chat')  }} </router-link>&nbsp; - &nbsp;
                <p class="active mainColor"> {{  $t('chat.single')  }} </p>
            </div>

            <!-- content  -->
            <section class="content">
                    <h5 class="fw-bold red mb-3"> {{ $t('chat.chat')  }} </h5>
                    <div class="row mt-3">
                        
                        <div class="col-md-4 mb-3">
                            <!-- shown chat  -->
                            <div class="allRooms showChats">
                                <div class="single_room  mb-2" v-for="room in rooms" :key="room.id">
                                    <button @click="reRenderMessages(room.id)" class="btn w-100 colorInherit">
                                         <!-- single room  -->
                                        <section class="room pt-3 pb-3 px-3 position-relative d-flex align-items-center"  >
                                            <!-- chat image  -->
                                            <div class="chat_image">
                                                <img :src="room.members[0].image" alt="chat room image">
                                            </div>
                                            <!-- chat image  -->
                                            <div class="chat_details mx-3">
                                                <h5 class="fw-bold mb-3 fs-14"> {{ room.members[0].name }} </h5>
                                                <p class="grayColor  fw-6 fs-12"> {{ room.last_message_body }} </p>
                                            </div>

                                            <!-- absolute  -->

                                            <!-- unreadCounter  -->
                                            <div class="unread_count br-50 flex_center whiteColor">
                                                {{unSeenCount}}
                                            </div>

                                            <!-- time  -->
                                            <div class="time d-flex">
                                                <img :src="require('@/assets/imgs/clock.svg')" alt="">
                                                <span class="grayColor mx-2">{{ room.last_message_created_dt  }}</span>
                                            </div>
                                        </section>
                                    </button>
                                </div>   
                                   
                            </div>
                        </div>

                        <!-- single chat content  -->
                        <div class="col-md-8 mb-3">
                            <section class="chat_content" id="chat">

                                <!-- chat header  -->
                                <div class="chat_header px-3 pt-3 pb-3 d-flex align-items-center">
                                    <!-- chat image  -->
                                    <div class="chat_image br-50">
                                        <img :src="singleRoom.image" class="w-100 h-100 br-50" alt="user image">
                                    </div>
                                    <!-- chat details  -->
                                    <div class="chat_details mx-3">
                                        <h6 class="fw-bold"> {{   singleRoom.name }} </h6>
                                        <p class="grayColor fw-6 mb-0"> {{   singleRoom.title }} </p>
                                    </div>
                                </div>

                                <!-- chat content  -->
                                <div class="chat_messages pt-4 pb-4 px-3" ref="chatSection">

                                    <!-- single message => sent by me  -->
                                    <div class="single_message position-relative mb-3 d-flex align-items-center" :class="{sent_by_me: message.is_sender == 1, received : message.is_sender == 0}" v-for="message in messages" :key="message.id">
                                        <!-- user image  -->
                                        <div class="user_image br-50" v-if="message.is_sender == 0">
                                            <img :src="singleRoom.image" class="br-50" alt="user image">
                                        </div>
                                        <div class="user_image br-50" v-if="message.is_sender == 1">
                                            <img :src="sender_image" class="br-50" alt="user image">
                                        </div>


                                        <!-- user message  -->
                                        <div class="user_message position-relative mx-3"  :class="{imaged : message.type=='file'}">
                                            <!-- content  -->
                                            <p class="mb-0" v-if="message.type=='text'"> 
                                                {{  message.body  }}
                                            </p>
                                            <div v-else-if="message.type=='file'" style="height:200px;width:200px;">
                                                <template v-if="message.body.toLowerCase().endsWith('.pdf')">
                                                    <embed :src="message.body" type="application/pdf" style="width:100%;height:100%;" />
                                                </template>
                                                <template v-else>
                                                    <img :src="message.body" alt="" style="width:100%;height:100%;" />
                                                </template>
                                                <!-- <img :src="message.body" alt="" style="width:100%;height:100%;"> -->
                                            </div>                                        
                                        </div>
                                        <!-- time  -->
                                        <span class="time grayColor">
                                            {{  message.created_dt  }}
                                        </span>
                                    </div>

                                    


                                </div>
                                <!-- <InfiniteLoading target="#chat" @infinite="load"/> -->

                                <!-- chat footer  -->
                                <div class="chat_footer px-3 pt-2 pb-2 ">

                                    <form class="d-flex align-items-center">
                                        <button class="btn upload position-relative" type="button">
                                            <input type="file" name="" ref="file" class="uploadFile" @change="uploadFile">
                                            <i class="fa-solid fa-paperclip"></i>
                                        </button>

                                        <div class="w-100 form-group position-relative">
                                            <textarea name="" id="" class="form-control" v-model="text" :placeholder="$t('auth.messagePlc')"></textarea>
                                            <button class="main_btn submit"  @click.prevent="addMessage" :disabled="disabled"> 
                                               
                                                <span > {{  $t('auth.send')  }} </span> 
                                                
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>
            </section>


        </div>
    </section>
</template>

<script>
import socket from "@/utils/socket.io";
import axios from 'axios';
export default {
    data(){
        return{
            disabled : false ,
            page : 1,
            socket : null,
            text : null,
            // messages : [],
            file : null,
            type : 'text',
            fileChosen : null,
            user_id : null,
            avatar : null,
            receiver_id : null,
            room_id : null,
            showLoader : false,
            sender_image : '',
            unSeenCount : ''
        }
    },
    methods:{
        // upload file 
        uploadFile(){
            this.file = this.$refs.file.files[0];
            this.fileChosen = URL.createObjectURL(this.file);
            this.text = this.$refs.file.files[0].name;
            this.type = 'file' ;
        },
        // main send method 
        addMessage(){
            if( this.fileChosen !== null ){
                // upload file
                let formData = new FormData();
                formData.append("file", this.file);
                formData.append("type", this.type);

                // if message uploaded is file then send it 
                this.uploadFileEnd(formData);
            }
            else if (this.text.trim() == "") {
                return false;
            } else {
                // send text message
                this.send(this.text, "text");
            }

        },
        // upload file 
        async uploadFileEnd(formData){
            const token = localStorage.getItem('token');
            const headers = {
              Authorization: `Bearer ${token}`,
            };
            await axios.post(`upload-room-file/${this.$route.params.id}`, formData , {headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.fileChosen = "";
                    this.send(
                        res.data.data.file_name,
                        "file",
                        res.data.data.file_url
                    );

                }
            } )
        },
        // argument send method 
        send(msg, type ,url){
            let body = msg;
            if (url != null) {
                body = url;
            }

            this.disabled = true ;
            socket.emit("sendMessage", {
                sender_id: JSON.parse(localStorage.getItem('user')).id,
                sender_type: `User`,
                sender_name: JSON.parse(localStorage.getItem('user')).name,
                avater: this.avatar,
                receiver_id: this.singleRoom.id,
                receiver_type: `Company`,
                room_id: this.$route.params.id,
                type: type,
                body: body,
                // duration: 0,
                // created_at: new Date().toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' }),
            });

            this.messages.push({
                // created_at: date,
                is_sender: 1,
                // original_message: { body: body, type: $type },
                // avatar : this.avatar,
                sent_by_me: true,
                type: type,
                body: body,
                created_dt :new Date().toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' }),
                fileChosen : this.fileChosen

            });

            this.text = "";
            this.$nextTick(() => {
                this.scrollToBottom();
            });
            setTimeout(() => {
                this.disabled = false ;
            }, 700);
            this.$store.dispatch('getchatRooms');

        },
        // scroll to bottom 
        scrollToBottom(){
            const chatSection = this.$refs.chatSection;
            chatSection.scrollTop = chatSection.scrollHeight;
        },
        // get messages 
        getMessages(){
            this.$store.dispatch('getSingleRoomMessages', this.$route.params.id)
            .then( ()=>{
                this.scrollToBottom();
            } )
        },
        // re render the messages and rooms 
        reRenderMessages(room_id){
            this.showLoader = true ;
            this.$store.dispatch('getSingleRoom', room_id)
            this.$store.dispatch('getSingleRoomMessages', room_id )
            .then(()=>{
                this.scrollToBottom();
                this.showLoader = false ;
            })

            this.room_id = room_id ;
            console.log(this.room_id)
            console.log(this.receiver_id)
            console.log(this.user_id)

            this.$router.push(`/singleChat/${room_id}`);
            this.getUnReadMessages();
            
        },
        // handle scroll 
        handleScroll(){ 
            const chat_content = this.$refs.chatSection ;
            if (chat_content.scrollTop === 0) {
                // You've reached the end of the chat content, so you can call your function here
                // this.showLoader = true ;
                console.log('fff')
            }
        },
        // get unread sent messages count 
        async getUnReadMessages(){
            const token = localStorage.getItem('token');
            const headers = {
              Authorization: `Bearer ${token}`,
            };
            await axios.get(`get-room-unseen-messages/${this.$route.params.id}`, {headers})
            .then( (res)=>{
                this.unSeenCount = res.data.data ;
            } )
        }
    },
    computed:{
        rooms(){
            return this.$store.state.rooms;
        },
        singleRoom(){
            return this.$store.state.singleRoom; 
        },
        messages(){
            // Get the messages from the store
            const messages = this.$store.state.messages.data;

            // Check if messages is defined
            if (messages) {
            // Use the reverse() method to reverse the array
            const reversed = messages.slice().reverse();

            // Return the reversed array
            return reversed;
            } else {
            // Handle the case where messages is undefined
            return [];
            }
        }
    },
    components:{
        
    },
    mounted(){
        this.getUnReadMessages();

        socket.on('sendMessageRes', (data) => {
            console.log(data);
            console.log('neeeeeeew messssssageeeeeee');

            //var date = new Date(data.created_at);
            //date.toLocaleString("en-US", { timeZone: "Asia/Riyadh" });
            
            // this.$store.dispatch('getSingleRoomMessages', this.room_id )
            // this.messages.push({
            //     is_sender : 0,
            //     // sent_by_me: false,
            //     // sent_by_me: false,
            //     type: data.type,
            //     body: data.body,
            //     // date: date.toDateString("en-US", { timeZone: "Asia/Riyadh" }),
            //     created_at: data.created_at,
            //     // id:382
            // });
            setTimeout(() => {
                this.reRenderMessages(this.$route.params.id)
            }, 500);
        })
    },
    created(){
        // socket = io('https://cvbroadcast.com:4730');
        console.log(socket.io)
        socket.on('connect', () => {
          console.log('Connected to server');
        });
        socket.on('disconnect', () => {
          console.log('Connected to server');
        });
        socket.on("connect_error", (error) => {
            console.error("Socket.io connection error:", error);
        });
       

        socket.emit("enterChat", {
            user_id: JSON.parse(localStorage.getItem('user')).id,
            user_type: `User`,
            room_id: this.$route.params.id,
        });
        this.sender_image = JSON.parse(localStorage.getItem('user')).image ;

        this.$store.dispatch('getchatRooms');
        
        this.$store.dispatch('getSingleRoom', this.$route.params.id);

        this.getMessages();

        
    }   
}
</script>

<style >
.uploadFile{
    position:absolute;
    width: 100%;
    height: 100%;
    top:0;
    right:0;
    opacity: 0;
}
.p-button {
    color: #ffffff;
    background: transparent;
    border: 1px solid transparent;
}

</style>
<style lang="scss">
.received{
    flex-direction: row-reverse;
    .user_message{
        background-color: #e2eaf3 !important;
    }
}
    .showChats{
        .chat_image{
            width:45px !important;
            height: 45px !important;
        }
        .time{
            bottom: 10px !important;
        }
        .unread_count{
            top: 10px !important;
        }
    }
    .chat_content{
        .chat_header{
            background: #FFF;
            box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.07);
            .chat_image{
                width:70px;
                height: 70px;
                border: 5px solid #E2EAF3;
            }
        }
        .chat_footer{
            background: #FFF;
            box-shadow: 0px -1px 9px 0px rgba(0, 0, 0, 0.06);
            .upload{
                svg{
                    color: #8E8E93;
                    font-size: 25px;
                }
            }
            textarea{
                background-color: #F4F4F4;
            }
            .submit{
                position: absolute;
                left: 10px;
                top: 8px;
            }
        }
    }
    .single_message{
        .user_image{
            width:50px;
            height: 50px;
            img{
                width: 100%;
                height:100%;
                object-fit: cover;
            }
        }
        .user_message{
            border-radius: 0px 32px 32px 20px;
            background: #EEE;
            padding: 20px;
            width: 70%;
            max-height: 70px;
            overflow-y: auto;
            overflow-x:hidden ;
            &.imaged{
                max-height: fit-content;
            }
            p{
                color:#5A5B5B;
                font-size: 14px;
            }
        }
        .time{
            margin-bottom: -45px;
        }
    }
    .sent_by_other{
        flex-direction: row-reverse;
        margin-bottom: 20px;
        .user_message{
            background: #E2EAF3;
        }
    }
    .chat_messages{
        background: rgba(251, 251, 251, 0.97);    
        min-height: 400px;
        height: 400px;
        overflow-y: auto;
    }

</style>