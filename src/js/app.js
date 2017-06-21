import auth0 from "auth0-js";
// auth0 code
window.addEventListener("load", function() {

  var webAuth = new auth0.WebAuth({
    domain: "bdougie.auth0.com",
    clientID: "Y7kZiP2YXhkIe6AsO84r4GDSW3QCnnye",
    redirectUri: window.location.href,
    audience: "https://bdougie.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  var loginBtn = document.getElementById("btn-login");

  loginBtn.addEventListener("click", function(e) {
    e.preventDefault();
    webAuth.authorize();
  });

});
