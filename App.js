const userName = document.getElementById("username");
const passWord = document.getElementById("password");
const signIn = document.getElementById("signin");
const signUp = document.getElementById("signup");


signUp.addEventListener("click", ()=>{
    alert("Not signing up new members");
})

signIn.addEventListener("click", ()=>{
  (userName.value && passWord.value)? 
  (userName.value==="xyz@gmail.com" && passWord.value==="123456")?alert(`welcome User`):alert("enter correct password")
  :alert("empty")
})