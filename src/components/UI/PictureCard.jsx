import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../../style";

const PictureCard = ({ content }) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      {content.link ? (
        <li key={content.id}>
          <Link to={`${content.link}`}>
            <div
              className={`border border-transparent-brown ml-5 mr-0 ${
                hover ? "bg-[#202020]" : ""
              }`}
              onPointerEnter={() => setHover(() => true)}
              onPointerLeave={() => setHover(() => false)}
            >
              <img
                src={content.img}
                alt={content.id}
                className={`relative top-5 right-5 z-10`}
              />
            </div>
          </Link>

          <div
            className={`grid grid-cols-1 sm:mt-[50px] mt-10 ${
              content.description ? "gap-[10px]" : ""
            } `}
          >
            <Link to={`${content.link}`}>
              <span
                className={`font-heading text-[30px] leading-[120%] ${
                  hover ? "text-[#CDAA7D] border-b border-[#CDAA7D]" : ""
                }`}
                onPointerEnter={() => setHover(() => true)}
                onPointerLeave={() => setHover(() => false)}
              >
                {content.title}
              </span>
            </Link>
            <span className={`${style.paragraph} opacity-80`}>
              {content.description}
            </span>
          </div>
        </li>
      ) : (
        <li key={content.id}>
          <div
            className={`border border-transparent-brown ml-5 mr-0 hover:bg-[#202020]`}
          >
            <img
              src={content.img}
              alt={content.id}
              className={` relative top-5 right-5 z-10`}
            />
          </div>

          <div
            className={`grid grid-cols-1 sm:mt-[50px] mt-10 cursor-default ${
              content.description ? "gap-[10px]" : ""
            } `}
          >
            <span className='font-heading text-[30px] leading-[120%]'>
              {content.title}
            </span>
            <span className={`${style.paragraph} opacity-80`}>
              {content.description}
            </span>
          </div>
        </li>
      )}
    </>
  );
};

export default PictureCard;
