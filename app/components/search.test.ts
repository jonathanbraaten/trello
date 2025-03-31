import { mount } from '@vue/test-utils';
import search from './search.vue';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useSearch } from '../composables/useSearch';

const mockSearch = ref('');
const mockSetSearch = vi.fn();
vi.mock('../composables/useSearch', () => {
  return {
    useSearch: () => ({
      search: mockSearch,
      setSearch: mockSetSearch,
    }),
  };
});
describe('Search', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it('sets input value and triggers submit with searchQuery, then it resets searchQuery to empty string', async () => {
    const wrapper = mount(search);
    const form = wrapper.find('[data-test-id="search-form"]');
    expect(form.exists()).toBe(true);

    const input = wrapper.find('[data-test-id="search-input"]');
    expect(input.exists()).toBe(true);

    await input.setValue('searchQuery');
    expect((input.element as HTMLInputElement).value).toBe('searchQuery');

    await form.trigger('submit');
    expect(mockSetSearch.mock.calls[0]?.[0]).toBe('searchQuery');
    expect((input.element as HTMLInputElement).value).toBe('');
  });

  it('returns early from submit if searchQuery is empty', () => {
    const wrapper = mount(search);
    const form = wrapper.find('[data-test-id="search-form"]');
    expect(form.exists()).toBe(true);

    const input = wrapper.find('[data-test-id="search-input"]');
    expect(input.exists()).toBe(true);

    form.trigger('submit');
    expect((input.element as HTMLInputElement).value).toBe('');
  });
});
