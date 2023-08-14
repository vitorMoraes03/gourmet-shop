import { BlogProps } from '../../../messages/useContent';

function BlogHeader({ content }: { content: BlogProps }) {
  return (
    <div className="bg-black px-4 py-8 text-center text-white">
      <div>
        <h1 className="font-subtitle text-4xl uppercase tracking-wide">
          {content.header.title}
        </h1>
        <h3 className="mt-1 font-title text-sm italic">
          {content.header.subtitle}
        </h3>
      </div>
    </div>
  );
}

export default BlogHeader;
