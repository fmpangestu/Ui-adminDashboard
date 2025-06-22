// js/main.js

// Event listener ini akan berjalan saat seluruh halaman HTML selesai dimuat.
document.addEventListener("DOMContentLoaded", function () {
  // Muat komponen sidebar ke dalam div#sidebar-container di index.html
  // Cek apakah elemennya ada sebelum memuat
  if (document.getElementById("sidebar-container")) {
    loadComponent("components/sidebar.html", "sidebar-container");
  }
});

// Fungsi untuk memuat konten halaman ke area #main-content
async function loadPage(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();
    document.getElementById("main-content").innerHTML = data;
  } catch (error) {
    console.error("Could not load page:", error);
    document.getElementById(
      "main-content"
    ).innerHTML = `<p class="text-danger">Gagal memuat halaman. Cek konsol untuk detail.</p>`;
  }
}

// dashboard

async function loadPage(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.text();
    document.getElementById("main-content").innerHTML = data;

    if (url.includes("kelola_dashboard")) {
      setTimeout(() => {
        if (typeof initDashboardCharts === "function") {
          initDashboardCharts();
        }
      }, 50);
    }
  } catch (error) {
    console.error("Could not load page:", error);
    document.getElementById(
      "main-content"
    ).innerHTML = `<p class="text-danger">Gagal memuat halaman. Cek konsol untuk detail.</p>`;
  }
}
