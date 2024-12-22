(() => {
  // Elemen-elemen yang akan dimanipulasi
  const navbarnav = document.querySelector(".navbar-nav");
  const rotikus = document.querySelector("#rotikukus-menu");

  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => {
    const isActive = navbarnav.classList.toggle("active");
    rotikus.setAttribute("aria-expanded", isActive);
  };

  // Fungsi untuk menutup sidebar
  const closeSidebar = () => {
    if (navbarnav.classList.contains("active")) {
      navbarnav.classList.remove("active");
      rotikus.setAttribute("aria-expanded", "false");
    }
  };

  // Event klik pada tombol menu
  rotikus.addEventListener("click", toggleSidebar);

  // Event klik di luar sidebar
  document.addEventListener("click", (e) => {
    if (!rotikus.contains(e.target) && !navbarnav.contains(e.target)) {
      closeSidebar();
    }
  });

  // Event keyboard (Escape untuk menutup sidebar)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSidebar();
    }
  });
})();
