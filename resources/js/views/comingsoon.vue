<template>



<div class=" md:hidden">
<div class="flex flex-col items-center justify-center w-full h-full bg-black/60">

   <div  class="absolute w-[90%] mt-32 z-20  ">
        <form v-if=!posted @submit.prevent="createUser(form)" class="flex flex-col items-center w-full mt-4 text-lg rounded-md ">

            <input v-model="form.email" type="email" placeholder="Enter your email" class="w-full p-3 mb-2 text-center bg-white rounded ">
            <button type="submit" class="w-full px-4 py-2 mb-2 text-white rounded-lg bg-lightblue hover:bg-darkblue">Join</button>
            <div v-if="error">
                <span class="font-bold text-red bg-black/60"> {{ error.email[0] }}</span>
            </div>
        </form>

        <div v-else class="flex flex-col items-center w-full mb-4 text-lg rounded-m">
        <span class="font-bold text-white ">Thank you for joining us</span>
        <span class="font-bold text-white ">We will be in touch soon!</span>
        </div>
          <!-- social icons  -->
          <div class="flex items-center justify-center w-full mt-2 space-x-4 ">
            <!-- telegram -->
            <a href="http://T.me/icecreamcryptoclub">
              <img src="../../../public/images/socials/telegram.png" alt="telegram" class="w-8 z-2 ">
            </a>
            <a href="https://instagram.com/icecreamcrypto_?igshid=ZDdkNTZiNTM==">
              <img src="../../../public/images/socials/instagram.png" alt="instagram" class="w-8 ">
            </a>
            <a href="https://twitter.com/IceCreamCrypto_?t=EimG0NdLJIDG3KuJNFDouA&s=09">
              <img src="../../../public/images/socials/twitter.png" alt="twitter" class="w-8">
            </a>
            <!-- tiktok -->
            <a href="https://www.tiktok.com/@icecreamcrypto">
              <img src="../../../public/images/socials/tiktok.png" alt="tiktok" class="w-8 ">
            </a>



        </div>
    </div>

  <img src="../../../public/images/image00002.png" alt="" class="absolute top-0 z-20 w-64 h-64 -mt-10">
  <img src="../../../public/images/image00001.png" alt="" class="absolute bottom-0 z-20 w-20 h-20 mb-2 ">
  <video autoplay loop muted playsinline="true" class="z-10 object-cover" >
    <source src="../../../public/video/ICCComingSoonMobile.mp4" type="video/mp4"  />Your browser does not support the video tag.
  </video>
</div>
</div>



<header class="relative items-center justify-center hidden h-screen overflow-hidden bg-black md:flex ">
  <div class="relative z-30 w-[40%] text-2xl  rounded-xl ">

    <form v-if=!posted @submit.prevent="createUser(form)" class="flex flex-col items-center w-full mb-2 text-lg rounded-md mt-52 ">

            <input v-model="form.email" type="email" placeholder="Enter your email" class="w-full p-3 mb-2 text-center bg-white rounded ">
            <button type="submit" class="w-full px-4 py-2 mb-2 text-white rounded-lg bg-lightblue hover:bg-darkblue">Join</button>
            <div v-if="error">
                <span class="font-bold text-red bg-black/60"> {{ error.email[0] }}</span>
            </div>
    </form>

    <div v-else class="flex flex-col items-center w-full pb-10 mt-40 text-lg rounded-md">
        <span class="font-bold text-green bg-black/60">Thank you for joining us!</span>
    </div>


        <div class="flex items-center justify-center w-full space-x-4 ">
            <!-- telegram -->
            <a href="http://T.me/icecreamcryptoclub">
              <img src="../../../public/images/socials/telegram.png" alt="telegram" class="w-8 ">
            </a>
            <a href="https://instagram.com/icecreamcrypto_?igshid=ZDdkNTZiNTM=">
              <img src="../../../public/images/socials/instagram.png" alt="instagram" class="w-8 ">
            </a>
            <a href="https://twitter.com/IceCreamCrypto_?t=EimG0NdLJIDG3KuJNFDouA&s=09">
              <img src="../../../public/images/socials/twitter.png" alt="twitter" class="w-8">
            </a>
            <!-- tiktok -->
            <a href="https://www.tiktok.com/@icecreamcrypto">
              <img src="../../../public/images/socials/tiktok.png" alt="tiktok" class="w-8 ">
            </a>



        </div>




  </div>


</header>
<!-- relative flex items-center justify-center invisible h-screen overflow-hidden bg-black md:visible -->

<img src="../../../public/images/image00002.png" alt="" class="absolute z-20 hidden transform -translate-x-1/2 md:block -top-12 h-72 w-72 left-1/2 ">
  <img src="../../../public/images/image00001.png" alt="" class="absolute z-20 hidden w-16 h-16 transform -translate-x-1/2 md:block w-18 bottom-2 left-1/2">
  <video autoplay loop muted class="absolute z-10 hidden w-auto max-h-full min-w-full transform -translate-x-1/2 -translate-y-1/2 md:block max-w-none top-1/2 left-1/2">
    <source src="../../../public/video/ICCComingSoonDesktop.mp4" type="video/mp4" />Your browser does not support the video tag.
  </video>


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
.scale-45 {
    --tw-scale-x: .45;
    --tw-scale-y: .45;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
</style>
