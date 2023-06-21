import * as React from "react";
import { SVGProps } from "react";

const WalletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#FFC529">
      <path d="M7.348 2.733c0-.969.788-1.758 1.757-1.758h.609L9.53.465a.703.703 0 0 0-.902-.422L2.481 2.28a.703.703 0 0 0-.42.903l.325.886h4.962V2.733Z" />
      <path d="M9.105 2.03a.703.703 0 0 0-.703.703V4.07h6.153V2.733a.703.703 0 0 0-.703-.703H9.105ZM16.418 14.212h-2.461a2.64 2.64 0 0 1-2.637-2.637 2.64 2.64 0 0 1 2.637-2.637h2.461V6.53c0-.777-.63-1.406-1.406-1.406H1.406C.63 5.124 0 5.754 0 6.53v10.064C0 17.37.63 18 1.406 18h13.606c.776 0 1.406-.63 1.406-1.406v-2.382Z" />
      <path d="M17.473 9.993h-3.516c-.872 0-1.582.71-1.582 1.582 0 .872.71 1.582 1.582 1.582h3.516c.29 0 .527-.237.527-.527v-2.11a.528.528 0 0 0-.527-.527Zm-3.516 2.11a.527.527 0 1 1 0-1.055.527.527 0 0 1 0 1.054Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default WalletIcon;
