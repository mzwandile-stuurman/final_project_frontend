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
        show_user(data)
        
      });
}
getUser();

function show_user(users) {

    let product_container = document.querySelector("#user_info");
    product_container.innerHTML = "";
      
    users.data.forEach((user) => {

  
        product_container.innerHTML += `

  
        <div class = "products">
            <img src="${user.image}" class = "product-image">
            <div class = "product-content"> 
                <h4 class = "product-title"> ${user.product_name}</h4>
                <p class = "product-description"> ${user.brand}</p>
                <p class = "product-price">R${user.price} </p>
                <button onclick="addToCart(${user.id})">Add to Cart</button>
                
            </div>
                
        </div>
        `;
    });
}
make_products();
  




