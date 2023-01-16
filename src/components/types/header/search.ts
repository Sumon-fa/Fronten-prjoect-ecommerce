export interface SearchProps {
  onHide: () => void;
  setSearchToogle: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface BackProps {
  onHide: () => void;
}
export interface SearchModalProps {
  onHide: () => void;
  children: React.ReactNode;
}
