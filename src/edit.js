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
import {useBlockProps, PanelColorSettings, InspectorControls, ContrastChecker} from '@wordpress/block-editor';
import {ColorPicker, PanelBody, RangeControl, TextControl, BorderBoxControl} from '@wordpress/components';
import {__experimentalUnitControl as UnitControl} from '@wordpress/components';
import {__experimentalBoxControl as BoxControl} from '@wordpress/components';
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

	const {
		textColor = attributes.textColor || '',
		backgroundColor = attributes.backgroundColor || '',
		borderRadius = attributes.borderRadius || '0px',
		borderColor = attributes.borderColor || '',
		padding = attributes.padding || {top: '8px', right: '16px', bottom: '8px', left: '16px'},
		margin = attributes.margin || {top: '0px', right: '0px', bottom: '0px', left: '0px'},
		rowGap = attributes.rowGap || '0px',
		columnGap = attributes.columnGap || '0px',
		playText = attributes.playText || 'Play',
		pauseText = attributes.pauseText || 'Pause',
		resumeText = attributes.resumeText || 'Resume',
		stopText = attributes.stopText || 'Stop',
	} = attributes;


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
					]}>
					<ContrastChecker
						textColor={textColor}
						backgroundColor={backgroundColor}
					/>
				</PanelColorSettings>
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
				<PanelBody title={__('Dimensions', 'l2wp-dev')}>
					<BoxControl
						label={__('Margin', 'l2wp-dev')}
						values={margin}
						splitOnAxis={true}
						onChange={(newMargin) => setAttributes({margin: newMargin})}
						units={[
							{value: 'px', label: 'px', default: 0},
							{value: '%', label: '%', default: 10},
							{value: 'em', label: 'em', default: 0},
						]}
					/>
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
					<RangeControl
						label="Row Gap"
						value={parseInt(rowGap)}
						onChange={(value) => setAttributes({rowGap: `${value}px`})}
						min={0}
						max={100}
					/>
					<RangeControl
						label="Column Gap"
						value={parseInt(columnGap)}
						onChange={(value) => setAttributes({columnGap: `${value}px`})}
						min={0}
						max={100}
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls group="settings">
				<PanelBody title={__('Labels', 'l2wp-dev')}>
					<TextControl
						label="Play Text"
						value={playText}
						onChange={(value) => setAttributes({playText: value})}
					/>
					<TextControl
						label="Pause Text"
						value={pauseText}
						onChange={(value) => setAttributes({pauseText: value})}
					/>
					<TextControl
						label="Resume Text"
						value={resumeText}
						onChange={(value) => setAttributes({resumeText: value})}
					/>
					<TextControl
						label="Stop Text"
						value={stopText}
						onChange={(value) => setAttributes({stopText: value})}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div
					style={{
						display: 'flex',
						flexFlow: "row nowrap",
						width: '100%',
						rowGap: `${rowGap || '0'}`,
						columnGap: `${columnGap || '0'}`,
						margin: `${margin.top} ${margin.right} ${margin.bottom} ${margin.left}`
					}}>
					<button id='l2wp-play-button' style={{
						display: 'flex',
						backgroundColor,
						color: textColor,
						borderColor,
						borderRadius,
						borderStyle: 'solid',
						padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
					}} onClick={playUtterance}>{playText}</button>
					<button id='l2wp-pause-button' style={{
						display: 'flex',
						backgroundColor,
						color: textColor,
						borderColor,
						borderRadius,
						borderStyle: 'solid',
						padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
					}} onClick={pauseUtterance}>{pauseText}</button>
					<button id='l2wp-resume-button' style={{
						display: 'flex',
						backgroundColor,
						color: textColor,
						borderColor,
						borderRadius,
						borderStyle: 'solid',
						padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
					}} onClick={resumeUtterance}>{resumeText}</button>
					<button id='l2wp-cancel-button' style={{
						display: 'flex',
						backgroundColor,
						color: textColor,
						borderColor,
						borderRadius,
						borderStyle: 'solid',
						padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
					}} onClick={cancelUtterance}>{stopText}</button>
				</div>
			</div>
		</>
	)
}

