(() => {
  const heartCount = 200;

  for (let i = 0; i < heartCount; i++) {
    createHeart();
  }

  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 6 + Math.random() * 4 + "s";
    heart.style.fontSize = 8 + Math.random() * 14 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
      createHeart();
    }, 7000);
  }
})();

function popHeart() {
  const heart = document.createElement("div");
  heart.className = "pop-heart";
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = Math.random() * 100 + "vh";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
}

setInterval(popHeart, 300);