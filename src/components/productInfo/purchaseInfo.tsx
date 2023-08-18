import { ProductIndividualProps } from '../../../messages/useContent';
import HomeIcon from '../icons/home';
import PrizeIcon from '../icons/prize';
import ShieldCheckedIcon from '../icons/shieldChecked';
import TrophyIcon from '../icons/trophy';

function PurchaseInfo({
  content,
}: {
  content: ProductIndividualProps;
}) {
  const stylesIcon = 'h-4 w-4';

  return (
    <div className="mr-8 border-x border-gray px-3">
      <ul className="flex h-full flex-col justify-center">
        <ListItem
          span={content.purchaseInfo.home.span}
          text={content.purchaseInfo.home.text}
        >
          <HomeIcon styles={stylesIcon} />
        </ListItem>
        <ListItem
          span={content.purchaseInfo.quality.span}
          text={content.purchaseInfo.quality.text}
        >
          <ShieldCheckedIcon styles={stylesIcon} />
        </ListItem>
        <ListItem
          span={content.purchaseInfo.quality.span}
          text={content.purchaseInfo.quality.text}
        >
          <TrophyIcon styles={stylesIcon} />
        </ListItem>
        <ListItem
          span={content.purchaseInfo.points.span}
          text={content.purchaseInfo.points.text}
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
    <li className="sm:mb-2 md:mb-4 flex items-center gap-2">
      {children}
      <p className="text-xs text-darkerGray opacity-70">
        <span className="text-blue-500">{span}. </span>
        {text}
      </p>
    </li>
  );
}

export default PurchaseInfo;
