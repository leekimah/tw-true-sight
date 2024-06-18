'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FunctionComponent, ReactNode, useContext, useEffect, useState } from 'react';
import { styles } from '../utils/styles';
import { SidebarContext } from '../../sidebar/utils/contexts';

export type SidebarPanelItemProps = {
  title?: string;
  path: string;
  children: ReactNode | ReactNode[];
};

export const SidebarPanelItem: FunctionComponent<SidebarPanelItemProps> = ({ title = '', path, children }) => {
  const [selected, setSelected] = useState(false);
  const pathName = usePathname();
  const { activeNav } = useContext(SidebarContext);

  // useEffect(() => setSelected(pathName.split('/')[2] === path.split('/')[2]), [path, pathName]);
  useEffect(() => setSelected(pathName === path), [path, pathName]);

  return (
    <Link href={path} className={styles.panelItem(selected)}>
      <span>{children}</span>
      {title ? title : null}
    </Link>
  );
};
