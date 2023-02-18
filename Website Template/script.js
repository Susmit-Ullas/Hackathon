// typing animation script
var typed = new Typed('.typing', 
{
  strings: ["Web Developer", "Freelancer", "Blogger", "Web Designer", "Content Writer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// aside script
const navTogglerBtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside');
    navTogglerBtn.addEventListener('click', () =>
    {
      asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn()
    {
      aside.classList.toggle('open');
      navTogglerBtn.classList.toggle('open');
    }
