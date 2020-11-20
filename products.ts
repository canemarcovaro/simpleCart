function addProducts(products: Product[]) {
  var cards = document.getElementById("cards");

  products.forEach((product) => {
    cards.innerHTML += `<div class="card" >
        <img class="card-img-top" src="${product.img}" alt="Card image cap" >
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text"><b>${product.price}€</b></p>
          <a href="#" class="btn btn-primary" onclick="addToCart(${product.id})">Agregar al Carrito</a>
        </div>
      </div>`;
  });
}
function addToCart(id: number) {
  let oldCart = JSON.parse(localStorage.getItem("cart")) || null;
  let btnQty = document.getElementById('qty');
  
  if (oldCart != null) {
    let item = oldCart.filter((item) => item.id == id);
    console.log(item);
    if (item != "") {
      console.log("existe");
      console.log(oldCart);
      for (var i in oldCart) {
        if (oldCart[i].id == id) {
          oldCart[i].count++;
        }
      }
      console.log(oldCart);
      localStorage.setItem("cart", JSON.stringify(oldCart));
      console.log(JSON.parse(localStorage.getItem("cart")));
      let qty = localStorage.getItem('qty');
      localStorage.setItem("qty", (parseInt(qty) + 1).toString());
      btnQty.innerHTML = localStorage.getItem('qty');
      return true;
    } else {
      let products = JSON.parse(localStorage.getItem("products"));

      let product = products.filter((product) => product.id == id);

      let item: Item = {
        id: product[0].id,
        name: product[0].name,
        price: product[0].price,
        count: 1,
      };
      oldCart.push(item);
      localStorage.setItem("cart", JSON.stringify(oldCart));
      let qty = localStorage.getItem('qty');
      localStorage.setItem("qty", (parseInt(qty) + 1).toString());
      btnQty.innerHTML = localStorage.getItem('qty');
      return true;
    }
  }
  let products = JSON.parse(localStorage.getItem("products"));

  let product = products.filter((product) => product.id == id);

  let item: Item = {
    id: product[0].id,
    name: product[0].name,
    price: product[0].price,
    count: 1,
  };
  let cart: Item[] = [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("qty", "1");
  btnQty.innerHTML = localStorage.getItem('qty');
}
function deleteCart(){
  localStorage.removeItem('cart');
  localStorage.removeItem('qty');
  let btnQty = document.getElementById('qty');
  btnQty.innerHTML = "";
}
interface Item {
  id: number;
  name: string;
  price: number;
  count: number;
}
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
}

const p1: Product = {
  id: 1,
  name: "Mouse inalámbrico Genius",
  price: 50,
  description:
    "El mejor aliado para lo que necesites. Usá tu Genius NX-7000 en la oficina, en tu casa o donde quieras y navegá en tus dispositivos sin límites.",
  img: "https://http2.mlstatic.com/D_NQ_NP_915211-MLA43229688568_082020-O.webp",
};
const p2: Product = {
  id: 2,
  name: "Mouse de juego Logitech Prodigy G Series G203 negro",
  price: 80,
  description:
    "El mejor aliado para lo que necesites. Usá tu Logitech Prodigy G Series en la oficina, en tu casa o donde quieras y navegá en tus dispositivos sin límites.",
  img: "https://http2.mlstatic.com/D_NQ_NP_793498-MLA32146296718_092019-O.webp",
};
const p3: Product = {
  id: 3,
  name: "Mouse de juego HyperX FPS Pro Pulsefire negro",
  price: 100,
  description:
    "El mejor aliado para lo que necesites. Usá tu HyperX FPS Pro Pulsefire en la oficina, en tu casa o donde quieras y navegá en tus dispositivos sin límites.",
  img: "https://http2.mlstatic.com/D_NQ_NP_669622-MLA32146296697_092019-O.webp",
};
let products: Product[] = [p1, p2, p3];
localStorage.setItem("products", JSON.stringify(products));
let btnQty = document.getElementById('qty');
btnQty.innerHTML = localStorage.getItem('qty');
addProducts(products);
