document.addEventListener("DOMContentLoaded", () => {
  const initSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("sidebar-toggle");
    const mobileToggleBtn = document.getElementById("mobile-sidebar-toggle");
    const mainContent = document.getElementById("main-content");

    const navlink = document.querySelectorAll(".nav-link");
    navlink.forEach((link) => {
      link.addEventListener("click", function (e) {
        navlink.forEach((l) => l.classList.remove("active"));

        this.classList.add("active");
      });
    });

    if (!sidebar || !toggleBtn || !mobileToggleBtn || !mainContent) {
      setTimeout(initSidebar, 100);
      return;
    }

    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
    document.addEventListener("click", function (e) {
      if (e.target.closest(".sidebar-toggle-btn")) {
        document.body.classList.toggle("sidebar-collapsed");
      }
    });

    mobileToggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });

    const navLinks = sidebar.querySelectorAll(".nav-link, .sidebar-logo");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove("open");
        }
      });
    });
  };

  initSidebar();
});
