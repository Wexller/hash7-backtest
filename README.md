# Hash7 Backtest

Этот проект представляет собой инструмент для бэктестирования торговых стратегий на основе сеток. Он написан на TypeScript и Vue и использует Binance API для получения исторических данных.

## Демо

Вы можете посмотреть демо проекта по следующей ссылке: <a href="https://wexller.github.io/hash7-backtest/" target="_blank">https://wexller.github.io/hash7-backtest/</a>
## Основные функции

1. **Выбор актива**: Вы можете выбрать актив (например, BTC/USDT), который вы хотите использовать для бэктеста. Это актив, на котором будет проводиться тестирование выбранной стратегии.

2. **Выбор шага**: Вы можете выбрать временной интервал (например, 15 минут), который будет использоваться для бэктеста. Это шаг, с которым будут собираться исторические данные для тестирования.

3. **Выбор сетки**: Вы можете выбрать сетку, которую вы хотите использовать для бэктеста. Сетка - это набор уровней, на которых ваша стратегия будет открывать и закрывать сделки.

4. **Выбор диапазона дат**: Вы можете выбрать диапазон дат для бэктеста. Это период времени, за который будут собираться исторические данные для тестирования.

После заполнения всех полей, вы можете нажать кнопку "Рассчитать" для
запуска бэктеста. Во время бэктеста вы можете нажать кнопку "Остановить"
и вам выведутся результаты уже полученных данных.

## Установка и запуск

Для установки и запуска проекта вам потребуется Node.js и npm или yarn. Следуйте этим шагам:

1. Клонируйте репозиторий: `git clone <url репозитория>`
2. Перейдите в директорию проекта: `cd <название проекта>`
3. Установите зависимости: `npm install` или `yarn install`
4. Запустите проект: `npm run dev` или `yarn dev`

## Контакты

Если у вас есть вопросы или предложения, пожалуйста, свяжитесь со мной по электронной почте: [maxim.davydov.94@gmail.com](mailto:maxim.davydov.94@gmail.com)

## Лицензия

Этот проект лицензирован под лицензией MIT. Подробности см. в файле [LICENSE](LICENSE).
