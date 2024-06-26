/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */


/* eslint-disable no-console */
import { playUtterance, pauseUtterance, resumeUtterance, cancelUtterance } from './script';

document.addEventListener('DOMContentLoaded', () => {
	const playButton = document.querySelector('.play-button');
	const pauseButton = document.querySelector('.pause-button');
	const resumeButton = document.querySelector('.resume-button');
	const cancelButton = document.querySelector('.cancel-button');

	if (playButton) playButton.addEventListener('click', playUtterance);
	if (pauseButton) pauseButton.addEventListener('click', pauseUtterance);
	if (resumeButton) resumeButton.addEventListener('click', resumeUtterance);
	if (cancelButton) cancelButton.addEventListener('click', cancelUtterance);
});


/* eslint-enable no-console */
