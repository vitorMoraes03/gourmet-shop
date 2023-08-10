import { useContent } from '../../../messages/useContent';
import BlogComponent from '@/components/blog';

export interface BlogInterface {
  header: {
    title: string;
    subtitle: string;
  };
}

function Blog() {
  const { blog } = useContent();

  return <BlogComponent content={blog} />;
}

export default Blog;
