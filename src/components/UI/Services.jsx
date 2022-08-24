import { categories } from "../../constants";
import PictureCard from "./PictureCard";
import style from "../../style";

const Services = () => (
  <ul className={`${style.grid} gap-x-6 gap-y-[60px] mb-[150px]`}>
    {categories.map((category) => (
      <PictureCard
        key={category.id}
        content={category}
        width={"396px"}
        height={"300px"}
      />
    ))}
  </ul>
);

export default Services;
