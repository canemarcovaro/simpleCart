function addProducts(products) {
    var cards = document.getElementById("cards");
    products.forEach(function (product) {
        cards.innerHTML += "<div class=\"card\" >\n        <img class=\"card-img-top\" src=\"" + product.img + "\" alt=\"Card image cap\" >\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">" + product.name + "</h5>\n          <p class=\"card-text\">" + product.description + "</p>\n          <p class=\"card-text\"><b>" + product.price + "\u20AC</b></p>\n          <a href=\"#\" class=\"btn btn-primary\" onclick=\"addToCart(" + product.id + ")\">Agregar al Carrito</a>\n        </div>\n      </div>";
    });
}
function addToCart(id) {
    var oldCart = JSON.parse(localStorage.getItem("cart")) || null;
    var btnQty = document.getElementById('qty');
    if (oldCart != null) {
        var item_1 = oldCart.filter(function (item) { return item.id == id; });
        console.log(item_1);
        if (item_1 != "") {
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
            var qty = localStorage.getItem('qty');
            localStorage.setItem("qty", (parseInt(qty) + 1).toString());
            btnQty.innerHTML = localStorage.getItem('qty');
            return true;
        }
        else {
            var products_1 = JSON.parse(localStorage.getItem("products"));
            var product_1 = products_1.filter(function (product) { return product.id == id; });
            var item_2 = {
                id: product_1[0].id,
                name: product_1[0].name,
                price: product_1[0].price,
                count: 1
            };
            oldCart.push(item_2);
            localStorage.setItem("cart", JSON.stringify(oldCart));
            var qty = localStorage.getItem('qty');
            localStorage.setItem("qty", (parseInt(qty) + 1).toString());
            btnQty.innerHTML = localStorage.getItem('qty');
            return true;
        }
    }
    var products = JSON.parse(localStorage.getItem("products"));
    var product = products.filter(function (product) { return product.id == id; });
    var item = {
        id: product[0].id,
        name: product[0].name,
        price: product[0].price,
        count: 1
    };
    var cart = [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("qty", "1");
    btnQty.innerHTML = localStorage.getItem('qty');
}
function deleteCart() {
    localStorage.removeItem('cart');
    localStorage.removeItem('qty');
    var btnQty = document.getElementById('qty');
    btnQty.innerHTML = "";
}
var p1 = {
    id: 1,
    name: "Mouse inalámbrico Genius",
    price: 50,
    description: "El mejor aliado para lo que necesites. Usá tu Genius NX-7000 en la oficina, en tu casa o donde quieras y navegá en tus dispositivos sin límites.",
    img: "https://http2.mlstatic.com/D_NQ_NP_915211-MLA43229688568_082020-O.webp"
};
var p2 = {
    id: 2,
    name: "Mouse de juego Logitech Prodigy G Series G203 negro",
    price: 80,
    description: "El mejor aliado para lo que necesites. Usá tu Logitech Prodigy G Series en la oficina, en tu casa o donde quieras y navegá en tus dispositivos sin límites.",
    img: "https://http2.mlstatic.com/D_NQ_NP_793498-MLA32146296718_092019-O.webp"
};
var p3 = {
    id: 3,
    name: "Mouse de juego HyperX FPS Pro Pulsefire negro",
    price: 100,
    description: "El mejor aliado para lo que necesites. Usá tu HyperX FPS Pro Pulsefire en la oficina, en tu casa o donde quieras y navegá en tus dispositivos sin límites.",
    img: "https://http2.mlstatic.com/D_NQ_NP_669622-MLA32146296697_092019-O.webp"
};
var products = [p1, p2, p3];
localStorage.setItem("products", JSON.stringify(products));
var btnQty = document.getElementById('qty');
btnQty.innerHTML = localStorage.getItem('qty');
addProducts(products);
