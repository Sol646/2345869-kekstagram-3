import { changeEffect } from './slider.js';

const imagePreview = document.querySelector('.img-upload__preview').children[0];
const effects = document.querySelector('.img-upload__effects');

const setupEffects = () => {
  effects.addEventListener('click', (evt) => {
    const evtTargetElement = evt.target;
    if (evtTargetElement.tagName !== 'INPUT') {
      return;
    }
    imagePreview.classList = '';
    imagePreview.classList.add(`effects__preview--${evtTargetElement.value}`);
    changeEffect(evtTargetElement.value);
  });
};

const clearEffects = () => {
  imagePreview.classList = '';
  imagePreview.classList.add('img-upload__preview--none');
};

export { setupEffects, clearEffects };
