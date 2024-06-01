export interface IButton {
  color: string;
  backgroundColor: string;
  hoverColor: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | undefined;
  type: 'button' | 'submit' | 'reset' | undefined;
  children: React.ReactNode;
}
