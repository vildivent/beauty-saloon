import Navbar from "./Navbar";
import { mouse } from "../../assets";

const Header = () => {
  return (
    <div
      className={`bg-bg-img bg-center bg-cover bg-local bg-no-repeat opacity-80 w-full top-0`}
    >
      <h1
        className='sm:text-[72px] leading-[120%] text-5xl text-white mx-auto 
      text-center font-bold whitespace-nowrap pt-[260px] pb-[290px] cursor-default'
      >
        Салон красоты <br />
        «Delote-Beauty» <br />
        на Крестовском
      </h1>
      <div className='flex pb-[100px] justify-center'>
        <img src={mouse} alt='scroll-down' className='h-[30px] w-[20px] mr-5' />
        <p className='font-p text-[18px] leading-[140%] font-semibold text-white text-center cursor-default'>
          Прокрутите вниз
        </p>
      </div>
    </div>
  );
};

export default Header;
