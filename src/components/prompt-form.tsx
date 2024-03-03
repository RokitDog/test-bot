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
	return (
		<form onSubmit={handleSubmit}>
			<div
				style={{
					position: "relative",
					display: "flex",
					maxHeight: "240px",
					width: "100%",
					flexGrow: 1,
					flexDirection: "column",
					overflow: "hidden",
					backgroundColor: "#2d3748",
					paddingRight: "32px",
					borderRadius: "0.375rem",
				}}
			>
				<Textarea
					//   ref={inputRef}
					tabIndex={0}
					//   onKeyDown={onKeyDown}
					rows={1}
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Send a message."
					spellCheck={false}
					style={{
						width: "100%",
						resize: "none",
						backgroundColor: "transparent",
						paddingLeft: "16px",
						paddingRight: "16px",
						paddingTop: "1.3rem",
						paddingBottom: "1.3rem",
						color: "white",
						outline: "none",
					}}
				/>
				<div
					style={{
						position: "absolute",
						right: "8px",
						top: "24px",
					}}
				>
					<button type="submit">
						<IconArrowElbow />
					</button>
				</div>
			</div>
		</form>
	)
}
