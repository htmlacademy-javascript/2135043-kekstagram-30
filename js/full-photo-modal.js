import './rendering-pictures.js';
import { pictureList } from './rendering-pictures.js';
import { isEscapeKey } from './util.js';
import { getComments } from './rendering-comments.js';

const COMMENT_COUNT = 5;
const fullPhotoModal = document.querySelector('.big-picture');
const fullPhotoModalClose = fullPhotoModal.querySelector('.big-picture__cancel');
const picturesList = pictureList.querySelectorAll('.picture');

function onModalEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullPhotoModal();
  }
}

function openFullPhotoModal () {
  fullPhotoModal.classList.remove('hidden');
  document.addEventListener('keydown', onModalEscKeydown);
  document.querySelector('body').classList.add('modal-open');
  document.querySelector('.social__comment-count').classList.add('.hidden');
  document.querySelector('.comments-loader').classList.add('.hidden');
}

function closeFullPhotoModal () {
  fullPhotoModal.classList.add('hidden');
  document.removeEventListener('keydown', onModalEscKeydown);
  document.querySelector('body').classList.remove('modal-open');
}

picturesList.forEach((pictureMini) => {
  pictureMini.addEventListener('click', (evt) => {
    evt.preventDefault();
    openFullPhotoModal();

    fullPhotoModal.querySelector('img').src = pictureMini.querySelector('.picture__img').src;
    fullPhotoModal.querySelector('.likes-count').textContent = pictureMini.querySelector('.picture__likes').textContent;
    fullPhotoModal.querySelector('.social__caption').textContent = pictureMini.querySelector('.picture__img').alt;
    fullPhotoModal.querySelector('.social__comment-total-count').textContent = pictureMini.querySelector('.picture__comments').textContent;
    fullPhotoModal.querySelector('.social__comment-shown-count').textContent = COMMENT_COUNT;
    const currentId = pictureMini.querySelector('.picture__img').id;
    getComments(currentId);
  });
});

fullPhotoModalClose.addEventListener('click', () => {
  closeFullPhotoModal();
});

export { picturesList };
