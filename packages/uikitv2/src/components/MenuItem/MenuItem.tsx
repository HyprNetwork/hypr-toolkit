import React from "react";
import { Link } from "react-router-dom";
import StyledMenuItem, { StyledMenuItemContainer } from "./styles";
import { MenuItemProps } from "./types";

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  href,
  isActive = false,
  variant = "default",
  statusColor,
  ...props
}) => {
  const isExternal = /https|http/.test(href || '')
  return (
    <StyledMenuItemContainer $isActive={isActive} $variant={variant}>
      {
        isExternal ? (
            <StyledMenuItem href={href} target="_blank" $isActive={isActive} $variant={variant} $statusColor={statusColor} {...props}>
              {children}
            </StyledMenuItem>
        ) : (
          href ?
            <StyledMenuItem as={Link} to={href || ''} $isActive={isActive} $variant={variant} $statusColor={statusColor} {...props}>
              {children}
            </StyledMenuItem>
          :
            <StyledMenuItem as='div' $variant={variant} $statusColor={statusColor} {...props}>
            {children}
            </StyledMenuItem>
        )
      }

    </StyledMenuItemContainer>
  );
};

export default MenuItem;
