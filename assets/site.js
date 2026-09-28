(function(){
  var r=document.documentElement;
  try{r.setAttribute('data-theme',localStorage.getItem('ab-theme')||'light')}catch(e){r.setAttribute('data-theme','light')}
  document.addEventListener('DOMContentLoaded',function(){
    var b=document.getElementById('themeBtn');
    if(b){var nb=b.cloneNode(false);nb.textContent='◐';nb.setAttribute('aria-label','Toggle light and dark mode');b.replaceWith(nb);
      nb.addEventListener('click',function(){var t=r.getAttribute('data-theme')==='dark'?'light':'dark';r.setAttribute('data-theme',t);try{localStorage.setItem('ab-theme',t)}catch(e){}});}
    var p=document.createElement('div');p.className='progress';document.body.appendChild(p);
    function sc(){var h=document.documentElement;p.style.width=(h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)*100)+'%';}
    addEventListener('scroll',sc,{passive:true});sc();
    if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.08});
    document.querySelectorAll('main section, main .card, .stats, .shots, .pipeline, .team').forEach(function(el){el.classList.add('rv');io.observe(el);});
  });
})();
