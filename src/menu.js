import pepperoniText from './text/pepperoni.txt';
import pepperoniImg from './img/pepperoni.jpg';
import doublecheeseText from './text/double-cheese.txt';
import doublecheeseImg from './img/double-cheese.jpg';
import napolitanText from './text/napolitan.txt';
import napolitanImg from './img/napolitan.jpg';
import californiaText from './text/california.txt';
import californiaImg from './img/california.jpg';

const menuArray = [
	{text: pepperoniText, img: pepperoniImg},
	{text: doublecheeseText, img: doublecheeseImg},
	{text: napolitanText, img: napolitanImg},
	{text: californiaText, img: californiaImg}
];

export default function showMenu(nodeParent) {

	for (let element of menuArray) {
		const div = document.createElement('div');
		div.classList.add('menu-item');
		// create image
		const myImg = new Image();
		myImg.classList.add('menu-item-image');
		myImg.src = element.img;
		// create text
		const myText = document.createElement('div');
		myText.classList.add('menu-text');
		myText.textContent = element.text;
		// append to document
		div.appendChild(myImg);
		div.appendChild(myText);
		nodeParent.appendChild(div);
	}
}