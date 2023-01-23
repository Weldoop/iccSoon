<template>








  
  
    <video id="videoBG" src="../../../public/video/ICCComingSoon.mp4"
    class="fixed inset-0 object-cover w-full h-full -mt-20"
    autoPlay  
    loop
    muted
      
  >Your browser does not support the video tag.</video>
  
 


   
    <div class="fixed inset-x-0 mx-72 bottom-52" id="signin-success-message">
    
        <div v-if=!posted>
            <form @submit.prevent="createUser(form)" class="flex flex-col items-center w-full text-lg rounded-md ">
            
            <input v-model="form.email" type="email" placeholder="Enter your email" class="w-full p-3 mb-2 text-center bg-white rounded ">
            <button type="submit" class="w-full px-4 py-2 mb-2 text-white rounded-lg bg-lightblue hover:bg-darkblue">Sign Up</button>
            <div v-if="error">
                <span class="font-bold text-red bg-black/60"> {{ error.email[0] }}</span>    
            </div>
        </form>
        </div>

        <div v-else>
            
          <div class="flex flex-col items-center w-full text-lg rounded-md">
<!-- push -->
         
            
            <h1 class="items-center font-bold text-green bg-black/60">Thank you for signing up!</h1>
            <!-- join our telegram -->
            <a href="https://t.me/IcecreamCrypto" target="_blank" class="flex items-center justify-center w-full px-4 py-2 mt-10 mb-2 text-white rounded-lg bg-lightblue hover:bg-darkblue">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12zm2.5 3.5a.5.5 0 00-1 0v3.793l-1.646-1.647a.5.5 0 10-.708.708l2.5 2.5a.5.5 0 00.708 0l2.5-2.5a.5.5 0 10-.708-.708L12.5 9.293V5.5z" clip-rule="evenodd" />
                </svg>
                Join our Telegram
            </a>
            <!-- join our discord -->
            
          </div>

        </div>

    </div>




</template>


<script setup>
import {reactive} from 'vue'
import useEmails from '../emails';

const {createUser, error, posted} = useEmails();

const form = reactive({
  email: ''
})


</script>

<style>

html, body {margin: 0; height: 100%; overflow: hidden}

#videoBG{
  position: fixed;
  z-index: -1;
  width: 100%;
  height: auto;
}

@media (min-aspect-ratio: 16/9) {
  #videoBG {
    width: 100%;
    height:auto;
    
  }
}
@media (max-aspect-ratio: 16/9) {
  #videoBG {
    width: auto;
    height:100%;
  }
}

</style>