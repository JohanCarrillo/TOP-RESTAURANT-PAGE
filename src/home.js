import pizzaSize from './img/pizza-size.png'

export default function showHome(parentNode) {
	// title
	const h2 = document.createElement('h2');
	h2.textContent = 'Pizza Shop Bigotex';
	parentNode.appendChild(h2);

	// pizza information
	const infoText = document.createElement('div');
	infoText.classList.add('big-text');
	infoText.textContent = 'We offer four different sizes of pizza:';
	parentNode.appendChild(infoText);

	const myImg = new Image();
	myImg.classList.add('pizza-size-image');
	myImg.src = pizzaSize;
	parentNode.appendChild(myImg);

}

