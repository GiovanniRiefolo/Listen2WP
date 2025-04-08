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
		stopText = 'Stop',
		iconGap = '0px'
	} = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div
				className="wp-block-rdev-l2wp__buttons"
				style={{columnGap: columnGap.left}}>
				<button
					id='l2wp-play-button'
					aria-label={playText}
					type="button"
					style={{
						display: 'flex',
						gap: iconGap,
						backgroundColor,
						color: textColor,
						borderColor,
						borderRadius,
						borderStyle,
						borderWidth,
						padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
					}}>
					{attributes.playIcon &&
						<span
							className="icon"
							style={{
								"--icon-fill": textColor ? textColor : '#000',
								"--icon-size": attributes.fontSize ? attributes.fontSize : "14px",
							}}
							dangerouslySetInnerHTML={{__html: attributes.playIcon}}>
						</span>}
					{playText}
				</button>
				<button
					id='l2wp-pause-button'
					aria-label={pauseText}
					type="button"
					style={{
						display: 'flex',
						gap: iconGap,
						backgroundColor,
						color: textColor,
						borderColor,
						borderRadius,
						borderStyle,
						borderWidth,
						padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
					}}>
					{attributes.pauseIcon &&
						<span
							className="icon"
							style={{
								"--icon-fill": textColor ? textColor : '#000',
								"--icon-size": attributes.fontSize ? attributes.fontSize : "14px",
							}}
							dangerouslySetInnerHTML={{__html: attributes.pauseIcon}}>
						</span>}
					{pauseText}
				</button>
				<button
					id='l2wp-resume-button'
					aria-label={resumeText}
					type="button"
					style={{
						display: 'flex',
						gap: iconGap,
						backgroundColor,
						color: textColor,
						borderColor,
						borderRadius,
						borderStyle,
						borderWidth,
						padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
					}}>
					{attributes.resumeIcon &&
						<span
							className="icon"
							style={{
								"--icon-fill": textColor ? textColor : '#000',
								"--icon-size": attributes.fontSize ? attributes.fontSize : "14px",
							}}
							dangerouslySetInnerHTML={{__html: attributes.resumeIcon}}>
						</span>}
					{resumeText}
				</button>
				<button
					id='l2wp-cancel-button'
					aria-label={stopText}
					type="button"
					style={{
						display: 'flex',
						gap: iconGap,
						backgroundColor,
						color: textColor,
						borderColor,
						borderRadius,
						borderStyle,
						borderWidth,
						padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
					}}>
					{attributes.stopIcon &&
						<span
							className="icon"
							style={{
								"--icon-fill": textColor ? textColor : '#000',
								"--icon-size": attributes.fontSize ? attributes.fontSize : "14px",
							}}
							dangerouslySetInnerHTML={{__html: attributes.stopIcon}}>
						</span>}
					{stopText}
				</button>
			</div>
		</div>
	);
}


