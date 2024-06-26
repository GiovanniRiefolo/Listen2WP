/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

export default function save({attributes}) {
	const { buttonColor, playText, resumeText, stopText, pauseText } = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<button className='play-button' style={{backgroundColor: buttonColor}}>{playText}</button>
			<button className='pause-button' style={{backgroundColor: buttonColor}}>{resumeText}</button>
			<button className='resume-button' style={{backgroundColor: buttonColor}}>{stopText}</button>
			<button className='cancel-button' style={{backgroundColor: buttonColor}}>{pauseText}</button>
		</div>
	);
}

