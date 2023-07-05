'use client';

import { ProductsProps } from '../../../messages/useContent';
import DesktopSelector from './desktopSelector';
import Filter from './filter';
import List from './list';
import MobileSelector from './mobileSelector';
import Title from './title';
import useScreenSmallerThen from '@/utils/useScreenSize';

function ProductsPage({
  content,
}: {
  content: ProductsProps;
}) {
  const isScreenSmallerThen = useScreenSmallerThen({
    width: 640,
  });

  return (
    <section className="px-4 py-32 md:px-12 md:py-40">
      <Title
        title={content.title}
        subtitle={content.subtitle}
      />

      {isScreenSmallerThen ? (
        <MobileSelector
          content={content.selector}
          filterContent={content.filters}
        />
      ) : (
        <DesktopSelector content={content.selector} />
      )}
      <div className="mt-2 sm:mt-4 sm:flex">
        {!isScreenSmallerThen && (
          <Filter content={content.filters} />
        )}
        <List contentForTest={content.products} />
      </div>
    </section>
  );
}

export default ProductsPage;
