import { JobListItem } from '../JobListItem/JobListItem';
export const JobList = ({ jobs }) => {
  return (
    <div>
      <ul className="mb-[26px] xl:mb-[48px]">
        {jobs.map(job => {
          return <JobListItem job={job} key={job.id} />;
        })}
      </ul>
    </div>
  );
};
