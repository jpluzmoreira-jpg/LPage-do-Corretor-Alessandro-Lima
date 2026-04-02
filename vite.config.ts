import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  
  // Configuração dinâmica do base path para GitHub Pages
  const hasCustomDomain = fs.existsSync('public/CNAME') || fs.existsSync('CNAME');
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
  const repo = process.env.GITHUB_REPOSITORY;
  
  // Se estiver no GitHub Actions e não tiver domínio customizado, usa o nome do repositório
  // Caso contrário, usa '/' (que funciona perfeitamente no AI Studio e Vercel/Netlify)
  const basePath = (isGitHubActions && repo && !hasCustomDomain) ? `/${repo.split('/')[1]}/` : '/';
  
  return {
    base: basePath,
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
