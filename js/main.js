import './data.js';
import './thumbnail.js';
import './full-photo-modal.js';
import './form.js';
import { getPhotoPost } from './data.js';
import { renderGallery } from './gallery.js';

renderGallery(getPhotoPost());
