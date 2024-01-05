import React from "react";
import { useMatchBreakpoints } from "../../..";
import { FlexProps } from "../../Box";
import Flex from "../../Box/Flex";
import Link from "../../Link/Link";
import { privacyLinks } from "../config";

export type LinksProps = FlexProps & { links: [{ label: string; href?: string }] };

const PrivacyLinks: React.FC<FlexProps> = ({ ...props }) => {
  const { isMobile } = useMatchBreakpoints();
  return (
    <Flex {...props}>
      {privacyLinks.map((privacyLinkItem, index) => {
        const mr = index < privacyLinks.length - 1 ? "24px" : 0;
        const mb = index < privacyLinks.length - 1 ? "20px" : 0;
        if (privacyLinkItem.href) {
          return (
            <Flex key={privacyLinkItem.label} color="#9590A3">
              <Link
                external
                color="#9590A3"
                fontWeight="normal"
                href={privacyLinkItem.href}
                aria-label={privacyLinkItem.label}
                // mr={isMobile ? "0" : mr}
                // mb={isMobile ? mb : 0}
                mr={mr}
                mb={'24px'}
              >
                {privacyLinkItem.label}
              </Link>
              {
                index < privacyLinks.length - 1 && !isMobile ? <Flex
                  // mr={isMobile ? "0" : mr}
                  // mb={isMobile ? mb : 0}
                  mr={mr}
                  mb={'24px'}
                  justifyContent="center"
                  alignItems="center"
                  style={{ color: "#9590A3" }}
                  key={privacyLinkItem.label}
                >
                  |
                </Flex> : null
              }
            </Flex>
          );
        }
        return (
          <Flex
            // mr={isMobile ? "0" : mr}
            // mb={isMobile ? mb : 0}
            mr={mr}
            mb={'24px'}
            justifyContent="center"
            alignItems="center"
            style={{ color: "#9590A3" }}
            key={privacyLinkItem.label}
          >
            {privacyLinkItem.label}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default React.memo(PrivacyLinks, () => true);
