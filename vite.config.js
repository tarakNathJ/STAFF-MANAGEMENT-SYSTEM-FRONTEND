import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {

        proxy: {
            '/BASE': {
                target: "https://staff-management-system-backend.onrender.com/",
                changeOrigin: true,

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