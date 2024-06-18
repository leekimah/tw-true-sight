'use client';

import { FunctionComponent, useContext, useEffect } from 'react';
import { SidebarContext } from '../utils/contexts';
import { usePathname } from 'next/navigation';
import { sidebarItems } from '../constants/sidebar-items';
import { styles } from '../utils/styles';
import { SidebarPanel } from '../../sidebar-panel/view/SidebarPanel';

export const Sidebar: FunctionComponent = () => {
  const { setActiveNav } = useContext(SidebarContext);

  const pathname = usePathname();

  useEffect(() => {
    sidebarItems.forEach((item, index) => {
      if (item.path === pathname) setActiveNav(index);
    });
  }, [sidebarItems, pathname]);

  return (
    <aside className={styles.sidebar()}>
      <SidebarPanel />
    </aside>
  );
};
