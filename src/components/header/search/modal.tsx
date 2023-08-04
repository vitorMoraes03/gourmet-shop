import ArrowRightIcon from '@/components/icons/arrowright';

function SearchModal() {
  return (
    <div
      className="flex bg-white px-6 py-2 
  transition duration-500 "
    >
      <input className="border" />
      <ArrowRightIcon />
    </div>
  );
}

export default SearchModal;
