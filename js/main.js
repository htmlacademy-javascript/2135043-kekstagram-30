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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createUniqIdNumber = (min, max) => {
  const uniqIdArray = [];

  return () => {
    let currentIdNumber = getRandomInteger(min, max);
    while (uniqIdArray.includes(currentIdNumber)) {
      currentIdNumber = getRandomInteger(min, max);
    }
    uniqIdArray.push(currentIdNumber);
    return currentIdNumber;
  };
};

const getRandomPhotoId = createUniqIdNumber(1, 25);
const getRandomCommentId = createUniqIdNumber(1, 1000);

const createComment = () => ({
  id: getRandomCommentId(),
  avatar: `img/avatar${getRandomInteger(1, 25)}.svg`,
  message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],

});

const createPhotoPost = () => ({
  id: getRandomPhotoId(),
  url: `photos/${getRandomInteger(1, 6)}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: getRandomInteger(0, 30),
});

const PhotoPost = Array.from({ length: 25 }, createPhotoPost);
