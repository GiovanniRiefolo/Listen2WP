/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import {useState} from 'react';
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps, PanelColorSettings, InspectorControls} from '@wordpress/block-editor';
import {ColorPicker, PanelBody, TextControl} from '@wordpress/components';
import {__experimentalUnitControl as UnitControl} from '@wordpress/components';
import {__experimentalBoxControl as BoxControl} from '@wordpress/components';
import { __experimentalDimensionControl as DimensionControl } from '@wordpress/components';
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
	const {attributes, setAttributes} = props;
	const [paddings] = useState({
		top: '8px',
		left: '16px',
		right: '8px',
		bottom: '16px',
	})
	const [gaps] = useState({
		rowGap: '0px',
		columnGap: '0px'
	})
	const {textColor, backgroundColor, borderRadius, borderColor, padding = paddings, gap = gaps} = attributes;
	const [playText, setPlayText] = useState('Play')
	const [resumeText, setResumeText] = useState('Resume')
	const [pauseText, setPauseText] = useState('Pause')
	const [stopText, setStopText] = useState('Stop')


	return (
		<>
			<InspectorControls group="styles">
				<PanelColorSettings
					title={__('Colori', 'l2wp-dev')}
					initialOpen={true}
					colorSettings={[
						{
							value: textColor,
							onChange: (color) => setAttributes({textColor: color}),
							label: __('Testo', 'l2wp-dev')
						},
						{
							value: backgroundColor,
							onChange: (color) => setAttributes({backgroundColor: color}),
							label: __('Sfondo', 'l2wp-dev')
						},
						{
							value: borderColor,
							onChange: (color) => setAttributes({borderColor: color}),
							label: __('Bordo', 'l2wp-dev')
						}
					]}/>
				<PanelBody title={__('Bordi', 'l2wp-dev')}>
					<UnitControl
						label={__('Border Radius', 'l2wp-dev')}
						value={borderRadius}
						onChange={(newRadius) => setAttributes({borderRadius: newRadius})}
						units={[
							{value: 'px', label: 'px', default: 0},
							{value: '%', label: '%', default: 10},
							{value: 'em', label: 'em', default: 0},
						]}
					/>
				</PanelBody>
				<PanelBody title={__('Padding', 'l2wp-dev')}>
					<BoxControl
						label={__('Padding', 'l2wp-dev')}
						values={padding}
						splitOnAxis={true}
						onChange={(newPadding) => setAttributes({padding: newPadding})}
						units={[
							{value: 'px', label: 'px', default: 0},
							{value: '%', label: '%', default: 10},
							{value: 'em', label: 'em', default: 0},
						]}
					/>
				</PanelBody>
				<PanelBody title={__('Dimensions', 'l2wp-dev')}>
					<BoxControl
						label={__('Padding', 'l2wp-dev')}
						values={padding}
						splitOnAxis={true}
						onChange={(newPadding) => setAttributes({padding: newPadding})}
						units={[
							{value: 'px', label: 'px', default: 0},
							{value: '%', label: '%', default: 10},
							{value: 'em', label: 'em', default: 0},
						]}
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls group="settings">
				<PanelBody title={__('Labels', 'l2wp-dev')}>
					<TextControl value={playText} onChange={(e) => setPlayText(e.value)} label="Play"/>
					<TextControl value={pauseText} onChange={(e) => setPauseText(e.value)} label="Pause"/>
					<TextControl value={resumeText} onChange={(e) => setResumeText(e.value)} label="Resume"/>
					<TextControl value={stopText} onChange={(e) => setStopText(e.value)} label="Stop"/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div
					style={{display: 'flex', flexFlow: "row nowrap", rowGap: `${gap.rowGap || 0}`,  columnGap: `${gap.columnGap || 0}`}}>
					<button style={{
						backgroundColor: backgroundColor,
						color: textColor,
						borderColor: borderColor,
						borderRadius: borderRadius ? `${borderRadius}` : '0',
						borderStyle: 'solid',
						padding: `${padding?.top || 0} ${padding?.right || 0} ${padding?.bottom || 0} ${padding?.left || 0}`,
					}} onClick={playUtterance}>{playText}</button>
					<button style={{
						backgroundColor: backgroundColor,
						color: textColor,
						borderColor: borderColor,
						borderRadius: borderRadius ? `${borderRadius}` : '0',
						borderStyle: 'solid',
						padding: `${padding?.top || 0} ${padding?.right || 0} ${padding?.bottom || 0} ${padding?.left || 0}`,
					}} onClick={pauseUtterance}>{pauseText}</button>
					<button style={{
						backgroundColor: backgroundColor,
						color: textColor,
						borderColor: borderColor,
						borderRadius: borderRadius ? `${borderRadius}` : '0',
						borderStyle: 'solid',
						padding: `${padding?.top || 0} ${padding?.right || 0} ${padding?.bottom || 0} ${padding?.left || 0}`,
					}} onClick={resumeUtterance}>{resumeText}</button>
					<button style={{
						backgroundColor: backgroundColor,
						color: textColor,
						borderColor: borderColor,
						borderRadius: borderRadius ? `${borderRadius}` : '0',
						borderStyle: 'solid',
						padding: `${padding?.top || 0} ${padding?.right || 0} ${padding?.bottom || 0} ${padding?.left || 0}`,
					}} onClick={cancelUtterance}>{stopText}</button>
				</div>
			</div>
		</>
	)
}
