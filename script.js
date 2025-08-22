document.querySelectorAll("nav ul li").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll("nav ul li").forEach(el => el.classList.remove("active"));
    
    item.classList.add("active");
  });
});
