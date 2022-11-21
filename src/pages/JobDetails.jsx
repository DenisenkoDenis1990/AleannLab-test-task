import { useParams } from 'react-router-dom';
import { JobDetailsHeader } from 'components/JobDetailsHeader/JobDetailsHeader';
import { JobInfo } from 'components/JobInfo/JobInfo';
import { JobDescription } from 'components/JobDescription/JobDescription';
import { AttachedImages } from 'components/AttachedImages/AttachedImages';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { BackToJobListBtn } from 'components/BackToJobListBtn/BackToJobListBtn';
import { ContactInfo } from 'components/ContactInfo/ContactInfo';
export const JobDetails = ({ jobs }) => {
  const { jobId } = useParams();

  const selectedJob = jobs.find(job => {
    if (job.id !== jobId) {
      return 0;
    }
    return job;
  });

  return (
    <div className="ml-auto mr-auto pl-15 px-4 w-[384px] xl:w-[1347px] xl:flex">
      <div className="xl:mr-[82px]">
        <JobDetailsHeader />
        <button
          type="button"
          className="apply-btn hidden xl:inline-block ml-[89px] mb-[32px]"
        >
          APPLY NOW
        </button>
        <JobInfo
          title={selectedJob.title}
          updatedAt={selectedJob.updatedAt}
          salary={selectedJob.salary}
        />
        <JobDescription description={selectedJob.description} />
        <button
          type="button"
          className="apply-btn flex xl:inline mx-auto mb-[135px] xl:mb-[86px] xl:ml-[89px]"
        >
          APPLY NOW
        </button>
        <div className="xl:flex xl:flex-col-reverse	xl:ml-[89px]">
          <AttachedImages images={selectedJob.pictures} />
          <AdditionalInfo
            employment_type={selectedJob.employment_type}
            benefits={selectedJob.benefits}
          />
        </div>
        <BackToJobListBtn />
      </div>

      <ContactInfo
        name={selectedJob.name}
        address={selectedJob.address}
        phone={selectedJob.phone}
        email={selectedJob.email}
        location={selectedJob.location}
      />
    </div>
  );
};
