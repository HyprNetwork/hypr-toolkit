import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12.0041 6L12.0035 12.0044L16.2432 16.2441" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>

  );
};

export default Icon;
