import { useRouteQuery } from '@vueuse/router';

export function useTaskQuery() {
  const list = ['All tasks', 'To do', 'In progress', 'Completed'];

  const task = useRouteQuery('task', '' as string, {
    transform: {
      get: (v) => {
        if (!list.includes(v)) return 'All tasks';
        return v;
      },
      set: (v) => {
        return v.toLowerCase();
      },
    },
  });
  return { task };
}
