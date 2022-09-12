function menuToggle() {
  const menuContainer = document.getElementById("navMenu");
  const btn = document.getElementById("menuButton");
  btn.classList.toggle("btnBorder");
  menuContainer.classList.toggle("dropdown");
}
