import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        base: "/",
        define: {
            "process.env.APP_URL": JSON.stringify(env.APP_URL),
        },
        plugins: [
            react(),
            laravel({
                input: [
                    "resources/css/app.css",
                    "resources/js/src/components/styles.css",
                    "resources/js/src/index.jsx",
                ],
                refresh: true,
            }),
            viteStaticCopy({
                targets: [
                    {
                        src: 'public/fonts/*',
                        dest: 'fonts',
                    },
                    {
                        src: 'public/img/*',
                        dest: 'img',
                    }
                ]
            }),
        ],
        build: {
            assetsDir: 'assets',
            rollupOptions: {
                output: {
                    assetFileNames: 'assets/[name]-[hash][extname]', 
                }
            }
        }
    };
});
