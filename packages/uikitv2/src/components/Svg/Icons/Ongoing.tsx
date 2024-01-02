import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 22 22" fill="none" {...props}>
      <path d="M9 21C13.1174 21 16.4999 17.7371 16.4999 13.5491C16.4999 12.5209 16.4477 11.4188 15.8778 9.7058C15.3079 7.9929 15.1931 7.7718 14.5905 6.71395C14.333 8.8727 12.9555 9.7724 12.6055 10.0413C12.6055 9.76155 11.7722 6.66795 10.5088 4.81695C9.2685 3 7.5817 1.80796 6.59265 1C6.59265 2.53489 6.16095 4.81695 5.5427 5.9797C4.92445 7.14245 4.80835 7.1848 4.0361 8.0501C3.2639 8.9154 2.90945 9.18265 2.2637 10.2325C1.61798 11.2825 1.5 12.6809 1.5 13.7091C1.5 17.8971 4.88265 21 9 21Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
    </Svg>
  );
};

export default Icon;
