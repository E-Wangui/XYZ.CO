const carousel = document.querySelector(".carousel");
const carouselPrev = document.querySelector(".prev");
const carouselNext = document.querySelector(".next");
const carouselItems = document.querySelectorAll(".carousel__item");
const cartModal = document.querySelector(".cart-modal");
const cartModalContent = document.querySelector(".cart-modal-content");
const cartBtn = document.querySelector(".cart-btn");
const addToCartBtns = document.querySelectorAll(".btn__addtocart");
const cartItems = document.querySelector(".cart-items");
const cartSummary = document.querySelector(".cart-summary");

let currentCarousel = 0;

const cart = [];

const displayOneCarousel = (index) => {
  for (let item of carouselItems) {
    item.style.display = "none";
  }
  carouselItems[index].style.display = "flex";
};

displayOneCarousel(currentCarousel);

setInterval(() => {
  currentCarousel = currentCarousel === 4 ? 0 : currentCarousel + 1;
  displayOneCarousel(currentCarousel);
  //   carouselItems[currentCarousel].style.display = "flex";
}, 5000);

carouselPrev.addEventListener("click", () => {
  currentCarousel = currentCarousel === 0 ? 4 : currentCarousel - 1;
  displayOneCarousel(currentCarousel);
});

carouselNext.addEventListener("click", () => {
  currentCarousel = currentCarousel === 4 ? 0 : currentCarousel + 1;
  displayOneCarousel(currentCarousel);
});
// cartModal.style.transform = "translateX(100%)";

cartModal.addEventListener("click", (e) => {
  if (e.target.contains(cartModalContent)) {
    cartModal.style.transform = "translateX(100%)";
  }
});

cartBtn.addEventListener("click", (e) => {
  cartModal.style.transform = "translateX(0)";
});

for (let addToCartBtn of addToCartBtns) {
  addToCartBtn.addEventListener("click", (e) => {
    const id = parseInt(e.target.getAttribute("data-id"));

    let p_in_cart = cart.find((p) => p.id === id);
    if (p_in_cart) {
      alert("Item Already In cart");
    } else {
      let product = products.find((p) => p.id === id);
      product.quantity = 1;
      cart.push(product);
    }
    showCartItems(cart);
  });
}

const showCartItems = (cart) => {
  cartItems.innerHTML = "";
  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="no-cart-item">
          <h5>No Cart Item</h5>
        </div>`;
  } else {
    let title = `<div class="cart-title">
                      <h4>Image</h4>
                      <h4>Name</h4>
                      <h4>Quantity</h4>
                      <h4>Price</h4>
                      <h4>Total</h4>
                    </div>`;
    cartItems.innerHTML = title;
    cart.forEach((c) => {
      cartItems.innerHTML += `
            <div class="cart-item">
              <img src="${c.image}" alt="" />
              <div class="dets">
                <h5>${c.name.substring(0, 15)}</h5>
              </div>
              <div class="quantity-cont">
                <button data-id="${c.id}" class="decrement-btn">-</button>
                <div class="quantity">${c.quantity}</div>
                <button data-id="${c.id}" class="increment-btn">+</button>
              </div>
              <div class="price">
                <h4>${c.price}</h4>
              </div>
              <div class="total">
                <h3>${c.price * c.quantity}</h3>
              </div>
            </div>`;
    });

    addListeners();
  }

  calculateSummary(cart);
};

const calculateSummary = (cart) => {
  const cartSubTotal = cartSummary.querySelector(".cart-subtotal");
  const cartDiscount = cartSummary.querySelector(".cart-discount");
  const cartTotal = cartSummary.querySelector(".cart-total");
  if (cart.length === 0) {
    cartSubTotal.innerHTML = "Ksh 0";
    cartDiscount.innerHTML = "Ksh 0";
    cartTotal.innerHTML = "Ksh 0";
  } else {
    const subTotal = cart.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    cartSubTotal.innerHTML = "Ksh " + subTotal;

    const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    let discount = 0;
    if (totalQuantity > 10 && totalQuantity < 25) {
      discount = 0.1 * subTotal;
    } else if (totalQuantity > 25 && totalQuantity < 50) {
      discount = 0.25 * subTotal;
    } else if (totalQuantity > 50) {
      discount = 0.5 * subTotal;
    }
    console.log(discount);
    cartDiscount.innerHTML = "Ksh " + discount;
    cartTotal.innerHTML = "Ksh " + (subTotal - discount);
  }
};

showCartItems(cart);

const addListeners = () => {
  const incrementQuantityBtns = document.querySelectorAll(".increment-btn");
  const decrementQuantityBtns = document.querySelectorAll(".decrement-btn");

  for (let incrementQuantityBtn of incrementQuantityBtns) {
    incrementQuantityBtn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));

      const index = cart.findIndex((c) => c.id === id);
      cart[index].quantity += 1;
      showCartItems(cart);
    });
  }

  for (let decrementQuantityBtn of decrementQuantityBtns) {
    decrementQuantityBtn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));

      const index = cart.findIndex((c) => c.id === id);
      cart[index].quantity =
        cart[index].quantity === 1 ? 1 : cart[index].quantity - 1;
      showCartItems(cart);
    });
  }
};
