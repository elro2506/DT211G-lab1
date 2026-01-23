import { defineConfig } from "vite";
import { resolve } from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
    base: "/DT211G-lab1/",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                bilder: resolve(__dirname, "bilder.html"),
                publish: resolve(__dirname, "publish.html")
            }
        }
    },
plugins: [
ViteImageOptimizer({
    png: {
        quality: 75
    },
    jpg: {
        quality: 75
    },
    jpeg: {
        quality: 75
    },
    webp: {
        quality: 70 
    }, 
avif: {
    quality: 60
}
    })

]
});