let products = [];
let cart = [];
let storedCartitems = JSON.parse(localStorage.getItem("cart") || "[]");


// Function to get all data
function getData() {
    fetch("https://still-brushlands-23193.herokuapp.com/product/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        products = data.data;
        make_products(data.data);
      });
  }
  
  getData();


function make_products(products) {
  let product_container = document.querySelector("#products-container");
  product_container.innerHTML = "";
    
  products.forEach((product) => {

    product_container.innerHTML += `

          <div class = "products">
              <img src="${product.image}" class = "product-image">
              <div class = "product-content"> 
                  <h4 class = "product-title"> ${product.product_name}</h4>
                  <p class = "product-description"> ${product.brand}</p>
                  <p class = "product-price">R${product.price} </p>
                  <button onclick="addToCart(${product.prod_id})">Add to Cart</button>
              
              </div>
              
          </div>
          `;
      });
}
make_products();

// function to add to cart
function addToCart(prod_id) {
  console.log(products.data);
  let product = products.find((item) => {
    return item.prod_id == prod_id;
  });
  
  cart.push(product);
  
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart(storedCartitems);
  
  console.log(prod_id);
  
  
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

// filter items
function searchForProducts() {
  let searchTerm = document.querySelector("#searchTerm").value;
  console.log(searchTerm);
  console.log(products);
  let searchedProducts = products.filter((product) =>
    product.product_type.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  console.log(searchedProducts);
  make_products(searchedProducts);
}

function logOut(){
  localStorage.clear()
  window.location.href = "./index.html";
}

// seaarch for jeans
function filteredProducts() {
  let searchTerm = "jean";
  console.log(searchTerm);
  console.log(products);
  let searchedProducts = products.filter((product) => 
    product.product_type.toLowerCase().includes(searchTerm.toLowerCase())
  
  );
  console.log(searchedProducts);
  make_products(searchedProducts);

}
// function to search for shoes
function filteredShoes() {
  let searchTerm = "shoe";
  console.log(searchTerm);
  console.log(products);
  let searchedProducts = products.filter((product) => 
    product.product_type.toLowerCase().includes(searchTerm.toLowerCase())
  
  );
  console.log(searchedProducts);
  make_products(searchedProducts);

}


// function to refresh page
function showAll(){
  location.reload();
}

 // slide show
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "flex";
  }
  
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


  
  