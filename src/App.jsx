import Avatar from './Avatar'
import bob from './assets/bob.jpg'
import tom from './assets/Tom.jpg'

function App() {
	return (
		<>
			<div>
				<Avatar src={bob} alt="Bob Ziroll" />
				<br />
				<Avatar>BZ</Avatar>
				<br />
				<Avatar />
			</div>

			<div>
				<Avatar src={tom} alt="Tom Serenander" />
				<br />
				<Avatar>TS</Avatar>
				<br />
				<Avatar />
			</div>
		</>
	)
}

export default App
