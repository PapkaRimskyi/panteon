'use strict';

(function () {
  var allAboutColonySwitchesItem = document.querySelectorAll(".all-about-colony__switches-item");
  var allAboutColonySwitchesLink = document.querySelectorAll(".all-about-colony__switches-link");
  var allAboutColonyInfoContainer = document.querySelectorAll(".all-about-colony__info-container");
  var basicThoughtsItemLink = document.querySelectorAll('.basic-thoughts__item-link');
  var basicThoughtsQuestionContainer = document.querySelectorAll('.basic-thoughts__question-container');
  var basicThoughtsItem = document.querySelectorAll('.basic-thoughts__item');
  var basicThoughtsInput = document.querySelectorAll('.basic-thoughts__input');

  var classActiveArray = ['all-about-colony__switches-item--active', 'all-about-colony__info-container--active', 'basic-thoughts__question-container--active', 'basic-thoughts__item--active'];

  var removeClassActive = function (selector, classActive) {
    for (var i = 0; i < selector.length; i++) {
      selector[i].classList.remove(classActive);
    }
  }

  var addLinkHandler = function (item, link, container) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      removeClassActive(allAboutColonySwitchesItem, classActiveArray[0]);
      item.classList.add(classActiveArray[0]);
      removeClassActive(allAboutColonyInfoContainer, classActiveArray[1]);
      container.classList.add(classActiveArray[1]);
    });
  };

  for (var i = 0; i < allAboutColonySwitchesItem.length; i++) {
    addLinkHandler(allAboutColonySwitchesItem[i], allAboutColonySwitchesLink[i], allAboutColonyInfoContainer[i]);
  }

  var addBasicThoughtsLinkHandler = function (item, link, container, input) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      removeClassActive(basicThoughtsItem, classActiveArray[3]);
      item.classList.add(classActiveArray[3]);
      removeClassActive(basicThoughtsQuestionContainer, classActiveArray[2]);
      container.classList.add(classActiveArray[2]);
      input.checked = true;
    })
  }

  for (var i = 0; i < basicThoughtsItem.length; i++) {
    addBasicThoughtsLinkHandler(basicThoughtsItem[i], basicThoughtsItemLink[i], basicThoughtsQuestionContainer[i], basicThoughtsInput[i]);
  }
})();
