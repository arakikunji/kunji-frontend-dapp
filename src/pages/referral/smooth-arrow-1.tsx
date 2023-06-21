import * as React from "react";
import { SVGProps } from "react";

const SmoothArrow1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M36 8c13.853 29.992 12.803 45.116 0 77"
      stroke="url(#a)"
      strokeOpacity={0.7}
      strokeWidth={1.249}
      strokeDasharray="1.87 1.87"
    />
    <path
      d="M36 8c13.853 29.992 12.803 45.116 0 77"
      stroke="url(#b)"
      strokeOpacity={0.7}
      strokeWidth={1.249}
      strokeDasharray="1.87 1.87"
    />
    <g filter="url(#c)">
      <rect
        width={16.528}
        height={16.125}
        rx={8.062}
        transform="matrix(0 1 1 0 38 37)"
        fill="url(#d)"
        fillOpacity={0.1}
        shapeRendering="crispEdges"
      />
      <path
        d="m43.996 44.438 2.066 2.066 2.066-2.066"
        stroke="#F8F8F8"
        strokeWidth={0.826}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(17.66964 23.50375 -93.13078 70.01383 36 52.845)"
      >
        <stop stopColor="#62646A" />
        <stop offset={1} stopColor="gray" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(13.71163 -4.03745 29.20392 99.17975 37.696 72.455)"
      >
        <stop stopColor="#F2F3F4" />
        <stop offset={1} stopColor="#545454" stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id="d"
        x1={9.363}
        y1={5.086}
        x2={29.872}
        y2={5.366}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EBA691" stopOpacity={0} />
      </linearGradient>
      <filter
        id="c"
        x={0.317}
        y={0.824}
        width={91.491}
        height={91.894}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={1.507} />
        <feGaussianBlur stdDeviation={18.842} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.354167 0 0 0 0 0.346788 0 0 0 0 0.346788 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_615" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_12_615"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SmoothArrow1;
