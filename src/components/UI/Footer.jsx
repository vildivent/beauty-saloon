import { logo } from "../../assets";
import { Link } from "react-router-dom";
import { instagramLogo } from "../../constants";
import style from "../../style";

const Footer = () => (
  <footer className='border-t border-transparent-white lg:w-[67.5%] w-[85%] text-left mx-auto'>
    <div className='flex sm:justify-between py-[80px]'>
      <Link to='/'>
        <img src={logo} alt='logo' className='w-[60px] h-[60px]' />
      </Link>
      <div className=''>
        <h1 className={`${style.heading3}`}>Контакты</h1>
        <p
          className={`${style.paragraph} w-full grid flex-col gap-4 opacity-80`}
        >
          <span>+7 (812) 123-45-67</span>
          <span>+7 (911) 123-45-67</span>
          <span>Новоостровский проспект, дом 36 лит. С</span>
        </p>
      </div>
      <div className=''>
        <h1 className={`${style.heading3}`}>Режим работы</h1>
        <p className={`${style.paragraph} grid flex-col gap-4 opacity-80`}>
          <span>C 10:00 до 21:00 (Пн-Пт)</span>
          <span>С 11:00 до 20:00 (Сб-Вс)</span>
        </p>
      </div>
      <div className=''>
        <a href={instagramLogo.link}>
          <h1 className={`${style.heading3}`}>Мы в Instagram</h1>
          <img
            src={instagramLogo.img}
            alt={instagramLogo.id}
            className='w-[36px] h-[36px] opacity-80'
          />
        </a>
      </div>
    </div>
    <div className='border-t border-white opacity-50 text-center py-[30px]'>
      <span className=''>Copyright © 2017 - 2022</span>
    </div>
  </footer>
);

export default Footer;
