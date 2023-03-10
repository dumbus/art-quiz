import '../sass/style.scss';
import '../index.html';

import styleInput from './modules/styleInput';
import showPages from './modules/showPages';

window.addEventListener('DOMContentLoaded', () => {
  showPages();
  styleInput();

  console.log(`
  Score: 220/220
  [+] Стартовая страница и навигация 20/20
  [+] Настройки 40/40
  [+] Страница категорий 30/30
  [+] Страница с вопросами 50/50
  [+] Страница с результатами 50/50 (открывается при нажатии на результат в блоке с выбором раунда)
  [+] Плавная смена изображений 10/10
  [+] 4 сложные анимации 20/20 (анимация fadeIn для модальных окон;
    анимация "шторок" при открытии настроек; 
    анимация блоков, выезжающих из углов при смене вопроса в игре про художников;
    анимация 3-х вертикальных полос, выезжающих сверху и снизу при смене вопроса в игре про картины;)
  `);
});
