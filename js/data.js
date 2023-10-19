import { getRandomInteger } from './util.js';
import { createUniqIdNumber } from './util.js';

const DESCRIPTIONS = [
  'Такого вы еще никогда не видели!',
  'Мой муд по жизни',
  'Сказочное Бали',
  'Суета сует',
  'Праздничный рейв',
  'Интересно девки пляшут',
  'Три тополя на плющихе',
  'Необычное зрелище',
  'Кушать подано',
  'О, тепленькая пошла!',
  'Ура!Наконец-то отпуск',
  'Вечерело...',
  'И все-таки она вертится',
  'Проще, чем кажется',
  'Мой новый друг',
];

const NAMES = [
  'Виктория',
  'Иван',
  'Светлана',
  'Юрий',
  'Екатерина',
  'Татьяна',
  'Игорь',
  'Николай',
  'Степан',
  'Лариса',
  'Мария',
  'Александр',
  'Евгений',
  'Всеволод',
  'Ольга',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент? ',
];

const MAX_COUNT_PHOTO_POST = 25;
const MIN_LIKE_COUNT = 15;
const MAX_LIKE_COUNT = 200;
const MAX_AVATAR_COUNT = 6;
const MAX_COUNT_PHOTO = 25;

const getRandomPhotoId = createUniqIdNumber(1, 25);
const getRandomCommentId = createUniqIdNumber(1, 1000);

const createComment = () => ({
  id: getRandomCommentId(),
  avatar: `img/avatar${getRandomInteger(1, MAX_AVATAR_COUNT)}.svg`,
  message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const createPhotoPost = () => ({
  id: getRandomPhotoId(),
  url: `photos/${getRandomInteger(1, MAX_COUNT_PHOTO)}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(MIN_LIKE_COUNT, MAX_LIKE_COUNT),
  comments: Array.from({ length: getRandomInteger(0, 30) }, createComment),
});

const getPhotoPost = () => Array.from({ length: MAX_COUNT_PHOTO_POST }, createPhotoPost);

export { getPhotoPost };
