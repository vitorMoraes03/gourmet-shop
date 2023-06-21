import Link from 'next-intl/link';

function LangSelector() {
  return (
    <div className='font-bold flex gap-2 text-lg'>
      <Link href={'/'} locale="en" className='h-20 hover:border-b hover:border-solid hover:border-black transition ease-in-out duration-300 flex items-center px-1'>
        EN
      </Link>
      <Link href={'/'} locale="pt-BR" className='h-20 hover:border-b hover:border-solid hover:border-black transition ease-in-out duration-300 flex items-center px-1'>
        PT
      </Link>
    </div>
  );
}

export default LangSelector;
