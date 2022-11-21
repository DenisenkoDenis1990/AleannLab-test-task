import { JobList } from 'components/JobList/JobList';
import { Paginator } from 'components/Paginator/Paginator';
export const JobBoard = ({ jobs }) => {
  return (
    <div className="job-board-conteiner">
      <JobList jobs={jobs} />
      <Paginator />
    </div>
  );
};
