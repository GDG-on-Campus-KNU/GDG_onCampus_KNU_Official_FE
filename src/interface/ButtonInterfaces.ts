export interface IButton {
  color: string;
  backgroundColor: string;
  hoverColor: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  children: React.ReactNode;
}
