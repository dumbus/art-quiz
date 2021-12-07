const animations = {
  container: document.querySelector('.container'),
  backgroundOverlay: document.querySelector('.container-overlay'),
  ltCorner: document.querySelector('.container-overlay-lt'),
  rtCorner: document.querySelector('.container-overlay-rt'),
  lbCorner: document.querySelector('.container-overlay-lb'),
  rbCorner: document.querySelector('.container-overlay-rb'),

  left: document.querySelector('.container-overlay-left'),
  center: document.querySelector('.container-overlay-center'),
  right: document.querySelector('.container-overlay-right'),

  leftHalf: document.querySelector('.container-overlay-half-left'),
  rightHalf: document.querySelector('.container-overlay-half-right'),

  cornersCover: function cornersCover() {
    this.backgroundOverlay.classList.remove('hidden');
    this.container.style.overflow = 'hidden';

    this.ltCorner.classList.add('slideInLT');
    this.ltCorner.addEventListener('animationend', () => {
      this.ltCorner.classList.remove('slideInLT');

      this.backgroundOverlay.classList.add('hidden');
      this.container.style.overflow = 'visible';
    });

    this.rtCorner.classList.add('slideInRT');
    this.rtCorner.addEventListener('animationend', () => {
      this.rtCorner.classList.remove('slideInRT');
    });

    this.lbCorner.classList.add('slideInLB');
    this.lbCorner.addEventListener('animationend', () => {
      this.lbCorner.classList.remove('slideInLB');
    });

    this.rbCorner.classList.add('slideInRB');
    this.rbCorner.addEventListener('animationend', () => {
      this.rbCorner.classList.remove('slideInRB');
    });
  },

  linesCover: function linesCover() {
    this.container.style.overflow = 'hidden';
    this.backgroundOverlay.classList.remove('hidden');

    this.left.classList.add('slideInLeft');
    this.left.addEventListener('animationend', () => {
      this.left.classList.remove('slideInLeft');

      this.backgroundOverlay.classList.add('hidden');
      this.container.style.overflow = 'visible';
    });

    this.right.classList.add('slideInRight');
    this.right.addEventListener('animationend', () => {
      this.right.classList.remove('slideInRight');
    });

    this.center.classList.add('slideInCenter');
    this.center.addEventListener('animationend', () => {
      this.center.classList.remove('slideInCenter');
    });
  },

  halvesCover: function halvesCover() {
    this.container.style.overflow = 'hidden';
    this.backgroundOverlay.classList.remove('hidden');

    this.leftHalf.classList.add('slideInHalfLeft');
    this.leftHalf.addEventListener('animationend', () => {
      this.leftHalf.classList.remove('slideInHalfLeft');

      this.backgroundOverlay.classList.add('hidden');
      this.container.style.overflow = 'visible';
    });

    this.rightHalf.classList.add('slideInHalfRight');
    this.rightHalf.addEventListener('animationend', () => {
      this.rightHalf.classList.remove('slideInHalfRight');
    });
  },

  openModal: function openModal(modalBlock, modalOverlay) {
    modalOverlay.classList.remove('hidden');
    modalBlock.classList.remove('hidden');
    modalBlock.classList.add('fadeIn');
    modalBlock.addEventListener('animationend', () => {
      modalBlock.classList.remove('fadeIn');
      modalBlock.classList.remove('hidden-modal');
    });
  },

  closeModal: function closeModal(modalBlock, modalOverlay, smoothFade = false) {
    if (smoothFade === false) {
      modalBlock.classList.add('hidden-modal');
      modalBlock.classList.add('hidden');
      modalOverlay.classList.add('hidden');
    } else {
      modalBlock.classList.add('fadeOut');
      modalBlock.addEventListener('animationend', () => {
        modalBlock.classList.add('hidden-modal');
        modalBlock.classList.remove('fadeOut');
        modalBlock.classList.add('hidden');
        modalOverlay.classList.add('hidden');
      });
    }
  },
};

export default animations;
