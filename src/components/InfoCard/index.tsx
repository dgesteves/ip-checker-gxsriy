import {
  StyledInfoCard,
  StyledInfoCardElement,
  StyledInfoCardElementTitle,
  StyledInfoCardElementValue,
} from "./styles";
import InfoCardProps from "./types";
import { INFO_CARD_ELEMENTS, TIME_STANDARD } from "../../constants/app";

export default function InfoCard({ IPData }: InfoCardProps) {
  if (!IPData) {
    return null;
  }

  const {
    ip,
    location: { city, country, postalCode, timezone },
    isp,
  } = IPData;

  return (
    <StyledInfoCard data-testid="info-card">
      <StyledInfoCardElement>
        <StyledInfoCardElementTitle>
          {INFO_CARD_ELEMENTS.IP}
        </StyledInfoCardElementTitle>
        <StyledInfoCardElementValue>{ip}</StyledInfoCardElementValue>
      </StyledInfoCardElement>
      <StyledInfoCardElement>
        <StyledInfoCardElementTitle>
          {INFO_CARD_ELEMENTS.LOCATION}
        </StyledInfoCardElementTitle>
        <StyledInfoCardElementValue>{`${city}, ${country} ${postalCode}`}</StyledInfoCardElementValue>
      </StyledInfoCardElement>
      <StyledInfoCardElement>
        <StyledInfoCardElementTitle>
          {INFO_CARD_ELEMENTS.TIMEZONE}
        </StyledInfoCardElementTitle>
        <StyledInfoCardElementValue>
          {TIME_STANDARD} {timezone}
        </StyledInfoCardElementValue>
      </StyledInfoCardElement>
      <StyledInfoCardElement>
        <StyledInfoCardElementTitle>
          {INFO_CARD_ELEMENTS.ISP}
        </StyledInfoCardElementTitle>
        <StyledInfoCardElementValue>{isp}</StyledInfoCardElementValue>
      </StyledInfoCardElement>
    </StyledInfoCard>
  );
}
