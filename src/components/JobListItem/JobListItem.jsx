import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ReactComponent as Rating } from '../icons/Rating.svg';
import { ReactComponent as Location } from '../icons/Location.svg';
import { ReactComponent as Bookmark } from '../icons/Bookmark.svg';
import { ReactComponent as RatingBig } from '../icons/RatingBig.svg';
import { getTimeFromLastUpdate } from 'services/getTimeFromLastUpdate';

export const JobListItem = ({ job }) => {
  const location = useLocation();

  return (
    <li className="job-list-item">
      <div className="basis-3/8  xl:basis-[8%] ">
        <img src={`${job.pictures[0]}`} alt="avatar" className="avatar" />
      </div>
      <div className="pt-[17px] pb-[27px] pr-[16px] xl:p-0 basis-3/4 xl:basis-[70%]">
        <div className="flex justify-between items-center mb-[14px] xl:hidden">
          <div>
            <Rating />
          </div>
          <div className="hidden">
            <Bookmark />
          </div>
          <p>Posted {getTimeFromLastUpdate(job.updatedAt)} years ago</p>
        </div>
        <Link
          to={`/${job.id}`}
          state={{ from: location }}
          className="text-[#3A4562] text-base font-normal tracking-[-0.5625px] mb-[5px]"
        >
          <p>{job.title}</p>
        </Link>
        <p className="job-short-description">{job.name}</p>
        <p className="flex ">
          <div className="mr-[8px] job-short-description">
            <Location />
          </div>{' '}
          {job.address}
        </p>
      </div>
      <div className="hidden self-center ml-[100px] xl:inline-block basis-[10%]">
        <RatingBig />
      </div>
      <div className="hidden  flex-col justify-between xl:flex basis-[13%]">
        <div className="self-end">
          <Bookmark />
        </div>
        <p className="self-end">
          Posted {getTimeFromLastUpdate(job.updatedAt)} years ago
        </p>
      </div>
    </li>
  );
};
