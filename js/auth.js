
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-password-toggle]').forEach(btn=>btn.addEventListener('click',()=>{const input=document.querySelector(btn.dataset.passwordToggle);if(input)input.type=input.type==='password'?'text':'password'}));
 const form=document.querySelector('[data-auth-form]');
 if(form) form.addEventListener('submit',e=>{e.preventDefault();let valid=true;form.querySelectorAll('[required]').forEach(i=>{if(!i.value.trim()){i.style.borderColor='var(--red)';valid=false}else i.style.borderColor=''});if(valid){localStorage.setItem('cybershield-auth','1');showToast('Frontend validation passed. Demo login only.');setTimeout(()=>location.href='dashboard.html',700)}});
});
