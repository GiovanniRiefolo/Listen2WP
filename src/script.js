let synthesis
let utterance

const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras. Id aliquet risus feugiat in ante metus dictum at. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Sed felis eget velit aliquet sagittis. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Aliquet eget sit amet tellus cras adipiscing enim. Velit dignissim sodales ut eu sem integer vitae justo. Et netus et malesuada fames ac turpis egestas. A scelerisque purus semper eget duis at tellus at urna."

if ('speechSynthesis' in window) {
	synthesis = window.speechSynthesis;
	utterance = new SpeechSynthesisUtterance;
} else {
	console.log('Text-to-speech not supported.');
}

const getContent = () => {
	const article = document.querySelector('.entry-content')
	if(article){
		const content = article.querySelectorAll(':scope > :not(.wp-block-rdev-l2wp)')
		const toRead = []
		content.forEach(element => toRead.push(element.innerText || element.textContent))
		return toRead.join(' ')
	} else {
		console.log('Can\'t find anything to read')
		return 'Nun ce sta niente'
	}
}

export const playUtterance = () => {
	const pageContent = getContent()
	utterance.text = pageContent
	console.log(utterance.text)
	if (synthesis && utterance) {
		synthesis.speak(utterance);
	}
};

export const pauseUtterance = () => {
	if (synthesis) {
		console.log('Pausing utterance');
		synthesis.pause();
	} else {
		console.log('synthesis not defined');
	}
};

export const resumeUtterance = () => {
	if (synthesis) {
		console.log('Resuming utterance');
		synthesis.resume();
	} else {
		console.log('synthesis not defined');
	}
};

export const cancelUtterance = () => {
	if (synthesis) {
		console.log('Resuming utterance');
		synthesis.cancel();
	} else {
		console.log('synthesis not defined');
	}
};

export const ReproductionBar = () => {
	return(
			<>
				<button className={'test'} onClick={playUtterance}>Read content edit</button>
				<button onClick={pauseUtterance}>Pause reading edit</button>
				<button onClick={resumeUtterance}>Resume reading edit</button>
				<button onClick={cancelUtterance}>Stop reading edit</button>
			</>
		)
}
