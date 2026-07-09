
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if(menuToggle && menu){
  menuToggle.addEventListener('click', () => menu.classList.toggle('open'));
}
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
document.querySelectorAll('[data-lightbox]').forEach(item=>{
  item.addEventListener('click', ()=>{
    if(lightbox && lightboxImg){
      lightboxImg.src = item.getAttribute('data-lightbox');
      lightbox.classList.add('open');
    }
  });
});
document.querySelectorAll('.close-lightbox,.lightbox').forEach(el=>{
  el.addEventListener('click', (e)=>{
    if(e.target.classList.contains('lightbox') || e.target.classList.contains('close-lightbox')){
      lightbox.classList.remove('open');
    }
  });
});
