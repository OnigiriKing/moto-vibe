export function homeSvg(width) {
  const svg = {
    check: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"
        />
        <path
          fill="none"
          d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z"
        />
      </svg>
    ),
    arrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11.273 3.687a1 1 0 1 1 1.454-1.374l8.5 9a1 1 0 0 1 0 1.374l-8.5 9.001a1 1 0 1 1-1.454-1.373L19.125 12l-7.852-8.313Z"
        />
      </svg>
    ),
    arrowDown: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 1024 1024"
      >
        <path
          fill="currentColor"
          d="M8.2 275.4c0-8.6 3.4-17.401 10-24.001c13.2-13.2 34.8-13.2 48 0l451.8 451.8l445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199z"
        />
      </svg>
    ),

    comment: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M8 3.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM8 0a2.5 2.5 0 0 1 2.45 2H13a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2.55A2.5 2.5 0 0 1 8 0ZM7 5h3.5V3.5h2v11h-9v-11h2V5H7Zm3.53 3.28a.75.75 0 1 0-1.06-1.06L7.5 9.19l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0l2.5-2.5Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    shape: (
      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stopColor="rgba(63, 132, 229, 0.3803921568627451)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stopColor="rgba(63, 132, 229, 0.3803921568627451)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M17,-26.1C23.2,-25.9,30.1,-23.7,32.8,-18.9C35.5,-14.2,34,-7.1,32.9,-0.7C31.7,5.8,30.9,11.6,28.5,16.8C26.1,22,22,26.5,17,29.2C12,32,6,32.9,-0.7,34.1C-7.4,35.3,-14.7,36.8,-18.4,33.2C-22,29.7,-21.8,21.1,-25.4,14.7C-29,8.4,-36.4,4.2,-38,-1C-39.7,-6.1,-35.7,-12.2,-32.1,-18.5C-28.4,-24.8,-25.1,-31.3,-19.9,-32C-14.6,-32.6,-7.3,-27.4,-0.9,-25.8C5.4,-24.2,10.9,-26.2,17,-26.1Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          style={{ transition: "all 0.3s" }} 
          strokeWidth="0"
          stroke="url(#sw-gradient)"
        ></path>
      </svg>
    ),
  };

  return svg;
}
