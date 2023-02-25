export class Modal {
  constructor(classes) {
    this.classes = classes;
    this.overlay = '';
    this.modal = '';
    this.modalCloseBtn = '';
  }

  buildModal(content) {
    this.overlay = this.createDomNode(this.overlay, 'div', 'overlay');
    this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);
    this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'div', 'modal__close-button');

    this.setContent(content);
    this.appendModalElements();
    this.bindEvents();
    this.openModal();
    this.changeModalOpacity();
  }

  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  setContent(content) {
    if (typeof content === 'string') {
      this.modal.innerHTML = content;
    } else {
      this.modal.innerHTML = '';
      this.modal.append(content);
    }
  }

  appendModalElements() {
    this.modal.append(this.modalCloseBtn);
    this.overlay.append(this.modal);
  }

  bindEvents() {
    this.modalCloseBtn.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('click', this.closeModal);
  }

  openModal() {
    document.body.append(this.overlay);
  }

  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains('overlay') || classes.contains('modal__close-button')) {
      e.stopPropagation();
      document.querySelector('.overlay').classList.remove('overlay_active');
      setTimeout(() => {
        document.querySelector('.overlay').remove();
      }, 550);
    }
  }

  changeModalOpacity() {
    setTimeout(() => {
      this.overlay.classList.add('overlay_active');
    }, 0);
  }
}
