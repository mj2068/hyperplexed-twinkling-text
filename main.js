let index = 0,
  interval = 1000;

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let stars = document.getElementsByClassName("magic-star");

const animate = (star) => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 100)}%`);
  // without the following line will result in some elements not being processed
  // by this function, and they will show their static state
  star.style.display = "block";

  star.style.animation = "none";
  // DOM reflow
  star.offsetHeight;
  star.style.animation = "scale 700ms ease forwards";
};

for (const star of stars) {
  setTimeout(() => {
    animate(star);
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / stars.length));
}
