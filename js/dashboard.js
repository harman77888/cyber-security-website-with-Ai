document.addEventListener('DOMContentLoaded',()=>{
 const side=document.querySelector('.sidebar'),toggle=document.querySelector('[data-side]');
 if(toggle&&side){toggle.addEventListener('click',()=>side.classList.toggle('open'));}
 document.querySelectorAll('.side-link').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<761)side?.classList.remove('open')}));
 document.querySelectorAll('.kpi-value[data-count]').forEach(el=>{
   const target=parseFloat(el.dataset.count),decimals=String(target).includes('.')?1:0;let n=0,step=target/35;
   const tick=()=>{n=Math.min(target,n+step);el.textContent=n.toFixed(decimals);if(n<target)requestAnimationFrame(tick)};tick();
 });
 const search=document.querySelector('[data-global-search]');
 if(search) search.addEventListener('input',()=>{const q=search.value.toLowerCase().trim();document.querySelectorAll('[data-searchable]').forEach(el=>el.hidden=!!q&&!el.textContent.toLowerCase().includes(q));});
 document.querySelectorAll('.alert').forEach(a=>a.addEventListener('click',()=>showToast('Alert details opened in the investigation view.')));
});
