'use strict';

(function () {
  var similarListElement = document.querySelector('.setup-similar-list');

  var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  var maxWizards = 4;

  function wizardCreator() {
    var wizardsArmy = [];
    for (var i = 0; i < maxWizards; i++) {
      var name = window.util.getRandomElement(wizardNames) + ' ' + window.util.getRandomElement(wizardSurnames);
      var coatColor = window.util.getRandomElement(coatColors);
      var eyesColor = window.util.getRandomElement(eyesColors);
      wizardsArmy.push({'name': name, 'coatColor': coatColor, 'eyesColor': eyesColor});
    }
    return wizardsArmy
  }

  function makeElement(obj) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template');
    var wizard = similarWizardTemplate.content.cloneNode(true);
    var name = wizard.querySelector('.setup-similar-label');
    var coat = wizard.querySelector('.wizard-coat');
    var eyes = wizard.querySelector('.wizard-eyes');


    name.textContent = wizardCreator.name;
    coat.style.fill = wizardCreator.coatColor;
    eyes.style.fill = obj.eyesColor;

    return wizard;
  }

  var collection = document.createDocumentFragment();
  var wizards = wizardCreator();

  for (var j = 0; j <= maxWizards; j++) {
    var wizard = makeElement(wizards[j]);
    collection.appendChild(wizard)
  }

  wizardList.appendChild(collection);

  var setupSim = document.querySelector('.setup-similar');
  setupSim.classList.remove('hidden');
})();



