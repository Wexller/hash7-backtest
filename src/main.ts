import './style.css';
import 'primeicons/primeicons.css';

import PrimeVue from 'primevue/config';
import Lara from 'src/presets/lara';
import { createApp } from 'vue';

import App from './App.vue';

const app = createApp(App);
app.use(PrimeVue, {
  pt: Lara,
  unstyled: true,
});
