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
        base: env.APP_URL.includes('https') ? '/' : '',
        server: {
            https: env.APP_URL.includes('https'), // Enable HTTPS locally if needed
        },
        // build: {
        //     manifest: true,
        //     assetsDir: '', // Avoid nested directories for assets
        // },
    };
});
