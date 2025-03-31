import { useRoute, useRouter } from 'vue-router';
export function useSearch() {
  const router = useRouter();
  const search = ref('');
  function setSearch(n: string) {
    search.value = n.toLowerCase().trim().split(' ').join('');
    router.replace({ query: search.value ? { search: search.value } : {} });
  }
  return { search, setSearch };
}
