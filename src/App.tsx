import { useState } from "react"
import { ChatPanel } from "./components/chat-panel"
import { RatingPanel } from "./components/rating-panel"

function App() {
	const [visibleChat, setVisibleChat] = useState(false)
	const [visibleRating, setVisibleRating] = useState(false)

	return (
		<div className="containerMain">
			{visibleChat && <ChatPanel />}
			{visibleRating && <RatingPanel />}
			<img
				src="../public/tobi_ai.png"
				className="showChatButton"
				onClick={() => setVisibleChat(!visibleChat)}
			/>
			<img
				src="../public/tobi_ai.png"
				className="showChatButton"
				onClick={() => setVisibleRating(!visibleRating)}
			/>
		</div>
	)
}

export default App
