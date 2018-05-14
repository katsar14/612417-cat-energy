var button = document.querySelector(".page-header__nav-toggle");
var pageHeader = document.querySelector(".page-header");

pageHeader.classList.remove("page-header--no-js");
pageHeader.classList.add("page-header--nav-closed");

button.addEventListener("click", function() {
  pageHeader.classList.toggle("page-header--nav-closed");
  pageHeader.classList.toggle("page-header--nav-opened");
});

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.93863106417265,30.3230545],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: '',
            balloonContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-pin.png',
            // Размеры метки.
            iconImageSize: [113, 106],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-70, -100]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        });

    myMap.geoObjects
        .add(myPlacemark);
});
