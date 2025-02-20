import {useState} from 'react';

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
import {Button, Icon, Modal, PanelBody, PanelRow, TextControl} from '@wordpress/components';
import {__experimentalUnitControl as UnitControl} from '@wordpress/components';
import {__experimentalBoxControl as BoxControl} from '@wordpress/components';
import {__experimentalBorderControl as BorderControl} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

import {playUtterance, pauseUtterance, resumeUtterance, cancelUtterance} from "./script";
import {
	PlayIconNormalFilled,
	PlayIconNormalOutlined,
	PlayIconRoundedFilled,
	PlayIconRoundedOutlined,
	PauseIconNormalFilled,
	PauseIconNormalOutlined,
	PauseIconRoundedFilled,
	PauseIconRoundedOutlined
} from "./icons-library";

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
		borderColor = '#ffffff',
		borderStyle = 'solid',
		borderWidth = '0px',
		padding = {top: '8px', right: '16px', bottom: '8px', left: '16px'},
		columnGap = {right: '0px', left: '0px'},
		playText = 'Play',
		pauseText = 'Pause',
		resumeText = 'Resume',
		stopText = 'Stop',
		playIcon = "",
		pauseIcon = "",
		resumeIcon = "",
		stopIcon = ""
	} = attributes;

	const [isOpen, setOpen] = useState(false);
	const [iconType, setIconType] = useState('')

	const openModal = (type) => {
		setOpen(true)
		setIconType(type)
	};
	const closeModal = () => {
		setOpen(false)
		setIconType('')
	};

	const applyChoice = (icon) => {
		switch (iconType) {
			case 'playIcon':
				setAttributes({playIcon: icon});
				break;
			case 'pauseIcon':
				setAttributes({pauseIcon: icon});
				break;
			case 'resumeIcon':
				setAttributes({resumeIcon: icon});
				break;
			case 'stopIcon':
				setAttributes({stopIcon: icon});
				break;
			default:
				break;
		}
	};

	return (
		<>
			{isOpen && (
				<Modal title="Select icon" onRequestClose={closeModal}>
					<div className="wp-block-rdev-l2wp__icon-grid">
						<button onClick={() => applyChoice(<PlayIconNormalFilled/>)}>
							<PlayIconNormalFilled/>
						</button>
						<button onClick={() => applyChoice(<PlayIconNormalOutlined/>)}>
							<PlayIconNormalOutlined/>
						</button>
						<button onClick={() => applyChoice(<PlayIconRoundedFilled/>)}>
							<PlayIconRoundedFilled/>
						</button>
						<button onClick={() => applyChoice(<PlayIconRoundedOutlined/>)}>
							<PlayIconRoundedOutlined/>
						</button>
						<button onClick={() => applyChoice(<PauseIconNormalFilled/>)}>
							<PauseIconNormalFilled/>
						</button>
						<button onClick={() => applyChoice(<PauseIconNormalOutlined/>)}>
							<PauseIconNormalOutlined/>
						</button>
						<button onClick={() => applyChoice(<PauseIconRoundedFilled/>)}>
							<PauseIconRoundedFilled/>
						</button>
						<button onClick={() => applyChoice(<PauseIconRoundedOutlined/>)}>
							<PauseIconRoundedOutlined/>
						</button>
					</div>
					<Button variant="secondary" onClick={closeModal}>
						Close
					</Button>
				</Modal>
			)}
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
						}
					]}>
					<ContrastChecker
						textColor={textColor}
						backgroundColor={backgroundColor}
					/>
				</PanelColorSettings>
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
					<BorderControl
						label={__('Border', 'l2wp-dev')}
						value={{
							style: borderStyle,
							width: borderWidth,
							color: borderColor,
						}}
						onChange={(newBorder) => {
							setAttributes({
								borderStyle: newBorder.style,
								borderWidth: newBorder.width,
								borderColor: newBorder.color,
							});
						}}
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
				<PanelBody title={__('Content', 'l2wp-dev')}>
					<div style={{display: 'flex', gap: '8px', flexFlow: 'row nowrap', alignItems: 'center'}}>
						<TextControl
							label="Play Text"
							value={playText}
							onChange={(value) => setAttributes({playText: value})}
						/>
						<Button variant="secondary" size="compact"
										onClick={() => openModal('playIcon')}>
							Open Library
						</Button>
					</div>
					<div style={{display: 'flex', gap: '8px', flexFlow: 'row nowrap', alignItems: 'center'}}>
						<TextControl
							label="Pause Text"
							value={pauseText}
							onChange={(value) => setAttributes({pauseText: value})}
						/>
						<Button variant="secondary" size="compact"
										onClick={() => openModal('pauseIcon')}>
							Open Library
						</Button>
					</div>
					<div style={{display: 'flex', gap: '8px', flexFlow: 'row nowrap', alignItems: 'center'}}>
						<TextControl
							label="Resume Text"
							value={resumeText}
							onChange={(value) => setAttributes({resumeText: value})}
						/>
						<Button variant="secondary" size="compact"
										onClick={() => openModal('resumeIcon')}>
							Open Library
						</Button>
					</div>
					<div style={{display: 'flex', gap: '8px', flexFlow: 'row nowrap', alignItems: 'center'}}>
						<TextControl
							label="Stop Text"
							value={stopText}
							onChange={(value) => setAttributes({stopText: value})}
						/>
						<Button variant="secondary" size="compact"
										onClick={() => openModal('stopIcon')}>
							Open Library
						</Button>
					</div>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div
					className="wp-block-rdev-l2wp__buttons"
					style={{columnGap: columnGap.left}}>
					<button
						id='l2wp-play-button'
						style={{
							display: 'flex',
							backgroundColor,
							color: textColor,
							borderColor,
							borderRadius,
							borderStyle,
							borderWidth,
							padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
						}}
						onClick={playUtterance}>
						<span className="icon" style={{
							"--icon-fill": textColor ? textColor : '#000',
							"--icon-size": attributes.fontSize ? attributes.fontSize : "14px"
						}}>{playIcon && playIcon}</span>
						{playText}
					</button>
					<button
						id='l2wp-pause-button'
						style={{
							display: 'flex',
							backgroundColor,
							color: textColor,
							borderColor,
							borderRadius,
							borderStyle,
							borderWidth,
							padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
						}} onClick={pauseUtterance}>
						<span className="icon" style={{
							"--icon-fill": textColor ? textColor : '#000',
							"--icon-size": attributes.fontSize ? attributes.fontSize : "14px"
						}}>{pauseIcon && pauseIcon}</span>
						{pauseText}</button>
					<button
						id='l2wp-resume-button'
						style={{
							display: 'flex',
							backgroundColor,
							color: textColor,
							borderColor,
							borderRadius,
							borderStyle,
							borderWidth,
							padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
						}}
						onClick={resumeUtterance}>
						<span className="icon" style={{
							"--icon-fill": textColor ? textColor : '#000',
							"--icon-size": attributes.fontSize ? attributes.fontSize : "14px"
						}}>{resumeIcon && resumeIcon}</span>
						{resumeText}</button>
					<button
						id='l2wp-cancel-button'
						style={{
							display: 'flex',
							backgroundColor,
							color: textColor,
							borderColor,
							borderRadius,
							borderStyle,
							borderWidth,
							padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
						}}
						onClick={cancelUtterance}>
						<span className="icon" style={{
							"--icon-fill": textColor ? textColor : '#000',
							"--icon-size": attributes.fontSize ? attributes.fontSize : "14px"
						}}>{stopIcon && stopIcon}</span>
						{stopText}</button>
				</div>
			</div>
		</>
	)
}

