import './bootstrap';

import { createApp } from 'vue';
import router from '../router/index.js';


import app from './app.vue'


createApp(app).use(router).mount("#app")
// pushitt
