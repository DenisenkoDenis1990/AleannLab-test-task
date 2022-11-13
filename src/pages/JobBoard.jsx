import { JobList } from 'components/JobList';
import { Paginator } from 'components/Paginator';
export const JobBoard = ({ jobs }) => {
  return (
    <>
      <JobList jobs={jobs} />
      <Paginator />
    </>
  );
};
