export interface ButtonProps {
  children: React.ReactNode;
  type: 'submit' | 'button';
  handlesignIn?: () => void;
}
