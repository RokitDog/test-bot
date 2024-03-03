"use client"

import { useState } from "react"

export function RatingPanel() {
	const [rating, setRating] = useState(0)

	return (
		<div className="ratePanelWrapper">
			<div className="ratePanelContent">
				<h1>How would you rate your experience?</h1>
				<div className="ratePanelStars">
					{[1, 2, 3, 4, 5].map((star) => (
						<p
							key={star}
							onClick={() => setRating(star)}
							className={
								rating >= star
									? "ratePanelStar ratePanelStarActive"
									: "ratePanelStar"
							}
						>
							{star}
						</p>
					))}
				</div>
			</div>
		</div>
	)
}
