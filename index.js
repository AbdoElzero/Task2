let layer = document.querySelector(".circle-container")
let layerBlack = document.querySelector(".circle-container .layerblack span")
let boxs = document.querySelector(".page .boxs")


layerBlack.addEventListener("click", function() {

  if (window.innerWidth <= 575) {
    layer.style.display = "none"
    boxs.style.display = "block"
  }

    boxs.style.display = "block"
    AOS.init({
        duration: 1000,
        once: false,
        disable: false,
      });
      AOS.refresh();
})
