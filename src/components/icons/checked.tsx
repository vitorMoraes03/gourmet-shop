function CheckedIcon({ styles }: { styles?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`ionicon ${styles}`}
      viewBox="0 0 512 512"
      width={12}
      height={12}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M416 128L192 384l-96-96"
      />
    </svg>
  );
}

export default CheckedIcon;
