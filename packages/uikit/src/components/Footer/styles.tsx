import styled from "styled-components";
import { darkColors, lightColors } from "../../theme/colors";
import { Box, Flex } from "../Box";
import SocialLinks from "./Components/SocialLinks";
import PrivacyLinks from "./Components/PrivacyLinks";
import FooterMenuLinks from "./Components/FooterMenuLinks";

export const StyledFooter = styled(Flex)`
  background: ${darkColors.backgroundAlt};
  /* background: lightcoral; */
  padding-bottom: 0;
  padding-top: 0;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0px;
  }
`;

export const StyledListItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: capitalize;

  &:first-child {
    color: ${darkColors.secondary};
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const StyledIconMobileContainer = styled(Box)`
  margin-bottom: 24px;
`;

export const StyledToolsContainer = styled(Flex)`
  border-top: 1px solid ${lightColors.cardBorder};
  padding: 42px 0;
`;

export const StyledSocialLinks = styled(SocialLinks)`
  border-bottom: 1px solid ${darkColors.cardBorder};
`;

export const StyledPrivacyLinks = styled(PrivacyLinks)`
  border-bottom: 1px solid ${darkColors.cardBorder};
`;
export const StyledFooterMenuLinks = styled(FooterMenuLinks)`
  border: none;
  padding: 0;
  margin: ${({ theme }) => (theme.devicesQueries.mobile ? "30px" : 0)};
`;

export const StyledText = styled.span`
  color: ${darkColors.text};
`;
