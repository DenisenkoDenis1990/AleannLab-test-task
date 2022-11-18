import { getTimeFromLastUpdate } from 'services/getTimeFromLastUpdate';
export const JobInfo = ({ title, updatedAt, salary }) => {
  const normalizedSalary = salary.replaceAll('k', ' 000');
  return (
    <div className="xl:flex xl:justify-between xl:ml-[89px]">
      <div className="xl:basis-[75%]">
        <h2 className="text-lg font-bold tracking-[-0.75px] mb-[5px] ">
          {title}
        </h2>
        <p className=" hidden xl:block text-sm font-light tracking-[0.191905px] text-[#38415D]/[0.602109]">
          Posted {getTimeFromLastUpdate(updatedAt)} years ago
        </p>
      </div>
      <div className="flex xl:block items-center justify-between mb-[14px] xl:basis-25%">
        <p className="xl:hidden text-sm font-light tracking-[0.191905px] text-[#38415D]/[0.602109]">
          Posted {getTimeFromLastUpdate(updatedAt)} years ago
        </p>
        <div className="xl:flex xl:flex-col-reverse ">
          <p className="text-base text-[#38415D]/[0.82] tracking-[-0.5625px] font-normal text-right xl:text-left mb-[4px]">
            Brutto, per year
          </p>
          <p className="font-bold text-[20px] leading-[25px] tracking-[-0.625px] text-right xl:text-left">
            € {normalizedSalary}
          </p>
        </div>
      </div>
    </div>
  );
};
