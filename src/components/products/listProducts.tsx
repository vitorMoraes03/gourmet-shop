import { useEffect, useState } from 'react';
import Card from './card';
import { ProductInterface } from '.';

function ListProducts({
  fetchedContent,
}: {
  fetchedContent: ProductInterface[];
}) {
  const [currentContent, setCurrentContent] =
    useState<ProductInterface[]>(fetchedContent);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number[]>();
  const totalItems = 12;

  useEffect(() => {
    setCurrentContent(fetchedContent);
    const totalPages = Math.ceil(
      fetchedContent.length / totalItems
    );
    const pageArray = Array.from(
      { length: totalPages },
      (_, i) => i + 1
    );
    setTotalPages(pageArray);
  }, [fetchedContent]);

  return (
    <div className="w-full py-2 sm:ml-auto sm:w-3/4">
      <ul className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {currentContent.map((product, index) => {
          if (
            index >=
              totalItems * currentPage - totalItems &&
            index < totalItems * currentPage
          ) {
            return (
              <li
                key={`${product.productName}-${index}`}
                className="h-[450px] sm:h-[650px] md:h-[700px] lg:h-[750px] xl:h-[600px] 2xl:h-[500px]"
              >
                <Card
                  content={product}
                  idWhere={'listProducts'}
                />
              </li>
            );
          }
          return null;
        })}
      </ul>
      <div className="mt-8 flex justify-center gap-2">
        {totalPages?.map((page) => {
          return (
            <button
              className={`rounded-full bg-black px-2 py-1 text-xs 
              uppercase text-white hover:opacity-70 sm:px-3 sm:text-base md:text-lg  
              ${
                page === currentPage
                  ? 'cursor-default bg-gray'
                  : ''
              }`}
              onClick={() => {
                setCurrentPage(page);
              }}
              key={`btnPage-${page}`}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ListProducts;
