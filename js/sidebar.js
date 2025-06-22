// js/sidebar.js

document.addEventListener("DOMContentLoaded", () => {
  // Pastikan kode ini berjalan setelah komponen sidebar dimuat
  const initSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("sidebar-toggle");
    const mobileToggleBtn = document.getElementById("mobile-sidebar-toggle"); // Tombol di header utama
    const mainContent = document.getElementById("main-content");
    // ...existing code...
    const navlink = document.querySelectorAll(".nav-link");
    navlink.forEach((link) => {
      link.addEventListener("click", function (e) {
        // Hapus 'active' dari semua link
        navlink.forEach((l) => l.classList.remove("active"));
        // Tambahkan 'active' ke link yang diklik
        this.classList.add("active");
      });
    });
    // ...existing code...

    if (!sidebar || !toggleBtn || !mobileToggleBtn || !mainContent) {
      // Jika salah satu elemen tidak ditemukan, tunggu dan coba lagi
      // Ini untuk memastikan komponen sudah diload oleh components.js
      setTimeout(initSidebar, 100);
      return;
    }

    // Fungsi untuk toggle link di mode desktop (ciutkan/lebarkan)
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
    document.addEventListener("click", function (e) {
      if (e.target.closest(".sidebar-toggle-btn")) {
        document.body.classList.toggle("sidebar-collapsed");
      }
    });
    // Fungsi untuk toggle sidebar di mode mobile (buka/tutup)
    mobileToggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });

    // Opsional: Tutup sidebar mobile saat salah satu link diklik
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
