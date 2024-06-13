document.addEventListener('DOMContentLoaded', function() {
  var menuWrapper = document.querySelector('.menuWrapper');
  var menuLeftLogo = document.querySelector('.menuLeftLogo');
  var off = menuWrapper.offsetTop;

  window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
          menuWrapper.classList.add('menuWrapperShrink');
          menuLeftLogo.classList.add('menuLeftLogoShrink');
      } else {
          menuWrapper.classList.remove('menuWrapperShrink');
          menuLeftLogo.classList.remove('menuLeftLogoShrink');
      }
  });
});


const bouquetsEl = document.querySelector("#flowers");
bouquetsEl?.addEventListener('click',function(event)
{
    const flowerEl = event.target.closest(".flower");
    if(flowerEl === null){
        return;
    }
    window.open(`buy_page.html?id=${flowerEl.id}`);
})

