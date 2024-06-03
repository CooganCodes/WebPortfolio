// stickyNavbar.js
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const homeSection = document.querySelector('#home');

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: '-50px', // Adjust this value based on the height of your navbar
    }
  );

  observer.observe(homeSection);
});
