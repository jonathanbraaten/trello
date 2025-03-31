import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      include: ['components/search.vue', 'composables/useSearch.ts'],
    },
  },
});
