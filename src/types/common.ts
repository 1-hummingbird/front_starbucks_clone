export interface Nav {
  id: number;
  url?: string;
  label?: string;
  component?: () => JSX.Element;
}
