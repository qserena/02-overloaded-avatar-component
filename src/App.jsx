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

    const [color1, setColor1] = useState('blue')
    const [color2, setColor2] = useState('red')
    const [color3, setColor3] = useState('purple')

    // Generates three unique colors
    function generateColors() {
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
                <Avatar
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                    alt="Bob Person"
                />

                <Avatar
                    src="https://randomuser.me/api/portraits/men/0.jpg"
                    alt="Jeff Nicholson"
                />

                <Avatar src={tom} alt="Tom Serenander" />

                <Avatar color={color1}>BP</Avatar>

                <Avatar color={color2}>JN</Avatar>

                <Avatar color={color3}>TS</Avatar>

                <Avatar color={color1} />

                <Avatar color={color2} />

                <Avatar color={color3} />
            </div>

            <div className="home-hero__cta">
                <button
                    id="new-color-btn"
                    onClick={generateColors}
                    className="btn btn--bg"
                >
                    Change colors
                </button>
            </div>
        </>
    )
}

export default App
