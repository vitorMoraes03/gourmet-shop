function CloseIcon({ styles }: { styles?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`ionicon ${styles}`}
      viewBox="0 0 512 512"
      width={20}
      height={20}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  );
}

export default CloseIcon;
