let products = [];
let cart = [];




function getData() {
    fetch("https://still-brushlands-23193.herokuapp.com/product/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        products = data;
        make_products(data);
      });
  }
  
  getData();

  function make_products(products) {
    let product_container = document.querySelector("#products-container");
    product_container.innerHTML = "";
    
    products.data.forEach((product) => {
      product_container.innerHTML += `
          <div class = "products">
              <img src="${product.image}" class = "product-image">
              <div class = "product-content"> 
                  <h4 class = "product-title"> ${product.product_name}</h4>
                  <p class = "product-description"> ${product.description}</p>
                  <p class = "product-price">R${product.price} </p>
                  <button onclick="addToCart(${product.prod_id})">Add to Cart</button>
              
              </div>
              
          </div>
          `;
      });
  }

  make_products();

// funtion to add to cart
function addToCart(id) {
  console.log(products.data);
  let product = products.data.find((item) => {
    return item.prod_id == id;
  });
  
  cart.push(product);
  localStorage["cart"] = JSON.stringify(cart);
  renderCart(cart);
  console.log(id);
  
}


// function to show items in the cart
function renderCart(cartItems) {
  let cartContainer = document.querySelector("#cart");
  cartContainer.innerHTML = "";
  if (cartItems.length > 0) {
    cartItems.map((cartItem) => {
      cartContainer.innerHTML += `
      <div class = "products">
            <img src="${cartItem.image}" class = "product-image">
            <div class = "product-content"> 
                <h4 class = "product-title"> ${cartItem.product_name}</h4>
                <p class = "product-description"> ${cartItem.brand}</p>
                <p class = "product-price">R${cartItem.price} </p>
                <button class ="revome_cart" onclick="removeItem(${cartItems.prod_id})">Remove item</button>
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

function toggleCart() {
  document.querySelector("#cart").classList.toggle("active");
}

// function to remove to cart 
function removeItem(id) {
  let product = products.data.find((item) => {
    return item.prod_id == id;
  });
  //console.log(product);

  cart.splice(
    cart.findIndex((a) => a.id === product.prod_id),
    1
  );
  renderCart(cart);
}

function getUser() {
  fetch("https://still-brushlands-23193.herokuapp.com/users/", {
    method: "PATCH",
    body: JSON.stringify({
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password"),
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let product_container = document.querySelector(".dropbtn");
      product_container.innerHTML = "";
    
        product_container.innerHTML += `

          <div class = "products">
            <div class = "product-content"> 
              <p class = "product-title">First Name: ${data.data.first_name}</p>
              
            </div>
              
          </div>
         `;
      
    });
}
getUser();

// function to show user name
