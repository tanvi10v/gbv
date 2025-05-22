import { defineConfig } from "vite";
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
    server: {
        port: 3001,
        host: true,
        open: true
    },
    plugins: [
        viteImagemin({
            gifsicle: { optimizationLevel: 7, interlaced: false },
            optipng: { optimizationLevel: 7 },
            mozjpeg: { quality: 65 },
            pngquant: { quality: [0.65, 0.9], speed: 4 },
            svgo: {
                plugins: [
                    { name: 'removeViewBox' },
                    { name: 'removeEmptyAttrs', active: false },
                ],
            },
        }),
    ],
});