export type SidebarContextState = {
  activeNav: number;
  setActiveNav: (index: number) => void;
};

export type NavigationItem = {
  header?: string;
  tooltip: string;
  icon: JSX.Element;
  path: string;
  panelItems?: PanelItem[];
};

export type PanelItem = {
  path: string;
  label?: string;
  withIndentation?: boolean;
  icon?: JSX.Element;
};

export type SidebarItems = NavigationItem[];
