import { MastersGallery } from "../components/UI/";
import style from "../style";

const MastersPage = () => (
  <>
    <h1 className={`${style.heading2} py-20`}>Наши мастера</h1>
    <MastersGallery />
  </>
);

export default MastersPage;
