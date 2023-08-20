import { useEffect, useState } from 'react';
import Card from './card';
import { ProductInterface } from '.';
import Link from 'next/link';

function ListProducts({
  fetchedContent,
  notFoundMsg,
}: {
  fetchedContent: ProductInterface[];
  notFoundMsg: string;
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
      {currentContent?.length > 0 ? (
        <ul className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {currentContent.map((product, index) => {
            if (
              index >=
                totalItems * currentPage - totalItems &&
              index < totalItems * currentPage
            ) {
              return (
                <Link
                  key={`${product.productName}-${index}`}
                  className="opacity-9 transition-all hover:scale-[1.01] hover:opacity-100"
                  href={
                    '/product/' +
                    product.productName.en
                      .toLowerCase()
                      .split(' ')
                      .join('-')
                  }
                >
                  <li className="h-[450px] sm:h-[650px] md:h-[700px] lg:h-[750px] xl:h-[600px] 2xl:h-[500px]">
                    <Card
                      content={product}
                      idWhere={'listProducts'}
                    />
                  </li>
                </Link>
              );
            }
            return null;
          })}
        </ul>
      ) : (
        <div className="text-center font-subtitle italic tracking-tighter opacity-80">
          {notFoundMsg}
        </div>
      )}

      <div className="mt-8 flex justify-center gap-2">
        {totalPages?.map((page) => {
          return (
            <button
              className={`rounded-full bg-black px-2 py-1 text-xs 
              uppercase text-white sm:px-3 sm:text-base md:text-lg  
              ${
                page === currentPage
                  ? 'cursor-default opacity-20'
                  : 'hover:opacity-70'
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
