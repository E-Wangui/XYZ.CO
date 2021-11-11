const product_list = document.querySelector(".product__list");

const products = [
  {
    id: 1,
    name: "Morning Glory Value",
    image:
      "https://www.superfoam.co.ke/wp-content/uploads/morning_glory_mattress_1.jpg",
    price: 5000,
    description:
      "Morning Glory Medium Density mattress is quilted and designed to provide perfect medium feel to help get the quality of sleep you have been dreaming of. The mattress offers edge support, skid resistant feature, pocket friendly prices, offers the ultimate universal comfort and is covered in a soft and comfortable American knitted fabric.",
  },
  {
    id: 2,
    name: "Superfoam Premium",
    image:
      "https://www.superfoam.co.ke/wp-content/uploads/superfoam_premium.jpg",
    price: 7500,
    description:
      "This premium medium density mattress is quilted and designed to provide perfect medium feel to help get the quality of sleep you have been dreaming of. The mattress offers edge support, skid resistant feature, pocket friendly prices, offers the ultimate universal comfort and is covered in a soft and comfortable American knitted fabric",
  },
  {
    id: 3,
    name: "Mattress Toppers",
    image: "https://www.superfoam.co.ke/wp-content/uploads/MTP3-1.jpg",
    price: 6000,
    description:
      "Superfoam Mattress Toppers - A comfortable and affordable way to rejuvenate an old mattress and soften a hard mattress by adding an extra layer of Memory foam.",
  },
  {
    id: 4,
    name: "Intex Inflatable Dura-Beam Airbed",
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/078983/1.jpg?9889",
    price: 15743,
    description:
      "Intex Inflatable Dura-Beam Airbed. The perfect combination of luxurious, comfort and convenience. The patented Fiber-Tech inner construction utilizes thousands of high-strength polyester fibers that, unlike traditional airbed construction, do not stretch over time, resulting in durability and lasting comfort",
  },
  {
    id: 5,
    name: "Bobmil Maharaja Mattress 7 Years Guarantee",
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/862423/1.jpg?0131",
    price: 12570,
    description:
      "The all new Maharaja Mattress from Bobmil Industries is made using perforated premium bamboo fabric designed to eliminate body heat with a unique layered finish for utmost comfort. Kenya’s 1st ever foam guarantee mattress comes with a guarantee of 5 Years in Medium Duty and 7 Years in Heavy Duty against sagging. Sleep like a baby on this Bobmil Maharaja Mattress. Good Morning….Your Majesty! Order for this Bobmil Maharaja Mattress from Jumia Kenya and will be delivered at your doorstep",
  },
];

const showProducts = (products) => {
  let divs = "";
  products.forEach((p, i) => {
    divs += `<div class="product__item">
          <img src="${p.image}" alt="" />
          <div class="product__details">
            <h3>${p.name}</h3>
            <h4>${p.price}</h4>
            <p>${p.description.substring(0, 150)}...</p>
          </div>
          <button data-id="${p.id}" class="btn__addtocart">Add To Cart</button>
        </div>`;
  });

  product_list.innerHTML = divs;
};

showProducts(products);
