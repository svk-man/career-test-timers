const UI = {
  FORM: document.getElementById('form'),
  INPUT: document.getElementById('input'),
  TIMERS: document.getElementById('timers')
}

function createTimerItem(seconds) {
  let timerSeconds = seconds - 1;
  let timerId = null;

  const li = document.createElement('li');
  li.classList.add('timers-item');

  const timerText = document.createElement('span');
  timerText.textContent = seconds;

  (function() {
    if (timerId) return;

    timerId = setInterval(() => {
      timerText.textContent = timerSeconds;
      if (timerSeconds <= -1) {
        clearInterval(timerId);
        timerId = null;
        li.remove();
      }

      timerSeconds -= 1;
    }, 1000)
  })()

  const timerStopButton = document.createElement('button');
  timerStopButton.textContent = '⏹';
  timerStopButton.classList.add('timers-item-button');
  timerStopButton.addEventListener('click', function() {
    if (!timerId) return;

    clearInterval(timerId);
    timerId = null;
    li.remove();
  })

  li.appendChild(timerText);
  li.appendChild(timerStopButton);

  return li;
}

UI.FORM.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();

  const seconds = UI.INPUT.value;
  if (seconds <= 0) return;

  const timerItem = createTimerItem(seconds);
  UI.TIMERS.appendChild(timerItem);

  UI.FORM.reset();
}
