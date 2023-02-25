import { data } from './data';
import { Article } from './Article'; // generate new article in DOM according to receiving data
import { ArticleModal } from './ArticleModal'; // generate pop-up modal for an article, extends general class Modal

export const renderArticles = () => {
  const strategiesContainer = getStrategiesContainer();
  const articles = generateArticles(data); // get an array of objects - instances of the class new Article

  articles.forEach((article) => {
    strategiesContainer.append(article.generateArticle()); // generate nodes <article> and append them to container
  });

  addArticlesClickHandler(); // open pop-up modal on click
};

const getStrategiesContainer = () => {
  const strategiesContainer = document.querySelector('.strategies__container');
  strategiesContainer.innerHTML = '';
  return strategiesContainer;
};

const generateArticles = (data) => {
  let articles = [];
  data.forEach((item) => {
    articles.push(new Article(item));
  });

  return articles; // return an array of objects - instances of the class new Article
};

const addArticlesClickHandler = () => {
  document.querySelector('.strategies__container').addEventListener('click', (e) => {
    if (e.target.closest('.strategy')) {
      let clickedArticleId = e.target.closest('.strategy').getAttribute('data-id');
      let clickedArticleData = data.find((item) => item.id == clickedArticleId);

      renderArticleModal(clickedArticleData);
    }
  });
};

const renderArticleModal = (article) => {
  let modal = new ArticleModal('article__modal', article);
  modal.renderModal();
};
