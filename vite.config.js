import { defineConfig } from "vite";
import { resolve } from "path";


export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                bilder: resolve(__dirname, "bilder.html"),
                publish: resolve(__dirname, "publish.html")
            }
        }
    }
});