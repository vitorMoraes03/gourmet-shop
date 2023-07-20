import ListItem from '../listItem';
import { SelectorProps } from './mobileSelector';

function MobileModalSort({
  content,
  setOptions,
}: {
  content: SelectorProps;
  setOptions: (value: string) => void;
}) {
  return (
    <div className="mb-5 tracking-tight">
      <h3 className="text-xl font-semibold">
        {content.desktop}
      </h3>
      <ul
        className="pb-4 text-lg"
      >
        {content.options.map((option, index) => {
          return (
            <ListItem
              item={option}
              key={`${index}-${option.value}}`}
              category="sort"
            />
          );
        })}
      </ul>
    </div>
  );
}

export default MobileModalSort;
