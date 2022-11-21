import { getTimeFromLastUpdate } from 'services/getTimeFromLastUpdate';
export const JobInfo = ({ title, updatedAt, salary }) => {
  const normalizedSalary = salary.replaceAll('k', ' 000');
  return (
    <div className="xl:flex xl:justify-between xl:ml-[89px]">
      <div className="xl:basis-[75%]">
        <h2 className="text-lg font-bold tracking-[-0.75px] mb-[5px] ">
          {title}
        </h2>
        <p className=" hidden xl:block job-posted">
          Posted {getTimeFromLastUpdate(updatedAt)} years ago
        </p>
      </div>
      <div className="flex xl:block items-center justify-between mb-[14px] xl:basis-25%">
        <p className="job-posted">
          Posted {getTimeFromLastUpdate(updatedAt)} years ago
        </p>
        <div className="xl:flex xl:flex-col-reverse ">
          <p className="brutto-per-year">Brutto, per year</p>
          <p className="salary">€ {normalizedSalary}</p>
        </div>
      </div>
    </div>
  );
};
