/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps, PanelColorSettings, InspectorControls, ContrastChecker} from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	TextControl,
	BorderBoxControl
} from '@wordpress/components';
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
        textColor = '#000000',
        backgroundColor = '#ffffff',
        borderRadius = '12px',
        borderColor = '#cccccc',
        padding = { top: '8px', right: '16px', bottom: '8px', left: '16px' },
				columnGap = { right:'0px', left: '0px' },
        playText = 'Play',
        pauseText = 'Pause',
        resumeText = 'Resume',
        stopText = 'Stop',
        fontFamily = 'sans-serif',
        fontWeight = 'normal',
        fontSize = '16px',
    } = attributes;

	return (
		<>
			<InspectorControls group="styles">
				<PanelColorSettings
					title={__('Colors', 'l2wp-dev')}
					initialOpen={true}
					colorSettings={[
						{
							value: textColor,
							onChange: (color) => setAttributes({textColor: color}),
							label: __('Text', 'l2wp-dev')
						},
						{
							value: backgroundColor,
							onChange: (color) => setAttributes({backgroundColor: color}),
							label: __('Background', 'l2wp-dev')
						},
						{
							value: borderColor,
							onChange: (color) => setAttributes({borderColor: color}),
							label: __('Border', 'l2wp-dev')
						}
					]}/>
				<PanelBody title={__('Borders', 'l2wp-dev')}>
					<UnitControl
						label={__('Border Radius', 'l2wp-dev')}
						value={borderRadius}
						onChange={(newRadius) => setAttributes({borderRadius: newRadius})}
						units={[
							{value: 'px', label: 'px', default: 0},
							{value: '%', label: '%', default: 0},
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
							{value: '%', label: '%', default: 0},
							{value: 'em', label: 'em', default: 0},
						]}
					/>
				</PanelBody>
				<PanelBody title={__('Dimensions', 'l2wp-dev')}>
					<BoxControl
						label={__('Block Spaces', 'l2wp-dev')}
						values={columnGap}
						splitOnAxis={true}
						onChange={(newGap) => {
							console.log(newGap)
							setAttributes({columnGap: newGap})
							console.log(columnGap)
						}}
						sides='horizontal'
						units={[
							{value: 'px', label: 'px', default: 0},
							{value: '%', label: '%', default: 0},
							{value: 'em', label: 'em', default: 0},
						]}
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
						columnGap: columnGap.left
					}}>
					<button id='l2wp-play-button' style={{
						display: 'flex',
						backgroundColor,
						color: textColor,
						borderColor,
						borderRadius,
						borderStyle: 'solid',
						padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
					}} onClick={playUtterance}>{playText}</button>
					<button id='l2wp-pause-button' style={{
						display: 'flex',
						backgroundColor,
						color: textColor,
						borderColor,
						borderRadius,
						borderStyle: 'solid',
						padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
					}} onClick={pauseUtterance}>{pauseText}</button>
					<button id='l2wp-resume-button' style={{
						display: 'flex',
						backgroundColor,
						color: textColor,
						borderColor,
						borderRadius,
						borderStyle: 'solid',
						padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
					}} onClick={resumeUtterance}>{resumeText}</button>
					<button id='l2wp-cancel-button' style={{
						display: 'flex',
						backgroundColor,
						color: textColor,
						borderColor,
						borderRadius,
						borderStyle: 'solid',
						padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
					}} onClick={cancelUtterance}>{stopText}</button>
				</div>
			</div>
		</>
	)
}

