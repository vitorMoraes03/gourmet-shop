import Link from 'next-intl/link';

function LangSelector() {
  return (
    <div className='font-bold flex gap-2 text-lg'>
      <Link href={'/'} locale="en">
        EN
      </Link>
      <Link href={'/'} locale="pt-BR">
        PT
      </Link>
    </div>
  );
}

export default LangSelector;
