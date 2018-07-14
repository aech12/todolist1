const boxtext = document.getElementById('boxtext');
const button1 = document.getElementById('b1');
const ul = document.querySelector('ul');
let i = 0;

button1.addEventListener ('click', ()=> {
	if (boxtext.value.length>0) {
		addNewItem();
	}
})
boxtext.addEventListener ('keypress', ()=> {
	if (boxtext.value.length>0 && event.keyCode === 13) {
		addNewItem();
	}
})

//Add delete button to every list item
const li = document.getElementsByTagName('li');
delBut = () => {
	let span = document.createElement('span');
	let buttonText = span.appendChild(document.createElement('button'));
	span.className = 'delButton';
	buttonText.textContent = 'Delete';
	li[i].appendChild(span);	
}
for (i=0; i<li.length; i++) {
	delBut();
}


//Makes delete button delete the item list
const delButton = document.getElementsByClassName('delButton');
addDeleteButton = () => {
	for (i = 0; i < delButton.length; i++) {
		delButton[i].onclick = (s) => {
			// the thing below works but I wanted to altogether delete, not just style= 'none'
			// var div = this.parentElement;
			// div.style.display = "none";
			s.currentTarget.parentNode.remove();
		}
	}
}
addDeleteButton();


//Makes item lists be checked off when clicked
addCheckOff = () => {
	for (i = 0; i < li.length; i++) {
		li[i].onclick = (s) => {
			s.currentTarget.classList.toggle('done');
		}
	}
}
addCheckOff();

//Makes new added items, adds option to delete and check off
addNewItem = () => {
	let li = document.createElement('li');
	li.appendChild(document.createTextNode(boxtext.value));
	ul.appendChild(li);
	// boxtext.value='';
	
	let span = document.createElement('span');
	let buttonText = span.appendChild(document.createElement('button'));
	span.className = 'delButton';
	buttonText.textContent = 'Delete';
	li.appendChild(span);

	addDeleteButton();
	addCheckOff();
}