
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

    };
});
