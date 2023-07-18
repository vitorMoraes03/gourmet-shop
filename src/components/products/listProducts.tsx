import { useEffect, useState } from 'react';
import Card from './card';
import { ProductInterface } from '@/utils/useFirstFetch';

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

  const buttonStyles =
    'black-button rounded-full px-3 py-3';

  return (
    <div className="w-full py-2 sm:ml-auto sm:w-3/4">
      <ul className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3">
        {currentContent.map((product, index) => {
          if (
            index >=
              totalItems * currentPage - totalItems &&
            index < totalItems * currentPage
          ) {
            return (
              <li key={`${product.productName}-${index}`}>
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
      <div className="flex justify-center gap-2">
        {totalPages?.map((page) => {
          return (
            <button
              className={`${buttonStyles} black-button`}
              onClick={() => setCurrentPage(page)}
              key={`btnLoadMore-${page}`}
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
