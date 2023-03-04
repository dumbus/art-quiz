import animations from './animations';
import settings from './settings';

const showPages = () => {
  const container = document.querySelector('.container');

  // mainscreen block
  const headerDefault = document.querySelector('.header-default');
  const mainscreenDefault = document.querySelector('.mainscreen-container');
  const mainscreenSettingsOpenBtn = document.querySelector('.mainscreen-settings-open-btn');
  const artistsBtn = document.querySelector('.mainscreen-buttons-artists');
  const paintingsBtn = document.querySelector('.mainscreen-buttons-pictures');

  // settings block
  const headerSettings = document.querySelector('.header-settings');
  const mainscreenSettings = document.querySelector('.settings');
  const settingsCloseBtn = document.querySelectorAll('.settings-close');
  const settingsSaveBtn = document.querySelector('.settings-save-button');

  // categories block
  const headerCategories = document.querySelector('.header-menu');
  const mainscreenCategoriesArtists = document.querySelector('.categories-artists');
  const mainscreenCategoriesPaintings = document.querySelector('.categories-paintings');
  const categoriesSettingsOpenBtn = document.querySelector('.categories-settings-open-btn');
  const categoriesHomeBtn = document.querySelector('.header-menu-text-home');
  const categoriesArtistsItems = document.querySelectorAll('.categories-artists-item');
  const categoriesPaintingsItems = document.querySelectorAll('.categories-paintings-item');
  const categoriesArtistsHeaderScore = document.querySelectorAll('.categories-item-header-score-ar');
  const categoriesPaintingsHeaderScore = document.querySelectorAll('.categories-item-header-score-pa');

  // questions block
  const headerQuestions = document.querySelector('.header-questions');
  const questionClose = document.querySelector('.header-questions-close');
  const questionsTimer = document.querySelector('.header-questions-timer');

  const mainscreenQuestionsArtists = document.querySelector('.questions-artists');
  const questionArtistImg = document.querySelector('.questions-artists-picture-img');
  const questionArtistDots = document.querySelectorAll('.questions-artists-picture-dots-item');
  const mainscreenQuestionsPaintings = document.querySelector('.questions-paintings');

  // modals
  const modalOverlay = document.querySelector('.overlay');

  const modalQuit = document.querySelector('.modal-quit');
  const modalQuitCancel = document.querySelector('.modal-quit-btn-cancel');
  const modalQuitConfirm = document.querySelector('.modal-quit-btn-confirm');

  // modal for artists
  const modalAnswerAr = document.querySelector('.modal-answer-artists');
  const modalAnswerArImg = modalAnswerAr.querySelector('.modal-answer-picture-img');
  const modalAnswerArPainting = modalAnswerAr.querySelector('.modal-answer-painting');
  const modalAnswerArSubheader = modalAnswerAr.querySelector('.modal-answer-subheader');
  const modalAnswerArIconIncorrect = modalAnswerAr.querySelector('.modal-answer-picture-icon-incorrect');
  const modalAnswerArIconCorrect = modalAnswerAr.querySelector('.modal-answer-picture-icon-correct');
  const modalAnswerArNext = modalAnswerAr.querySelector('.modal-answer-btn');

  // modal for paintings
  const modalAnswerPic = document.querySelector('.modal-answer-paintings');
  const modalAnswerPicImg = modalAnswerPic.querySelector('.modal-answer-picture-img');
  const modalAnswerPicPainting = modalAnswerPic.querySelector('.modal-answer-painting');
  const modalAnswerPicSubheader = modalAnswerPic.querySelector('.modal-answer-subheader');
  const modalAnswerPicIconIncorrect = modalAnswerPic.querySelector('.modal-answer-picture-icon-incorrect');
  const modalAnswerPicIconCorrect = modalAnswerPic.querySelector('.modal-answer-picture-icon-correct');
  const modalAnswerPicNext = modalAnswerPic.querySelector('.modal-answer-btn');

  const modalSuccess = document.querySelector('.modal-victory');
  const modalSuccessHome = document.querySelector('.modal-victory-btn-home');
  const modalSuccessNext = document.querySelector('.modal-victory-btn-next');

  // modal info
  const modalInfo = document.querySelector('.modal-info');
  const modalInfoImg = document.querySelector('.modal-info-picture');
  const modalInfoTitle = document.querySelector('.modal-info-painting');
  const modalInfoArtist = document.querySelector('.modal-info-subheader');
  const modalInfoClose = document.querySelector('.modal-info-btn');

  // results block
  const headerResults = document.querySelector('.header-results');
  const headerResultsHome = document.querySelector('.header-results-text-home');
  const headerResultsCategories = document.querySelector('.header-results-text-categories');
  const mainscreenResults = document.querySelector('.results');
  const resultsImages = document.querySelectorAll('.results-pictures-item');
  const resultsTitleNumber = document.querySelector('.results-title-number');
  const resultsTitleScore = document.querySelector('.results-title-score');

  // audio
  const audioCorrect = document.querySelector('.audio-correct');
  const audioInorrect = document.querySelector('.audio-incorrect');
  const audioFinal = document.querySelector('.audio-final');

  /*
  ===================================
    functions for settings
  ===================================
  */

  function playCornersAnimation() {
    animations.halvesCover();
  }

  function playHalvesAnimation() {
    animations.cornersCover();
  }

  function playLinesAnimation() {
    animations.linesCover();
  }

  let currentHeader = headerDefault;
  let currentMain = mainscreenDefault;

  let bufferCategory;
  let bufferQuestion;

  function openSettings(header, main) {
    playCornersAnimation();

    setTimeout(() => {
      container.classList.remove('container-mainscreen');
      container.classList.add('container-default');

      header.classList.add('hidden');
      main.classList.add('hidden');

      headerSettings.classList.remove('hidden');
      mainscreenSettings.classList.remove('hidden');
    }, 500);
  }

  function closeSettings(header, main) {
    playCornersAnimation();

    setTimeout(() => {
      if (header === headerDefault) {
        container.classList.add('container-mainscreen');
        container.classList.remove('container-default');
      } else {
        container.classList.remove('container-mainscreen');
        container.classList.add('container-default');
      }

      header.classList.remove('hidden');
      main.classList.remove('hidden');

      headerSettings.classList.add('hidden');
      mainscreenSettings.classList.add('hidden');
    }, 500);
  }

  /*
  =======================
    settings functional
  =======================
  */

  settings.setSettings();
  settings.renderSettings();
  settings.addTimerUpListener();
  settings.addTimerDownListener();

  /*
  ===================================
    close settings from every block
  ===================================
  */

  settingsCloseBtn.forEach((item) => {
    item.addEventListener('click', () => {
      closeSettings(currentHeader, currentMain);
    });
  });

  settingsSaveBtn.addEventListener('click', () => {
    closeSettings(currentHeader, currentMain);
    settings.renderSettings();
  });

  /*
  ===================================
    open settings from each block
  ===================================
  */

  mainscreenSettingsOpenBtn.addEventListener('click', () => {
    currentHeader = headerDefault;
    currentMain = mainscreenDefault;
    openSettings(headerDefault, mainscreenDefault);
  });

  categoriesSettingsOpenBtn.addEventListener('click', () => {
    openSettings(currentHeader, currentMain);
  });

  /*
  ===================================
    open different blocks
  ===================================
  */

  function openBlock(hideHeader, hideMain) {
    playCornersAnimation();

    setTimeout(() => {
      if (currentMain === mainscreenDefault) {
        container.classList.add('container-mainscreen');
        container.classList.remove('container-default');
      } else {
        container.classList.remove('container-mainscreen');
        container.classList.add('container-default');
      }

      hideHeader.classList.add('hidden');
      hideMain.classList.add('hidden');

      currentHeader.classList.remove('hidden');
      currentMain.classList.remove('hidden');
    }, 500);
  }

  // from default to categories
  artistsBtn.addEventListener('click', () => {
    bufferCategory = mainscreenCategoriesArtists;
    bufferQuestion = mainscreenQuestionsArtists;
    currentHeader = headerCategories;
    currentMain = mainscreenCategoriesArtists;
    openBlock(headerDefault, mainscreenDefault);
  });

  paintingsBtn.addEventListener('click', () => {
    bufferCategory = mainscreenCategoriesPaintings;
    bufferQuestion = mainscreenQuestionsPaintings;
    currentHeader = headerCategories;
    currentMain = mainscreenCategoriesPaintings;
    openBlock(headerDefault, mainscreenDefault);
  });

  // from categories to default
  categoriesHomeBtn.addEventListener('click', () => {
    const prev = currentMain;
    currentHeader = headerDefault;
    currentMain = mainscreenDefault;
    openBlock(headerCategories, prev);
  });

  /*
  ===================================
    generate questions
  ===================================
  */

  let database;
  let roundIndex;
  let questionIndex;
  let questionIndexInCurrentRound;
  const currentRoundArtistsResults = [];
  const currentRoundPaintingsResults = [];

  let fullResultsArtists = {};
  if (localStorage.getItem('ResultsArtists') != null) {
    fullResultsArtists = JSON.parse(localStorage.getItem('ResultsArtists'));
  }
  let fullResultsPaintings = {};
  if (localStorage.getItem('ResultsPaintings') != null) {
    fullResultsPaintings = JSON.parse(localStorage.getItem('ResultsPaintings'));
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  async function getDatabase() {
    try {
      const query = 'https://raw.githubusercontent.com/dumbus/image-data/master/images.json';
      const res = await fetch(query);
      const dataJson = await res.json();

      return dataJson;
    } catch (err) {
      return err;
    }
  }

  function setImage(questionIndex, imageContainer, full = true) {
    try {
      const img = new Image();
      if (full) {
        img.src = `https://raw.githubusercontent.com/dumbus/image-data/master/full/${questionIndex}full.jpg`;
      } else {
        img.src = `https://raw.githubusercontent.com/dumbus/image-data/master/img/${questionIndex}.jpg`;
      }
      img.onload = () => {
        imageContainer.style.backgroundImage = `url("${img.src}")`;
        imageContainer.style.backgroundSize = '100%';
      };
    } catch (err) {
      console.log(err);
    }
  }

  async function getArtists(questionIndex) {
    await getDatabase().then((value) => {
      database = value;
    });

    const correctAnswerObj = database[questionIndex];
    const authorsArr = [];

    authorsArr.push(correctAnswerObj.author);

    while (authorsArr.length < 4) {
      const randomNumber = getRandomIntInclusive(0, 241);
      const newAuthor = database[randomNumber].author;

      if (authorsArr.indexOf(newAuthor) === -1) {
        authorsArr.push(newAuthor);
      }
    }
    const result = [correctAnswerObj, authorsArr];
    return result;
  }

  /*
  =========================
    game for artists
  =========================
  */

  let intervalId;

  async function generateArtistsQuestion() {
    function finalQuestion() {
      let currentRoundScore = 0;
      const resultsName = `Round${roundIndex + 1}`;
      currentRoundArtistsResults.forEach((item) => {
        if (item === true) {
          currentRoundScore += 1;
        }
      });
      const modalSubheaderText = document.querySelector('.modal-victory-subheader');
      if (currentRoundScore > 0) {
        modalSubheaderText.textContent = 'Congratulations!';
      } else {
        modalSubheaderText.textContent = 'Bad luck...';
      }
      setTimeout(() => {
        audioFinal.play();
      }, 1000);
      questionArtistDots.forEach((item) => {
        item.classList.remove('questions-artists-picture-dots-item-correct');
        item.classList.remove('questions-artists-picture-dots-item-incorrect');
      });
      const modalTextResult = document.querySelector('.modal-victory-result');
      modalTextResult.textContent = `${currentRoundScore}/10`;
      animations.openModal(modalSuccess, modalOverlay);
      categoriesArtistsItems[roundIndex].querySelector('.categories-item-header-score').textContent = `${currentRoundScore}/10`;
      categoriesArtistsItems[roundIndex].querySelector('.categories-item-header-score').classList.remove('hidden');
      categoriesArtistsItems[roundIndex].classList.remove('categories-item-inactive');
      // Push data to LocalStorage
      fullResultsArtists[resultsName] = currentRoundArtistsResults;
      localStorage.setItem('ResultsArtists', JSON.stringify(fullResultsArtists));
    }
    // set timeout for actual mode
    let currentTime = settings.timerDuration - 1;
    if (settings.playWithTimer === 'true') {
      questionsTimer.textContent = settings.timerDuration;
      intervalId = setInterval(() => {
        questionsTimer.textContent = currentTime;
        currentTime -= 1;
        if (currentTime === -1 && questionIndexInCurrentRound < 9) {
          questionsTimer.innerHTML = '&#8734';
          currentRoundArtistsResults[questionIndexInCurrentRound] = false;
          modalAnswerArIconIncorrect.classList.remove('hidden');
          questionArtistDots[questionIndexInCurrentRound].classList.add('questions-artists-picture-dots-item-incorrect');
          audioInorrect.play();
          animations.openModal(modalAnswerAr, modalOverlay);
          clearInterval(intervalId);
        } else if (currentTime === -1 && questionIndexInCurrentRound === 9) {
          questionsTimer.innerHTML = '&#8734';
          currentRoundArtistsResults[questionIndexInCurrentRound] = false;
          modalAnswerArIconIncorrect.classList.remove('hidden');
          questionArtistDots[questionIndexInCurrentRound].classList.add('questions-artists-picture-dots-item-incorrect');
          audioInorrect.play();
          clearInterval(intervalId);
          finalQuestion();
        }
      }, 1000);
    }

    // usual algorythm (not for interval)
    const questionArtistsButtonsContainer = document.querySelector('.questions-artists-buttons');
    const questionArtistButtons = document.querySelectorAll('.questions-artists-buttons-item');

    setImage(questionIndex, questionArtistImg);
    setImage(questionIndex, modalAnswerArImg, false);

    let correctAnswerObj;
    let authorsArr = [];

    await getArtists(questionIndex).then((value) => {
      correctAnswerObj = value[0];
      authorsArr = value[1];
    });
    modalAnswerArPainting.textContent = correctAnswerObj.name;
    modalAnswerArSubheader.textContent = `${correctAnswerObj.author}, ${correctAnswerObj.year}`;

    authorsArr.sort(() => Math.random() - 0.5);
    const correctNumber = authorsArr.indexOf(correctAnswerObj.author);

    for (let i = 0; i < 4; i += 1) {
      questionArtistButtons[i].textContent = authorsArr[i];
    }

    questionArtistButtons.forEach((item) => {
      item.addEventListener('click', () => {
        if (settings.playWithTimer === 'true') {
          clearInterval(intervalId);
          questionsTimer.textContent = currentTime + 1;
        }
        if (item.getAttribute('data-index') === correctNumber) {
          currentRoundArtistsResults[questionIndexInCurrentRound] = true;
        } else {
          currentRoundArtistsResults[questionIndexInCurrentRound] = false;
        }
        if (currentRoundArtistsResults[questionIndexInCurrentRound] === true) {
          modalAnswerArIconCorrect.classList.remove('hidden');
          questionArtistDots[questionIndexInCurrentRound].classList.add('questions-artists-picture-dots-item-correct');
          audioCorrect.play();
        } else {
          modalAnswerArIconIncorrect.classList.remove('hidden');
          questionArtistDots[questionIndexInCurrentRound].classList.add('questions-artists-picture-dots-item-incorrect');
          audioInorrect.play();
        }

        if (questionIndexInCurrentRound === 9) {
          finalQuestion();
        } else {
          questionArtistsButtonsContainer.innerHTML = `
          <div class="questions-artists-buttons-item button" data-index="0"></div>
          <div class="questions-artists-buttons-item button" data-index="1"></div>
          <div class="questions-artists-buttons-item button" data-index="2"></div>
          <div class="questions-artists-buttons-item button" data-index="3"></div>
          `;
          animations.openModal(modalAnswerAr, modalOverlay);
        }
      });
    });
  }

  mainscreenCategoriesArtists.addEventListener('click', async (e) => {
    bufferCategory = mainscreenCategoriesArtists;
    bufferQuestion = mainscreenQuestionsArtists;
    if (!e.target.classList.contains('categories') && e.target.classList.contains('artists-trigger')) {
      let target = e.target;
      while (!target.classList.contains('categories-item')) {
        target = target.parentElement;
      }
      roundIndex = target.getAttribute('data-index') - 1;
      questionIndex = roundIndex * 10;

      questionIndexInCurrentRound = 0;
      await generateArtistsQuestion();
      currentHeader = headerQuestions;
      currentMain = mainscreenQuestionsArtists;
      openBlock(headerCategories, mainscreenCategoriesArtists);
    }
  });

  function changeArtistsQuestion() {
    questionIndex += 1;
    questionIndexInCurrentRound += 1;
    playHalvesAnimation();
    setTimeout(() => {
      generateArtistsQuestion();
      animations.closeModal(modalAnswerAr, modalOverlay);
      modalAnswerArIconCorrect.classList.add('hidden');
      modalAnswerArIconIncorrect.classList.add('hidden');
    }, 400);
  }

  modalAnswerArNext.addEventListener('click', changeArtistsQuestion);
  questionClose.addEventListener('click', () => {
    questionArtistDots.forEach((item) => {
      item.classList.remove('questions-artists-picture-dots-item-correct');
      item.classList.remove('questions-artists-picture-dots-item-incorrect');
    });
    animations.openModal(modalQuit, modalOverlay);
  });

  modalSuccessNext.addEventListener('click', () => {
    currentHeader = headerCategories;
    currentMain = bufferCategory;
    openBlock(headerQuestions, bufferQuestion);
    setTimeout(() => {
      animations.closeModal(modalAnswerAr, modalOverlay);
      animations.closeModal(modalSuccess, modalOverlay);
    }, 500);
  });

  modalSuccessHome.addEventListener('click', () => {
    currentHeader = headerDefault;
    currentMain = mainscreenDefault;
    openBlock(headerQuestions, bufferQuestion);
    setTimeout(() => {
      animations.closeModal(modalAnswerAr, modalOverlay);
      animations.closeModal(modalSuccess, modalOverlay);
    }, 500);
  });

  modalQuitConfirm.addEventListener('click', () => {
    currentHeader = headerDefault;
    currentMain = mainscreenDefault;
    openBlock(headerQuestions, bufferQuestion);
    setTimeout(() => {
      animations.closeModal(modalQuit, modalOverlay);
    }, 500);
    clearInterval(intervalId);
  });

  modalQuitCancel.addEventListener('click', () => {
    animations.closeModal(modalQuit, modalOverlay);
  });

  /*
  ========================
    game for paintings
  ========================
  */

  async function getPictures(questionIndex) {
    await getDatabase().then((value) => {
      database = value;
    });

    const correctAnswerObj = database[questionIndex];
    const numbersArr = [];
    const authorsArr = [];

    numbersArr.push(correctAnswerObj.imageNum);
    authorsArr.push(correctAnswerObj.author);

    while (numbersArr.length < 4) {
      const randomNumber = getRandomIntInclusive(0, 241);
      const newNumber = database[randomNumber].imageNum;
      const newAuthor = database[randomNumber].author;

      if (numbersArr.indexOf(newNumber) === -1 && newAuthor.indexOf(authorsArr) === -1) {
        numbersArr.push(newNumber);
        authorsArr.push(newAuthor);
      }
    }
    const result = [correctAnswerObj, numbersArr];
    return result;
  }

  async function generatePaintingsQuestion() {
    function finalQuestion() {
      let currentRoundScore = 0;
      const resultsName = `Round${roundIndex + 1}`;
      currentRoundPaintingsResults.forEach((item) => {
        if (item === true) {
          currentRoundScore += 1;
        }
      });
      const modalSubheaderText = document.querySelector('.modal-victory-subheader');
      if (currentRoundScore > 0) {
        modalSubheaderText.textContent = 'Congratulations!';
      } else {
        modalSubheaderText.textContent = 'Bad luck...';
      }
      setTimeout(() => {
        audioFinal.play();
      }, 1000);
      const modalTextResult = document.querySelector('.modal-victory-result');
      modalTextResult.textContent = `${currentRoundScore}/10`;
      animations.openModal(modalSuccess, modalOverlay);
      categoriesPaintingsItems[roundIndex].querySelector('.categories-item-header-score').textContent = `${currentRoundScore}/10`;
      categoriesPaintingsItems[roundIndex].querySelector('.categories-item-header-score').classList.remove('hidden');
      categoriesPaintingsItems[roundIndex].classList.remove('categories-item-inactive');
      // Push data to LocalStorage
      fullResultsPaintings[resultsName] = currentRoundPaintingsResults;
      localStorage.setItem('ResultsPaintings', JSON.stringify(fullResultsPaintings));
    }
    // set timeout for actual mode
    let currentTime = settings.timerDuration - 1;
    if (settings.playWithTimer === 'true') {
      intervalId = setInterval(() => {
        questionsTimer.textContent = currentTime;
        currentTime -= 1;
        if (currentTime === -1 && questionIndexInCurrentRound < 9) {
          questionsTimer.innerHTML = '&#8734';
          currentRoundPaintingsResults[questionIndexInCurrentRound] = false;
          modalAnswerPicIconIncorrect.classList.remove('hidden');
          audioInorrect.play();
          animations.openModal(modalAnswerPic, modalOverlay);
          clearInterval(intervalId);
        } else if (currentTime === -1 && questionIndexInCurrentRound === 9) {
          questionsTimer.innerHTML = '&#8734';
          currentRoundPaintingsResults[questionIndexInCurrentRound] = false;
          modalAnswerPicIconIncorrect.classList.remove('hidden');
          audioInorrect.play();
          clearInterval(intervalId);
          finalQuestion();
        }
      }, 1000);
    }

    // usual algorythm (not for timer)
    const questionPicturesItemsContainer = document.querySelector('.questions-paintings-grid');
    questionPicturesItemsContainer.innerHTML = `
      <div class="questions-paintings-grid-item">
        <div class="questions-paintings-grid-item-img"></div>
        <div class="questions-paintings-grid-item-overlay" data-index="0"></div>
      </div>
      <div class="questions-paintings-grid-item">
        <div class="questions-paintings-grid-item-img"></div>
        <div class="questions-paintings-grid-item-overlay" data-index="1"></div>
      </div>
      <div class="questions-paintings-grid-item">
        <div class="questions-paintings-grid-item-img"></div>
        <div class="questions-paintings-grid-item-overlay" data-index="2"></div>
      </div>
      <div class="questions-paintings-grid-item">
        <div class="questions-paintings-grid-item-img"></div>
        <div class="questions-paintings-grid-item-overlay" data-index="3"></div>
      </div>
    `;
    const questionSubheader = document.querySelector('.questions-paintings-subheader');
    const questionPicturesItems = document.querySelectorAll('.questions-paintings-grid-item');
    const questionPaintingsOverlays = document.querySelectorAll('.questions-paintings-grid-item-overlay');

    let correctAnswerObj;
    let numbersArr = [];

    await getPictures(questionIndex).then((value) => {
      correctAnswerObj = value[0];
      numbersArr = value[1];
    });

    setImage(questionIndex, modalAnswerPicImg, false);
    modalAnswerPicPainting.textContent = correctAnswerObj.name;
    modalAnswerPicSubheader.textContent = `${correctAnswerObj.author}, ${correctAnswerObj.year}`;

    numbersArr.sort(() => Math.random() - 0.5);
    const correctNumber = numbersArr.indexOf(correctAnswerObj.imageNum);

    questionSubheader.textContent = `Which is ${correctAnswerObj.author} picture?`;

    let i = 0;
    questionPicturesItems.forEach((item) => {
      setImage(numbersArr[i], item, false);
      i += 1;
    });

    questionPaintingsOverlays.forEach((item) => {
      item.addEventListener('click', () => {
        if (settings.playWithTimer === 'true') {
          clearInterval(intervalId);
          questionsTimer.textContent = currentTime + 1;
        }
        if (item.getAttribute('data-index') === correctNumber) {
          currentRoundPaintingsResults[questionIndexInCurrentRound] = true;
        } else {
          currentRoundPaintingsResults[questionIndexInCurrentRound] = false;
        }
        if (currentRoundPaintingsResults[questionIndexInCurrentRound] === true) {
          modalAnswerPicIconCorrect.classList.remove('hidden');
          item.classList.add('questions-paintings-grid-item-overlay-correct');
          audioCorrect.play();
        } else {
          modalAnswerPicIconIncorrect.classList.remove('hidden');
          item.classList.add('questions-paintings-grid-item-overlay-incorrect');
          audioInorrect.play();
        }
        // save results
        if (questionIndexInCurrentRound === 9) {
          finalQuestion();
        } else {
          animations.openModal(modalAnswerPic, modalOverlay);
        }
      });
    });
  }

  mainscreenCategoriesPaintings.addEventListener('click', async (e) => {
    bufferCategory = mainscreenCategoriesPaintings;
    bufferQuestion = mainscreenQuestionsPaintings;
    if (!e.target.classList.contains('categories') && e.target.classList.contains('paintings-trigger')) {
      let target = e.target;
      while (!target.classList.contains('categories-item')) {
        target = target.parentElement;
      }
      roundIndex = target.getAttribute('data-index') - 1;
      questionIndex = roundIndex * 10 + 120;

      questionIndexInCurrentRound = 0;

      await generatePaintingsQuestion();

      currentHeader = headerQuestions;
      currentMain = mainscreenQuestionsPaintings;
      openBlock(headerCategories, mainscreenCategoriesPaintings);
    }
  });

  function changePicturesQuestion() {
    questionIndex += 1;
    questionIndexInCurrentRound += 1;
    playLinesAnimation();
    setTimeout(() => {
      generatePaintingsQuestion();
      animations.closeModal(modalAnswerPic, modalOverlay);
      modalAnswerPicIconCorrect.classList.add('hidden');
      modalAnswerPicIconIncorrect.classList.add('hidden');
    }, 800);
  }

  modalAnswerPicNext.addEventListener('click', changePicturesQuestion);
  questionClose.addEventListener('click', () => {
    animations.openModal(modalQuit, modalOverlay);
  });

  /*
  ==============================================
    Render blocks after opening an application
  ==============================================
  */

  for (let i = 1; i < 13; i += 1) {
    const keyName = `Round${i}`;
    let roundScore = 0;
    if (fullResultsArtists != null) {
      if (fullResultsArtists[keyName]) {
        fullResultsArtists[keyName].forEach((item) => {
          if (item === true) {
            roundScore += 1;
          }
        });
        categoriesArtistsHeaderScore[i - 1].innerHTML = `${roundScore}/10`;
        categoriesArtistsItems[i - 1].classList.remove('categories-item-inactive');
      } else {
        categoriesArtistsHeaderScore[i - 1].classList.add('hidden');
      }
    }
  }

  for (let i = 1; i < 13; i += 1) {
    const keyName = `Round${i}`;
    let roundScore = 0;
    if (fullResultsPaintings != null) {
      if (fullResultsPaintings[keyName]) {
        fullResultsPaintings[keyName].forEach((item) => {
          if (item === true) {
            roundScore += 1;
          }
        });
        categoriesPaintingsHeaderScore[i - 1].innerHTML = `${roundScore}/10`;
        categoriesPaintingsItems[i - 1].classList.remove('categories-item-inactive');
      } else {
        categoriesPaintingsHeaderScore[i - 1].classList.add('hidden');
      }
    }
  }

  async function renderResultsBlock(indexOfRound, category) {
    await getDatabase().then((value) => {
      database = value;
    });
    const keyName = `Round${indexOfRound + 1}`;
    let roundScore = 0;
    let imageIndex;

    if (category === 'artists') {
      imageIndex = indexOfRound * 10;
      for (let i = 0; i < 12; i += 1) {
        resultsImages[i].classList.add('results-pictures-item-inactive');
        if (fullResultsArtists[keyName][i] === true) {
          roundScore += 1;
          resultsImages[i].classList.remove('results-pictures-item-inactive');
        }
      }
    }
    if (category === 'pictures') {
      imageIndex = indexOfRound * 10 + 120;
      for (let i = 0; i < 10; i += 1) {
        resultsImages[i].classList.add('results-pictures-item-inactive');
        if (fullResultsPaintings[keyName][i] === true) {
          roundScore += 1;
          resultsImages[i].classList.remove('results-pictures-item-inactive');
        }
      }
    }

    for (let i = 0; i < 10; i += 1) {
      let currentImageIndex = imageIndex;
      currentImageIndex += i;
      resultsImages[i].addEventListener('click', () => {
        setImage(currentImageIndex, modalInfoImg, false);
        modalInfoTitle.textContent = database[currentImageIndex].name;
        modalInfoArtist.textContent = `${database[currentImageIndex].author}, ${database[currentImageIndex].year}`;
        animations.openModal(modalInfo, modalOverlay);
        currentImageIndex += 1;
      });
      modalInfoClose.addEventListener('click', () => {
        animations.closeModal(modalInfo, modalOverlay);
      });
    }

    for (let i = 0; i < 10; i += 1) {
      setImage(imageIndex, resultsImages[i], false);
      imageIndex += 1;
    }
    resultsTitleNumber.textContent = `Round ${indexOfRound + 1}`;
    resultsTitleScore.textContent = `${roundScore}/10`;

    currentHeader = headerResults;
    currentMain = mainscreenResults;
    openBlock(headerCategories, bufferCategory);
  }

  // from results to default
  headerResultsHome.addEventListener('click', () => {
    const prev = currentMain;
    currentHeader = headerDefault;
    currentMain = mainscreenDefault;
    openBlock(headerResults, prev);
  });

  // from results to categories
  headerResultsCategories.addEventListener('click', () => {
    currentHeader = headerCategories;
    currentMain = bufferCategory;
    openBlock(headerResults, mainscreenResults);
  });

  for (let i = 0; i < 10; i += 1) {
    categoriesArtistsHeaderScore[i].addEventListener('click', () => {
      renderResultsBlock(i, 'artists');
    });
  }

  for (let i = 0; i < 10; i += 1) {
    categoriesPaintingsHeaderScore[i].addEventListener('click', () => {
      renderResultsBlock(i, 'pictures');
    });
  }
};

export default showPages;
