let storedCartitems = JSON.parse(localStorage.getItem("cart") || "[]");
function showCart(){

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
                    <button class="checkout-button" onlcick="">Checkout</button>
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
        product_container.innerHTML = "<h2> No items in cart</h2>";

    }
}
showCart();

function logOut(){
    localStorage.clear()
    window.location.href = "./index.html";
}