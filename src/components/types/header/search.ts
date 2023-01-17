export interface SearchProps {
  onToogleSearch: () => void;
  setSearchToogle: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface BackProps {
  onToogleSearch: () => void;
}
export interface SearchModalProps {
  onToogleSearch: () => void;
  children: React.ReactNode;
}
