const styleInput = () => {
  const progress = document.querySelectorAll('.progress');

  progress.forEach((item) => {
    item.addEventListener('input', function changeProgressCondition() {
      const value = this.value;

      this.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${value * 100}%, #C4C4C4 ${value * 100}%, #C4C4C4 100%)`;
    });
  });
};

export default styleInput;
