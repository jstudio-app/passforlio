// Device switching also works when index.html is opened directly via file://.
(() => {
 const root=document.querySelector('.hero-showcase');if(!root)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let start=performance.now();
 root.querySelectorAll('button[data-kind]').forEach(button=>button.addEventListener('click',()=>{
  root.dataset.kind=button.dataset.kind;root.dataset.phoneContent='false';start=performance.now();
  root.querySelectorAll('button[data-kind]').forEach(other=>other.setAttribute('aria-pressed',String(other===button)));
  root.dispatchEvent(new Event('passfolio:devicechange'));
 }));
 setInterval(()=>{if(document.hidden)return;const t=((performance.now()-start)/1000)%14;root.dataset.phoneContent=String(!reduced.matches&&t>=4&&t<11)},200);
})();
