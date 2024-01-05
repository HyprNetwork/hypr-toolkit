import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 1L15.038 3.10762L18.7984 3.10081L19.9536 6.50424L23 8.60084L21.8312 12L23 15.3992L19.9536 17.4958L18.7984 20.8992L15.038 20.8924L12 23L8.962 20.8924L5.20163 20.8992L4.04641 17.4958L1 15.3992L2.16883 12L1 8.60084L4.04641 6.50424L5.20163 3.10081L8.962 3.10762L12 1Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 12L10.6667 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>

  );
};

export default Icon;
