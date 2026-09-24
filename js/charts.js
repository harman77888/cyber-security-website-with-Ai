
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-bars]').forEach(box=>{
   const vals=(box.dataset.bars||'42,58,35,72,64,83,55,76,61,88,69,94,73,81,66,90,77,86,71,92').split(',').map(Number);
   vals.forEach((v,i)=>{const b=document.createElement('span');b.className='bar';b.style.height=v+'%';b.style.animationDelay=(i*.025)+'s';box.appendChild(b)})
 });
});
