import { StyledHeader, StyledHeaderTitle } from "./styles";
import background from "../../assets/img/optimized-pattern-bg.png";
import SearchForm from "../../components/SearchForm";
import InfoCard from "../../components/InfoCard";
import IHeaderProps from "./types";
import { HEADER_TITLE } from "../../constants/app";

export default function Header({ IPData, onSearch }: IHeaderProps) {
  return (
    <StyledHeader img={background}>
      <StyledHeaderTitle>{HEADER_TITLE}</StyledHeaderTitle>
      <SearchForm onSearch={onSearch} searchError={IPData?.messages} />
      {!IPData?.messages && <InfoCard IPData={IPData} />}
    </StyledHeader>
  );
}
