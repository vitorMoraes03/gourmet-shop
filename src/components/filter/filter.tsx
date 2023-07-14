import ListItem from './listItem';

export interface FilterProps {
  category: {
    title: string;
    options: {
      label: string;
      value: string;
    }[];
  };
  country: {
    title: string;
    options: {
      label: string;
      value: string;
    }[];
  };
}

function Filter({ content }: { content: FilterProps }) {
  return (
    <div className="text-base">
      {Object.keys(content).map((key, index) => {
        const validKey = key as keyof FilterProps;
        const length = Object.keys(content).length;
        return (
          <div
            key={`filter-${index}`}
            className="mb-5 tracking-tight"
          >
            <h3 className="font-semibold">
              {content[validKey].title}
            </h3>
            <ul
              className={`w-fit border-b border-gray pb-4 sm:border-none sm:pb-0 ${
                index === length - 1 && 'border-b-0'
              }`}
            >
              {content[validKey].options.map(
                (item, index) => {
                  return (
                    <ListItem
                      item={item}
                      category={validKey}
                      key={`${validKey}-${index}`}
                    />
                  );
                }
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Filter;
