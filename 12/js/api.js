const SERVER_URL = 'https://30.javascript.pages.academy/kekstagram';

const ServerRoute = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET: 'Не удалось загрузить данные.',
  POST: 'Ошибка отправки формы. Попробуйте ещё раз.',
};

const request = (route, errorText = ErrorText.GET_DATA, method = HttpMethod.GET, body = null) =>

  fetch(`${SERVER_URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const loadPictures = async () => request(ServerRoute.GET_DATA);

const sendPicture = async (pictureData) => request(
  ServerRoute.SEND_DATA,
  HttpMethod.POST,
  pictureData,
);

export { loadPictures, sendPicture };
