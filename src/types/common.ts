export interface Nav {
  id: number;
  url?: string;
  label?: string;
  isActive?: boolean;
  component?: () => JSX.Element;
}
