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
		<div className="mx-auto flex h-[300px] flex-col justify-between rounded-xl bg-slate-800 pb-4 text-white sm:max-w-[375px] sm:px-4 md:max-w-[480px]">
			<div className="grid h-12 grid-cols-1 pt-4">
				{messages.map((message: any, index: any) => (
					<div
						key={index}
						className={`bubble ${
							message.type === "question" ? "text-left" : "text-right"
						}`}
					>
						{message.content}
					</div>
				))}
			</div>
			<div className="space-y-4 border-t bg-slate-700 px-4 py-2 shadow-lg sm:rounded-xl sm:border md:py-4">
				<PromptForm onNewQuestion={handleNewQuestion} />
			</div>
		</div>
	)
}
