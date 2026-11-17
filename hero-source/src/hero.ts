import { DeviceRenderer } from './lib/device';
import { initialProject } from './lib/project';
const root=document.querySelector<HTMLElement>('.hero-showcase')!;
const host=root.querySelector<HTMLElement>('.duo-canvas')!;
const stage=root.querySelector<HTMLElement>('.hero-device-stage')!;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let start=performance.now(), visible=true;
root.querySelectorAll<HTMLButtonElement>('button[data-kind]').forEach(b=>b.addEventListener('click',()=>{root.dataset.kind=b.dataset.kind;start=performance.now();root.querySelectorAll<HTMLButtonElement>('button[data-kind]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)))}));
new IntersectionObserver(entries=>visible=entries[0].isIntersecting).observe(stage);
const p=initialProject(); p.demo=false;p.scene='fold';p.view.transparent=true;p.view.scale=1.22;p.view.yaw=0;p.view.pitch=0;
const page=p.pages[0];
for(const [slot,file,w,h] of [['outer','duo-outer.png',1398,2034],['landscape','duo-immersive.png',2853,2007]] as const){page.slots[slot].asset={name:file,data:new URL('./hero/'+file,import.meta.url).href,width:w,height:h,source:'simulator'};page.slots[slot].fit='contain';}
const ease=(x:number)=>x*x*(3-2*x);
async function main(){const renderer=new DeviceRenderer();await renderer.prepare(p,page);let last=0;
function frame(now:number){requestAnimationFrame(frame);if(!visible||document.hidden||now-last<33)return;last=now;const t=((now-start)/1000)%14;let open=t<3?0:t<5.5?ease((t-3)/2.5):t<10.5?1:t<13?1-ease((t-10.5)/2.5):0;if(reduced.matches)open=1;p.view.open=open;root.dataset.phoneContent=String(t>=4&&t<11);if(root.dataset.kind==='iphone')return;const dpr=Math.min(Math.max(devicePixelRatio,1.75),2);host.appendChild(renderer.draw(p,Math.round(stage.clientWidth*dpr),Math.round(stage.clientHeight*dpr)));host.classList.add('is-ready');}
requestAnimationFrame(frame);}
main().catch(e=>console.warn('Duo preview unavailable',e));
