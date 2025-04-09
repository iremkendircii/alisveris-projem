document.addEventListener("DOMContentLoaded", () => {
  const icons = [
    "box.png",
    "buyer.png",
    "discount.png",
    "heart.png",
    "love.png",
    "mobile-shopping.png",
    "sale-tag.png",
    "shopping-bag.png",
    "woman.png",
    "gift.png",
    "shopping-cart.png",
    "notification.png",
    "logout.png"
  ];

  const container = document.getElementById("floatingContainer");

  function createFloatingIcon() {
    const icon = document.createElement("img");
    icon.src = `./icons/${icons[Math.floor(Math.random() * icons.length)]}`;
    icon.className = "floating-icon";

    const left = Math.random() * 90;
    icon.style.left = `${left}%`;

    const size = 40 + Math.random() * 20;
    icon.style.width = `${size}px`;
    icon.style.height = `${size}px`;

    container.appendChild(icon);

    setTimeout(() => {
      icon.remove();
    }, 6000);
  }

  setInterval(createFloatingIcon, 1500);
});
