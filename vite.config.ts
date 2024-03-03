import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"

export default defineConfig({
	plugins: [react(), cssInjectedByJsPlugin()],
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
		},
		cssCodeSplit: false,
	},
	base: "https://cdn.jsdelivr.net/gh/RokitDog/test-bot/dist/assets",
})
