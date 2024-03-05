import { IoPersonSharp } from 'react-icons/io5'
import classnames from 'classnames'

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
