'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var dialogHandler = document.querySelector('.upload');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var userNameForm = setup.querySelector('.setup-user-name');
  var colorCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var colorEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var colorFireball = setup.querySelector('.setup-fireball-wrap');
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  function popupEscPressHandler(evt) {
    if (evt.key === window.util.ESC_KEY && userNameForm !== document.activeElement) {
      closePopup();
  }
}


function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHandler);
  wizardCoat.addEventListener('click', wizardCoatClickHandler);
  wizardEyes.addEventListener('click', wizardEyesClickHandler);
  wizardFireball.addEventListener('click', wizardFireballClickHandler);
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', popupEscPressHandler);
  wizardCoat.removeEventListener('click', wizardCoatClickHandler);
  wizardEyes.removeEventListener('click', wizardEyesClickHandler);
  wizardFireball.removeEventListener('click', wizardFireballClickHandler);
}


setupOpen.addEventListener('click', function () {
  openPopup();
})

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
})

setupClose.addEventListener('click', function () {
  closePopup();
})

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
})

function getWizardElementColor(element, color, input) {
  var currentColor = getRandElement(color);
  if (element === wizardFireball) {
    element.style.backgroundColor = currentColor;
  }
  element.style.fill = currentColor;
  input.value = currentColor;
}

function wizardCoatClickHandler() {
  getWizardElementColor(wizardCoat, COAT_COLORS, inputCoatColor);
}

function wizardEyesClickHandler() {
  getWizardElementColor(wizardEyes, EYES_COLORS, inputEyesColor);
}

function wizardFireballClickHandler() {
  getWizardElementColor(wizardFireball, FIREBALL_COLORS, inputFireballColor);
}




})();
