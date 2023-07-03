import Filter from './filter';
import List from './list';
import Title from './title';

function ProductsPage() {
  return (
    <section className="pt-24 md:pt-32">
      <Title />
      <List />
      <Filter />
    </section>
  );
}

export default ProductsPage;
