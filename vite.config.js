import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
        '/dapi': {
             target: 'http://www.swiggy.com/',
             changeOrigin: true,
             secure: true,      
         },        
    }
  }
})