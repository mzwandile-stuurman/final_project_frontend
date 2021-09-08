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
        localStorage.setItem("user_id",`${data.user_id}`)
        
        let product_container = document.querySelector("#user-info");
        product_container.innerHTML = "";
      
          product_container.innerHTML += `
  
            <div class = "products">
              <div class = "product-content"> 
                <p class = "product-title">First Name: ${data.data.first_name}</p>
                <p class = "product-description">Last Name: ${data.data.last_name}</p>
                <p class = "product-price">Username: ${data.data.username} </p>
                <p class = "user_phone"> Password: ${data.data.password}</p>
                <p class = "user_phone"> Phone Number: ${data.data.phone_number}</p>
                <p class = "user_phone"> email address: ${data.data.user_email}</p>
              </div>
              <div class="delete">
                <input id="updatename" type="text" placeholder="Edit first name" />
                <button class="search-btn" onclick="updateName()" type="submit">Update</button>
                <input id="updatelastname" type="text" placeholder="Edit last name" />
                <button class="search-btn" onclick="updatelastName()" type="submit">Update</button>
                <input id="updateusername" type="text" placeholder="Edit username" />
                <button class="search-btn" onclick="updateUsername()" type="submit">Update</button>
                <input id="updatepassword" type="text" placeholder="Edit password" />
                <button class="search-btn" onclick="updatePassword()" type="submit">Update</button>
                <input id="searchTerm" type="text" placeholder="Edit phone number" />
                <button class="search-btn" onclick="searchForProducts()" type="submit">Update</button>
                <input id="searchTerm" type="text" placeholder="Edit user email" />
                <button class="search-btn" onclick="searchForProducts()" type="submit">Update</button>
                <button onclick="deleteUser()"> delete user</button>

              </div>
                
            </div>
           `;
        
      });
     
}
getUser();

function deleteUser(){
  fetch("https://still-brushlands-23193.herokuapp.com/detele-user/"+`${localStorage.getItem("user_id")}`, {
      method: "POST",
      
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    
    });

}

function updateName(){
  fetch("https://still-brushlands-23193.herokuapp.com/update-user/"+`${localStorage.getItem("user_id")}/`, {
      method: "PUT",
      
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: document.querySelector("#updatename").value,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    
    });
}

function updatelastName(){
  fetch("https://still-brushlands-23193.herokuapp.com/update-user/"+`${localStorage.getItem("user_id")}/`, {
      method: "PUT",
      
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        last_name: document.querySelector("#updatelastname").value,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    
    });
}

function updateUsername(){
  fetch("https://still-brushlands-23193.herokuapp.com/update-user/"+`${localStorage.getItem("user_id")}/`, {
      method: "PUT",
      
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: document.querySelector("#updateusername").value,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    
    });
}

function updatePassword(){
  fetch("https://still-brushlands-23193.herokuapp.com/update-user/"+`${localStorage.getItem("user_id")}/`, {
      method: "PUT", 
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        password: document.querySelector("#updatepassword").value,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    
    });
}

function updateName(){
  fetch("https://still-brushlands-23193.herokuapp.com/update-user/"+`${localStorage.getItem("user_id")}/`, {
      method: "PUT",
      
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: document.querySelector("#updatename").value,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    
    });
}

function logOut(){
  localStorage.clear()
  window.location.href = "./index.html";
}




