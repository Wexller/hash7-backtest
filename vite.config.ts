import vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const basePrefix = env.VITE_BASE_PREFIX;

  const config = {
    base: '/src',
    plugins: [vue()],
    resolve: {
      alias: {
        src: '/src',
      },
    },
  };

  if (basePrefix) {
    config.base = basePrefix;
  }

  return config;
});
