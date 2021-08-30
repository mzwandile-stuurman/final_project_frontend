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
    if (products.data == undefined) {
      products.data.forEach((product) => {
        product_container.innerHTML += `
          <div class = "products">
              <img src="${product.image}" class = "product-image">
              <div class = "product-content"> 
                  <h4 class = "product-title"> ${product.product_name}</h4>
                  <p class = "product-description"> ${product.description}</p>
                  <p class = "product-price">R${product.price} </p>
                  <button onclick="addToCart(${product.id})">Add to Cart</button>
              
              </div>
              
          </div>
          `;
      });
    } else {
      products.data.forEach((product) => {
        product_container.innerHTML += `
          <div class = "products">
              <img src="${product.image}" class = "product-image">
              <div class = "product-content"> 
                  <h4 class = "product-title"> ${product.product_name}</h4>
                  <p class = "product-description"> ${product.description}</p>
                  <p class = "product-price">R${product.price} </p>
                  <button onclick="addToCart(${product.id})">Add to Cart</button>
                  <button onclick="deleteProduct(${product.id})"> Delete product</button>
              </div>
              
          </div>
          `;
      });
    }
  }
  