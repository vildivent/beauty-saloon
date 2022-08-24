import { pricesData } from "../../constants";
import style from "../../style";

const PriceList = ({ startElement, numberOfElements }) => {
  const pricesDataSample = pricesData.slice(
    startElement,
    startElement + numberOfElements
  );

  return (
    <ul className='w-full'>
      {pricesDataSample.map((priceItem, index) => (
        <li
          key={`pricePos${priceItem.id}`}
          className='border-b border-transparent-white'
        >
          <h1 className={`${style.heading4} flex justify-between`}>
            <span>{priceItem.title}</span>
            <span>{priceItem.price} ₽</span>
          </h1>
          <p className={`${style.paragraph} pb-4`}>+ {priceItem.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default PriceList;
