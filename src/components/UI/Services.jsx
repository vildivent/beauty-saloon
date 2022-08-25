import { categories } from "../../constants";
import PictureCard from "./PictureCard";
import style from "../../style";

const Services = () => (
  <ul
    className={`${style.grid} gap-x-6 gap-y-[60px] sm:mb-[150px] mb-20 px-10`}
  >
    {categories.map((category) => (
      <PictureCard key={category.id} content={category} />
    ))}
  </ul>
);

export default Services;
