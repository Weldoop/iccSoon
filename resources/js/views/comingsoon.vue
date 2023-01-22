<template>







<div className='absolute min-h-screen min-w-full'>
  
  <div className='flex flex-col -mt-24'> 
    <video src="../../../public/video/ICCComingSoon.mp4"
    autoPlay  
    loop
    muted
    className='flex-1 object-contain object-center  ' 
  >Your browser does not support the video tag.</video>
  
 
<div class="fixed inset-0 flex items-center mx-auto top-80 sm:w-3/4 md:w-2/4" id="signin-success-message">
  <form @submit.prevent="createUser(form)" class="flex flex-col items-center w-full text-lg rounded-md ">
    
    <input v-model="form.email" type="email" placeholder="Enter your email" class="w-full p-3 mb-2 text-center bg-white rounded ">
    <button type="submit" class="w-full px-4 py-2 mb-2 text-white rounded-lg bg-lightblue hover:bg-darkblue">Sign Up</button>
    <div v-if="error">
        <span class="font-bold text-red bg-black/60"> {{ error.email[0] }}</span>    
    </div>
  </form>
</div>


  </div>
</div>

</template>


<script setup>
import {reactive} from 'vue'
import useEmails from '../emails';

const {createUser, error} = useEmails();

const form = reactive({
  email: ''
})


</script>

<style>

html, body {margin: 0; height: 100%; overflow: hidden}


</style>