(() => {
  const menu = document.getElementById('nav-menu');
  const toggle = document.getElementById('mobile-toggle');
  if(menu && toggle){
    toggle.addEventListener('click', () => { const open = menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent = open ? 'Close' : 'Menu'; });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu';}));
  }
  document.querySelectorAll('[data-video-id]').forEach(el => {
    const b=el.querySelector('button');if(!b)return;
    b.addEventListener('click',()=>{
      const id=el.getAttribute('data-video-id');if(!/^[A-Za-z0-9_-]{11}$/.test(id))return;
      const frame=document.createElement('iframe');frame.setAttribute('title','YouTube project demo');frame.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');frame.setAttribute('allowfullscreen','');frame.setAttribute('loading','eager');frame.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0';el.replaceChildren(frame);
    });
  });
  const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
})();
