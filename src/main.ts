import 'src/assets/style.css';
import 'primeicons/primeicons.css';

import PrimeVue from 'primevue/config';
import toastService from 'primevue/toastservice';
import Lara from 'src/presets/lara';
import { createApp } from 'vue';

import App from './App.vue';

const app = createApp(App);
app.use(toastService);
app.use(PrimeVue, {
  locale: {
    clear: 'Очистить',
    dayNames: [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    monthNames: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    monthNamesShort: [
      'Янв',
      'Фев',
      'Мар',
      'Апр',
      'Май',
      'Июн',
      'Июл',
      'Авг',
      'Сен',
      'Окт',
      'Ноя',
      'Дек',
    ],
    today: 'Сегодня',
  },
  pt: Lara,
  unstyled: true,
});
app.mount('#app');
