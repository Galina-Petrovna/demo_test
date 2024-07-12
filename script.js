const openBtn = document.querySelector('.button');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');

openBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});