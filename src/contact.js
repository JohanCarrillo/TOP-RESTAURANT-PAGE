

export default function showContact(parentNode) {

	function insertText(txtContent, parent) {
		const div = document.createElement('div');
		div.textContent = txtContent;
		div.classList.add('contact-text');
		parent.appendChild(div);
	}

	// title
	const h2 = document.createElement('h2');
	h2.textContent = 'Conact Information';
	parentNode.appendChild(h2);

	const div = document.createElement('div');
	//div.classList.add('contact-text');
	insertText('Phone Number: 555-XXX-000 / 123-ABC-987', div);
	insertText('e-mail addres: not-fake-addres@not-fake-provider.com', div);
	insertText('Physical addres: Not Fake State - street: ABC-REAL', div);

	parentNode.appendChild(div);
}