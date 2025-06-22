// data dashboard
function initDashboardCharts() {
  if (window.myRevenueChart instanceof Chart) {
    window.myRevenueChart.destroy();
  }
  if (window.myUserRoleChart instanceof Chart) {
    window.myUserRoleChart.destroy();
  }

  const revenueCtx = document.getElementById("revenueChart");
  if (revenueCtx) {
    window.myRevenueChart = new Chart(revenueCtx, {
      type: "line",
      data: {
        labels: [
          "Senin",
          "Selasa",
          "Rabu",
          "Kamis",
          "Jumat",
          "Sabtu",
          "Minggu",
        ],
        datasets: [
          {
            label: "Pendapatan (Rp)",
            data: [120000, 150000, 135000, 180000, 175000, 250000, 230000],
            borderColor: "#4e73df",
            backgroundColor: "rgba(78, 115, 223, 0.05)",
            fill: true,
            tension: 0.3,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
      },
    });
  }

  const roleCtx = document.getElementById("userRoleChart");
  if (roleCtx) {
    window.myUserRoleChart = new Chart(roleCtx, {
      type: "doughnut",
      data: {
        labels: ["Admin", "Kasir"],
        datasets: [
          {
            label: "Jumlah Pengguna",
            data: [2, 4],
            backgroundColor: ["#4e73df", "#1cc88a"],
            borderColor: ["#ffffff", "#ffffff"],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        cutout: "80%",
      },
    });
  }
}
