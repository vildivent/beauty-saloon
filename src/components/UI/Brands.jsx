import { brands } from "../../constants";

const Brands = () => (
  <div className='max-w-main grid grid-flow-col sm:grid-rows-1 grid-rows-2 gap-y-14 justify-around mx-auto sm:mb-[168px] mb-20'>
    {brands.map((brand) => (
      <a href={brand.link} key={brand.id}>
        <img src={brand.img} alt={brand.id} className='opacity-50 mx-auto' />
      </a>
    ))}
  </div>
);

export default Brands;
