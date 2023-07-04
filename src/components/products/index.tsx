import Filter from './filter';
import List from './list';
import Title from './title';

function ProductsPage() {
  return (
    <section className="py-32 px-4 md:py-40 md:px-12 border ">
      <Title />
      <List />
      <Filter />
    </section>
  );
}

export default ProductsPage;
