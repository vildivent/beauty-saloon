import PriceList from "./PriceList";
import { price1 } from "../../assets";

const PriceCard = ({
  pictureAlignLeft,
  startElement,
  numberOfElements,
  className,
}) => (
  <>
    {pictureAlignLeft ? (
      <div
        className={`grid grid-col-2 grid-flow-col gap-[134px] lg:w-[67.5%] w-[85%] mx-auto ${className}`}
      >
        <img src={price1} alt='price-img' className='' />
        <PriceList
          startElement={startElement}
          numberOfElements={numberOfElements}
        />
      </div>
    ) : (
      <div className='flex justify-between lg:w-[67.5%] w-[85%] mx-auto'>
        <PriceList
          startElement={startElement}
          numberOfElements={numberOfElements}
        />
        <img src={price1} alt='price-img' className='ml-[134px]' />
      </div>
    )}
  </>
);

export default PriceCard;
