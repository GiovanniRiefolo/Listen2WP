let synthesis
let utterance

if ('speechSynthesis' in window) {
	synthesis = window.speechSynthesis;
	utterance = new SpeechSynthesisUtterance;
} else {
	console.log('Text-to-speech not supported.');
}

const getContent = () => {
	console.log('test')
	const article = document.querySelector('.entry-content')
	if (article) {
		const content = article.querySelectorAll(':scope > :not(.wp-block-rdev-l2wp)')
		console.log(content)
		const toRead = [];
		content.forEach(element => toRead.push(element.innerText || element.textContent));
		return toRead.join(' ');
	} else {
		console.log('Can\'t find anything to read');
		return 'Non riesco a leggere il contenuto';
	}
};

export const playUtterance = () => {
	utterance.text = getContent()
	console.log(utterance.text)
	if (synthesis && utterance) {
		synthesis.speak(utterance);
	}
};

export const pauseUtterance = () => {
	if (synthesis) {
		synthesis.pause();
	} else {
		console.log('synthesis not defined');
	}
};

export const resumeUtterance = () => {
	if (synthesis) {
		synthesis.resume();
	} else {
		console.log('synthesis not defined');
	}
};

export const cancelUtterance = () => {
	if (synthesis) {
		synthesis.cancel();
	} else {
		console.log('synthesis not defined');
	}
};
