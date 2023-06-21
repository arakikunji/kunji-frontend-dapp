import * as React from "react";
import { SVGProps } from "react";

const SmoothArrow2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M60.875 2c-20.78 35.835-19.205 53.905 0 92"
      stroke="url(#a)"
      strokeOpacity={0.7}
      strokeWidth={1.249}
      strokeDasharray="1.87 1.87"
    />
    <path
      d="M60.875 2c-20.78 35.835-19.205 53.905 0 92"
      stroke="url(#b)"
      strokeOpacity={0.7}
      strokeWidth={1.249}
      strokeDasharray="1.87 1.87"
    />
    <g filter="url(#c)">
      <rect
        x={54.125}
        y={37}
        width={16.528}
        height={16.125}
        rx={8.062}
        transform="rotate(90 54.125 37)"
        fill="url(#d)"
        fillOpacity={0.1}
        shapeRendering="crispEdges"
      />
      <path
        d="m48.129 44.438-2.066 2.066-2.066-2.066"
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
        gradientTransform="matrix(-26.50438 28.08253 -115.6401 -109.1415 60.875 55.58)"
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
        gradientTransform="rotate(-166.8 33.736 36.131) scale(21.1256 125.373)"
      >
        <stop stopColor="#F2F3F4" />
        <stop offset={1} stopColor="#545454" stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id="d"
        x1={63.488}
        y1={42.086}
        x2={83.997}
        y2={42.366}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_620" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_12_620"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SmoothArrow2;
