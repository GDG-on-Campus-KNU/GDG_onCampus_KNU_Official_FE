export interface IButton {
  color: string;
  backgroundColor: string;
  hoverColor: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | undefined;
  type: 'button' | 'submit' | 'reset' | undefined;
  children: React.ReactNode;
}

export interface ICButton extends IButton {
  width: string;
  height: string;
  mdWidth?: string;
  mdHeight?: string;
  mdSize?: string;
  mWidth?: string;
  mHeight?: string;
  padding: string;
  mPadding?: string;
  mSize?: string;
}
