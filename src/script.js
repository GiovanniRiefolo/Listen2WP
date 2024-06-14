let synthesis
let utterance

if ('speechSynthesis' in window) {
	synthesis = window.speechSynthesis;
	utterance = new SpeechSynthesisUtterance;
	
	// TODO: get the post content
	utterance.text = "Bella vez";
	
} else {
	console.log('Text-to-speech not supported.');
}

export const playUtterance = () => synthesis.speak(utterance)
export const stopUtterance = () => synthesis.stop(utterance)
