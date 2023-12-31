import { IoPersonSharp } from 'react-icons/io5'
import classnames from 'classnames'
import bob from './assets/bob.jpg'

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

export default function Avatar({ src, alt, children, className, ...rest }) {
	let letterClass = ''
	let anonymousClass = ''
	let image = ''
	let icon = ''
	const backgroundColors = ['navy', 'pink', 'red', 'blue', 'green']

	if (src) {
		// Image
		image = alt ? <img src={bob} alt={alt} /> : <img src={src} />
	} else if (children) {
		// Initials
		letterClass = 'avatar-letters'
	} else {
		// Anonymous
		icon = <IoPersonSharp />
		const randomIndex = Math.floor(backgroundColors.length * Math.random())
		anonymousClass = 'avatar-icon ' + backgroundColors[randomIndex]
	}

	const allClasses = classnames(
		'avatar',
		className,
		letterClass,
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
