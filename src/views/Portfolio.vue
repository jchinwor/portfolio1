<template>
      <div class="  bg-cover bg-center  bg-local bg-no-repeat" style="background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/benefitbg.png)">
           <div class="flex justify-end  ">
            <svg xmlns="http://www.w3.org/2000/svg" @click="closeHandler" class="h-9 w-9 md:fixed m-10  text-gray-200 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    <div class="max-w-6xl lg:mx-auto mx-5 md:pt-5 ">
        <div class="text-white md:mt-20 text-center ">
           <p class="text-gray-200 text-sm" >Featured Works</p>
           <h1 class="text-4xl font-bold pt-4">Portfolio</h1>
        </div>
        <div class="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4 py-10 text-center">
                            <!-- portfolio Jmockup -->
                <div class="shadow-md rounded-md overflow-hidden bg-white " style="width: 350px">
                  <div class="">      
                    <img
                        src="/assets/img/portfolio/jchinwormockup.png"
                        class=" hover:cursor-pointer hover:bg-red-200"
                        alt=""
                    />
                  </div>
                <div class="p-4">
                    <h5 class="text-xl font-semibold mb-2">Explore</h5>

                    <p class="mb-4">
                    Illustration 
                    </p>
                    
                    <button
                    class="
                        
                        text-white
                        font-bold
                        uppercase
                        text-xs
                        px-4
                        py-2
                        rounded
                        shadow
                        hover:shadow-md
                        outline-none
                        focus:outline-none
                        mr-1
                        mb-1
                        bg-yellow-400
                        hover:bg-yellow-500
                        transform hover:scale-110 
                        transition-all ease-out duration-150 
                    "
                    type="button"
                     @click="jmockupClick"
                    >
                     <svg xmlns="http://www.w3.org/2000/svg" class="text-white opacity-100 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                </div>
                </div>
                 <!-- portfolio resto -->
                <div class="shadow-md rounded-md overflow-hidden bg-white" style="width: 350px">
                <img
                    src="/assets/img/portfolio/resto.png"
                    class=""
                    alt=""
                />

                <div class="p-4">
                    <h5 class="text-xl font-semibold mb-2">Finish</h5>

                    <p class="mb-4">
                    Identity
                    </p>

                    <button
                    class="
                        bg-yellow-400
                        text-white
                        active:bg-purple-600
                        font-bold
                        uppercase
                        text-xs
                        px-4
                        py-2
                        rounded
                        shadow
                        hover:shadow-md
                        outline-none
                        focus:outline-none
                        mr-1
                        mb-1
                        hover:bg-yellow-500
                        transform hover:scale-110 
                        transition-all ease-out duration-150 
                    "
                    type="button"
                    @click="restoClick"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="text-white opacity-100 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                </div>
                </div>
                <!-- Card -->
                 <!-- portfolio jagma foundation -->
                <div class="shadow-md rounded-md overflow-hidden bg-white" style="width: 350px">
                <img
                    src="/assets/img/portfolio/jagma.png"
                    class=""
                    alt=""
                />

                <div class="p-4">
                    <h5 class="text-xl font-semibold mb-2">Web Dev</h5>

                    <p class="mb-4">
                    JagmaMF
                    </p>

                    <button
                    class="
                        
                        text-white
                        active:bg-purple-600
                        font-bold
                        uppercase
                        text-xs
                        px-4
                        py-2
                        rounded
                        shadow
                        hover:shadow-md
                        outline-none
                        focus:outline-none
                        mr-1
                        mb-1
                       bg-yellow-400
                        hover:bg-yellow-500
                        transform hover:scale-110 
                        transition-all ease-out duration-150
                    "
                    type="button"
                    @click="jagmaClick"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="text-white opacity-100 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                </div>
                </div>
                
                 <!-- portfolio SMV -->
                <div class="shadow-md rounded-md overflow-hidden bg-white" style="width: 350px">
                <img
                    src="/assets/img/portfolio/smv.png"
                    class=""
                    alt=""
                />

                <div class="p-4">
                    <h5 class="text-xl font-semibold mb-2">Web Dev</h5>

                    <p class="mb-4">
                    SMV
                    </p>

                    <button
                    class="
                        
                        text-white
                        active:bg-purple-600
                        font-bold
                        uppercase
                        text-xs
                        px-4
                        py-2
                        rounded
                        shadow
                        hover:shadow-md
                        outline-none
                        focus:outline-none
                        mr-1
                        mb-1
                      bg-yellow-400
                        hover:bg-yellow-500
                        transform hover:scale-110 
                        transition-all ease-out duration-150
                    "
                    type="button"
                    @click="smvClick"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="text-white opacity-100 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                </div>
                </div>
                
                 <!-- portfolio Skymedia -->
                <div class="shadow-md rounded-md overflow-hidden bg-white" style="width: 350px">
                <img
                    src="/assets/img/portfolio/skymedia.png"
                    class=""
                    alt=""
                />
                <div class="p-4">
                    <h5 class="text-xl font-semibold mb-2">Graphics</h5>
                    <p class="mb-4">
                    Banner  
                    </p>
                    <button
                    class="
                        text-white
                        active:bg-purple-600
                        font-bold
                        uppercase
                        text-xs
                        px-4
                        py-2
                        rounded
                        shadow
                        hover:shadow-md
                        outline-none
                        focus:outline-none
                        mr-1
                        mb-1
                       bg-yellow-400
                        hover:bg-yellow-500
                        transform hover:scale-110 
                        transition-all ease-out duration-150
                    "
                    type="button"
                    @click="skymediaClick"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="text-white opacity-100 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                </div>
                </div>
                
                 <!-- portfolio Revival-->
                <div class="shadow-md rounded-md overflow-hidden bg-white" style="width: 350px">
                <img
                    src="/assets/img/portfolio/revival.png"
                    class=""
                    alt=""
                />

                <div class="p-4">
                    <h5 class="text-xl font-semibold mb-2">Graphics</h5>

                    <p class="mb-4">
                    Flyer 
                    </p>

                    <button
                    class="
                        
                        text-white
                        active:bg-purple-600
                        font-bold
                        uppercase
                        text-xs
                        px-4
                        py-2
                        rounded
                        shadow
                        hover:shadow-md
                        outline-none
                        focus:outline-none
                        mr-1
                        mb-1
                       bg-yellow-400
                        hover:bg-yellow-500
                        transform hover:scale-110 
                        transition-all ease-out duration-150
                    "
                    type="button"
                    @click="revivalClick"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="text-white opacity-100 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                </div>
                </div>
                <!-- Card -->

        </div>

               
    </div>
    
    </div>

                                                 <!-- MODALS-->


<!-- Modal Jagma-->
<div v-if="jagmaModal"  @click.self="closeClick" class="min-w-screen bg-gray-900 bg-opacity-70 animated fadeIn faster overflow-y-scroll  fixed  left-0 bottom-0 top-0  justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover  " >
    <div class="w-full  max-w-4xl bottom-8 top-8  p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
      <div class="flex justify-end pb-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" @click="closeClick" class="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <!--content-->
      <div class="">
        <!--body-->
        <div class="text-center  flex-auto items-center justify-center tracking-widest">    
          <h2 class="text-xl font-bold py-2 ">JAGMA MEDICAL FOUNDATION</h2>
           <div class="flex justify-center">
              <img src="/assets/img/portfolio/jagma.png" class="w-3/5 h-3/5" alt="">
           </div>
           <div class="py-4 md:px-20 text-gray-600  text-sm">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita doloremque obcaecati cumque ab laboriosam earum dolores? Totam recusandae maiores unde tempore consectetur quibusdam exercitationem, illo fugit neque commodi eveniet quo blanditiis nam, eaque nesciunt et deleniti vero repudiandae fugiat! Aliquid?</p>
              <div class="py-4">
                <p><b>Client:</b> Jagma</p>
              <p><b>Category:</b> Website</p>
              </div>
              <button class="text-white bg-yellow-600 p-4 rounded pointer-cursor" @click="closeClick">
                <div class="flex">
                   <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                  <p class="tracking-widest">Close Project</p> 
                </div>
                   </button>
           </div>
        </div>
        <!--footer-->
       
      </div>
    </div>
  </div>

<!-- Modal JenkMockup-->
<div v-if="jenModal" @click.self="closeClick" class="min-w-screen bg-gray-900 bg-opacity-70 animated fadeIn faster overflow-y-scroll  fixed  left-0 bottom-0 top-0  justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover  " >
    <div class="w-full  max-w-4xl bottom-8 top-8  p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
      <div class="flex justify-end pb-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" @click="closeClick" class="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <!--content-->
      <div class="">
        <!--body-->
        <div class="text-center  flex-auto items-center justify-center tracking-widest">    
          <h2 class="text-xl font-bold py-2 ">JC Soft Mockup</h2>
           <div class="flex justify-center">
              <img src="/assets/img/portfolio/jchinwormockup.png" class="w-3/5 h-3/5" alt="">
           </div>
           <div class="py-4 md:px-20 text-gray-600  text-sm">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita doloremque obcaecati cumque ab laboriosam earum dolores? Totam recusandae maiores unde tempore consectetur quibusdam exercitationem, illo fugit neque commodi eveniet quo blanditiis nam, eaque nesciunt et deleniti vero repudiandae fugiat! Aliquid?</p>
              <div class="py-4">
                <p><b>Client:</b> Netvision</p>
              <p><b>Category:</b> Brand Identity</p>
              </div>
              <button class="text-white bg-yellow-600 p-4 rounded pointer-cursor" @click="closeClick">
                <div class="flex">
                   <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                  <p class="tracking-widest">Close Project</p> 
                </div>
                   </button>
           </div>
        </div>
        <!--footer-->
       
      </div>
    </div>
  </div>

<!-- Modal skymedia-->
<div v-if="skymediaModal"  @click.self="closeClick" class="min-w-screen bg-gray-900 bg-opacity-70 animated fadeIn faster overflow-y-scroll  fixed  left-0 bottom-0 top-0  justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover  " >
    <div class="w-full  max-w-4xl bottom-8 top-8  p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
      <div class="flex justify-end pb-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" @click="closeClick" class="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <!--content-->
      <div class="">
        <!--body-->
        <div class="text-center  flex-auto items-center justify-center tracking-widest">    
          <h2 class="text-xl font-bold py-2 ">Skymedia media Photography and Videography</h2>
           <div class="flex justify-center">
              <img src="/assets/img/portfolio/skymedia.png" class="w-3/5 h-3/5" alt="">
           </div>
           <div class="py-4 md:px-20 text-gray-600  text-sm">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita doloremque obcaecati cumque ab laboriosam earum dolores? Totam recusandae maiores unde tempore consectetur quibusdam exercitationem, illo fugit neque commodi eveniet quo blanditiis nam, eaque nesciunt et deleniti vero repudiandae fugiat! Aliquid?</p>
              <div class="py-4">
                <p><b>Client:</b> Skymedia</p>
              <p><b>Category:</b> Graphic</p>
              </div>
              <button class="text-white bg-yellow-600 p-4 rounded pointer-cursor" @click="closeClick">
                <div class="flex">
                   <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                  <p class="tracking-widest">Close Project</p> 
                </div>
                   </button>
           </div>
        </div>
        <!--footer-->
       
      </div>
    </div>
  </div>

<!-- Modal revival-->
<div v-if="revivalModal"  @click.self="closeClick" class="min-w-screen bg-gray-900 bg-opacity-70 animated fadeIn faster overflow-y-scroll  fixed  left-0 bottom-0 top-0  justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover  " >
    <div class="w-full  max-w-4xl bottom-8 top-8  p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
      <div class="flex justify-end pb-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" @click="closeClick" class="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <!--content-->
      <div class="">
        <!--body-->
        <div class="text-center  flex-auto items-center justify-center tracking-widest">    
          <h2 class="text-xl font-bold py-2 ">Revival Flyer</h2>
           <div class="flex justify-center">
              <img src="/assets/img/portfolio/revival.png" class="w-3/5 h-3/5" alt="">
           </div>
           <div class="py-4 md:px-20 text-gray-600  text-sm">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita doloremque obcaecati cumque ab laboriosam earum dolores? Totam recusandae maiores unde tempore consectetur quibusdam exercitationem, illo fugit neque commodi eveniet quo blanditiis nam, eaque nesciunt et deleniti vero repudiandae fugiat! Aliquid?</p>
              <div class="py-4">
                <p><b>Client:</b> Pencoste</p>
              <p><b>Category:</b> Graphic</p>
              </div>
              <button class="text-white bg-yellow-600 p-4 rounded pointer-cursor" @click="closeClick">
                <div class="flex">
                   <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                  <p class="tracking-widest">Close Project</p> 
                </div>
                   </button>
           </div>
        </div>
        <!--footer-->
       
      </div>
    </div>
  </div>

<!-- Modal Resto-->
<div v-if="restoModal" ref="closeModal" @click.self="closeClick" class="min-w-screen bg-gray-900 bg-opacity-70 animated fadeIn faster overflow-y-scroll  fixed  left-0 bottom-0 top-0  justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover  " >
    <div class="w-full  max-w-4xl bottom-8 top-8  p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
      <div class="flex justify-end pb-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" @click="closeClick" class="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <!--content-->
      <div class="">
        <!--body-->
        <div class="text-center  flex-auto items-center justify-center tracking-widest">    
          <h2 class="text-xl font-bold py-2 ">Resto</h2>
           <div class="flex justify-center">
              <img src="/assets/img/portfolio/resto.png" class="w-3/5 h-3/5" alt="">
           </div>
           <div class="py-4 md:px-20 text-gray-600  text-sm">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita doloremque obcaecati cumque ab laboriosam earum dolores? Totam recusandae maiores unde tempore consectetur quibusdam exercitationem, illo fugit neque commodi eveniet quo blanditiis nam, eaque nesciunt et deleniti vero repudiandae fugiat! Aliquid?</p>
              <div class="py-4">
                <p><b>Client:</b> Mike Restaurant</p>
              <p><b>Category:</b> Website</p>
              </div>
              <button class="text-white bg-yellow-600 p-4 rounded pointer-cursor" @click="closeClick">
                <div class="flex">
                   <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                  <p class="tracking-widest">Close Project</p> 
                </div>
                   </button>
           </div>
        </div>
        <!--footer-->
       
      </div>
    </div>
  </div>

<!-- Modal SMV-->
<div v-if="smvModal" ref="closeModal" @click.self="closeClick" class="min-w-screen bg-gray-900 bg-opacity-70 animated fadeIn faster overflow-y-scroll  fixed  left-0 bottom-0 top-0  justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover  " >
    <div class="w-full  max-w-4xl bottom-8 top-8  p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
      <div class="flex justify-end pb-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" @click="closeClick" class="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <!--content-->
      <div class="">
        <!--body-->
        <div class="text-center  flex-auto items-center justify-center tracking-widest">    
          <h2 class="text-xl font-bold py-2 ">SMV</h2>
           <div class="flex justify-center">
              <img src="/assets/img/portfolio/smv.png" class="w-3/5 h-3/5" alt="">
           </div>
           <div class="py-4 md:px-20 text-gray-600  text-sm">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita doloremque obcaecati cumque ab laboriosam earum dolores? Totam recusandae maiores unde tempore consectetur quibusdam exercitationem, illo fugit neque commodi eveniet quo blanditiis nam, eaque nesciunt et deleniti vero repudiandae fugiat! Aliquid?</p>
              <div class="py-4">
                <p><b>Client:</b> Smv Restate</p>
              <p><b>Category:</b> Website</p>
              </div>
              <button class="text-white bg-yellow-600 p-4 rounded pointer-cursor" @click="closeClick">
                <div class="flex">
                   <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                  <p class="tracking-widest">Close Project</p> 
                </div>
                   </button>
           </div>
        </div>
        <!--footer-->
       
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter, useRoute } from 'vue-router'
  
  export default {

    setup(){
      const router = useRouter()
    const route = useRoute()
      const jagmaModal = ref(false)
      const jenModal = ref(false)
      const restoModal = ref(false)
      const revivalModal = ref(false)
      const skymediaModal = ref(false)
      const smvModal = ref(false)

       const closeHandler = () => {
       router.push({ name: 'Home'})
       console.log('click works')
    }

       const closeClick = () =>{
          jagmaModal.value = false
          jenModal.value = false
          restoModal.value = false
          revivalModal.value = false
          skymediaModal.value = false
          smvModal.value = false
        // closeModal.value.classList.add('hidden')               
         }
       const jagmaClick = () =>{
          jagmaModal.value = !jagmaModal.value              
         }
       const jmockupClick = () =>{
          jenModal.value = !jenModal.value              
         }
       const restoClick = () =>{
          restoModal.value = !restoModal.value              
         }
       const revivalClick = () =>{
          revivalModal.value = !revivalModal.value              
         }
       const skymediaClick = () =>{
          skymediaModal.value = !skymediaModal.value              
         }
       const smvClick = () =>{
          smvModal.value = !smvModal.value              
         }

      return{
         route,
      router,
      closeHandler,
        closeClick,
        revivalClick,
        restoClick,
        skymediaClick,
        restoModal,
        revivalModal,
        jagmaModal,
        smvModal,
        jenModal,
        skymediaModal,
        jagmaClick,
        jmockupClick,
        smvClick
      }
    }
  }
 
</script>

<style>

</style>