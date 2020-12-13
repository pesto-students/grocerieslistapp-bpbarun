let productData =[];
//Add product
let addProductBtn = document.getElementById('saveProduct');
addProductBtn.addEventListener('click', () => {
  	let dataName=document.getElementById('product').value;
  	console.log('adding product data is =='+dataName)
  	addProduct(dataName);
});
//Add product functionality
let addProduct =(pName) => {
	let index = productData.indexOf(pName);
	if (index > -1) {
	  alert('This product is already in our system');
	  return;
	}
	if(productData.length >= 5){
	  alert('you can only add 5 itam in the list');
	  return;
	}
	if(localStorage.getItem('upateValue') !='undefined'){
	  productData = productData.filter(item => item !== localStorage.getItem('upateValue'));
	}
	if(pName != ''){
	  productData.push(pName);	
	}
	console.log('procust name list ====',productData);
	//localStorage.setItem('upateValue',pName);
	updateList();
	document.getElementById('addUpdateLabel').innerHTML='Add Product';
	document.getElementById('product').value='';
}

let updateList = () =>{
	let html = '';
	productData.map(value =(key,val) =>{
        let productName = "'"+key+"'";
		html+='<div><lable class="margin">';
		html+=key
		html+='</lable>';
		html+='<span class="margin" id="editProduct-'+key+'" onclick="editProduct('+productName+')">';
		html+='<i class="fa fa-pencil cursor" aria-hidden="true"></i>';
		html+='</span>';
		html+='<span class="margin" id="deleteProduct-'+key+'" onclick="deleteProduct('+productName+')">';
		html+='<i class="fa fa-trash cursor" aria-hidden="true"></i>';
		html+='</span>';
		html+='</div>';

	})
	document.getElementById('showProductList').innerHTML=html;
}

let editProduct= (id) => {
	document.getElementById('addUpdateLabel').innerHTML='Update Product';
	document.getElementById('product').value=id;
	localStorage.setItem('upateValue',id);
}
//Delate the given prodct from the list
let deleteProduct= (id) => {
	console.log('productData inside delete function is===',productData);
	productData = productData.filter(item => item !== id);
	console.log('new array data is ===',productData)
	updateList();
}