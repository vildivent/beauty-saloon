import { useState } from "react";

const ServiceCard = ({ category }) => {
  const [hover, setHover] = useState(false);
  return (
    <li key={category.id}>
      <a href={`#${category.id}`}>
        <div
          className={`border border-transparent-brown w-[396px] h-[300px] ml-5 mr-0 ${
            hover ? "bg-[#202020]" : ""
          }`}
          onMouseEnter={() => setHover(() => true)}
          onMouseLeave={() => setHover(() => false)}
        >
          <img
            src={category.img}
            alt={category.id}
            className='w-[396px] h-[300px] relative top-5 right-5 z-10'
          />
        </div>
      </a>
      <div className='mt-[50px]'>
        <a href={`#${category.id}`}>
          <span
            className={`font-heading text-[30px] leading-[120%] ${
              hover ? "text-[#CDAA7D] border-b border-[#CDAA7D]" : ""
            }`}
            onMouseEnter={() => setHover(() => true)}
            onMouseLeave={() => setHover(() => false)}
          >
            {category.title}
          </span>
        </a>
      </div>
    </li>
  );
};

export default ServiceCard;
