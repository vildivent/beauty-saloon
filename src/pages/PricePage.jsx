import { PriceCard } from "../components/UI";
import style from "../style";

const PricePage = () => (
  <>
    <h1 className={`${style.heading2} py-20`}>Цены на услуги</h1>
    <PriceCard
      pictureAlignLeft={true}
      startElement={0}
      numberOfElements={4}
      className='mb-[100px]'
    />
  </>
);

export default PricePage;
