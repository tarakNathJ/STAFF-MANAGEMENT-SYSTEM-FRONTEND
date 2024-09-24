import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/Base": {
                target: "https://staff-management-system-backend.onrender.com",
                changeOrigin: true,
                secure: true,
                rewrite: (path) => path.replace(/^\/Base/, ''),
            }

        },

    }
})

/**  server: {
        proxy: {
            '/Base': {
                target: "https://e-commerce-web-application-ul0n.onrender.com",
                changeOrigin: true,
                secure: true,
                rewrite: (path) => path.replace(/^\/Base/, ''),

            }

        },
    }, */