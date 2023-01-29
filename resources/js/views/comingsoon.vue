<template>

<!-- mobile view with video  -->

<div class="md:hidden ">
<div class="flex flex-col items-center justify-center w-full h-full bg-black/60">

 <video autoplay loop muted class="z-10">
    <source src="../../../public/video/ICCComingSoonMobile.mp4" type="video/mp4" />Your browser does not support the video tag.
  </video>
  
</div>
</div>



<header class="relative flex items-center justify-center invisible h-screen overflow-hidden bg-black md:visible ">
  <div class="relative z-30 w-[40%] text-2xl  mt-56 rounded-xl">
    
    <form v-if=!posted @submit.prevent="createUser(form)" class="flex flex-col items-center w-full text-lg rounded-md mt-28 ">
            
            <input v-model="form.email" type="email" placeholder="Enter your email" class="w-full p-3 mb-2 text-center bg-white rounded ">
            <button type="submit" class="w-full px-4 py-2 mb-2 text-white rounded-lg bg-lightblue hover:bg-darkblue">Join</button>
            <div v-if="error">
                <span class="font-bold text-red bg-black/60"> {{ error.email[0] }}</span>    
            </div>
    </form> 

    <div v-else class="flex flex-col items-center w-full pb-10 mt-40 text-lg rounded-md">
        <span class="font-bold text-green bg-black/60">Thank you for joining us!</span>
    </div>


        <div class="flex items-center justify-center w-full mt-24 space-x-4 ">
            <!-- telegram -->
            <a href="https://www.telegram.com/">
              <img src="../../../public/images/socials/telegram.png" alt="telegram" class="w-16 ">
            </a>
            <a href="https://instagram.com/icecreamcrypto_?igshid=YmMyMTA2M2Y=">
              <img src="../../../public/images/socials/instagram.png" alt="instagram" class="w-16 ">
            </a>
            <a href="https://twitter.com/IceCreamCrypto_/">
              <img src="../../../public/images/socials/twitter.png" alt="twitter" class="w-16">
            </a>
            <!-- tiktok --> 
            <a href="https://www.tiktok.com/">
              <img src="../../../public/images/socials/tiktok.png" alt="tiktok" class="w-16 ">
            </a>
            
            
            
        </div>

     
        

  </div>
  <video autoplay loop muted class="absolute z-10 invisible w-auto min-w-full min-h-full scale-50 md:visible max-w-none">
    <source src="../../../public/video/ICCComingSoonDesktop.mp4" type="video/mp4" />Your browser does not support the video tag.
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


.scale-50 {
    --tw-scale-x: .4;
    --tw-scale-y: .4;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
</style>