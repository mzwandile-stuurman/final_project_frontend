let storedCartitems = JSON.parse(localStorage.getItem("cart") || "[]");


function getUser() {
    fetch("https://still-brushlands-23193.herokuapp.com/user-info/"+`${localStorage.getItem("password")}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("user_id",`${data.data.user_id}`)
        
      });
     
}

getUser();


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

let userId = localStorage.getItem("user_id");
console.log(userId);

function checkOut(){
    
    if (userId===null ){
      alert("Please log in first to check out")
      window.location.href = "./login_page.html";

    }else if(storedCartitems.length == 0){
      alert("Add items to cart")
      window.location.href = "./cart.html";


    }else{
      fetch("https://still-brushlands-23193.herokuapp.com/shipping/", {
    method: "POST",
    body: JSON.stringify({
      recipient_name: document.getElementById("fname"),
      recipient_lastname: document.getElementById("sname"),
      recipient_address: document.getElementById("adr"),
      recipient_email: document.getElementById("email"),
      city: document.getElementById("city"), 
      province: document.getElementById("province"),
      country: document.getElementById("country"),
      postal_code: document.getElementById("zip"),
      user_id: localStorage.getItem("user_id"),
      
      
    }),
    headers: {
      "Content-type": "application/json",
    },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if (data["status_code"] == 201) {
          alert("Thank you for purchasing. You will be contacted about your order.");
          window.location.href = "./home_logged_in.html";
        } else {
          alert("Sorry something went wrong.");
          
        }
    });

    }

}

function logOut(){
  localStorage.clear()
  window.location.href = "./index.html";
}

function CarttoBackEnd(){
  let cart2 = JSON.parse(localStorage.getItem('cart'))
  

}

