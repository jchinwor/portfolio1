<template>
  <div class="h-screen w-full  bg-home-img bg-local md: bg-no-repeat bg-cover bg-center" >
      <header class="max-w-6xl lg:mx-auto mx-5 pt-5 ">
      <Nav />
    </header>
    <section class=" text-white max-w-6xl lg:mx-auto mx-5 pt-5">
      <h2 class="text-center mt-40  text-4xl sm:text-7xl">JAMES <span class="font-black text-yellow-400">ANKRAH</span></h2>
    
     
       
       <h1 class="text-white text-center mt-7 text-2xl mb-4">I'm a
      <span class="typed-text text-yellow-200">{{ typeValue }}</span>
      <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
      </h1>


      <div class="flex justify-between">
          <div>
                
                  <svg xmlns="http://www.w3.org/2000/svg" class="" width="90" height="70" viewBox="0 0 103.318 89.392">
              <g id="Group_585" data-name="Group 585" transform="translate(-118 -588.608)">
                <path id="Path_952" data-name="Path 952" d="M-1327.688,608H-1374l33.589,50.77Z" transform="matrix(0.999, 0.035, -0.035, 0.999, 1569.416, 28.93)" fill="rgba(251,191,36,0.23)"/>
                <path id="Path_951" data-name="Path 951" d="M-1283,608h-91l66,80Z" transform="translate(1492 -10)" fill="#fbbf24"/>
              </g>
            </svg>

            

          </div>
          <div class="flex flex-col gap-8 pb-4">
              <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
              <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
              <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />
              <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" />
                     
          </div>       
      </div>
   
    </section>

  </div>



</template>

<script>
import Nav from '../components/Nav.vue'
import { setTimeout } from 'timers';

export default {
  name: 'Home',
  components: {Nav},
  
data: () => {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['UI/UX Designer', 'Web Developer', 'Graphic Designer'],
        typingSpeed: 200,
        erasingSpeed: 100,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;

          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;

          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;

          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;

          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
}


   



</script>

<style scoped>

  h1  span.cursor.typing {
      animation: none;
    }
   h1 span.cursor {
      display: inline-block;
      margin-left: 3px;
      width: 4px;
      background-color: #fff;
      animation: cursorBlink 1s infinite;
    }

/* h1 span.typed-text {
      color: #D2B94B;
    }  */

  @keyframes cursorBlink {
    49% { background-color: #fff; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
  }
</style>
