function SingleTag({
  title,
  text,
}: {
  title: string;
  text: string | string[];
}) {
  return (
    <div className="grid w-full grid-cols-3 py-4 font-subtitle">
      <h4 className="text-xs sm:text-[10px] md:text-xs font-semibold uppercase tracking-wide">
        {title}
      </h4>
      <p className="col-span-2 text-sm sm:text-xs md:text-sm leading-4 tracking-tighter">
        {dealWithText(text)}
      </p>
    </div>
  );
}

function dealWithText(text: string | string[]) {
  if (typeof text === 'string') {
    return text;
  } else {
    return text.map((word, index) => {
      return (
        <span key={index}>
          {word}
          {index === text.length - 1 ? (
            ''
          ) : (
            <span> &#x2022; </span>
          )}
        </span>
      );
    });
  }
}

export default SingleTag;
