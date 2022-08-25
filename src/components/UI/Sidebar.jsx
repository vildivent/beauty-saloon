import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants";
import { closeIcon } from "../../assets";
import style from "../../style";
import { Context } from "../../context";

const Sidebar = () => {
  const { sidebarIsOpened, setSidebarIsOpened } = useContext(Context);

  return (
    <div
      className={`${
        sidebarIsOpened ? "block" : "hidden"
      }  max-w-[475px] h-auto absolute top-0 right-0 bg-[#111111] border-b border-l border-transparent-white px-20 py-10 z-20`}
    >
      <img
        src={closeIcon}
        alt='close'
        onClick={() => setSidebarIsOpened(() => false)}
        className='w-8 h-8 cursor-pointer mb-5'
      />
      <ul className='list-none grid grid-cols-1 gap-5 text-center'>
        {navLinks.map((nav) => (
          <li key={`sidebar_${nav.id}`} className={`font-semibold`}>
            <NavLink to={`${nav.id}`}>
              {({ isActive }) => (
                <span
                  className={`${style.textMenu} ${
                    isActive
                      ? "text-[#CDAA7D] border-b border-[#CDAA7D]"
                      : undefined
                  }`}
                  onClick={() => setSidebarIsOpened(() => false)}
                >
                  {nav.title}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <p className={`${style.paragraph} sm:my-16 my-10 opacity-80`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum,
        adipiscing amet in egestas sem dui, arcu faucibus scelerisque. Nisl est
        felis id volutpat. Sed dolor fermentum amet lectus nibh quis. Tortor
        donec pellentesque leo ac placerat. Morbi.
      </p>
      <h1 className={`${style.heading3}`}>Контакты</h1>
      <p
        className={`${style.paragraph} w-full grid flex-col sm:gap-4 gap-1 opacity-80`}
      >
        <span>+7 (812) 123-45-67</span>
        <span>+7 (911) 123-45-67</span>
        <span>Новоостровский проспект, дом 36 лит. С</span>
      </p>
      <h1 className={`${style.heading3} sm:mt-16 mt-10`}>Режим работы</h1>
      <p
        className={`${style.paragraph} grid flex-col sm:gap-4 gap-1 opacity-80`}
      >
        <span>C 10:00 до 21:00 (Пн-Пт)</span>
        <span>С 11:00 до 20:00 (Сб-Вс)</span>
      </p>
    </div>
  );
};

export default Sidebar;
