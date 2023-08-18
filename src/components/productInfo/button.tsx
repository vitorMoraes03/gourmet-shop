function Button({
  stylesBtn,
  text,
  handleClick,
}: {
  stylesBtn: string;
  text: string;
  handleClick: () => void;
}) {
  return (
    <button
      className={`${stylesBtn} mb-3 mt-6 w-full text-sm lg:mb-0 lg:mt-0`}
      onClick={() => handleClick()}
    >
      {text}
    </button>
  );
}

export default Button;
