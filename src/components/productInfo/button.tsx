function Button({ stylesBtn, text }: { stylesBtn: string, text: string }) {
  return (
    <button className={`${stylesBtn} w-full text-sm`}>
      {text}
    </button>
  );
}

export default Button;
