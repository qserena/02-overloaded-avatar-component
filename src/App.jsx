import Avatar from './Avatar'
import tom from './assets/Tom.jpg'
import { useState } from 'react'

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
	console.log('hej')
	// const button = document.getElementById('new-color-btn')
	// console.log(button)

	//button.addEventListener('click', generateColors)
	// button.addEventListener('click', () => {
	// 	console.log('Statarlänga!')
	// 	const randomIndex1 = Math.floor(backgroundColors.length * Math.random())
	// 	let randomIndex2 = randomIndex1
	// 	let randomIndex3 = randomIndex1
	// 	while (randomIndex2 === randomIndex1) {
	// 		randomIndex2 = Math.floor(backgroundColors.length * Math.random())
	// 	}
	// 	while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2) {
	// 		randomIndex3 = Math.floor(backgroundColors.length * Math.random())
	// 	}

	// 	color1 = backgroundColors[randomIndex1]
	// 	color2 = backgroundColors[randomIndex2]
	// 	color3 = backgroundColors[randomIndex3]
	// 	console.log('heimat!')
	// })

	const [color1, setColor1] = useState('orange')
	//let color1 = 'orange'
	//let color2 = 'blue'
	const [color2, setColor2] = useState('blue')
	//let color3 = 'yellow'
	const [color3, setColor3] = useState('yellow')

	function generateColors() {
		console.log('hoimat!')
		const randomIndex1 = Math.floor(backgroundColors.length * Math.random())
		let randomIndex2 = randomIndex1
		let randomIndex3 = randomIndex1
		while (randomIndex2 === randomIndex1) {
			randomIndex2 = Math.floor(backgroundColors.length * Math.random())
		}
		while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2) {
			randomIndex3 = Math.floor(backgroundColors.length * Math.random())
		}

		setColor1(backgroundColors[randomIndex1])
		setColor2(backgroundColors[randomIndex2])
		setColor3(backgroundColors[randomIndex3])
	}

	return (
		<>
			<div className="main-board">
				<div className="user">
					<Avatar
						src="https://randomuser.me/api/portraits/men/3.jpg"
						alt="Bob Person"
					/>

					<Avatar color={color1}>BP</Avatar>

					<Avatar color={color1} />
				</div>

				<div className="user">
					<Avatar
						src="https://randomuser.me/api/portraits/men/0.jpg"
						alt="Jeff Nicholson"
					/>

					<Avatar color={color2}>JN</Avatar>

					<Avatar color={color2} />
				</div>

				<div className="user">
					<Avatar src={tom} alt="Tom Serenander" />

					<Avatar color={color3}>TS</Avatar>

					<Avatar color={color3} />
				</div>
			</div>

			<div className="home-hero__cta">
				<btn
					id="new-color-btn"
					onClick={generateColors}
					className="btn btn--bg"
				>
					Change colors
				</btn>
			</div>
		</>
	)
}

export default App
