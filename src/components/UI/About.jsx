import { about } from "../../constants";
import { quotes } from "../../assets";

const About = () => (
  <div className='max-w-main lg:w-[45%] sm:w-[60%] w-[90%] mx-auto sm:mt-[120px] mt-16 sm:mb-[95px] mb-16'>
    <img src={quotes} alt='quotes' className='mx-auto sm:mb-[60px] mb-5' />
    <div className='font-p font-bold sm:text-[27px] text-[18px] sm:leading-[130%] leading-[120%] text-center'>
      {about.map((p, index) => (
        <p
          key={`about${index}`}
          className={`${index === about.length - 1 ? "mb-0" : "mb-4"}`}
        >
          {about}
        </p>
      ))}
    </div>
  </div>
);

export default About;
