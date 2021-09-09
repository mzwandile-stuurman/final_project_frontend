let storedCartitems = JSON.parse(localStorage.getItem("cart") || "[]");
function showCart(CartItems){

    if (storedCartitems.length > 0) {

        console.log(storedCartitems);
        let product_container = document.querySelector("#cart-items");
    
      
        storedCartitems.forEach((product) => {
  
        product_container.innerHTML += `
        <div class = "products">  
            <div class="image-div">
                <img src="${product.image}" class = "product-image">
            </div>
            <div class="cart-content">
                <div class = "product-content"> 
          
                    <h4 class = "product-title"> ${product.product_name}</h4>
                    <p class = "product-description"> ${product.brand}</p>
                    <p class = "product-price">R${product.price} </p>
                </div>

                <div class="cart-btns">
                    <button class ="revome_cart" onclick="removeItem(${product.prod_id})">Remove item</button>
                    </div>

                <div class="quantity-container">
                    <input type="button" onclick="decrementValue()" value="-" />
                    <input type="text" name="quantity" value="1" maxlength="2" max="10" size="1" id="number" />
                    <input type="button" onclick="incrementValue()" value="+" />
                </div>
            </div>
            
        </div>
            
            
        `;
        });
    }else{
        document.querySelector("#cart-items").innerHTML = "<h2> No items to purchase</h2>";

    }
}
showCart(storedCartitems);

function logOut(){
    localStorage.clear()
    window.location.href = "./index.html";
}

// remove from cart\
function removeItem(id) {
    storedCartitems = storedCartitems.filter(item => item.prod_id != id)
    showCart(storedCartitems);
    localStorage.setItem('cart', JSON.stringify(storedCartitems))
}

function logOut(){
  localStorage.clear()
  window.location.href = "./index.html";
}


// function to increement cart value 
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById('number').value = value;
    }
}

// function to decrement cart
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number').value = value;
    }

}

function checkOut(){
    let cart2 = JSON.parse(localStorage.getItem('cart'))
    fetch("https://still-brushlands-23193.herokuapp.com/orders/", {
    method: "POST",
    body: JSON.stringify({
      product_image: cart2[0]['image'],
      order_number: localStorage.getItem("user_id"),
      product_name: cart2[0]['product_name']
      
    }),
    headers: {
      "Content-type": "application/json",
    },
  })



}
