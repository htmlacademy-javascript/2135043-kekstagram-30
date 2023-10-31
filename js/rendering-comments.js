import { getPhotoPost } from './data.js';

const fullPhotoComments = document.querySelector('.social__comments');

const getComments = () => {
  fullPhotoComments.innerHTML = '';

  const getCommentFragment = document.createDocumentFragment();

  getPhotoPost.comments.forEach((value) => {
    const commentElement =
      `<li class="social__comment">
        <img
          class="social__picture"
          src="${value.avatar}"
          alt="${value.name}"
          width="35" height="35">
          <p class="social__text">${value.message}</p>
      </li>`;

    getCommentFragment.appendChild(commentElement);
  });

  fullPhotoComments.appendChild(getCommentFragment);
};

export { getComments };
