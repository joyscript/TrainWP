export class Article {
  constructor({ id, title, imageURL, tags, wide, ...rest }) {
    this.id = id;
    this.title = title;
    this.imageURL = imageURL;
    this.tags = tags;
    this.wide = wide;
  }

  generateArticle() {
    let template = '';
    let article = document.createElement('article');
    article.className = 'strategy';
    if (this.wide) article.classList.add('strategy_wide');
    article.setAttribute('data-id', this.id);

    if (this.wide) {
      template += `<div class="strategy__pic strategy__pic_wide">`;
      if (this.imageURL) {
        template += `<img class="strategy__img strategy__img_wide" src=${this.imageURL} alt="strategy" />`;
      }
      template += `</div>`;
    } else {
      template += `<div class="strategy__pic">`;
      if (this.imageURL) {
        template += `<img class="strategy__img" src=${this.imageURL} alt="strategy" />`;
      }
      template += `</div>`;
    }

    template += `<div class="strategy__content">`;
    if (this.title) {
      template += `<h3 class="strategy__title">${this.title}</h3>`;
    }

    if (this.tags) {
      template += `<div class="strategy__tags tags">`;
      this.tags.map((tag) => (template += `<span class="tag tag_colored">${tag}</span>`));
      template += `</div>`;
    }
    template += `</div>`;

    article.innerHTML = template;

    return article;
  }
}
