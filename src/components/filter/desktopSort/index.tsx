/* eslint-disable react-hooks/exhaustive-deps */
import ArrorDownIcon from '../../icons/arrowdown';
import { SelectorProps } from '../mobile';

function DesktopSortSelector({
  content,
  setOptions,
}: {
  content: SelectorProps;
  setOptions: (value: string) => void;
}) {
  return (
    <div className="flex items-center justify-end gap-2 text-[9px] font-bold uppercase tracking-normal md:text-xs">
      <div>
        <p>{content.desktop}</p>
      </div>
      <div className="relative">
        <select
          className="border-[0.5px] bg-transparent px-4 py-2 pr-8 uppercase"
          style={{
            appearance: 'none',
          }}
          onChange={(e) => setOptions(e.target.value)}
        >
          {content.options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-white text-[9px] hover:bg-white"
              style={{
                appearance: 'none',
              }}
            >
              {option.label}
            </option>
          ))}
        </select>
        <ArrorDownIcon
          stylesProp="absolute right-3 
        top-1/2 transform -translate-y-1/2 mt-[1px]"
        />
      </div>
    </div>
  );
}

export default DesktopSortSelector;
