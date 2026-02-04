const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const filterBtns = document.querySelectorAll(".filters button");

let currentIndex = 0;

/* OPEN LIGHTBOX */
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
document.querySelectorAll(".nav").forEach(btn => {
  btn.addEventListener("click", e => e.stopPropagation());
});

lightboxImg.addEventListener("click", e => e.stopPropagation());


/* NEXT / PREV */
nextBtn.onclick = () => changeImage(1);
prevBtn.onclick = () => changeImage(-1);

function changeImage(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

/* FILTERS (BONUS) */
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filters .active").classList.remove("active");
    btn.classList.add("active");

    const category = btn.dataset.filter;

    images.forEach(img => {
      img.style.display =
        category === "all" || img.classList.contains(category)
        ? "block"
        : "none";
    });
  });
});
