export const refs = {
  body: document.querySelector('body'),
  backdrop: document.querySelector('.backdrop'),
  modalCloseBtn: document.querySelector('[data-action="modal-close"]'),
  modalInfoContainer: document.querySelector('.modal-info-container'),
  modalBtnAdd: document.querySelector('.modal-btn-add'),
  modalBtnRemove: document.querySelector('.modal-btn-remove'),
  modalTip: document.querySelector('.modal-tip'),
};

// --------------------------------------------------

refs.modalCloseBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
window.addEventListener('keydown', onEscKeyPress);

// --------------------------------------------------

export function openModal() {
  refs.backdrop.classList.remove('is-hidden');
  refs.body.style.overflow = 'hidden';
}

function onCloseModal(e) {
  refs.backdrop.classList.add('is-hidden');
  refs.body.style.overflow = 'auto';
  refs.modalInfoContainer.innerHTML = '';
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onEscKeyPress(e) {
  onCloseModal();
}
