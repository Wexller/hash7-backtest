import 'src/assets/style.css';
import 'primeicons/primeicons.css';

import PrimeVue from 'primevue/config';
import toastService from 'primevue/toastservice';
import i18n from 'src/i18n/index.ts';
import Lara from 'src/presets/lara';
import { createApp } from 'vue';

import App from './App.vue';

const app = createApp(App);
app.use(toastService);
app.use(i18n);
app.use(PrimeVue, {
  locale: {
    clear: 'Clear',
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    today: 'Today',
  },
  pt: Lara,
  unstyled: true,
});
app.mount('#app');
