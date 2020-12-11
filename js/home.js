const names = [];
const password = [];
const productData =[];
const container = document.getElementById('container');

//Add product
let addProductBtn = document.getElementById('saveProduct');
addProductBtn.addEventListener('click', () => {
  	let dataName=document.getElementById('product').value;
  	console.log('adding product data is =='+dataName)
  	addProduct(dataName);
});

//Add product functionality
let addProduct =(pName)=>{
	let index = productData.indexOf(pName);
	if (index > -1) {
	  alert('This product is already in our syatem');
	  return;
	}
	if(productData.length >= 5){
	  alert('you can only add 5 itam in the list');
	  return;
	}
	productData.push(pName);
	console.log('procust name list ====',productData);
	document.getElementById('showProductList').innerHTML=pName;
}