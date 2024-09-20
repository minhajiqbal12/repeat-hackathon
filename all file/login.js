import {
  auth,
  signInWithEmailAndPassword,
} from "./firebase.js"; 

const email = document.getElementById("username");
const password = document.getElementById("password");

const loginHandler = async () => {
  try {
    const userSignup = await signInWithEmailAndPassword(auth, email.value, password.value);
    const uid = userSignup.user.uid;
    localStorage.setItem("uid", uid);
    alert("User logged in!");
    window.location.href = "../blog.html"; 
  } catch (error) {
    alert(error.message);
  }
};


window.loginHandler = loginHandler;
