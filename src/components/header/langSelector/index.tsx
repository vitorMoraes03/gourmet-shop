import Link from 'next-intl/link';

function LangSelector() {
  return (
    <div className='font-bold flex gap-2 text-lg'>
      <Link href={'/'} locale="en" className='custom-border'>
        EN
      </Link>
      <Link href={'/'} locale="pt-BR" className='custom-border'>
        PT
      </Link>
    </div>
  );
}

export default LangSelector;
