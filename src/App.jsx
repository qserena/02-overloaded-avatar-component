import Avatar from './Avatar'
import bob from './assets/bob.jpg'
import tom from './assets/Tom.jpg'

function App() {
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
	const randomIndex1 = Math.floor(backgroundColors.length * Math.random())
	let randomIndex2 = randomIndex1
	while (randomIndex2 === randomIndex1) {
		randomIndex2 = Math.floor(backgroundColors.length * Math.random())
	}
	return (
		<div className="main-board">
			<div className="user">
				<Avatar src={bob} alt="Bob Ziroll" />
				<br />
				<Avatar color={backgroundColors[randomIndex1]}>BZ</Avatar>
				<br />
				<Avatar color={backgroundColors[randomIndex1]} />
			</div>

			<div className="user">
				<Avatar src={tom} alt="Tom Serenander" />
				<br />
				<Avatar color={backgroundColors[randomIndex2]}>TS</Avatar>
				<br />
				<Avatar color={backgroundColors[randomIndex2]} />
			</div>
		</div>
	)
}

export default App
