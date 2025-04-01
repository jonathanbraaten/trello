import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useTaskQuery } from './useTaskQuery';
import { useRouter, useRoute } from 'vue-router';
const mockReplace = vi.fn();
const mockQuery = reactive({ task: 'All tasks' });
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
describe('useTaskQuery', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockQuery.task = 'All tasks';
  });
  it('returns task', () => {
    expect(useTaskQuery()).toHaveProperty('task');
  });

  it('should update task when you update the url', async () => {
    expect(useTaskQuery().task.value).toBe('All tasks');
  });

  it('should update task when you update the url', async () => {
    const { task } = useTaskQuery();
    task.value = 'args';
    await nextTick();
    expect(mockReplace.mock.lastCall).toMatchObject([
      {
        query: {
          task: 'args',
        },
      },
    ]);
  });

  it('should return All tasks if value is invalid', async () => {
    const { task } = useTaskQuery();
    mockQuery.task = 'some invalid value';
    await nextTick();
    expect(task.value).toBe('All tasks');
  });
});
