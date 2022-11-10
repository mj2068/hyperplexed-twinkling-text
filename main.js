let index = 0,
  interval = 3000;

const rand = (min, max) => {
  let r = Math.floor(Math.random() * (max - min + 1)) + min;
  // console.log("random number: ", r);
  return r;
};

let stars = document.getElementsByClassName("magic-star");

const animate = (star) => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 100)}%`);
  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
};

for (const star of stars) {
  // console.log(star);
  // let a = index++ * (interval / stars.length);
  // console.log("a", stars.length, a);

  setTimeout(() => {
    console.log(Date.now());
    animate(star);
    // setInterval(() => animate(star), 1000);
  }, index++ * 1000);
}
