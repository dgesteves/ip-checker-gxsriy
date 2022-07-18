import { FormEvent, useState } from "react";
import { SEARCH_PLACEHOLDER } from "../../constants/app";
import {
  StyledButton,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
} from "./styles";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import ISearchInputProps from "./types";

export default function SearchForm({
  onSearch,
  searchError,
}: ISearchInputProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <>
      <StyledForm onSubmit={onSubmit} data-testid="search-form">
        <StyledInput
          type="text"
          placeholder={SEARCH_PLACEHOLDER}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <StyledButton type="submit">
          <ArrowIcon />
        </StyledButton>
      </StyledForm>
      {searchError && <StyledErrorMessage>{searchError}</StyledErrorMessage>}
    </>
  );
}
