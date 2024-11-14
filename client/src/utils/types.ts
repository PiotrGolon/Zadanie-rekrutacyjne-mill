export interface NavigationDrawerProps {
  open: boolean;
  onClose: () => void;
  drawerWidth?: number;
}

export interface DrawerContentProps {
  onClose: () => void;
}

export interface NavigationButtonProps {
  path: string;
  to: string;
}

export interface NavbarProps {
  onMenuClick: () => void;
}

export interface BalanceErrorStateProps {
  message: string;
}

export interface FilterProviderProps {
  children: React.ReactNode;
}

export interface FilterContextProps {
  filter: string;
  setFilter: (filter: string) => void;
}
