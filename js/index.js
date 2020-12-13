const names = [];
const password = [];
const productData =[];
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
  	let userName=document.getElementById('userName').value;
  	let password=document.getElementById('password').value;
  	signIn(userName,password);
});
//signUp
let signUpBtn = document.getElementById('signUpBtn');
	signUpBtn.addEventListener('click', () => {
  	let userName=document.getElementById('signUpUser').value;
 	let password=document.getElementById('signUpPassword').value;
  	let confPassword=document.getElementById('signUpConfPassword').value;
  	let msg = (password == confPassword)?signUp(userName,confPassword):'confirm password and  password not matched'
  	alert(''+msg);
});
let signIn=(userName,password) =>{
	let uresNameData = JSON.parse(localStorage.getItem('names'));
	let passwordData = JSON.parse(localStorage.getItem('password'));
	let searchUserName = uresNameData.indexOf(userName);
	let searchPassword = passwordData.indexOf(password);
	if((searchUserName > -1) && (searchPassword >-1)) {
		console.log('redirect to home page')
		window.location.replace('home.html');
	}else{
		alert('Failed to login')
	}

}	

let signUp=(inputUserName,inputPassword)=> {
	let index = names.indexOf(inputUserName);
	if (index > -1) {
	  return 'User name all ready exit in the system';
	}
	if(names.length >= 3){
		names = names.splice(1, 1);
	}
	names.push(inputUserName);
	console.log('new name array',names);
	localStorage.setItem('names', JSON.stringify(names));
  	console.log((JSON.parse(localStorage.getItem('names'))));
  	password.push(inputPassword);
	localStorage.setItem('password', JSON.stringify(password));
  	console.log((JSON.parse(localStorage.getItem('password'))));
	return 'User registered successfully';
}