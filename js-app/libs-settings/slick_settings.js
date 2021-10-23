// Slick Slider
function slider(slider,sliderFor) {
  if (slider.length) {
    slider.slick({
      slidesToShow: 1, // Сколько слайдов показывать на экране
      slidesToScroll: 1, // Сколько слайдов пролистывать за раз
      asNavFor: sliderFor, // Связь со слайдерами
      dots: true, // Пагинация
      arrows: true, // Стрелки
      speed: 500, // Скорость перехода слайдов
      autoplay: false, // Автопрокрутка
      autoplaySpeed: 2000, // Скорость автопрокрутки
      centerMode: false, // Задает класс .slick-center слайду в центре
      focusOnSelect: true, // Выбрать слайд кликом
      infinite: false, // Зацикленное пролистывание
      vertical: false, // Вертикальный слайдер
      rtl: false, // Слайды листаются справа налево
      centerPadding: '0px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
      adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
      variableWidth: false, // Подгоняет ширину слайдов под размер элемента,
      swipe: true, // Перелистывание пальцем
      draggable: true, // Перелистывание мышью
      swipeToSlide: true, // Свободное перелистывание (на произвольное кол-во слайдов)
      responsive: [ // Адаптация
        {
        breakpoint: 992,
          settings: {
            arrows: false,
          }
        },
        {
        breakpoint: 720,
          settings: {
            arrows: false,
          }
        }
      ]
      // lazyLoad: 'ondemand', // Отложенная загрузка изображений. В тэг надо добавлять атрибут <img data-lazy="img/image.png"/>
    });
    
    sliderFor.slick({
      slidesToShow: 1, // Сколько слайдов показывать на экране
      slidesToScroll: 1, // Сколько слайдов пролистывать за раз
      dots: false, // Пагинация
      arrows: false, // Стрелки
      fade: true, // Плавный переход (анимация исчезновения появления) В false будет листаться
      asNavFor: slider // Связь со слайдерами
    });
  }
}
// slider();

// $('.your-slider').slick('unslick'); // Уничтожить слайдер

// $('.your-slider').slick('setPosition') // Переотрисовка слайдера. Например для использования в табах

// Slick Slider
function slider(slider) {
  if (slider.length) {
    slider.slick({
      slidesToShow: 3, // Сколько слайдов показывать на экране
      slidesToScroll: 1, // Сколько слайдов пролистывать за раз
      dots: false, // Пагинация
      arrows: true, // Стрелки
      prevArrow: '<div class="prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.72 98.94"><g id="TEXT"><path class="cls-1" d="M26.53,49.5.42,94.27A3.11,3.11,0,0,0,5.79,97.4L33.72,49.51,5.9,1.55A3.11,3.11,0,0,0,.52,4.67Z"/></g></svg></div>',
      nextArrow: '<div class="next-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.72 98.94"><g id="TEXT"><path class="cls-1" d="M26.53,49.5.42,94.27A3.11,3.11,0,0,0,5.79,97.4L33.72,49.51,5.9,1.55A3.11,3.11,0,0,0,.52,4.67Z"/></g></svg></div>',
      focusOnSelect: true, // Выбрать слайд кликом
      swipe: true, // Перелистывание пальцем
      draggable: true, // Перелистывание мышью
      swipeToSlide: true, // Свободное перелистывание (на произвольное кол-во слайдов)
      responsive: [ // Адаптация
        {
          breakpoint: breakSm,
          settings: {
            slidesToShow: 2,
          }
        },
      ]
    });
  }
}
slider($('#sliderSpickers'));