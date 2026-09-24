document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('[data-menu]');
  const nav=document.querySelector('.nav-links');
  if(menu&&nav){
    menu.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      menu.setAttribute('aria-expanded',String(open));
    });
    document.addEventListener('click',e=>{
      if(window.innerWidth<=960&&!nav.contains(e.target)&&!menu.contains(e.target)){
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded','false');
      }
    });
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
    });
  }
  document.querySelectorAll('[data-toast]').forEach(b=>b.addEventListener('click',()=>showToast(b.dataset.toast)));
  document.querySelectorAll('[data-modal]').forEach(b=>b.addEventListener('click',()=>document.querySelector(b.dataset.modal)?.classList.add('open')));
  document.querySelectorAll('.modal [data-close]').forEach(b=>b.addEventListener('click',()=>b.closest('.modal').classList.remove('open')));
  document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('open')}));
  document.querySelectorAll('[data-scroll]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.dataset.scroll);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}}));
});
function showToast(msg){let t=document.querySelector('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),2600)}
