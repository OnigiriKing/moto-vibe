

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
    };



    return svg;
}