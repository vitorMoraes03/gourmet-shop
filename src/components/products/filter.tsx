import CheckedIcon from '../icons/checked';
import ListItem from './listItem';

export interface FilterProps {
  sorted: {
    title: string;
    options: {
      label: string;
      value: string;
    }[];
  };
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
    <div className="text-xs">
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
                    <ListItem item={item} index={index} key={`${key}-${index}`} />
                    // <li key={`${key}-${index}`}>
                    //   <input
                    //     value={item.value}
                    //     type="checkbox"
                    //     name={item.value}
                    //     style={{ opacity: 0 }}
                    //   />
                    //   <label
                    //     className="flex items-center gap-1 font-light"
                    //     htmlFor={item.value}
                    //   >
                    //     <div className="rounded-full bg-black p-[4px] text-white">
                    //       <CheckedIcon />
                    //     </div>
                    //     {item.label}
                    //   </label>
                    // </li>
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
