import { QuoteProps } from '../../../../messages/useContent';

function Quote({ content }: { content: QuoteProps }) {
  return (
    <div
      className="my-8 flex w-full flex-wrap items-center
      justify-between gap-3 bg-gray 
      px-8 py-6 font-title tracking-tight
      md:mb-14 md:h-52 md:px-28 md:py-12"
    >
      <h1 className="w-2/3 text-2xl md:w-1/4 md:text-4xl">
        <span className="italic">{content.span} </span>
        {content.title}
      </h1>
      <p className="md:w-3/5 md:text-2xl">{content.text}</p>
    </div>
  );
}

export default Quote;
