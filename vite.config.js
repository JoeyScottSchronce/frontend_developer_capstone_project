import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/frontend_developer_capstone_project/',
    plugins: [react()],
});

