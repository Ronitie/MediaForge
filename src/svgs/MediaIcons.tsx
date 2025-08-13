type IconProps = {
  size?: number;
  color?: string;
};

export function ImageIcon({ size = 32, color = "#fff" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <g
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
        <circle cx="9" cy="9" r="2"></circle>
        <path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
      </g>
    </svg>
  );
}

export function ImageSolidIcon({
  size = 56,
  color = "rgb(200, 200, 200)",
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path
        fill={color}
        d="m21 7l-5-5H3.993A.993.993 0 0 0 3 2.992v18.016a1 1 0 0 0 .993.992h16.014a.993.993 0 0 0 .993-.992zM11 9.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6.5 7.5H8l5.5-7z"
      ></path>
    </svg>
  );
}

export function CompressIcon({ size = 32, color = "#fff" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1536 1536"
      width={size}
      height={size}
    >
      <path
        fill={color}
        d="M768 832v448q0 26-19 45t-45 19t-45-19l-144-144l-332 332q-10 10-23 10t-23-10L23 1399q-10-10-10-23t10-23l332-332l-144-144q-19-19-19-45t19-45t45-19h448q26 0 45 19t19 45m755-672q0 13-10 23l-332 332l144 144q19 19 19 45t-19 45t-45 19H832q-26 0-45-19t-19-45V256q0-26 19-45t45-19t45 19l144 144l332-332q10-10 23-10t23 10l114 114q10 10 10 23"
      ></path>
    </svg>
  );
}

export function PdfIcon({ size = 36, color = "#fff" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <g
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          strokeWidth="1.5"
          d="M7.792 21.25h8.416a3.5 3.5 0 0 0 3.5-3.5v-5.53a3.5 3.5 0 0 0-1.024-2.475l-5.969-5.97A3.5 3.5 0 0 0 10.24 2.75H7.792a3.5 3.5 0 0 0-3.5 3.5v11.5a3.5 3.5 0 0 0 3.5 3.5"
        ></path>
        <path
          strokeWidth="1.5"
          d="M11.688 3.11v5.66a2 2 0 0 0 2 2h5.662"
        ></path>
        <path d="M7.25 16.5v-1m0 0v-2h1a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1zm4 1v-3h.5a1.5 1.5 0 0 1 0 3zm4 0v-1.25m1.5-1.75h-1.5v1.75m0 0h1.5"></path>
      </g>
    </svg>
  );
}
