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
      className={`${stylesBtn} w-full text-sm`}
      onClick={() => handleClick()}
    >
      {text}
    </button>
  );
}

export default Button;
