// js/auth.js

// Tunggu hingga seluruh dokumen HTML dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen-elemen yang dibutuhkan dari DOM
  const loginTab = document.getElementById("loginTab");
  const registerTab = document.getElementById("registerTab");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  // Tambahkan event listener untuk klik pada Tab Login
  loginTab.addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah link berpindah halaman

    // Tampilkan Form Login
    loginForm.classList.remove("d-none");
    // Sembunyikan Form Register
    registerForm.classList.add("d-none");

    // Atur status aktif pada tab
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
  });

  // Tambahkan event listener untuk klik pada Tab Register
  registerTab.addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah link berpindah halaman

    // Sembunyikan Form Login
    loginForm.classList.add("d-none");
    // Tampilkan Form Register
    registerForm.classList.remove("d-none");

    // Atur status aktif pada tab
    loginTab.classList.remove("active");
    registerTab.classList.add("active");
  });
});
