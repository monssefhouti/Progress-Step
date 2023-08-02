let btnNext = document.querySelector(".btn-next");
let btnPrev = document.querySelector(".btn-prev");
let circle = document.querySelectorAll(".circle");
let progress = document.querySelector(".progress");
let currentActive = 1;

const update = () => {
  circle.forEach((c, index) => {
    console.log(index < circle.length)
    if (index < currentActive) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });
    const actives = document.querySelectorAll(".active");
  progress.style.width = (actives.length - 1) / (circle.length - 1) * 100 + "%";
  if (currentActive === 1) {
    btnPrev.disabled = true;
    progress.style.width = "0%";
  } else if (currentActive === circle.length) {
    btnNext.textContent = "Submit";
    btnNext.style.backgroundColor = "#198754";
  } else {
    btnNext.textContent = "Next";
    btnNext.style.backgroundColor = "#3498db";
    btnPrev.disabled = false;
  }

};

btnNext.addEventListener("click", (e) => {
  currentActive++;
  //console.log(currentActive)
  if (currentActive >= circle.length) {
    currentActive = circle.length;
  }
  update();
});
btnPrev.addEventListener("click", (e) => {
  currentActive--;
  //console.log(currentActive)
  if (currentActive <= 1) {
    currentActive = 1;
  }
  update();
});
