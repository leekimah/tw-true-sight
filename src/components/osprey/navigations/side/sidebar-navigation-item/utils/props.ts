import React, { LiHTMLAttributes } from 'react';

export type SidebarNavigationItemProps = Pick<LiHTMLAttributes<HTMLAnchorElement>, 'children'> & {
  path: string;
  selected: boolean;
  tooltip: string;
  header?: string;
  onSelect: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};
