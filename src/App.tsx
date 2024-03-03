import { useState } from "react"
import { ChatPanel } from "./components/chat-panel"
import { Button } from "./components/ui/button"

function App() {
	const [visible, setVisible] = useState(false)

	return (
		<div className="fixed bottom-12 right-12 flex flex-col items-end gap-3.5">
			{visible && <ChatPanel />}
			<Button
				onClick={() => {
					setVisible(!visible)
				}}
				className="max-w-[100px]"
			>
				Click Me
			</Button>
		</div>
	)
}

export default App
