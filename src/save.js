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
		textColor,
		backgroundColor,
		borderRadius,
		borderColor,
		playText,
		resumeText,
		stopText,
		pauseText,
		padding,
		gap
	} = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div
				style={{display: 'flex', flexFlow: "row nowrap", rowGap: `${gap.rowGap || 0}`,  columnGap: `${gap.columnGap || 0}`}}>
				<button
					className='play-button'
					style={{
						backgroundColor: backgroundColor,
						color: textColor,
						borderColor: borderColor,
						borderRadius: borderRadius ? `${borderRadius}` : '0',
						borderStyle: 'solid',
						padding: `${padding?.top || 0} ${padding?.right || 0} ${padding?.bottom || 0} ${padding?.left || 0}`,
					}}>
					{playText}
				</button>
				<button
					className='pause-button'
					style={{
						backgroundColor: backgroundColor,
						color: textColor,
						borderColor: borderColor,
						borderRadius: borderRadius ? `${borderRadius}` : '0',
						borderStyle: 'solid',
						padding: `${padding?.top || 0} ${padding?.right || 0} ${padding?.bottom || 0} ${padding?.left || 0}`,
					}}>
					{resumeText}
				</button>
				<button
					className='resume-button'
					style={{
						backgroundColor: backgroundColor,
						color: textColor,
						borderColor: borderColor,
						borderRadius: borderRadius ? `${borderRadius}` : '0',
						borderStyle: 'solid',
						padding: `${padding?.top || 0} ${padding?.right || 0} ${padding?.bottom || 0} ${padding?.left || 0}`,
					}}>
					{stopText}
				</button>
				<button
					className='cancel-button'
					style={{
						backgroundColor: backgroundColor,
						color: textColor,
						borderColor: borderColor,
						borderRadius: borderRadius ? `${borderRadius}` : '0',
						borderStyle: 'solid',
						padding: `${padding?.top || 0} ${padding?.right || 0} ${padding?.bottom || 0} ${padding?.left || 0}`,
					}}>
					{pauseText}
				</button>
			</div>
		</div>
	);
}

