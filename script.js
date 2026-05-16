const fadeElements = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      el.classList.add('show');
    }
  });
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

window.addEventListener('load', function(){
  document.getElementById('loader').style.display = 'none';
});