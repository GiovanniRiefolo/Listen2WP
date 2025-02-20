/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps} from '@wordpress/block-editor';

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
		stopText = 'Stop'
	} = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
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
						padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
					}}>
					<span className="icon" style={{
						"--icon-fill": textColor ? textColor : '#000',
						"--icon-size": attributes.fontSize ? attributes.fontSize : "14px"
					}}>{attributes.playIcon && attributes.playIcon}</span>
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
						padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
					}}>
					<span className="icon" style={{
						"--icon-fill": textColor ? textColor : '#000',
						"--icon-size": attributes.fontSize ? attributes.fontSize : "14px"
					}}>{attributes.pauseIcon && pickIcon(attributes.pauseIcon)}</span>
					{pauseText}
				</button>
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
						padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
					}}>
					<span className="icon" style={{
						"--icon-fill": textColor ? textColor : '#000',
						"--icon-size": attributes.fontSize ? attributes.fontSize : "14px"
					}}>{attributes.resumeIcon && pickIcon(attributes.resumeIcon)}</span>
					{resumeText}
				</button>
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
						padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
					}}>
					<span className="icon" style={{
						"--icon-fill": textColor ? textColor : '#000',
						"--icon-size": attributes.fontSize ? attributes.fontSize : "14px"
					}}>{attributes.stopIcon && pickIcon(attributes.stopIcon)}</span>
					{stopText}
				</button>
			</div>
		</div>
	);
}


