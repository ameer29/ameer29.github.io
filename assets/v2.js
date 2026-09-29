(function(){
  var MOON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';
  document.addEventListener('DOMContentLoaded',function(){
    var tb=document.getElementById('themeBtn'); if(tb) tb.innerHTML=MOON;
    var menu=document.getElementById('menu'),mb=document.getElementById('menuBtn');
    if(menu&&mb){
      mb.addEventListener('click',function(){var o=menu.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.textContent=o?'✕':'☰';});
      menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.classList.remove('open');mb.textContent='☰';});});
      var here=location.pathname.split('/').pop();
      menu.querySelectorAll('a').forEach(function(a){if(a.getAttribute('href')===here)a.classList.add('active');});
    }
  });
})();
