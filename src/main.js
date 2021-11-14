import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import 'animate.css';





library.add(faPhone);
library.add(faHome);
library.add(faInstagram);
library.add(faFacebook);
library.add(faGithub);
library.add(faTwitter);
// library.add(faGithub);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");


