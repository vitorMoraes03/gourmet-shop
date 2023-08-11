import HomeIcon from '../icons/home';
import PrizeIcon from '../icons/prize';
import ShieldCheckedIcon from '../icons/shieldChecked';
import TrophyIcon from '../icons/trophy';

// tailwind seletor li + li!!! kd????

function PurchaseInfo() {
  const stylesIcon = 'h-4 w-4';

  return (
    <div className="mr-8 border-x border-gray px-3">
      <ul className="flex h-full flex-col justify-center">
        <ListItem
          span="Entrega em casa."
          text={'Lorem ipsum dolor sit, amet consectetur.'}
        >
          <HomeIcon styles={stylesIcon} />
        </ListItem>
        <ListItem
          span="Qualidade garantida."
          text={'Amet consectetur adipisicing elit.'}
        >
          <ShieldCheckedIcon styles={stylesIcon} />
        </ListItem>
        <ListItem
          span="Pontos acumulados."
          text={'Aamet consectetur adipisicing elit.'}
        >
          <TrophyIcon styles={stylesIcon} />
        </ListItem>
        <ListItem
          span="Frete grátis."
          text={'Lorem ipsum dolor sit gg'}
        >
          <PrizeIcon styles={stylesIcon} />
        </ListItem>
      </ul>
    </div>
  );
}

function ListItem({
  children,
  span,
  text,
}: {
  children: JSX.Element;
  span: string;
  text: string;
}) {
  return (
    <li className="mb-4 flex items-center gap-2">
      {children}
      <p className="text-xs text-darkerGray opacity-70">
        <span className="text-blue-500">{span} </span>
        {text}
      </p>
    </li>
  );
}

export default PurchaseInfo;
