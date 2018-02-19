// js toggler
const togglerClass = '.js-toggler';

const togglers = document.querySelectorAll(togglerClass);

togglers.forEach((toggle) => {
  const target = toggle.getAttribute('data-target');

  if (!target)
    return;

  toggle.addEventListener('mousedown', handleToggle);
});

function handleToggle(event) {
  const targetId = event.currentTarget.getAttribute('data-target');
  const target = document.querySelector(targetId);
  if (!target)
    return;

  target.classList.toggle('visible');
  event.currentTarget.classList.toggle('active');
}

// js tabs
const tabsClass = '.js-tabs';

const tabs = document.querySelectorAll(tabsClass);

tabs.forEach((tab) => {
  tab.addEventListener('mousedown', handleTabClick);
});

function handleTabClick(event) {
  const nextTab = event.target;

  if (!nextTab.classList.contains('js-tab'))
    return;

  const container = event.currentTarget;
  const activeTab = container.querySelector('.js-tab.active');

  if (activeTab) {
    const activeTabTarget = activeTab.getAttribute('data-target');

    if (activeTabTarget) {
      const activeTabContent = document.querySelector(activeTabTarget);

      if (activeTabContent) {
        activeTabContent.classList.remove('visible');
      }
    }

    activeTab.classList.remove('active');
  }

  nextTab.classList.add('active');
  const nextTabTarget = nextTab.getAttribute('data-target');

  if (nextTabTarget) {
    const nextTabContent = document.querySelector(nextTabTarget);

    if (nextTabContent) {
      nextTabContent.classList.add('visible');
    }
  }
}