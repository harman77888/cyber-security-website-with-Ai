
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-confirm-password]').forEach(form=>form.addEventListener('submit',e=>{const a=form.querySelector('[name=password]'),b=form.querySelector('[name=confirm]');if(a&&b&&a.value!==b.value){e.preventDefault();showToast('Passwords do not match.')}}));
});
