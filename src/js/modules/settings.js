const settings = {
  volume: 0.2,
  playWithTimer: 'false',
  timerDuration: 20,

  questionsTimer: document.querySelector('.header-questions-timer'),
  settingsVolumeInput: document.querySelector('#settings-volume'),
  settingsSwitch: document.querySelector('.switch'),
  settingsTimer: document.querySelector('.settings-number-input'),
  settingsTimerUp: document.querySelector('#plus'),
  settingsTimerDown: document.querySelector('#minus'),
  audioItems: document.querySelectorAll('.audio'),

  setSettings: function setSettings() {
    if (localStorage.getItem('volume') != null) {
      this.volume = +localStorage.getItem('volume');
    } else {
      localStorage.setItem('volume', this.volume);
    }

    if (localStorage.getItem('playWithTimer') != null) {
      this.playWithTimer = localStorage.getItem('playWithTimer');
    } else {
      localStorage.setItem('playWithTimer', this.playWithTimer);
    }

    if (localStorage.getItem('timerDuration') != null) {
      this.timerDuration = +localStorage.getItem('timerDuration');
    } else {
      localStorage.setItem('timerDuration', this.timerDuration);
    }
  },

  renderSettings: function renderSettings() {
    // volume
    this.settingsVolumeInput.value = this.volume;
    this.settingsVolumeInput.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${this.settingsVolumeInput.value * 100}%, #C4C4C4 ${
      this.settingsVolumeInput.value * 100
    }%, #C4C4C4 100%)`;

    this.settingsVolumeInput.addEventListener('input', () => {
      this.volume = this.settingsVolumeInput.value;
      localStorage.setItem('volume', this.volume);
    });

    this.audioItems.forEach((item) => {
      item.volume = this.volume;
    });

    // playWithTimer
    if (this.playWithTimer === 'true') {
      this.settingsSwitch.classList.add('switchOn');
    } else {
      this.settingsSwitch.classList.remove('switchOn');
    }

    this.settingsSwitch.addEventListener('click', () => {
      if (this.playWithTimer === 'true') {
        this.playWithTimer = 'false';
        this.settingsSwitch.classList.remove('switchOn');
      } else {
        this.playWithTimer = 'true';
        this.settingsSwitch.classList.add('switchOn');
      }
      localStorage.setItem('playWithTimer', this.playWithTimer);
    });

    // timerDuration
    this.settingsTimer.value = this.timerDuration;

    if (this.playWithTimer === 'true') {
      this.questionsTimer.textContent = this.timerDuration;
    } else {
      this.questionsTimer.innerHTML = '&#8734';
    }
  },

  addTimerUpListener: function addTimerUpListener() {
    this.settingsTimerUp.addEventListener('click', () => {
      this.timerDuration += 5;
      if (this.timerDuration > 30) {
        this.timerDuration = 30;
      }
      this.settingsTimer.value = this.timerDuration;

      this.localStorage.setItem('timerDuration', this.timerDuration);
    });
  },

  addTimerDownListener: function addTimerDownListener() {
    this.settingsTimerDown.addEventListener('click', () => {
      this.timerDuration -= 5;
      if (this.timerDuration < 5) {
        this.timerDuration = 5;
      }
      this.settingsTimer.value = this.timerDuration;

      localStorage.setItem('timerDuration', this.timerDuration);
    });
  },
};

export default settings;
