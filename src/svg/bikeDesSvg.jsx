export function bikeDesSvg(width) {
  const svg = {
    bike: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M289.053 71.09v48c3.275-1.64 6.196-3.276 8.8-4.913c1.292 3.432 2.803 7.44 4.485 11.81a830.474 830.474 0 0 0 4.365 11.106c.077-.028.134-.05.21-.076c5.91-2.124 11.554-4.132 16.76-5.97a800.14 800.14 0 0 1-4.536-11.527c-3.76-9.768-7.19-19.033-7.25-19.193c4.254-9.746-3.342-19.492-22.834-29.238zm48.1 74.31c-.478.164-.704.234-1.21.41c-6.24 2.166-14.595 5.144-22.94 8.144c-12.248 4.404-18.836 6.817-24.478 8.875l3.116 7.415l23.872-1.36l2.888 3.956s2.826 3.867 5.8 7.813c.576.763 1.056 1.364 1.62 2.102l17.43-11.207c-.847-3.666-1.662-7.195-3.352-14.445c-.987-4.236-1.906-8.147-2.746-11.704zm18.947 41.876l-21.477 13.217c10.812 18.74 17.32 44.9 19.55 70.266c1.29 14.664 1.04 28.976-1.314 41.45c-2.354 12.474-6.606 23.566-15.56 30.59c-11.608 9.103-26.544 10.157-39.794 9.012c-13.25-1.146-25.115-4.668-32.416-7.838l-.404-.176l-.385-.215c-13.903-7.73-21.992-19.64-23.84-32.703c-1.476-10.424.446-21.186 3.972-32.35c-17.137-6.45-32.922-11.605-47.455-15.633c9.577 15.4 13.588 30.462 12.388 44.577c-1.278 15.037-8.492 28.213-19.394 38.742l19.655 30.812c11.346.78 70.357 4.55 99.31-.193c18.44-3.02 36.853-6.05 48.288-15.71c27.358-23.12 37.953-65.914 54.562-102.366c-10.913-25.742-33.193-48.06-55.685-71.484zm-243.99 29.768c-14.488-.025-28.696 1.55-42.542 6.166l-.05.016l-.05.017c.807-.26-.4.233-1.304 2.133c-.903 1.9-1.474 4.718-1.268 7.09c.207 2.372.967 4.117 2.362 5.433c1.13 1.066 2.948 2.15 6.412 2.59c12.274-4.322 26.653-6.956 43.39-7.294c34.893-.704 80.16 8.193 139.977 31.565l4.494 1.757c2.697-1.175 5.505-2.836 8.267-5.172c.492-8.402-2.215-21.206-7.424-30.477c-2.882-5.13-6.388-9.08-9.4-11.02c-3.013-1.938-4.913-2.304-7.946-1.245l-.093.033l-.094.03c-29.847 9.69-60.57 5.377-90.504 1.81c-14.967-1.784-29.735-3.407-44.225-3.432zm350.247 20.898l-25.316 8.86l22.327 17.03c8.538-1.48 11.162-5.398 11.65-10.106c.477-4.594-2.13-10.88-8.66-15.784zm-337.185 13.233a171.52 171.52 0 0 0-5.75.017c-31.49.636-51.13 9.713-64.41 21.873c-22.254 20.378-26.62 49.78-29.565 69.498l141.213-.628l-.113-.18c15.02-9.44 23.675-21.596 24.883-35.805c1.153-13.562-4.553-30.352-22.086-49.662c-16.665-3.32-31.352-4.937-44.172-5.113zm304.154 12.373c-9.262 19.81-16.53 44.263-27.717 67.006c7.087-3.09 14.557-5.947 22.156-8.645c20.93-7.43 42.144-12.868 58.236-15.827c-.866-1.83-2-3.91-3.832-6.28c-4.864-6.297-12.513-13.565-21.004-19.988c-8.49-6.423-17.872-12.06-26.008-15.53c-.62-.264-1.23-.506-1.832-.737zm24.444 67.71c-7.872 2.233-16.023 4.788-23.983 7.614c-21.857 7.76-42.454 18.317-51.5 26.928l-.48.52A56.55 56.55 0 0 0 375 383.91c0 31.375 25.626 57 57 57s57-25.625 57-57c0-23.67-14.592-44.064-35.23-52.653zM432 344.91c6.054 0 11.772 1.36 16.87 3.79c-2.832 4.102-5.784 8.515-9.147 11.455a24.587 24.587 0 0 0-15.446.001c-3.363-2.94-6.315-7.353-9.146-11.455c5.098-2.43 10.816-3.79 16.87-3.79zm-28.09 11.88c3.022 3.955 6.308 8.122 8.076 12.227c-3.123 4.17-4.983 9.327-4.986 14.88c-3.858 2.24-8.938 3.66-13.668 5.075a39.83 39.83 0 0 1-.332-5.06c0-10.576 4.15-20.12 10.91-27.122zm56.18 0c6.76 7.003 10.91 16.546 10.91 27.12c0 1.718-.12 3.405-.332 5.062c-4.73-1.414-9.81-2.836-13.668-5.075c-.003-5.553-1.863-10.71-4.986-14.88c1.768-4.105 5.054-8.272 8.076-12.227zm-282.75 3.098l-120.13.535a26.523 26.523 0 0 0 1.938 2.213c4.273 4.342 10.76 8.062 22.282 10.26c28.497.083 57.83-1.004 83.244-3.672a374.562 374.562 0 0 0 17.213-2.207l-4.547-7.13zm-140.78.627l-8.636.037A56.427 56.427 0 0 0 23 383.646c0 31.373 25.626 57 57 57c29.4 0 53.754-22.504 56.7-51.153c-18.35 1.05-37.503 1.48-56.282 1.41l-.795-.002l-.783-.14c-9.573-1.745-17.434-4.687-23.778-8.595c-.03.487-.062.973-.062 1.467c-3.858 2.238-8.938 3.66-13.668 5.074a39.817 39.817 0 0 1-.332-5.06c0-4.284.69-8.394 1.95-12.24c-2.703-3.464-4.755-7.154-6.39-10.89zM432 376.91c3.973 0 7 3.03 7 7c0 3.974-3.027 7-7 7s-7-3.026-7-7c0-3.97 3.027-7 7-7zM59.568 397.957c3.14 4.448 7.68 7.85 12.96 9.53c.894 4.375.662 9.634.548 14.542a38.808 38.808 0 0 1-27.58-20.12c4.663-1.636 9.62-3.478 14.072-3.952zm40.864 0c4.453.474 9.41 2.316 14.072 3.953a38.81 38.81 0 0 1-27.58 20.118c-.114-4.908-.346-10.167.55-14.543c5.277-1.678 9.82-5.08 12.958-9.53zm311.136.266c3.14 4.448 7.68 7.85 12.96 9.53c.894 4.375.662 9.633.548 14.542a38.813 38.813 0 0 1-27.58-20.12c4.663-1.636 9.62-3.478 14.072-3.952zm40.864 0c4.453.474 9.41 2.316 14.072 3.953a38.816 38.816 0 0 1-27.58 20.12c-.114-4.91-.346-10.168.55-14.544c5.277-1.677 9.82-5.08 12.958-9.528z"
        />
      </svg>
    ),
    gas: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M200 24h-76.69A15.86 15.86 0 0 0 112 28.69L101.66 39L91.31 28.69a16 16 0 0 0-22.62 0l-24 24a16 16 0 0 0 0 22.62L55 85.66L44.69 96A15.86 15.86 0 0 0 40 107.31V216a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16ZM56 64l24-24l10.34 10.34l-24 24Zm124.8 121.6a8 8 0 1 1-9.6 12.8L128 166l-43.2 32.4a8 8 0 0 1-9.6-12.8l39.47-29.6l-39.47-29.6a8 8 0 0 1 9.6-12.8L128 146l43.2-32.4a8 8 0 0 1 9.6 12.8L141.33 156ZM176 72h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16Z"
        />
      </svg>
    ),
    weight: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M256 46c-45.074 0-82 36.926-82 82c0 25.812 12.123 48.936 30.938 64H128L32 480h448l-96-288h-76.938C325.877 176.936 338 153.812 338 128c0-45.074-36.926-82-82-82zm0 36c25.618 0 46 20.382 46 46s-20.382 46-46 46s-46-20.382-46-46s20.382-46 46-46zm-82.215 202.95h23.5v33.263l33.873-33.264h27.283l-43.883 43.15l48.4 47.974H233.54l-36.255-35.888v35.888h-23.5V284.95zm119.934 21.24c4.76 0 8.952.934 12.573 2.806c3.62 1.872 6.938 4.82 9.95 8.85v-10.13h21.972v61.462c0 10.986-3.48 19.368-10.438 25.146c-6.917 5.82-16.968 8.727-30.152 8.727c-4.272 0-8.4-.325-12.39-.976a77.367 77.367 0 0 1-12.024-2.99v-17.03c3.826 2.198 7.57 3.826 11.23 4.884c3.664 1.098 7.347 1.648 11.05 1.648c7.162 0 12.41-1.566 15.746-4.7c3.337-3.132 5.006-8.035 5.006-14.708v-4.7c-3.01 3.986-6.328 6.916-9.95 8.788c-3.62 1.87-7.813 2.808-12.573 2.808c-8.343 0-15.238-3.275-20.69-9.826c-5.453-6.592-8.18-14.974-8.18-25.146c0-10.214 2.727-18.576 8.18-25.086c5.452-6.55 12.347-9.827 20.69-9.827zm8.118 15.746c-4.517 0-8.038 1.67-10.56 5.005c-2.523 3.338-3.784 8.058-3.784 14.162c0 6.266 1.22 11.026 3.662 14.28c2.442 3.215 6.003 4.823 10.682 4.823c4.557 0 8.096-1.67 10.62-5.006c2.522-3.337 3.784-8.036 3.784-14.098c0-6.104-1.262-10.824-3.785-14.16c-2.523-3.337-6.062-5.006-10.62-5.006z"
        />
      </svg>
    ),
    star: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="gold"
          d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"
        />
      </svg>
    ),
  };

  return svg;
}
