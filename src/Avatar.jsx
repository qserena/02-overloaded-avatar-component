import { IoPersonSharp } from 'react-icons/io5'
import classnames from 'classnames'
import bob from './assets/bob.jpg'
import tom from './assets/Tom.jpg'

/**
 * Challenge: Create a flexible Avatar component!
 *
 * Check the slides for notes on how the component
 * should be used.
 *
 * Each of the 3 different avatars should have a
 * wrapper div with the classes below:
 *
 * With image: `avatar`
 * With initials: `avatar avatar-letters`
 * Anonymous: `avatar avatar-icon`
 *
 * E.g. <Avatar>BZ</Avatar> should render
 * <div className="avatar avatar-letters">...</div>
 *
 * Check the hints.md file if you are really stuck.
 *
 * EXTRA CREDIT:
 * Randomize the background color of the non-image
 * avatars. Check the styles.css for some pre-written
 * color classes to add to the wrapper div.
 */

export default function Avatar({
	src,
	alt,
	color,
	children,
	className,
	...rest
}) {
	let letterClass = ''
	let colorClass = ''
	let anonymousClass = ''
	let image = ''
	let icon = ''
	const backgroundColors = [
		'navy',
		'pink',
		'red',
		'purple',
		'blue',
		'green',
		'yellow',
		'orange',
	]
	const randomIndex = Math.floor(backgroundColors.length * Math.random())

	if (src) {
		// Photo
		image = alt ? <img src={src} alt={alt} /> : <img src={src} />
	} else if (children) {
		// Initials
		letterClass = 'avatar-letters'
		colorClass = color || backgroundColors[randomIndex]
	} else {
		// Anonymous
		icon = <IoPersonSharp />
		colorClass = color || backgroundColors[randomIndex]
		anonymousClass = 'avatar-icon'
	}

	const allClasses = classnames(
		'avatar',
		className,
		letterClass,
		colorClass,
		anonymousClass
	)

	return (
		<div className={allClasses} {...rest}>
			{image}
			{children}
			{icon}
		</div>
	)
}
