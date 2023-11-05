import { getPhotoPost } from './data.js';

const fullPhotoComments = document.querySelector('.social__comments');
const fullPhotoCommentItem = fullPhotoComments.querySelector('.social__comment');

const getComments = (current) => {
  fullPhotoComments.innerHTML = '';

  const getCommentFragment = document.createDocumentFragment();

  getPhotoPost[current].comments.forEach(({ avatar, name, message }) => {
    const commentElement = fullPhotoCommentItem.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    getCommentFragment.appendChild(commentElement);
  });

  fullPhotoComments.appendChild(getCommentFragment);
};

export { getComments };
