import { masters } from "../../constants";
import PictureCard from "./PictureCard";
import style from "../../style";

const MastersGallery = () => (
  <ul className={`${style.grid} gap-x-6 gap-y-[60px] mb-[100px] px-10`}>
    {masters.map((master) => (
      <PictureCard key={`gallery_${master.id}`} content={master} />
    ))}
  </ul>
);

export default MastersGallery;
