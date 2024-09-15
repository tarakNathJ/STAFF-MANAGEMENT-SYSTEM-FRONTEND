import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {

        proxy: {

            '/BASE': {
                target: "http://localhost:4000",
                changeOrigin: true,
                secure: true,
                rewrite: (path) => path.replace(/^\/BASE/, ''),
            },
            '/RAZORPAY': {
                target: "https://api.razorpay.com",
                changeOrigin: true,

                rewrite: (path) => path.replace(/^\/RAZORPAY/, ''),
            }

        }
    }
})
