window.addEventListener('scroll', function() {
    var derElement = document.getElementById('der-element');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    derElement.style.transform = 'translateY(' + scrollTop + 'px)';
  });