function getCheckout() {
  console.log("checkout");
  let cards = document.getElementById("cards");
  cards.innerHTML = "<h1>Ultimo paso: Checkout</h1>";
  let cart = JSON.parse(localStorage.getItem('cart'));
  let table = "";
  let products = "";
  var total = 0;
  for(var i in cart){
    console.log(cart[i]);
    table += `<tr>
                <td>${cart[i].name}</td>
                <td>${cart[i].price * cart[i].count}</td>
                <td>${cart[i].count}</td>  
              </tr>`;
    total += cart[i].price * cart[i].count;
    products += ` ${cart[i].name}(${cart[i].count})`;
  }
  
  let form = `
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
    </tr>
  </thead>
  <tbody>
    ${table}
  </tbody>
</table>
  
  <form action="emailController.php" method="post">
  <div class="form-group">
  <h2>Total: ${total}€</h2>
  <br>
    <label for="exampleInputEmail1"><h3>Nombre:</h3></label>
    <input name="products" type="hidden" value="${products}">
    <input name="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"><h3>Dirección:</h3></label>
    <input name="address" type="text" class="form-control" id="exampleInputPassword1">
  </div>

  <button type="submit" class="btn btn-primary">Confirmar compra</button>
</form>
  `;
  cards.innerHTML = form;
}
