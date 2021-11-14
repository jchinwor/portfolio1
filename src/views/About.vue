<template>
  <div class=" bg-cover bg-center  bg-local bg-no-repeat" style="background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/benefitbg.png)">
           <div class="flex justify-end  ">
            <svg xmlns="http://www.w3.org/2000/svg" @click="closeHandler" class="h-9 w-9 md:fixed m-10  text-gray-200 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    <div class="max-w-6xl lg:mx-auto mx-5 pt-5 ">
        <div class="text-white mt-20 text-center ">
           <p class="text-gray-200 text-sm font-bold" >Get to Know me</p>
           <h1 class="text-4xl font-bold pt-4">About Me</h1>
           <div class="flex justify-center p-4 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
              </svg>
           </div>
            <div  class="flex flex-col lg:flex-row mt-10 ">
               <div class="flex  flex-2  justify-center lg:justify-start">
                  <img src="/img/aboutimg.png" alt="" class=" h-72 w-72 border-black border-opacity-10 border-2 p-1.5 rounded-full lg:h-4/5 lg:w-auto lg:rounded-md md:rounded-full md:h-72 md:w-72">
               </div>
                <div class="flex-1 text-left lg:-ml-16">
                  <h3 class="text-yellow-400 text-2xl mt-4">Hello</h3>
                  <h2 class="mt-4 leading-loose tracking-widest font-bold">I'm James Ankrah, a Web Developer, UI/UX Designer and Graphic designer </h2>
                  <p class="mt-4 leading-loose tracking-widest text-sm text-gray-400">
                    I am a freelancer based in the Accra Ghana and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
                  </p>
                    <div class="bg-gray-100 w-full h-px mt-7 mb-10 opacity-10"></div>
                    <div class="flex flex-col pr-7 text-sm tracking-widest mb-7">
                          <div class="flex flex-col  md:flex-row md:justify-between mb-4 ">
                            <p class="mb-4 md:mb-0">Name: <span class="text-gray-400">James Ankrah</span></p>
                            <p>Email: <span class="text-gray-400">jankrah@gmail.com</span></p>

                          </div>
                          <div>
                            <p>From: <span class="text-gray-400">Ghana</span></p>
                          </div>
                    </div>
                    <div class="flex items-center gap-3  lg:mt-12">
                        <button class=" tracking-widest font-bold text-black cursor-pointer bg-yellow-400 p-4 rounded-full text-xs">Download CV</button>
                        <div class="flex flex-col sm:flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                        <div class="flex gap-6">
                          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" class="about_social"/>
                          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="about_social"/>
                          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" class="about_social"/>
                          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" class="about_social"/>
                        </div>
                    </div> 
                </div>
            </div> 

                    <!-- Skillset --->
                
                    <div class="pb-12 lg:-mt-20"> 
                      <div class="text-center py-4 mb-6">
                        <p class=" text-gray-400 tracking-widest py-4 font-bold">My level of knowledge in some tools</p>
                         <h2 class="text-4xl">My Skills</h2>
                      </div>
                      <div class="text-xs sm:text-base flex flex-col md:grid grid-cols-2 gap-8">
                        <div>
                          
                            <div class="flex justify-between">
                              <p>UI/UX</p>
                              <p class="mr-24">80%</p>
                            </div>
                            <div class="flex">
                            <div class="w-4/5 bg-yellow-400 h-2 rounded-md"></div>
                            <div class="w-1/5 bg-gray-800 h-2 rounded-md"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                              <p>HTML / CSS</p>
                              <p class="mr-16">90%</p>
                            </div>
                            <div class="flex">
                            <div class="w-11/12 bg-yellow-400 h-2 rounded-md"></div>
                            <div class="w-1/12 bg-gray-800 h-2 rounded-md"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                              <p>Graphic Design</p>
                              <p class="mr-40">60%</p>
                            </div>
                            <div class="flex">
                            <div class="w-2/3 bg-yellow-400 h-2 rounded-md "></div>
                            <div class="w-1/3 bg-gray-800 h-2 rounded-md"></div>
                            </div>
                        </div>
                        <div>
                          
                            <div class="flex justify-between">
                              <p>Javascript</p>
                              <p class="mr-24">80%</p>
                            </div>
                            <div class="flex">
                            <div class="w-4/5 bg-yellow-400 h-2 rounded-md"></div>
                            <div class="w-1/5 bg-gray-800 h-2 rounded-md"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                              <p>Vue Js</p>
                              <p class="mr-36">75%</p>
                            </div>
                            <div class="flex">
                            <div class="w-10/12 bg-yellow-400 h-2 rounded-md"></div>
                            <div class="w-4/12 bg-gray-800 h-2 rounded-md"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                              <p>Photoshop/XD</p>
                              <p class="mr-40">64%</p>
                            </div>
                            <div class="flex">
                            <div class="w-4/5 bg-yellow-400 h-2 rounded-md"></div>
                            <div class="w-2/5 bg-gray-800 h-2 rounded-md"></div>
                            </div>
                        </div>   
                    </div>
                    
                  </div>
                                          <!--- Testimonials --->

                  <div class="relative py-20 2xl:py-40 bg-transparent overflow-hidden  tracking-widest">
                      <img class="absolute top-0 right-0 -mr-80 -mt-80" src="zospace-assets/lines/circle.svg" alt="">
                      <img class="hidden lg:block absolute bottom-0 left-0 w-96" src="zospace-assets/lines/half-double-circle.svg" alt="">
                      <div class="relative container px-4 mx-auto">
                        <div class="max-w-5xl mx-auto">
                          <div class="text-center mb-20 lg:mb-32">
                            <span class="text-lg text-gray-400 font-bold">Testimonials</span>
                            <h2 class="mt-4 text-5xl font-bold font-heading text-white">What people say</h2>
                          </div>
                          <div class="relative flex flex-wrap -mx-5 mb-20">
                            <div class="w-full lg:w-1/2 px-5 mb-12 lg:mb-0">
                              <div class="flex -mx-4 lg:mx-0">
                                <div class="w-1/3 px-4">
                                  <img class=" w-32 h-32  mx-auto rounded-full object-cover object-top" src="/img/j1.jpg" alt="">
                                </div>
                                <div class="w-2/3 px-4">
                                  <div class="relative inline-block mb-8 p-10 bg-gray-800 rounded-lg">
                                    <div class="absolute top-0 left-0 -ml-5 mt-10 w-14 h-14 bg-gray-800" style="clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);"></div>
                                    <img class="absolute top-0 right-0 md:-mr-6 -mt-6 lg:mt-14" src="zospace-assets/images/quote-circle.svg" alt="">
                                    <p class="mb-8 text-sm text-left text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eveniet perspiciatis soluta vel harum quae ipsum ut quis laudantium perferendis.</p>
                                    <div class="flex mb-4">
                                      <img class="mr-1" src="zospace-assets/images/star-full.svg" alt="">
                                      <img class="mr-1" src="zospace-assets/images/star-full.svg" alt="">
                                      <img class="mr-1" src="zospace-assets/images/star-full.svg" alt="">
                                      <img class="mr-1" src="zospace-assets/images/star-full.svg" alt="">
                                      <img src="zospace-assets/images/star-empty.svg" alt="">
                                    </div>
                                    <h3 class="mb-1 text-2xl text-white font-bold">Prince Joe</h3>
                                    <p class="text-white">JC Soft</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="w-full lg:w-1/2 px-5">
                              <div class="flex -mx-4 lg:mx-0">
                                <div class="w-1/3 px-4">
                                  <img class="w-full h-32 mx-auto rounded-full object-cover object-top" src="/img/j2.jpg" alt="">
                                </div>
                                <div class="w-2/3 px-4">
                                  <div class="relative inline-block mb-8 p-10 bg-gray-800 rounded-lg">
                                    <div class="absolute top-0 right-0 left-0 -ml-5 mt-10 w-14 h-14 bg-gray-800" style="clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);"></div>
                                    <img class="absolute top-0 right-0 md:-mr-6 -mt-6 lg:mt-14" src="zospace-assets/images/quote-circle.svg" alt="">
                                    <p class="mb-8 text-sm text-left  text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eveniet perspiciatis soluta vel harum quae ipsum ut quis laudantium perferendis.</p>
                                    <div class="flex mb-4">
                                      <img class="mr-1" src="zospace-assets/images/star-full.svg" alt="">
                                      <img class="mr-1" src="zospace-assets/images/star-full.svg" alt="">
                                      <img class="mr-1" src="zospace-assets/images/star-full.svg" alt="">
                                      <img class="mr-1" src="zospace-assets/images/star-full.svg" alt="">
                                      <img src="zospace-assets/images/star-half.svg" alt="">
                                    </div>
                                    <h3 class="mb-1 text-2xl text-white font-bold">Mark Smith</h3>
                                    <p class="text-white">P..ION</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                       
                        </div>
                      </div>
              </div>
        </div>
  </div>
  </div>

</template>

<script>
import { useRouter, useRoute } from 'vue-router'

export default {

  setup(){
    const router = useRouter()
    const route = useRoute()

    const closeHandler = () => {
       router.push({ name: 'Home'})
       console.log('click works')
    }

    return{
      route,
      router,
      closeHandler
    }
  }

}
</script>

<style>

</style>