import { ProductsProps } from '../../../messages/useContent';
import Filter from './filter';
import List from './list';
import Title from './title';

function ProductsPage({ content }: { content: ProductsProps }) {
  return (
    <section className="py-32 px-4 md:py-40 md:px-12 border">
      <Title title={content.title} subtitle={content.subtitle}/>
      <List contentForTest={content.products}/>
      <Filter />
    </section>
  );
}

export default ProductsPage;