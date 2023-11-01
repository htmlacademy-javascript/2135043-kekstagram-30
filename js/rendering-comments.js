import { getPhotoPost } from './data.js';

const fullPhotoComments = document.querySelector('.social__comments');
const commentTemplate = document.createComment(
  `<li class="social__comment">
        <img
          class="social__picture"
          src=""
          alt=""
          width="35" height="35">
          <p class="social__text"></p>
  </li>`
);

const getComments = (current) => {
  fullPhotoComments.innerHTML = '';

  const getCommentFragment = document.createDocumentFragment();

  getPhotoPost[current].comments.forEach(({avatar, name, message}) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    getCommentFragment.appendChild(commentElement);
  });

  fullPhotoComments.appendChild(getCommentFragment);
};

export { getComments };

/*const getComments = () => {
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

export { getComments };*/
