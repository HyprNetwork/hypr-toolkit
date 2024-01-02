import styled from "styled-components";
import { variant as StyledSystemVariant } from "styled-system";
import { ImageProps, Variant, variants } from "./types";
import TokenImage from "./TokenImage";

interface StyledImageProps extends ImageProps {
  variant: Variant;
}

export const StyledPrimaryImage = styled(TokenImage)<StyledImageProps>`
  position: absolute;
  background: #fff;
  overflow: hidden;
  border-radius: 100%;
  
  ${({ theme }) => theme.devicesQueries.mobile} {
    width: 24px;
  }

  .noMobile{
    ${({ theme }) => theme.devicesQueries.mobile} {
      width: ${({ width }) => width}
    }
  }

  ${StyledSystemVariant({
    variants: {
      [variants.DEFAULT]: {
        bottom: "auto",
        left: 0,
        right: "auto",
        top: 0,
        zIndex: 5,
      },
      [variants.INVERTED]: {
        bottom: 0,
        left: "auto",
        right: 0,
        top: "auto",
        zIndex: 6,
      },
    },
  })}
`;

export const StyledSecondaryImage = styled(TokenImage)<StyledImageProps>`
  position: absolute;
  background: #fff;
  overflow: hidden;
  border-radius: 100%;

  ${({ theme }) => theme.devicesQueries.mobile} {
    width: 20px;
  }

  .noMobile{
    ${({ theme }) => theme.devicesQueries.mobile} {
      width: ${({ width }) => width}
    }
  }

  ${StyledSystemVariant({
    variants: {
      [variants.DEFAULT]: {
        bottom: 0,
        left: "auto",
        right: 0,
        top: "auto",
        zIndex: 6,
      },
      [variants.INVERTED]: {
        bottom: "auto",
        left: '-5px',
        right: "auto",
        top: '-5px',
        zIndex: 5,
      },
    },
  })}
`;
