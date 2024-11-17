import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: 'localhost', // Change the host to 'localhost'
    port: 5173,        // Ensure the port is set to 5173
  },
})
