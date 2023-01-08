const pics = document.querySelectorAll('.container');

pics.forEach((pic) => {
  pic.addEventListener('click', () => {
    removeActive();
    pic.classList.add('active');
  });
});

function removeActive() {
  pics.forEach((pic) => {
    pic.classList.remove('active');
  });
}
