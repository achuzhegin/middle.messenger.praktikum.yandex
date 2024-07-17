import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default defineConfig({
    root: resolve(__dirname, '.'),

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname,'index.html')
                
                // chat: resolve(__dirname, 'src/pages/index.ts'),
               

            },
        },
    },
    plugins: [handlebars()],
    css: {
        preprocessorOptions: {
            less: {
                additionalData: '@import "src/global.less";',


            },
        },
    },
}) 
