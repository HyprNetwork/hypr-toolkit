import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.5825 15.9739C17.3513 16.9966 16.7271 17.2447 15.8563 16.7634L11.0784 13.3269L8.77418 15.4926C8.51988 15.7408 8.3041 15.9513 7.8109 15.9513L8.14997 11.2063L17.0045 3.40084C17.3898 3.06997 16.9197 2.88198 16.4111 3.21285L5.46818 9.93551L0.751924 8.49924C-0.273014 8.18341 -0.296133 7.49911 0.9677 7.01784L19.3935 0.0846307C20.2489 -0.216159 20.9964 0.287664 20.719 1.55098L17.5825 15.9739Z" fill="black" fillOpacity="0.4"/>
    </Svg>
  );
};

export default Icon;
