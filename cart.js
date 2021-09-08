let storedCartitems = JSON.parse(localStorage.getItem("cart") || "[]");
//let value = document.getElementById('number').value;
//console.log(value);


function renderCart(cartItems) {
    let cartContainer = document.querySelector("#cart");
    cartContainer.innerHTML = "";
    if (cartItems.length > 0) {
      
      cartItems.map((cartItem) => {
        cartContainer.innerHTML += `
        <div class = "products">  
          <div class="image-div">
            <img src="${cartItem.image}" class = "product-image">
          </div>
          <div class="cart-content">
            <div class = "product-content"> 
            
              <h4 class = "product-title"> ${cartItem.product_name}</h4>
              <p class = "product-description"> ${cartItem.brand}</p>
              <p class = "product-price">R${cartItem.price} </p>
            </div>

            <div class="cart-btns">
              <button class ="revome_cart" onclick="removeItem(${cartItem.prod_id})">Remove item</button>
              <button class="checkout-button" onlcick="">Checkout</button>
            </div>

            <div class="container">
				      <input type="button" onclick="decrementValue()" value="-" />
				      <input type="text" name="quantity" value="1" maxlength="2" max="10" size="1" id="number" />
				      <input type="button" onclick="incrementValue()" value="+" />
				    </div>
          </div>
          
         
          
         
              
        </div>
			  
		    

        `;
      });
      let totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
      cartContainer.innerHTML += `<h3> Your total is: ${totalPrice} </h3>`;
    } else {
      cartContainer.innerHTML = "<h2> No items in cart</h2>";
    }
}

renderCart(storedCartitems);
  
function toggleCart() {
    document.querySelector("#cart").classList.toggle("active");
}

// remove from cart\
function removeItem(id) {
    storedCartitems = storedCartitems.filter(item => item.prod_id != id)
    renderCart(storedCartitems);
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

function checkOut(){}


  
  
