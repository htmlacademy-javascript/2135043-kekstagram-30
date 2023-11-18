import { loadPictures } from './api.js';
import './form.js';
import { renderGallery } from './gallery.js';
import { showErrorMessage } from './util.js';
import { initGalleryFilters } from './filters.js';

const bootstrap = async () => {
  try {
    const pictures = await loadPictures();
    renderGallery(pictures);
    initGalleryFilters(pictures);
  } catch (error) {
    showErrorMessage();
  }
};

bootstrap();

