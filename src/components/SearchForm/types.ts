export default interface ISearchInputProps {
  onSearch: (IP: string) => void;
  searchError: string | undefined;
}
