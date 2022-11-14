import { JobList } from 'components/JobList';
import { Paginator } from 'components/Paginator';
export const JobBoard = ({ jobs }) => {
  return (
    <div className="w-[414px] p-[9px] mx-auto bg-[#E6E9F2]">
      <JobList jobs={jobs} />
      <Paginator />
    </div>
  );
};
