import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path'; // ✅ must import path

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(), // ✅ include Tailwind plugin here
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"), // added path import
        },
    },
});
