import { FunctionComponent } from 'react';
import { SidebarPanelHeaderProps } from '../utils/props';

export const SidebarPanelHeader: FunctionComponent<SidebarPanelHeaderProps> = ({ header, icon }) => {
  return (
    <header className="sticky h-24 p-3 shrink-0 w-full flex justify-center items-center gap-0">
      {icon}
      {header ? <span className="text-lg font-medium">{header}</span> : null}
    </header>
  );
};
