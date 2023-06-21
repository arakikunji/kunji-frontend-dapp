import * as React from "react";
import { SVGProps } from "react";

const CopyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.3 6.45V.6H4.75A1.95 1.95 0 0 0 2.8 2.55v14.3a1.95 1.95 0 0 0 1.95 1.95h10.4a1.95 1.95 0 0 0 1.95-1.95V8.4h-5.85A1.95 1.95 0 0 1 9.3 6.45Zm1.3 0V.925L16.773 7.1H11.25a.65.65 0 0 1-.65-.65ZM.2 4.5a1.3 1.3 0 0 1 1.3-1.3v13.65a3.25 3.25 0 0 0 3.25 3.25h9.75a1.3 1.3 0 0 1-1.3 1.3H4.811a4.612 4.612 0 0 1-4.613-4.612V4.5Z"
      fill="#9C9C9C"
    />
  </svg>
);

export default CopyIcon;
