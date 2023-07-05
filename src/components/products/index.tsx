import { ProductsProps } from '../../../messages/useContent';
import DesktopSelector from './desktopSelector';
import Filter from './filter';
import List from './list';
import MobileSelector from './mobileSelector';
import Title from './title';

// A idéia é renderizar 

function ProductsPage({ content }: { content: ProductsProps }) {
  return (
    <section className="py-32 px-4 md:py-40 md:px-12 border">
      <Title title={content.title} subtitle={content.subtitle}/>
      {/* <Filter content={content.filters}/> */}
      {/* <List contentForTest={content.products}/> */}
      {/* <MobileSelector content={content.selector}/> */}
      <DesktopSelector content={content.selector}/>
    </section>
  );
}

export default ProductsPage;
