import BlogHeader from '@/components/blog/header';
import Post from '@/components/blog/post';
import SearchBar from '@/components/blog/search';
import SideBar from '@/components/blog/sidebar';
import { useContent } from '../../../messages/useContent';

function Blog() {
  const { blog } = useContent();

  return (
    <div className="py-32 md:py-40">
      <BlogHeader content={blog} />
      <div className='px-6 mt-16 grid grid-cols-5'>
        <div className='px-4 pt-8'>
          <SearchBar />
          <SideBar />
        </div>
        <div className='col-span-4'>
          <Post />
        </div>
      </div>
    </div>
  );
}

export default Blog;
