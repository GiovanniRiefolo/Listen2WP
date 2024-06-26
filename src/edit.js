/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { useState } from 'react';
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ColorPalette, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {playUtterance, pauseUtterance, resumeUtterance, cancelUtterance} from "./script";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { buttonColor } = attributes;
	const [playText, setPlayText] = useState('Play')
	const [resumeText, setResumeText] = useState('Resume')
	const [pauseText, setPauseText] = useState('Pause')
	const [stopText, setStopText] = useState('Stop')

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Button Color', 'text-domain')}>
					<ColorPalette
						value={buttonColor}
						onChange={(color) => setAttributes({ buttonColor: color })}
					/>

					<TextControl value={playText} onChange={(e) => setPlayText(e.value)} label="Play"/>
					<TextControl value={pauseText} onChange={(e) => setPauseText(e.value)} label="Pause"/>
					<TextControl value={resumeText} onChange={(e) => setResumeText(e.value)} label="Resume"/>
					<TextControl value={stopText} onChange={(e) => setStopText(e.value)} label="Stop"/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<button style={{backgroundColor: buttonColor}} onClick={playUtterance}>{playText}</button>
				<button style={{backgroundColor: buttonColor}} onClick={pauseUtterance}>{pauseText}</button>
				<button style={{backgroundColor: buttonColor}} onClick={resumeUtterance}>{resumeText}</button>
				<button style={{backgroundColor: buttonColor}} onClick={cancelUtterance}>{stopText}</button>
			</div>
		</>
	)
}
