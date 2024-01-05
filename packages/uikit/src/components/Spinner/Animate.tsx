import React from "react";
import styled from "styled-components";
import { SpinnerProps } from "./types";

const Wrapper = styled.div`
  font-size: 0;
  display: inline-block;
  -webkit-animation: outer 6600ms linear infinite;
  animation: outer 6600ms linear infinite;
  & svg {
    -webkit-animation: inner 1320ms linear infinite;
    animation: inner 1320ms linear infinite;
  }
  & svg circle {
    fill: none;
    stroke-linecap: square;
    -webkit-animation: arc 1320ms cubic-bezier(0.8, 0, 0.4, 0.8) infinite;
    animation: arc 1320ms cubic-bezier(0.8, 0, 0.4, 0.8) infinite;
  }
  @-webkit-keyframes outer {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes outer {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes inner {
    0% {
      -webkit-transform: rotate(-100.8deg);
      transform: rotate(-100.8deg);
    }
    100% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
  }
  @keyframes inner {
    0% {
      -webkit-transform: rotate(-100.8deg);
      transform: rotate(-100.8deg);
    }
    100% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
  }
  @-webkit-keyframes arc {
    0% {
      stroke-dasharray: 1 210.48670779px;
      stroke-dashoffset: 0;
    }
    40% {
      stroke-dasharray: 151.55042961px, 210.48670779px;
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dasharray: 1 210.48670779px;
      stroke-dashoffset: -151.55042961px;
    }
  }
  @keyframes arc {
    0% {
      stroke-dasharray: 1 210.48670779px;
      stroke-dashoffset: 0;
    }
    40% {
      stroke-dasharray: 151.55042961px, 210.48670779px;
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dasharray: 1 210.48670779px;
      stroke-dashoffset: -151.55042961px;
    }
  }
`;
const Animate: React.FC<SpinnerProps> = ({ size = 75, color = "#448aff" }) => {
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height={size} width={size} viewBox="0 0 75 75">
        <circle cx="37.5" cy="37.5" r="33.5" strokeWidth="2" stroke={color} />
      </svg>
    </Wrapper>
  );
};
export default Animate;
