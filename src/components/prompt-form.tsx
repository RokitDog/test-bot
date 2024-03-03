"use client"

import * as React from "react"
import Textarea from "react-textarea-autosize"
import { IconArrowElbow } from "./ui/icons"

export function PromptForm({ onNewQuestion }: any) {
	const [input, setInput] = React.useState("")

	const handleSubmit = (e: any) => {
		e.preventDefault()
		if (input.trim()) {
			onNewQuestion(input)
			setInput("")
		}
	}

	const onKeyDown = (e: any) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault()
			handleSubmit(e)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="formWrapper">
				<Textarea
					//   ref={inputRef}
					tabIndex={0}
					onKeyDown={onKeyDown}
					rows={1}
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Send a message."
					spellCheck={false}
					className="text-input"
				/>
				<div>
					<button type="submit" className="sendButton">
						<IconArrowElbow />
					</button>
				</div>
			</div>
		</form>
	)
}
