'use strict';
// константы
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var MAX_WIZARDS = 4;

// Функция получения случайного элемента массива
var getRandElement = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

// массив, состоящий из 4-х сгенерированных JS объектов
var wizards = [];
for (var i = 0; i < MAX_WIZARDS; i++) {
  wizards[i] = {
    name: getRandElement(WIZARD_NAMES) + ' ' + getRandElement(WIZARD_SURNAMES),
    coatColor: getRandElement(COAT_COLORS),
    eyesColor: getRandElement(EYES_COLORS),
  };
}

// Элемент, в который мы будем вставлять похожих магов.
var similarListElement = document.querySelector('.setup-similar-list');

// Шаблон, который мы будем копировать
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Функция создания DOM-элемента на основе JS-объекта
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};
// Заполнение блока DOM-элементами на основе массива JS-объектов и все это кладем в фрагмент
var addWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }
  similarListElement.appendChild(fragment);
};
addWizards();
// Показываем блок с похожими персонажами
document.querySelector('.setup-similar').classList.remove('hidden');

// модуль4-таск1

// Показываем окно настроек пользователя
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameForm = setup.querySelector('.setup-user-name');

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var inputCoatColor = setup.querySelector('[name=coat-color]');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var inputEyesColor = setup.querySelector('[name=eyes-color]');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var inputFireballColor = setup.querySelector('[name=fireball-color]');


var popupEscPressHandler = function (evt) {
  if (evt.key === ESC_KEY && userNameForm !== document.activeElement) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHandler);
  wizardCoat.addEventListener('click', wizardCoatClickHandler);
  wizardEyes.addEventListener('click', wizardEyesClickHandler);
  wizardFireball.addEventListener('click', wizardFireballClickHandler);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', popupEscPressHandler);
  wizardCoat.removeEventListener('click', wizardCoatClickHandler);
  wizardEyes.removeEventListener('click', wizardEyesClickHandler);
  wizardFireball.removeEventListener('click', wizardFireballClickHandler);
};


setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var getWizardElementColor = function (element, color, input) {
  var currentColor = getRandElement(color);
  if (element === wizardFireball) {
    element.style.backgroundColor = currentColor;
  }
  element.style.fill = currentColor;
  input.value = currentColor;
};

var wizardCoatClickHandler = function () {
  getWizardElementColor(wizardCoat, COAT_COLORS, inputCoatColor);
};

var wizardEyesClickHandler = function () {
  getWizardElementColor(wizardEyes, EYES_COLORS, inputEyesColor);
};

var wizardFireballClickHandler = function () {
  getWizardElementColor(wizardFireball, FIREBALL_COLORS, inputFireballColor);
};
