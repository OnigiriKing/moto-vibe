export const nameLogo = (
  <>
    <h3>
      M<p>o</p>t<p>o</p>
    </h3>
    <h3>Vibe</h3>
  </>
);

export function navSvg(width) {
  const navSvg = {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
          <path
            fill="currentColor"
            d="M14 3a2 2 0 0 1 2 2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-1.51 1.94l2.43 5.666c.077.182.087.389.085.593L22 17.5a3.5 3.5 0 0 1-6.663 1.5H9.663a3.5 3.5 0 0 1-6.628-1H3a1 1 0 0 1-1-1V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 1 0 4 0V5h-2a1 1 0 1 1 0-2h2ZM6.5 16a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm12 0a1.5 1.5 0 1 0 1.5 1.5c0-.796-.701-1.5-1.5-1.5ZM8 9H4v2h4V9Zm11-2h-3v2h3V7Z"
          />
        </g>
      </svg>
    ),
    menuBtn: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 48 48"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="4"
        >
          <path stroke-linejoin="round" d="M40 28L24 40L8 28" />
          <path d="M8 10H40" />
          <path d="M8 18H40" />
        </g>
      </svg>
    ),
    closeBtn: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
        />
      </svg>
    ),
  };

  return navSvg;
}
