import { useState } from "react";
import { ourWorksData, categories } from "../../constants";
import style from "../../style";

const OurWorks = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredOurWorksData, setFilteredOurWorksData] =
    useState(ourWorksData);

  const categoriesSample = categories.filter((category) =>
    category.id === "hairdressing" ||
    category.id === "manicure" ||
    category.id === "visage"
      ? true
      : false
  );

  const filterOurWorkData = (ourWorksData, category) => {
    setSelectedCategory(() => category);
    if (category === "") setFilteredOurWorksData(() => ourWorksData);
    else
      setFilteredOurWorksData(() =>
        ourWorksData.filter((work) =>
          work.category === category ? true : false
        )
      );
  };

  return (
    <>
      <h1 className={`${style.heading2} text-center sm:mb-20 mb-10`}>
        Наши работы
      </h1>
      <ul className='list-none flex justify-center flex-1 sm:pb-[55px] mb-10 opacity-80 px-4'>
        <li
          key={"ourWorks_ShowAll"}
          className={`${style.textMenu} ${
            selectedCategory === ""
              ? "text-[#CDAA7D] border-b border-[#CDAA7D]"
              : ""
          } font-normal cursor-pointer sm:mr-[50px] mr-4`}
          onClick={() => filterOurWorkData(ourWorksData, "")}
        >
          Показать все
        </li>
        {categoriesSample.map((category, index) => (
          <li
            key={`ourWorks_${category.id}`}
            className={`${style.textMenu} ${
              selectedCategory === category.id
                ? "text-[#CDAA7D] border-b border-[#CDAA7D]"
                : ""
            } font-normal cursor-pointer ${
              index === categoriesSample.length - 1
                ? "mr-0"
                : "sm:mr-[50px] mr-2 "
            }`}
            onClick={() => filterOurWorkData(ourWorksData, category.id)}
          >
            {category.title}
          </li>
        ))}
      </ul>
      <ul className={`${style.grid} gap-6 mb-[100px] px-6`}>
        {filteredOurWorksData.map((work) => (
          <li key={work.id}>
            <img
              src={work.img}
              alt={work.id}
              className='relative hover:bottom-[2px] hover:left-[2px]'
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default OurWorks;
