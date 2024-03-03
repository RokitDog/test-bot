import { useState } from "react"
import { ChatPanel } from "./components/chat-panel"

function App() {
	const [visible, setVisible] = useState(false)

	return (
		<div className="containerMain">
			{visible && <ChatPanel />}
			<img
				src="../public/tobi_ai.png"
				className="showChatButton"
				onClick={() => setVisible(!visible)}
			/>
		</div>
	)
}

export default App
