function login() {
    fetch("https://still-brushlands-23193.herokuapp.com/users/", {
      method: "POST",
      body: JSON.stringify({
        username: document.getElementById("auth_username").value,
        password: document.getElementById("auth_password").value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["description"] == "Invalid credentials") {
          alert(
            "Username or password is incorrect. Please enter correct details"
          );
        } else {
          console.log(data["access_token"]);
          mystorage.setItem("jwt-token", data["access_token"]);
          myuser.setItem(
            "auth_username",
            document.getElementById("auth_username")
          );
          mypass.setItem(
            "auth_password",
            document.getElementById("auth_password")
          );
  
          window.location.href = "./products.html";
        }
      });
  }