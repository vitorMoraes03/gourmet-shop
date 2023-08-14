import { BlogInterface } from '../../../app/[locale]/blog/page';
import BlogHeader from './header';
import Post from './post';
import SearchBar from './search';
import SideBar from './sidebar';

function BlogComponent({
  content,
}: {
  content: BlogInterface;
}) {
  return (
    <div className="py-32 md:py-40">
      <BlogHeader content={content} />
      <div className="default-x-padding mt-16 grid grid-cols-5">
        <div className="px-4 pt-8">
          <SearchBar />
          <SideBar />
        </div>
        <div className="col-span-4">
          <Post />
        </div>
      </div>
    </div>
  );
}

export default BlogComponent;
