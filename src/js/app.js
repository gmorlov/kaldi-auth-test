import Auth0Lock from "auth0-lock";
import cookies from "cookies-js";

const clientID = "Y7kZiP2YXhkIe6AsO84r4GDSW3QCnnye";
const domain = "bdougie.auth0.com";
const logoutBtn = document.getElementById("btn-logout");
const loginBtn = document.getElementById("btn-login");
const loginSecret = document.getElementById("btn-secret");

const lock = new Auth0Lock(clientID, domain, {auth: {
  params: {scope: "openid email user_metadata app_metadata picture"},
}});

lock.on("authenticated", (authResult) => {
  console.log("authenticated: %o - %o", authResult, lock);
  lock.getProfile(authResult.idToken, (err, profile) => {
    console.log("err: %o", err);
    console.log("Got idtoken: %o", authResult.idToken);
    console.log("profile is: %o", profile);
    cookies.set("nf_jwt", authResult.idToken);
    displayButtons();
  });
});

window.addEventListener("load", function(e) {
  if (loginBtn) {
    loginBtn.addEventListener("click", function(e) {
      e.preventDefault();
      lock.show();
    }, false);
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", logout, false);
  }

  function logout(e) {
    e.preventDefault();
    cookies.expire("nf_jwt");

    displayButtons();
  }

  displayButtons();
});

function isAuthenticated() {
  const jwt = cookies.get("nf_jwt");
  return jwt !== undefined;
}

function displayButtons() {
  if (isAuthenticated()) {
    if (loginBtn) {
      loginBtn.style.display = "none";
    }
    if (loginSecret) {
      loginSecret.style.display = "inline-block";
    }
  } else {
    if (loginSecret) {
      loginSecret.style.display = "none";
    }
    if (logoutBtn) {
      logoutBtn.style.display = "none";
    }
  }
}
