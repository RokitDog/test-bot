import { useState } from "react"
import { ChatPanel } from "./components/chat-panel"

function App() {
	const [visible, setVisible] = useState(false)

	return (
		<div
			style={{
				position: "fixed",
				bottom: "48px",
				right: "48px",
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-end",
				gap: "0.875rem",
			}}
		>
			{visible && <ChatPanel />}
			<button
				onClick={() => {
					setVisible(!visible)
				}}
				style={{
					padding: "0.875rem 1.5rem",
					borderRadius: "0.375rem",
					backgroundColor: "#334153",
					color: "white",
					fontWeight: 500,
					fontSize: "1.125rem",
					border: "none",
					cursor: "pointer",
				}}
			>
				Click Me
			</button>
		</div>
	)
}

export default App
