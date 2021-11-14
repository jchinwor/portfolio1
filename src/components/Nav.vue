<template>
    <nav class="text-white flex justify-between py-4 mt-2">
      <div class="flex items-center">
        <img src="/img/logo.png" class="w-auto h-8" alt="">
        <span class="text-xl font-bold text-yellow-400">SOFT</span>
      </div>
         <svg xmlns="http://www.w3.org/2000/svg" @click="toggleNav" ref="burger" class="sm:hidden cursor-pointer h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
         </svg>
           <div class="px-4 cursor-pointer hidden " ref="close" @click="closeHandler">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
          </div>
        
        <ul class="hidden sm:flex gap-6 flex-1 justify-end items-center text-sm">

          <li>
             <router-link to="/">Home</router-link>
          </li>
          <li>
             <router-link :to="{name:'About'}">About</router-link>
          </li>
          <li>
             <router-link :to="{name:'Services'}">Services</router-link>
          </li>
          <li>
             <router-link :to="{name:'Portfolio'}">Portfolio</router-link>
          </li>
          <li>
             <router-link :to="{name:'Contact'}">Contact</router-link>
          </li>
        </ul>
    </nav>
  <ul :class="{'hidden': !showMenu}" ref="mobilenav" class="z-100 uppercase flex flex-col leading-loose divide-y-4 divide-black text-center  divide-solid py-3  flex-1  tracking-widest text-black  bg-yellow-100 text-sm ">
         
          <li>
             <router-link to="/">Home</router-link>
          </li>
         
          <li>
             <router-link :to="{name:'About'}">About</router-link>
          </li>
          <li>
             <router-link :to="{name:'Services'}">Services</router-link>
          </li>
          <li>
             <router-link :to="{name:'Portfolio'}">Portfolio</router-link>
          </li>
          <li>
             <router-link :to="{name:'Contact'}">Contact</router-link>
          </li>
        </ul>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
      setup(){
         const showMenu = ref(false)
         const close = ref(null)
         const burger = ref(null)
         const mobilenav = ref(null)

         const toggleNav = () =>{
        burger.value.classList.add('hidden')
        close.value.classList.remove('hidden')
        showMenu.value = !showMenu.value  
      //   mobilenav.value.classList.add('animate__animated animate__backInDown')
          
         }

      const closeHandler = () =>{
        showMenu.value = !showMenu.value
        burger.value.classList.remove('hidden')      
        close.value.classList.add('hidden')      
       }

      return{
        mobilenav,
        showMenu,
        toggleNav,
        closeHandler,
        close,
        burger,
      }
      }
}
</script>

<style>

</style>