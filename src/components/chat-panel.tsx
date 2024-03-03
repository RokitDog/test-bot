"use client"

import * as React from "react"
import { PromptForm } from "./prompt-form"

export function ChatPanel() {
	const [messages, setMessages] = React.useState<any>([])

	const handleNewQuestion = (question: any) => {
		const newMessage = { type: "question", content: question }
		setMessages([...messages, newMessage])
		setTimeout(() => {
			const answer = { type: "answer", content: `Answer for '${question}` }
			setMessages((prevMessages: any) => [...prevMessages, answer])
		}, 2000)
	}

	return (
		<div
			style={{
				margin: "auto",
				display: "flex",
				height: "300px",
				flexDirection: "column",
				justifyContent: "space-between",
				borderRadius: "1rem",
				backgroundColor: "#2d3748",
				paddingBottom: "1rem",
				color: "white",
				maxWidth: "480px",
				padding: "20px 20px",
			}}
		>
			<div
				style={{
					display: "grid",
					height: "100%",
					gridTemplateColumns: "1fr",
					paddingTop: "16px",
					overflowY: "auto",
				}}
			>
				{messages.map((message: any, index: any) => (
					<div
						key={index}
						style={{
							padding: "12px",
							borderRadius: "0.5rem",
							backgroundColor:
								message.type === "question" ? "#4a5568" : "#2d3748",
							color: message.type === "question" ? "white" : "white",
							textAlign: message.type === "question" ? "right" : "left",
							height: "fit-content",
						}}
					>
						{message.content}
					</div>
				))}
			</div>
			<div
				style={{
					borderTopWidth: "1px",
					backgroundColor: "#334154",
					paddingLeft: "16px",
					paddingRight: "16px",
					paddingTop: "8px",
					paddingBottom: "8px",
					borderRadius: "0.375rem",
				}}
			>
				<PromptForm onNewQuestion={handleNewQuestion} />
			</div>
		</div>
	)
}
