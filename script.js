const UI = {
  FORM: document.getElementById('form'),
  INPUT: document.getElementById('input'),
  TIMERS: document.getElementById('timers')
}

function createTimerItem(seconds) {
  const li = document.createElement('li');

  const timerText = document.createElement('span');
  timerText.textContent = seconds


  const timerPlayButton = document.createElement('button');
  timerPlayButton.textContent = '▶';

  const timerStopButton = document.createElement('button');
  timerStopButton.textContent = '⏹';

  li.appendChild(timerText);
  li.appendChild(timerPlayButton);
  li.appendChild(timerStopButton);

  return li;
}

UI.FORM.addEventListener('submit', (event) => {
  event.preventDefault();

  const seconds = UI.INPUT.value;
  if (seconds <= 0) return;

  const timerItem = createTimerItem(seconds);
  UI.TIMERS.appendChild(timerItem);

  UI.FORM.reset();
})
