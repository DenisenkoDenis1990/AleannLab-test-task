import { useParams } from 'react-router-dom';
// import { ReactComponent as Location } from 'components/icons/Location.svg';
// import { Map } from 'components/Map';
// import { useJsApiLoader } from '@react-google-maps/api';
import { JobDetailsHeader } from 'components/JobDetailsHeader';
import { ApplyNowButton } from 'components/ApplyNowButton';
import { JobInfo } from 'components/JobInfo';
import { JobDescription } from 'components/JobDescription';
import { AttachedImages } from 'components/AttachedImages';
import { AdditionalInfo } from 'components/AdditionalInfo';
import { BackToJobListBtn } from 'components/BackToJobListBtn';
import { ContactInfo } from 'components/ContactInfo';
// const API_KEY = process.env.REACT_APP_API_KEY;
export const JobDetails = ({ jobs }) => {
  const { jobId } = useParams();
  // const navigate = useNavigate();

  const selectedJob = jobs.find(job => {
    if (job.id !== jobId) {
      return 0;
    }
    return job;
  });

  // const center = {
  //   lat: selectedJob.location.lat,
  //   lng: selectedJob.location.long,
  // };

  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: API_KEY,
  // });

  // const handleSubmit = () => {
  //   navigate('/', { replace: true });
  // };

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
        {/* <div className="xl:flex xl:justify-between xl:ml-[89px]">
          <div>
            <h2 className="text-lg font-bold tracking-[-0.75px] mb-[5px] xl:pr-[80px]">
              {selectedJob.title}
            </h2>
            <p className=" hidden xl:block text-sm font-light tracking-[0.191905px] text-[#38415D]/[0.602109]">
              Posted{' '}
              {Math.round(
                (currentDate - updatedDate) / (1000 * 60 * 60 * 24 * 365)
              )}{' '}
              years ago
            </p>
          </div>
          <div className="flex xl:block items-center justify-between mb-[14px] xl:basis-1/3">
            <p className="xl:hidden text-sm font-light tracking-[0.191905px] text-[#38415D]/[0.602109]">
              Posted{' '}
              {Math.round(
                (currentDate - updatedDate) / (1000 * 60 * 60 * 24 * 365)
              )}{' '}
              years ago
            </p>
            <div className="xl:flex xl:flex-col-reverse ">
              <p className="text-base text-[#38415D]/[0.82] tracking-[-0.5625px] font-normal text-right xl:text-left mb-[4px]">
                Brutto, per year
              </p>
              <p className="font-bold text-[20px] leading-[25px] tracking-[-0.625px] text-right xl:text-left">
                € {selectedJob.salary}
              </p>
            </div>
          </div>
        </div> */}
        <JobDescription description={selectedJob.description} />
        {/* <ApplyNowButton /> */}
        <button
          type="button"
          className="text-center flex xl:inline mx-auto py-[18px] px-[30px] bg-[#384564] text-white rounded-lg mb-[135px] xl:mb-[86px] xl:ml-[89px]"
        >
          APPLY NOW
        </button>
        <div className="xl:flex xl:flex-col-reverse	xl:ml-[89px]">
          {/* <div className="mb-[64px]">
            <h2 className="text-xl font-bold text-[#3A4562] pb-2.5 border-b-[1px] border-b-[#3A4562]/[0.13] mb-[20px] xl:mb-[15px]">
              Attached Images
            </h2>
            <ul className="flex  mr-[-10px]">
              {selectedJob.pictures.map(picture => {
                return (
                  <li className="mr-[10px]">
                    <img
                      src={picture}
                      alt={selectedJob.name}
                      className="rounded-lg"
                    />
                  </li>
                );
              })}
            </ul>
          </div> */}
          <AttachedImages images={selectedJob.pictures} />
          {/* <div className="mb-[63px]">
            <h2 className="text-xl font-bold text-[#3A4562] pb-2.5 border-b-[1px] border-b-[#3A4562]/[0.13] mb-[15px]">
              Additional info
            </h2>
            <p className="text-base text-[#38415D]/[0.82] tracking-[-0.5625px] font-normal mb-[10px]">
              Employment type
            </p>
            <ul className="flex mb-[22px] mr-[-6px]">
              {selectedJob.employment_type.map(item => {
                return (
                  <li
                    key={item}
                    className="text-[16px] text-center tracking-[-0.457143px] text-[#55699E] font-bold py-[17px] w-1/3 mr-[6px] bg-[#A1B1DB]/[0.3173] border-[#000000]/[0.12] border-[1px] rounded-lg"
                  >
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
            <p className="text-base text-[#38415D]/[0.82] tracking-[-0.5625px] font-normal mb-[10px]">
              Benefits
            </p>
            <ul className="flex justify-start mr-[-6px]">
              {selectedJob.benefits.map(benefit => {
                return (
                  <li
                    key={benefit}
                    className="text-[16px] text-center tracking-[-0.4px] text-[#988B49] font-bold py-[17px] w-1/3 mr-[6px] bg-[#FFCF0026]/[0.15] border-[#FFCF00]/[0.12] border-[1px] rounded-lg"
                  >
                    <span>{benefit}</span>
                  </li>
                );
              })}
            </ul>
          </div> */}
          <AdditionalInfo
            employment_type={selectedJob.employment_type}
            benefits={selectedJob.benefits}
          />
        </div>
        {/* <button
          onClick={handleSubmit}
          className="hidden xl:flex items-center bg-[#384564]/[0.14] rounded-lg py-[18px] px-[26px] text-[12px] leading-4 font-semibold mb-[162px]"
        >
          <MdOutlineArrowBackIos className="mr-[19px]" />
          BACK TO JOB BOARD
        </button> */}
        <BackToJobListBtn />
      </div>
      {/* <div className="xl:mt-[56px]">
        <h2 className="text-xl font-bold text-[#3A4562] pb-2.5 border-b-[1px] border-b-[#3A4562]/[0.13] mb-[21px] xl:hidden">
          Contacts
        </h2>
        <div className="pl-[62px] py-[31px] bg-[#2A3047] rounded-t-md ">
          <p className="text-[#E7EAF0] text-[16px] font-bold tracking-[0.23619px] leading-5 mb-[17px]">
            {selectedJob.name}
          </p>
          <ul>
            <li className="mb-[6px]">
              <a
                href="*"
                className="flex  text-[#E7EAF0] text-[16px] leading-6 tracking-[-0.5px] font-normal"
              >
                <Location />{' '}
                <span className="ml-[8px]">{selectedJob.address}</span>
              </a>
            </li>
            <li className="mb-[6px]">
              <a
                href={`tel:${selectedJob.phone}`}
                className=" text-[#FFFFFF]/[0.6696] text-[16px] leading-6 tracking-[-0.5px] font-normal"
              >
                {selectedJob.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${selectedJob.email}`}
                className=" text-[#FFFFFF]/[0.6696] text-[16px] leading-6 tracking-[-0.5px] font-normal"
              >
                {selectedJob.email}
              </a>
            </li>
          </ul>
        </div>
        {isLoaded ? <Map center={center} /> : <p>Loading...</p>}
      </div> */}
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
