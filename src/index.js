import './style.scss';

(() => {
  const onboardingBtn = document.querySelector('.onboarding-start');
  const onboardingItems = document.querySelectorAll('[data-step]');
  const overlay = document.querySelector('.overlay');

  let step = 1;
  let isBoarding = false;

  onboardingBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    startOnboarding();
  });

  function startOnboarding() {
    isBoarding = true;
    overlay.classList.add('is-visible');
    nextItem(step);
  };


  onboardingItems.forEach((el) => {
    el.addEventListener('click', (evt) => {
      evt.preventDefault();

      if ( !isBoarding ) return;

      nextItem(++step);
    });
  });


  function nextItem(step) {
    const nextItem = [...onboardingItems].find((i) => +i.dataset.step === step);

    if ( !nextItem && isBoarding ) {
      stopBoarding();
    } else {
      [...onboardingItems].forEach((i) => i.classList.remove('is-boarding'));
      nextItem.classList.add('is-boarding');
    }
  }

  function stopBoarding() {
    step = 1;
    isBoarding = false;

    [...onboardingItems].forEach((i) => i.classList.remove('is-boarding'));
    overlay.classList.remove('is-visible');
  };


})();
