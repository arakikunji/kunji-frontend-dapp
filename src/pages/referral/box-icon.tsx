import * as React from "react";
import { SVGProps } from "react";

const BoxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M17.517 3.83a.563.563 0 0 0-.35-.52L9.215.042a.563.563 0 0 0-.428 0L.832 3.31a.563.563 0 0 0-.35.52v10.34c0 .228.139.433.35.52l7.954 3.268a.561.561 0 0 0 .427 0l7.955-3.268a.563.563 0 0 0 .35-.52V3.83ZM9 6.538 6.07 5.333l6.333-2.763 3.127 1.284L9 6.537ZM1.61 4.718l2.528 1.039v2.93a.563.563 0 0 0 1.126 0V6.22l3.173 1.303v9.074l-6.828-2.805V4.718ZM9 1.172l1.952.802-6.334 2.763-2.148-.883L9 1.172Zm.563 6.351 6.828-2.805v9.074l-6.828 2.805V7.523Z"
        fill="#FFC529"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default BoxIcon;
