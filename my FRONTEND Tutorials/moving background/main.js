const menu = document.getElementById("menu");
Array.from(document.querySelectorAll(".menu-item")).forEach((item, index) => {
   item.onmouseover = () => {
      menu.dataset.activeIndex = index;
   };
});
