const clientForm = document.querySelector('#clientForm');
const clientName = document.querySelector('#clientName');
const clientPhone = document.querySelector('#clientPhone');
const clientMail = document.querySelector('#clientMail');
const clientAddress = document.querySelector('#clientAddress');
const clientTable = document.querySelector('#clientTable');

const productForm = document.querySelector('#productForm');
const productName = document.querySelector('#productName');
const productCategory = document.querySelector('#productCategory');
const productProvider = document.querySelector('#productProvider');
const productAmount = document.querySelector('#productAmount');
const productTable = document.querySelector('#productTable');

function saveStorage(value1, value2, value3, value4, storage) {
	const newData = { value1, value2, value3, value4 };
	const dataString = localStorage.getItem(storage);
	const dataJson = JSON.parse(dataString) || [];
	dataJson.push(newData);
	const dataStorage = JSON.stringify(dataJson);
	localStorage.setItem(storage, dataStorage);
}

function createLine(value1, value2, value3, value4, table) {
	const tr = document.createElement('tr');
	const td1 = document.createElement('td');
	const td2 = document.createElement('td');
	const td3 = document.createElement('td');
	const td4 = document.createElement('td');
	td1.innerText = `${value1}`;
	td2.innerText = `${value2}`;
	td3.innerText = `${value3}`;
	td4.innerText = `${value4}`;
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	table.appendChild(tr);
}

function clientCreate() {
	saveStorage(
		clientName.value,
		clientPhone.value,
		clientMail.value,
		clientAddress.value,
		'clients',
	);
	createLine(
		clientName.value,
		clientPhone.value,
		clientMail.value,
		clientAddress.value,
		clientTable,
	);
}

function productCreate() {
	saveStorage(
		productName.value,
		productCategory.value,
		productProvider.value,
		productAmount.value,
		'products',
	);
	createLine(
		productName.value,
		productCategory.value,
		productProvider.value,
		productAmount.value,
		productTable,
	);
}

clientForm.addEventListener('submit', (e) => {
	e.preventDefault();
	clientCreate();
});

productForm.addEventListener('submit', (e) => {
	e.preventDefault();
	productCreate();
});
