const imagePreview = document.querySelector('.img-upload__preview').children[0];
const effectLevel = document.querySelector('.img-upload__effect-level');
const slider = effectLevel.querySelector('.effect-level__slider');
const effectValue = effectLevel.querySelector('.effect-level__value');

let currentEffect = 'none';

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  connect: 'lower'
});

const effects = {
  chrome: {
    settings: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    },
    pattern: 'grayscale',
    units: '',
  },
  sepia: {
    settings: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    },
    pattern: 'sepia',
    units: '',
  },
  marvin: {
    settings: {
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    },
    pattern: 'invert',
    units: '%',
  },
  phobos: {
    settings: {
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
    },
    pattern: 'blur',
    units: 'px',
  },
  heat: {
    settings: {
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
    },
    pattern: 'brightness',
    units: '',
  },
};

slider.noUiSlider.on('update', () => {
  effectValue.value = slider.noUiSlider.get();
  if (currentEffect !== 'none') {
    imagePreview.style.filter = `${effects[currentEffect].pattern}(${slider.noUiSlider.get()}${effects[currentEffect].units})`;
  }
});

const changeEffect = (effect) => {
  currentEffect = effect;
  if (currentEffect === 'none') {
    effectLevel.classList.add('hidden');
    imagePreview.style.filter = '';
    return;
  }
  effectLevel.classList.remove('hidden');
  slider.noUiSlider.updateOptions(effects[currentEffect].settings);
  slider.noUiSlider.set(effects[currentEffect].settings.range.max);
};

export { changeEffect };
