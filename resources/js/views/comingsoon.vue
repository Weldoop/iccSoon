<template>

<!-- background div -->
<div class="flex flex-col items-center justify-center w-full h-full bg-black/60">
  <!-- background image -->

  <img src="../../../public/video/image00001.png" alt="background" class="object-cover w-full h-full ">

  <!-- background video -->
  

  <!-- pusg -->
    <!-- logo -->
    <div  class="absolute w-[90%] mt-24  ">
            <form v-if=!posted @submit.prevent="createUser(form)" class="flex flex-col items-center w-full mt-4 text-lg rounded-md ">
            
            <input v-model="form.email" type="email" placeholder="Enter your email" class="w-full p-3 mb-2 text-center bg-white rounded ">
            <button type="submit" class="w-full px-4 py-2 mb-2 text-white rounded-lg bg-lightblue hover:bg-darkblue">Join</button>
            <div v-if="error">
                <span class="font-bold text-red bg-black/60"> {{ error.email[0] }}</span>    
            </div>
        </form> 

       

          <!-- social icons  -->
          <div class="flex items-center justify-center w-full -mt-2 space-x-4 ">
            <!-- telegram -->
            <a href="https://www.telegram.com/">
              <img src="../../../public/images/socials/telegram.png" alt="telegram" class="w-8 ">
            </a>
            <a href="https://www.instagram.com/">
              <img src="../../../public/images/socials/instagram.png" alt="instagram" class="w-8 ">
            </a>
            <a href="https://www.twitter.com/">
              <img src="../../../public/images/socials/twitter.png" alt="twitter" class="w-8">
            </a>
            <!-- tiktok -->
            <a href="https://www.tiktok.com/">
              <img src="../../../public/images/socials/tiktok.png" alt="tiktok" class="w-8 ">
            </a>
            
            
            
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



</style>