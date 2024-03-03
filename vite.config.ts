import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		rollupOptions: {
			input: {
				app: "./src/main.tsx",
			},
			output: {
				manualChunks: undefined,
			},
		},
		// cssCodeSplit: false,
	},
	base: "https://cdn.jsdelivr.net/gh/aleksandar-stojkoski/rps-ai-widget/dist/assets",
})
