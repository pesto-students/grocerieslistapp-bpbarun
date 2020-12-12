const names = [];
const password = [];
const productData =[];
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
	  alert('This product is already in our system');
	  return;
	}
	if(productData.length >= 5){
	  alert('you can only add 5 itam in the list');
	  return;
	}
	if(pName != ''){
	  productData.push(pName);	
	}
	console.log('procust name list ====',productData);
	// let data = productData.map();
	let html = '';
	productData.map(value =(key,val) =>{

		html+='<div><lable class="margin">';
		html+=key
		html+='</lable>';
		html+='<span class="margin" id="editProduct">';
		html+='<i class="fa fa-pencil cursor" aria-hidden="true"></i>';
		html+='</span>';
		html+='<span class="margin" id="deleteProduct">';
		html+='<i class="fa fa-trash cursor" aria-hidden="true"></i>';
		html+='</span>';
		html+='</div>';

	})
	document.getElementById('showProductList').innerHTML=html;
}