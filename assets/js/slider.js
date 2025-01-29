const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);
document.addEventListener('keydown',(e)=>{
    if(e.key === 'ArrowRight') activate({target:document.querySelector('.next')});
    if(e.key === 'ArrowLeft') activate({target:document.querySelector('.prev')});
});