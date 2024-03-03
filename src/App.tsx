import { useState } from "react"
import { ChatPanel } from "./components/chat-panel"

function App() {
	const [visible, setVisible] = useState(false)

	return (
		<div className="containerMain">
			{visible && <ChatPanel />}
			<button
				onClick={() => {
					setVisible(!visible)
				}}
				className="showChatButton"
			>
				Click Me
			</button>
		</div>
	)
}

export default App
