import { bodyElement } from './full-photo-modal.js';
import { isEscapeKey } from './util.js';

const pictureForm = document.querySelector('.img-upload__form');
const pictureUploadContainer = pictureForm.querySelector('.img-upload__overlay');
const pictureOpeninput = pictureForm.querySelector('.img-upload__input');
const pictureCloseButton = pictureForm.querySelector('.img-upload__cancel');

const showForm = () => {
  pictureUploadContainer.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const onOpenPictureInputClick = () => {
  showForm();
};

const closeForm = () => {
  pictureUploadContainer.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);

  const form = document.getElementById('upload-select-image');
  const inputs = form.document.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
};

function onDocumentKeydown(evt) {
  if (isEscapeKey) {
    evt.preventDefault();
    closeForm();
  }
}

const onClosePictureButtonClick = () => {
  closeForm();
};

pictureOpeninput.addEventListener('click', onOpenPictureInputClick);
pictureCloseButton.addEventListener('click', onClosePictureButtonClick);

export { pictureForm };
