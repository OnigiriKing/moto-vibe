

export function requestSvg(width) {
    const svg = {
      calendar: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={width}
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M480 128a64 64 0 0 0-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4ZM32 416a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3H35a3 3 0 0 0-3 3Zm344-208a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24Z"
          />
        </svg>
      ),
      location: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={width}
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"
          />
        </svg>
      ),
      bike: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={width}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8.365 10L11.2 8h3.492L13.6 5H11V3h4l1.092 3H20v3h-2.816l1.456 4.002a4.5 4.5 0 1 1-1.985.392L15.419 10h-.947l-1.582 5.87l-2.925 1.069A4.5 4.5 0 1 1 4 13.256V12H2v-2h6.365ZM5.5 20a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm13 0a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Z"
          />
        </svg>
      ),
      garage: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={width}
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            d="M7.21.093a.5.5 0 0 1 .58 0l7 5A.5.5 0 0 1 15 5.5v9a.5.5 0 0 1-.5.5H13V7H2v8H.5a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .21-.407l7-5Z"
          />
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M3 15h9v-4H3v4Zm6-2H6v-1h3v1Z"
            clip-rule="evenodd"
          />
          <path fill="currentColor" d="M12 10V8H3v2h9Z" />
        </svg>
      ),
      office: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={width}
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M14 15V4h-3V1H2v14H0v1h7v-3h2v3h7v-1h-2zm-8-4H4V9h2v2zm0-3H4V6h2v2zm0-3H4V3h2v2zm3 6H7V9h2v2zm0-3H7V6h2v2zm0-3H7V3h2v2zm4 6h-2V9h2v2zm0-3h-2V6h2v2z"
          />
        </svg>
      ),

      message: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={width}
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M3 7h3m-3 4h2m4.02-2.199l-.6 6A2 2 0 0 0 10.41 17h7.98a2 2 0 0 0 1.99-1.801l.6-6A2 2 0 0 0 18.99 7h-7.98a2 2 0 0 0-1.99 1.801z" />
            <path d="m9.8 7.5l2.982 3.28a3 3 0 0 0 4.238.202L20.3 8" />
          </g>
        </svg>
      ),
    };



    return svg;
}