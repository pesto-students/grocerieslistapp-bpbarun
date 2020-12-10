const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

//login
let loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', () => {
  alert('i am called')
  let userName=document.getElementById('userName').value;
  let password=document.getElementById('password').value;
alert('user===='+userName+'passssss=='+password)
});
//signUp
let signUpBtn = document.getElementById('signUpBtn');
loginBtn.addEventListener('click', () => {
  let userName=document.getElementById('userName').value;
  let password=document.getElementById('password').value;
  // alert('user===='+userName+'passssss=='+password)
});