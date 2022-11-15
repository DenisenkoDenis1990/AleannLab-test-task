import { ArrowLeft } from './icons/ArrowLeft';
import { ArrowRight } from './icons/ArrowRight';
export const Paginator = () => {
  return (
    <div className="flex justify-center items-center bg-white rounded-lg xl:px-[24px] xl:w-[515px] xl:mx-auto">
      <div className="hidden xl:block">
        <ArrowLeft />
      </div>
      <ul className="flex before:content-[''] before:h-[24px] before:border-r-[1px] before:border-[#38415D]/[0.0513276 before:mr-[42px] before:mt-[8px] before:xl:mr-[55px] before:xl:ml-[27px] after:content-[''] after:h-[24px]  after:border-l-[1px] after:border-[#38415D]/[0.0513276 after:ml-[42px] after:mt-[8px] after:xl:ml-[55px] after:xl:mr-[27px]">
        <li className="text-[#38415D]/[0.6021] text-[16px] font-bold tracking-[1.33333px] leading-[19px] mr-[6px] pt-[9px] pb-[7px] px-[5px]">
          <a href="*">1</a>
        </li>
        <li className="text-[#55699E] text-[16px] font-bold tracking-[1.33333px] leading-[19px] mr-[6px] pt-[9px] pb-[7px] px-[10px] border-b-[2px] border-b-[#55699E]">
          <a href="*">2</a>
        </li>
        <li className="text-[#38415D]/[0.6021] text-[16px] font-bold tracking-[1.33333px] leading-[19px] mr-[6px] pt-[9px] pb-[7px] px-[5px]">
          <a href="*">3</a>
        </li>
        <li className="text-[#38415D]/[0.6021] text-[16px] font-bold tracking-[1.33333px] leading-[19px] mr-[6px] pt-[9px] pb-[7px] px-[5px]">
          <a href="*">4</a>
        </li>
        <li className="text-[#38415D]/[0.6021] text-[16px] font-bold tracking-[1.33333px] leading-[19px] mr-[6px] pt-[9px] pb-[7px] px-[5px]">
          <a href="*">5</a>
        </li>
        <li className="text-[#38415D]/[0.6021] text-[16px] font-bold tracking-[1.33333px] leading-[19px] mr-[6px]  self-end px-[5px]">
          <a href="*">...</a>
        </li>
        <li className="text-[#38415D]/[0.6021] text-[16px] font-bold tracking-[1.33333px] leading-[19px] mr-[6px] pt-[9px] pb-[7px] px-[5px]">
          <a href="*">18</a>
        </li>
      </ul>
      <div className="hidden xl:block">
        <ArrowRight />
      </div>
    </div>
  );
};
