import React from "react";
// import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex } from "../Box";
import { LogoTextIcon } from "../Svg";
// import { Link } from "../Link";
import {
  StyledFooter,
  StyledFooterMenuLinks,
  StyledPrivacyLinks,
  StyledSocialLinks,
  StyledToolsContainer,
} from "./styles";
import { FooterProps } from "./types";

interface SimpleFooterLink {
  label: string;
  href?: string;
}

const MenuItem: React.FC<FooterProps> = ({
  items,

  ...props
}) => {
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", "100%", "1200px;"]} style={{}}>
        {/* <StyledIconMobileContainer display={["block", null, "none"]}> */}
        {/* <LogoWithTextIcon isDark width="130px" /> */}
        {/* </StyledIconMobileContainer> */}
        <Flex
          // order={[2, null, 1]}
          flexDirection={["column", "column", "row"]}
          justifyContent={["center", "center", "space-between"]}
          alignItems={["center", "center", "flex-start"]}
          mb={["42px", "42px", "36px"]}
          mt={["42px", "42px", "36px"]}
          // style={{ borderBottom: "1px solid #E9EAEB", marginBottom: 0, alignItems: "center", height: "140px" }}
        >
          <LogoTextIcon />

          <StyledFooterMenuLinks
            // flexDirection={["column", "column", "row"]}
            links={items as SimpleFooterLink[]}
            // order={[2]}
          />
        </Flex>

        <StyledToolsContainer
          // order={[1, null, 3]}
          flexDirection={["column", "column", "row"]}
          justifyContent={["center", "center", "space-between"]}
          alignItems={["center", "center", ""]}
          // style={{ height: "80px" }}
        >
          <Flex order={[2, null, 1]} alignItems="center" mb={["24px", "24px", 0]} mt={["24px", "24px", 0]}>
            <StyledPrivacyLinks
              order={[2]}
              // flexDirection={["column", "column", "row"]}
              // justifyContent="center"
              // alignItems="center"
              // pb={["42px", "42px", "32px"]}
              // mb={["20px", "20px", "32px"]}
              style={{ border: "none", padding: 0, margin: 0 }}
            />
          </Flex>
          <Flex
            order={[1, 1, 2]}
            // mb={["24px", "24px", "0"]}
            justifyContent="center"
            alignItems="center"
            borderBottom="none"
          >
            <StyledSocialLinks order={[2]} style={{ border: "none", padding: 0, margin: 0 }} />
          </Flex>
        </StyledToolsContainer>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
