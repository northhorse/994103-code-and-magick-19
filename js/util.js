'use strict';
// прячет или открывает блок
(function () {
  window.util = {
    summonElement: function (el) {
      el.classList.remove('hidden');
    },
    unSummonElement: function (el) {
      el.classList.add('hidden');
    },
    getRandomElement: function (arr) {
      var rand = Math.floor(Math.random() * arr.length);
      return arr[rand];
    },
  };


})();



ESC_KEY = 'Escape';
  ENTER_KEY = 'Enter';
