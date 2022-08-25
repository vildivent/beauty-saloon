import { about } from "../../constants";
import { quotes } from "../../assets";

const About = () => (
  <div className='max-w-main lg:w-[45%] sm:w-[60%] w-[90%] mx-auto mt-[120px] mb-[95px]'>
    <img src={quotes} alt='quotes' className='mx-auto mb-[60px]' />
    <div className='font-p font-bold sm:text-[27px] text-[18px] sm:leading-[130%] text-center'>
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
