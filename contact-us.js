function contact() {
  fetch("https://still-brushlands-23193.herokuapp.com/contact-us/", {
    method: "POST",
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email_address: document.getElementById("email").value,
      enquiry: document.getElementById("message").value,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data["status_code"] == 201) {
        alert("Thank you for contacting us, you will get a response soon.");
        window.location.href = "./home_logged_in.html";
      } else {
        alert("Sorry something went wrong please try again");
        location.reload();
      }
    });
}

function logOut() {
  localStorage.clear();
  window.location.href = "./index.html";
}

function Checking() {
  if (localStorage.length == 0) {
    window.location.href = "./index.html";
  } else {
    window.location.href = "./home_logged_in.html";
  }
}
