function ArrorDownIcon({
  stylesProp,
}: {
  stylesProp?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${stylesProp} ionicon`}
      viewBox="0 0 512 512"
      width={10}
      height={10}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M112 184l144 144 144-144"
      />
    </svg>
  );
}

export default ArrorDownIcon;
