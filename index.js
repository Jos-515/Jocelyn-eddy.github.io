var views = ['home','projects','skills','contact'];

function show(id){
  if (views.indexOf(id) < 0) id = 'home';
  views.forEach(function(v){
    document.getElementById(v).classList.toggle('active', v === id);
  });
  document.querySelectorAll('nav ul [data-go]').forEach(function(l){
    if (l.getAttribute('data-go') === id) l.setAttribute('aria-current','page');
    else l.removeAttribute('aria-current');
  });
  window.scrollTo(0,0);
}

document.addEventListener('click', function(ev){
  var l = ev.target.closest('[data-go]');
  if (!l) return;
  ev.preventDefault();
  history.replaceState(null,'','#' + l.getAttribute('data-go'));
  show(l.getAttribute('data-go'));
});

window.addEventListener('hashchange', function(){ show(location.hash.slice(1)); });
show(location.hash.slice(1));