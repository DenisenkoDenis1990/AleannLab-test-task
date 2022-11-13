import { useParams } from 'react-router-dom';
import { Star } from 'components/icons/Star';
import { Share } from 'components/icons/Share';
import { Location } from 'components/icons/Location';
import { Map } from 'components/Map';
import { useJsApiLoader } from '@react-google-maps/api';

const API_KEY = process.env.REACT_APP_API_KEY;
export const JobDetails = ({ jobs }) => {
  const { jobId } = useParams();
  let currentDate = new Date();

  const selectedJob = jobs.find(job => {
    if (job.id !== jobId) {
      return 0;
    }
    return job;
  });

  const center = {
    lat: selectedJob.location.lat,
    lng: selectedJob.location.long,
  };

  let updatedDate = new Date(selectedJob.updatedAt);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });

  return (
    <div className="ml-auto mr-auto pl-15 px-4">
      <div className="mt-6 pb-">
        <h2 className="text-xl font-bold text-[#3A4562] pb-2.5 border-b-[1px] border-b-[#3A4562]/[0.13]">
          Job Details
        </h2>
        <ul className="flex pt-[24px] pb-[32px]">
          <li className="flex mr-[36px]">
            <Star />
            <span className="ml-[10px]">Save to my list</span>
          </li>
          <li className="flex">
            <Share />
            <span className="ml-[10px]">Share</span>
          </li>
        </ul>
      </div>
      <h2 className="text-lg" font-bold>
        {selectedJob.title}
      </h2>
      <p>
        Posted{' '}
        {Math.round((currentDate - updatedDate) / (1000 * 60 * 60 * 24 * 365))}{' '}
        years ago
      </p>
      <div>
        <p>Brutto, per year</p>
        <p>{selectedJob.salary}</p>
      </div>
      <p>{selectedJob.description}</p>
      <button type="button">APPLY NOW</button>
      <div>
        <h2 className="text-xl font-bold text-[#3A4562] pb-2.5 border-b-[1px] border-b-[#3A4562]/[0.13]">
          Attached Images
        </h2>
        <ul>
          {selectedJob.pictures.map(picture => {
            return (
              <li>
                <img src={picture} alt={selectedJob.name} />
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold text-[#3A4562] pb-2.5 border-b-[1px] border-b-[#3A4562]/[0.13]">
          Additional info
        </h2>
        <p>Employment type</p>
        <ul>
          {selectedJob.employment_type.map(item => {
            return (
              <li key={item}>
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
        <p>Benefits</p>
        <ul>
          {selectedJob.benefits.map(benefit => {
            return (
              <li key={benefit}>
                <span>{benefit}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold text-[#3A4562] pb-2.5 border-b-[1px] border-b-[#3A4562]/[0.13]">
          Contacts
        </h2>
        <div>
          <p>{selectedJob.name}</p>
          <ul>
            <li>
              <a href="*">
                <Location /> {selectedJob.address}
              </a>
            </li>
            <li>
              <a href={`tel:${selectedJob.phone}`}>{selectedJob.phone}</a>
            </li>
            <li>
              <a href={`mailto:${selectedJob.email}`}>{selectedJob.email}</a>
            </li>
          </ul>
          {isLoaded ? <Map center={center} /> : <p>123</p>}
        </div>
      </div>
    </div>
  );
};
