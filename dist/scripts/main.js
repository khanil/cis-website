'use strict';

// js toggler
var togglerClass = '.js-toggler';

var togglers = document.querySelectorAll(togglerClass) || [];

for (var i = 0; i < togglers.length; i++) {
  var toggle = togglers[i];
  var target = toggle.getAttribute('data-target');
  if (!target) continue;
  toggle.addEventListener('mousedown', handleToggle);
}

function handleToggle(event) {
  var targetId = event.currentTarget.getAttribute('data-target');
  var target = document.querySelector(targetId);
  if (!target) return;

  target.classList.toggle('visible');
  event.currentTarget.classList.toggle('active');
}

// js tabs
var tabsClass = '.js-tabs';

var tabs = document.querySelectorAll(tabsClass) || [];

for (var j = 0; j < tabs.length; j++) {
  var tab = tabs[j];
  tab.addEventListener('mousedown', handleTabClick);
}

function handleTabClick(event) {
  var nextTab = event.target;

  if (!nextTab.classList.contains('js-tab')) return;

  var container = event.currentTarget;
  var activeTab = container.querySelector('.js-tab.active');

  if (activeTab) {
    var activeTabTarget = activeTab.getAttribute('data-target');

    if (activeTabTarget) {
      var activeTabContent = document.querySelector(activeTabTarget);

      if (activeTabContent) {
        activeTabContent.classList.remove('visible');
      }
    }

    activeTab.classList.remove('active');
  }

  nextTab.classList.add('active');
  var nextTabTarget = nextTab.getAttribute('data-target');

  if (nextTabTarget) {
    var nextTabContent = document.querySelector(nextTabTarget);

    if (nextTabContent) {
      nextTabContent.classList.add('visible');
    }
  }
}