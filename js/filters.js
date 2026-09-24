
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-filter-input]').forEach(input=>{
  input.addEventListener('input',()=>{const q=input.value.toLowerCase();const table=document.querySelector(input.dataset.filterInput);table?.querySelectorAll('tbody tr').forEach(r=>r.style.display=r.textContent.toLowerCase().includes(q)?'':'none')})
 });
 document.querySelectorAll('[data-sort]').forEach(btn=>btn.addEventListener('click',()=>{const table=document.querySelector(btn.dataset.sort);const rows=[...table.tBodies[0].rows];const col=+btn.dataset.col;rows.sort((a,b)=>a.cells[col].textContent.localeCompare(b.cells[col].textContent));rows.forEach(r=>table.tBodies[0].appendChild(r))}));
});
