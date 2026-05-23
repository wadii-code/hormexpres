import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    // Target modern browsers — smaller, faster output
    target: 'es2020',

    // Warn on chunks > 500 kB
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        // Manual chunk splitting — keeps vendor JS out of the main bundle
        // so browsers can cache them independently between deploys.
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-gsap': ['gsap', '@gsap/react'],
          'vendor-ui': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-tooltip',
            'lucide-react',
          ],
          'vendor-forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'vendor-helmet': ['react-helmet-async'],
        },
        // Deterministic file names for better long-term caching
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },

    // Minify with esbuild (default, fastest)
    minify: 'esbuild',

    // Enable CSS code splitting
    cssCodeSplit: true,

    // Source maps only in development
    sourcemap: false,
  },

  // Speed up cold-start by pre-bundling commonly used deps
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-helmet-async',
      'framer-motion',
      'lucide-react',
    ],
  },
});
