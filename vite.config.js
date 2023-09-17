import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		// https://github.com/vitejs/vite/issues/1973#issuecomment-815695512
		'process.env': process.env,
	},
});
