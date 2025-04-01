import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useRouter, useRoute } from 'vue-router';
import { useSearchQuery } from './useSearchQuery';
const mockReplace = vi.fn();
const mockQuery = reactive({ search: '' });

vi.mock('vue-router', () => {
  return {
    useRouter: () => {
      return {
        replace: mockReplace,
      };
    },
    useRoute: () => {
      return {
        query: mockQuery,
      };
    },
  };
});
describe('useSearchQuery', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it('returns search and setSearch', () => {
    const { search, setSearch } = useSearchQuery();
    expect(search.value).toBe('');
    expect(setSearch).toBeTypeOf('function');
  });

  it('setSearch takes an argument and assigns it to search ref', async () => {
    const { search, setSearch } = useSearchQuery();
    setSearch('testing in vitest');
    await nextTick();
    expect(search.value).toBe('testinginvitest');
  });
  it('setSearch takes an argument and assigns it to search ref. Updates the useRoute query with search ref', async () => {
    const { setSearch } = useSearchQuery();
    setSearch('Indexing');
    await nextTick();
    expect(mockReplace.mock.calls[0]?.[0]).toEqual({
      query: {
        search: 'indexing',
      },
    });
  });

  it('searchValue is an empty string, useRoute will be an empty object', () => {
    const { search, setSearch } = useSearchQuery();
    setSearch('');
    expect(search.value).toBe('');
    expect(mockReplace.mock.calls[0]?.[0]).toEqual({
      query: {},
    });
  });
});
