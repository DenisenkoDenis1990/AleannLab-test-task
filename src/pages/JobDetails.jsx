import { useParams } from 'react-router-dom';
import { JobDetailsHeader } from 'components/JobDetailsHeader';
import { ApplyNowButton } from 'components/ApplyNowButton';
import { JobInfo } from 'components/JobInfo';
import { JobDescription } from 'components/JobDescription';
import { AttachedImages } from 'components/AttachedImages';
import { AdditionalInfo } from 'components/AdditionalInfo';
import { BackToJobListBtn } from 'components/BackToJobListBtn';
import { ContactInfo } from 'components/ContactInfo';
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
        <ApplyNowButton />
        <JobInfo
          title={selectedJob.title}
          updatedAt={selectedJob.updatedAt}
          salary={selectedJob.salary}
        />
        <JobDescription description={selectedJob.description} />
        {/* <ApplyNowButton /> */}
        <button
          type="button"
          className="text-center flex xl:inline mx-auto py-[18px] px-[30px] bg-[#384564] text-white rounded-lg mb-[135px] xl:mb-[86px] xl:ml-[89px]"
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
