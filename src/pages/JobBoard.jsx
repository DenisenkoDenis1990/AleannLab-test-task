import { JobList } from 'components/JobList';
import { Paginator } from 'components/Paginator';
export const JobBoard = ({ jobs }) => {
  return (
    <div className="w-[414px] xl:w-[1920px] p-[9px] xl:px-[260px] xl:pt-[29px] xl:pb-[64px] mx-auto bg-[#E6E9F2]">
      <JobList jobs={jobs} />
      <Paginator />
    </div>
  );
};
