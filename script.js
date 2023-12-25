document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementsByClassName('enva-modal')[0];

  const buttonOpenModal = document.getElementsByClassName(
    'enva-footer__button'
  )[0];

  const buttonCloseModal = document.getElementsByClassName(
    'enva-modal-content__close'
  )[0];

  buttonOpenModal.addEventListener('click', function () {
    modal.style.display = 'flex';
  });

  buttonCloseModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  });
});
