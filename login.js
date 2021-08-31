
const user = window.localStorage;
function login() {
    fetch("https://still-brushlands-23193.herokuapp.com/users/", {
      method: "PATCH",
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
        if (data["status_code"] == 200) {
          user.setItem("data", data)
          
          window.location.href ="./home_logged_in.html";
          
        } else {
          alert("Please enter valid credentials");
        }
      });
  }