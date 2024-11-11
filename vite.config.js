import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        define: {
            "process.env.APP_URL": JSON.stringify(env.APP_URL),
        },
        plugins: [
            react(),
            laravel({
                input: [
                    "resources/css/app.css",
                    "resources/js/src/index.jsx",
                ],
                refresh: true,
            }),
        ],
        // Ensure the base URL is HTTPS in production
        base: env.APP_URL.includes('https') ? '/' : '',  // or '/build/' if needed
        server: {
            https: env.APP_URL.includes('https') // Enable HTTPS for local dev if needed
        },
        build: {
            manifest: true, // Include a manifest file
            assetsDir: '', // Avoid nested directories for assets
        },
    };
});
