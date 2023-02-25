import { Modal } from './Modal';

export class ArticleModal extends Modal {
  constructor(classes, { id, title, imageURL, tags, text, date }) {
    super(classes);
    this.id = id;
    this.title = title;
    this.imageURL = imageURL;
    this.tags = tags;
    this.text = text;
    this.date = date;
  }

  generateContent() {
    let template = '';

    template += `<div class="modal__pic">`;
    if (this.imageURL) {
      template += `<img class="modal__img" src=${this.imageURL} alt="strategy" />`;
    }
    template += `</div>`;

    template += `<div class="modal__content">`;
    if (this.date) {
      template += `<p class="modal__date">${this.date}</p>`;
    }
    if (this.title) {
      template += `<h3 class="modal__title">${this.title}</h3>`;
    }
    if (this.text) {
      template += `<p class="modal__text">${this.text}</p>`;
    }
    if (this.tags) {
      template += `<div class="modal__tags tags">`;
      this.tags.map((tag) => (template += `<span class="tag tag_bordered">${tag}</span>`));
      template += `</div>`;
    }
    template += `</div>`;

    return template;
  }

  renderModal() {
    let content = this.generateContent();
    super.buildModal(content);
  }
}
