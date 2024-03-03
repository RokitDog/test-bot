"use client"

import * as React from "react"
import { PromptForm } from "./prompt-form"

export function ChatPanel() {
	const [messages, setMessages] = React.useState<any>([])

	const handleNewQuestion = (question: any) => {
		const newMessage = { type: "question", content: question }
		setMessages([...messages, newMessage])
		setTimeout(() => {
			const answer = { type: "answer", content: `Answer for ${question}` }
			setMessages((prevMessages: any) => [...prevMessages, answer])
		}, 2000)
	}

	return (
		<div className="chatPanelContainer">
			<div className="responseMessageWrapper">
				{messages.map((message: any, index: any) => (
					<div
						key={index}
						className={
							message.type === "question"
								? "responseMessageQuestion"
								: "responseMessageAnswer"
						}
					>
						<p>{message.content}</p>
					</div>
				))}
			</div>
			<div
			className="promptFormWrapper"
			>
				<PromptForm onNewQuestion={handleNewQuestion} />
			</div>
		</div>
	)
}
