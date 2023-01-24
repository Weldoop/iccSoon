<template>

<!-- background div -->
<div class="flex flex-col items-center justify-center w-full h-full bg-black/60">
  <!-- background image -->

  <img src="../../../public/video/image00001.png" alt="background" class="object-cover w-full h-full ">
  
    <!-- logo -->
    <div v-if=!posted>
            <form @submit.prevent="createUser(form)" class="flex flex-col items-center w-full text-lg rounded-md ">
            
            <input v-model="form.email" type="email" placeholder="Enter your email" class="w-full p-3 mb-2 text-center bg-white rounded ">
            <button type="submit" class="w-full px-4 py-2 mb-2 text-white rounded-lg bg-lightblue hover:bg-darkblue">Sign Up</button>
            <div v-if="error">
                <span class="font-bold text-red bg-black/60"> {{ error.email[0] }}</span>    
            </div>
        </form>
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