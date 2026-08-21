const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle('is-active', item === button));
    cards.forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.region !== filter;
    });
  });
});
