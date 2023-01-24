<template>

<!-- background div -->
<div class="md:hidden ">
<div class="flex flex-col items-center justify-center w-full h-full bg-black/60">
  <!-- background image -->

  <img src="../../../public/video/image00001.png" alt="background" class="object-cover w-full h-full ">

  <!-- background video -->
  

  <!-- pusg -->
    <!-- logo -->
    <div  class="absolute w-[90%] mt-20  ">
            <form v-if=!posted @submit.prevent="createUser(form)" class="flex flex-col items-center w-full mt-4 text-lg rounded-md ">
            
            <input v-model="form.email" type="email" placeholder="Enter your email" class="w-full p-3 mb-2 text-center bg-white rounded ">
            <button type="submit" class="w-full px-4 py-2 mb-2 text-white rounded-lg bg-lightblue hover:bg-darkblue">Join</button>
            <div v-if="error">
                <span class="font-bold text-red bg-black/60"> {{ error.email[0] }}</span>    
            </div>
        </form> 

       

          <!-- social icons  -->
          <div class="flex items-center justify-center w-full space-x-4 ">
            <!-- telegram -->
            <a href="https://www.telegram.com/">
              <img src="../../../public/images/socials/telegram.png" alt="telegram" class="w-8 ">
            </a>
            <a href="https://instagram.com/icecreamcrypto_?igshid=YmMyMTA2M2Y=">
              <img src="../../../public/images/socials/instagram.png" alt="instagram" class="w-8 ">
            </a>
            <a href="https://www.twitter.com/">
              <img src="https://twitter.com/IceCreamCrypto_" alt="twitter" class="w-8">
            </a>
            <!-- tiktok -->
            <a href="https://www.tiktok.com/">
              <img src="../../../public/images/socials/tiktok.png" alt="tiktok" class="w-8 ">
            </a>
            
            
            
        </div>
</div>
</div>

  
</div>

<!-- desktop -->

<!-- full screen video  -->



<header class="relative flex items-center justify-center h-screen overflow-hidden">
  <div class="relative z-30 w-[40%] text-2xl text-white mt-44 rounded-xl">
    
    <form v-if=!posted @submit.prevent="createUser(form)" class="flex flex-col items-center w-full mt-4 text-lg rounded-md ">
            
            <input v-model="form.email" type="email" placeholder="Enter your email" class="w-full p-3 mb-2 text-center bg-white rounded ">
            <button type="submit" class="w-full px-4 py-2 mb-2 text-white rounded-lg bg-lightblue hover:bg-darkblue">Join</button>
            <div v-if="error">
                <span class="font-bold text-red bg-black/60"> {{ error.email[0] }}</span>    
            </div>
        </form> 




  </div>
  <video autoplay loop muted class="absolute z-10 w-auto min-w-full min-h-full scale-50 max-w-none">
    <source src="../../../public/video/ICCComingSoon.mp4" type="video/mp4" />Your browser does not support the video tag.
  </video>
</header>





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