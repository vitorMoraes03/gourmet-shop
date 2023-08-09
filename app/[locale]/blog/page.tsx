import BlogHeader from '@/components/blog/header';
import { useContent } from '../../../messages/useContent';

function Blog() {
  const { blog } = useContent();

  return (
    <div className="py-32 md:py-40">
      <BlogHeader content={blog} />
    </div>
  );
}

export default Blog;
