import { bodyElement } from './full-photo-modal.js';
import { scalePictureField, onZoomChange, resetScale } from './zoom-scale.js';
import { init, reset } from './nouislader.js';
import { sendPicture } from './api.js';
import { isEscapeKey } from './util.js';
import { showSuccessMessage, showErrorMessage } from './message.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_SIMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const ErrorText = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_COUNT} хэштегов`,
  NOT_UNIQUE: 'Хэштеги должны быть уникальными',
  INVALID_PATTERN: 'Неверный хэштег',
};

const pictureForm = document.querySelector('.img-upload__form');
const pictureUploadContainer = pictureForm.querySelector('.img-upload__overlay');
const pictureOpeninput = pictureForm.querySelector('.img-upload__input');
const pictureCloseButton = pictureForm.querySelector('.img-upload__cancel');
const form = document.getElementById('upload-select-image');
const hashtagField = pictureForm.querySelector('.text__hashtags');
const commentField = pictureForm.querySelector('.text__description');
const submitButton = pictureForm.querySelector('.img-upload__submit');

const toggleSubmitButton = (isDisabled) => {
  submitButton.disabled = isDisabled;
};

const pristine = new Pristine(pictureForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
}, false);

const showForm = () => {
  pictureUploadContainer.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  init();
};

const closeForm = () => {
  form.reset();
  pristine.reset();
  resetScale();
  reset();
  pictureUploadContainer.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter(Boolean);

const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID_SIMBOLS.test(tag));

const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

function onDocumentKeydown(evt) {
  const isErrorMessageExists = Boolean(document.querySelector('.error'));

  if (isEscapeKey && !isErrorMessageExists) {
    evt.preventDefault();
    closeForm();
  }
}

hashtagField.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

commentField.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

const onPictureInputChange = () => {
  showForm();
};

const onClosePictureButtonClick = () => {
  closeForm();
};

pristine.addValidator(
  hashtagField,
  hasValidCount,
  ErrorText.INVALID_COUNT,
  3,
  true
);

pristine.addValidator(
  hashtagField,
  hasUniqueTags,
  ErrorText.NOT_UNIQUE,
  2,
  true
);

pristine.addValidator(
  hashtagField,
  hasValidTags,
  ErrorText.INVALID_PATTERN,
  1,
  true
);

const sendForm = async (formElement) => {
  if (!pristine.validate()) {
    toggleSubmitButton(true);
    return;
  }

  try {
    toggleSubmitButton(true);
    await sendPicture(new FormData(formElement));
    closeForm();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  } finally {
    toggleSubmitButton(false);
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  sendForm(evt.target);
};

pictureOpeninput.addEventListener('change', onPictureInputChange);
pictureCloseButton.addEventListener('click', onClosePictureButtonClick);
form.addEventListener('submit', onFormSubmit);
scalePictureField.addEventListener('click', onZoomChange);
