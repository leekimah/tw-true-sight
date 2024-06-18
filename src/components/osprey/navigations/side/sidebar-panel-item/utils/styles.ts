import cls from 'classnames';

export const styles = {
  panelItem: (selected: boolean) =>
    cls('flex items-center justify-start py-2 px-5 w-34 gap-2  text-sm ', {
      'bg-sky-900 hover:bg-sky-100 text-cyan-500 hover:text-cyan-700': selected,
      'bg-transparent hover:bg-sky-100 text-zinc-200 hover:text-zinc-700': !selected,
    }),
};
