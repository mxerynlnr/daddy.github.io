const startButton = document.querySelector('#start-button');
const welcomeCard = document.querySelector('.welcome-card');
const envelopeScreen = document.querySelector('#envelope-screen');
const envelopeButton = document.querySelector('#envelope-button');
const envelopeHint = document.querySelector('#envelope-hint');
const letter = document.querySelector('#letter');
const albumToggle = document.querySelector('#album-toggle');
const albumScreen = document.querySelector('#album-screen');

const openEnvelope = () => {
	envelopeButton.classList.add('is-open');
	envelopeButton.setAttribute('aria-label', 'Birthday letter opened');
	envelopeHint.textContent = 'Your letter is here';
	letter.classList.add('is-visible');
	letter.setAttribute('aria-hidden', 'false');
};

startButton.addEventListener('click', () => {
	welcomeCard.hidden = true;
	envelopeScreen.hidden = false;
	envelopeScreen.classList.add('screen-visible');
	envelopeButton.focus();
});

envelopeButton.addEventListener('click', openEnvelope);
envelopeButton.addEventListener('keydown', (event) => {
	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		openEnvelope();
	}
});

albumToggle.addEventListener('click', () => {
	envelopeScreen.hidden = true;
	albumScreen.hidden = false;
	albumScreen.classList.add('screen-visible');
	albumToggle.setAttribute('aria-expanded', 'true');
	albumScreen.focus();
});
