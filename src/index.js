import './index.html';
import './index.scss';

import { data } from './js/data';
import { renderArticles } from './js/render-articles';
import { addTagsClickHandler } from './js/tags-handler';

window.onload = function () {
  if (data) renderArticles();
  addTagsClickHandler();
};
