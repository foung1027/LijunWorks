function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  const backToTopBtn = document.getElementById("backToTop");

  window.onscroll = function () {
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  };

  backToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
