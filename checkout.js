function getCheckout() {
    console.log("checkout");
    var cards = document.getElementById("cards");
    cards.innerHTML = "<h1>Ultimo paso: Checkout</h1>";
    var cart = JSON.parse(localStorage.getItem('cart'));
    var table = "";
    var products = "";
    var total = 0;
    for (var i in cart) {
        console.log(cart[i]);
        table += "<tr>\n                <td>" + cart[i].name + "</td>\n                <td>" + cart[i].price * cart[i].count + "</td>\n                <td>" + cart[i].count + "</td>  \n              </tr>";
        total += cart[i].price * cart[i].count;
        products += " " + cart[i].name + "(" + cart[i].count + ")";
    }
    var form = "\n  <table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Producto</th>\n      <th scope=\"col\">Precio</th>\n      <th scope=\"col\">Cantidad</th>\n    </tr>\n  </thead>\n  <tbody>\n    " + table + "\n  </tbody>\n</table>\n  \n  <form action=\"emailController.php\" method=\"post\">\n  <div class=\"form-group\">\n  <h2>Total: " + total + "\u20AC</h2>\n  <br>\n    <label for=\"exampleInputEmail1\"><h3>Nombre:</h3></label>\n    <input name=\"products\" type=\"hidden\" value=\"" + products + "\">\n    <input name=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\"><h3>Direcci\u00F3n:</h3></label>\n    <input name=\"address\" type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\">\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary\">Confirmar compra</button>\n</form>\n  ";
    cards.innerHTML = form;
}
