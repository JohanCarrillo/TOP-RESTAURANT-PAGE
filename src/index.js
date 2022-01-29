import './style.css';
import showHome from './home';
import showMenu from './menu';
import showContactInfo from './contact';

(function createContent() {
	const content = document.querySelector('#content');
	// create choose menu
	const choose = document.createElement('div');
	choose.id = 'choose';
	content.appendChild(choose);

	// home page
	const home = document.createElement('div');
	home.id = 'home';
	showHome(home);
	content.appendChild(home);

	// contact information
	const contactInfo = document.createElement('div');
	contactInfo.id = 'contact-info';
	showContactInfo(contactInfo);
	content.appendChild(contactInfo);

	// menu information
	const menu = document.createElement('div');
	menu.id = 'menu';
	showMenu(menu);  // put content inside menuNode
	content.appendChild(menu);  // inser menuNode (and its content) in #content

	// create buttons
	function createButton(id) {
		const button = document.createElement('button');
		button.id = id + '-button';
		button.textContent = id.toUpperCase();
		return button;
	}

	const homeButton = createButton('home');
	choose.appendChild(homeButton);
	const menuButton = createButton('menu');
	choose.appendChild(menuButton);
	const contactInfoButton = createButton('contact');
	choose.appendChild(contactInfoButton);

	// add functionality
	homeButton.addEventListener('click', () => {
		home.style.display = 'flex';
		menu.style.display = 'none';
		contactInfo.style.display = 'none';
	});
	menuButton.addEventListener('click', () => {
		menu.style.display = 'flex';
		home.style.display = 'none';
		contactInfo.style.display = 'none';
	});
	contactInfoButton.addEventListener('click', () => {
		contactInfo.style.display = 'flex';
		home.style.display = 'none';
		menu.style.display = 'none';
	});


	// init
	home.style.display = 'flex';
	menu.style.display = 'none';
	contactInfo.style.display = 'none';
})()




