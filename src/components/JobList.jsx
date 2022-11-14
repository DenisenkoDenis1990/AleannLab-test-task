import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Rating } from './icons/Rating';
import { Location } from './icons/Location';
import { Bookmark } from './icons/Bookmark';
export const JobList = ({ jobs }) => {
  const location = useLocation();
  let currentDate = new Date();

  return (
    <div>
      <ul>
        {jobs.map(job => {
          let updatedDate = new Date(job.updatedAt);
          return (
            <li
              key={job.id}
              className="flex bg-[#EFF0F5] mb-[8px] rounded-lg shadow-md"
            >
              <div className="basis-1/4">
                <img
                  src={`${job.pictures[0]}`}
                  alt="avatar"
                  className="w-[65px] h-[65px] rounded-full  mr-[19px] ml-[16px] mt-[45px]"
                />
              </div>
              <div className="pt-[17px] pb-[27px] pr-[16px] basis-3/4">
                <div className="flex justify-between items-center mb-[14px]">
                  <div>
                    <Rating />
                  </div>
                  <div className="hidden">
                    <Bookmark />
                  </div>
                  <p>
                    Posted{' '}
                    {Math.round(
                      (currentDate - updatedDate) / (1000 * 60 * 60 * 24 * 365)
                    )}{' '}
                    years ago
                  </p>
                </div>
                <Link
                  to={`/${job.id}`}
                  state={{ from: location }}
                  className="text-[#3A4562] text-base font-normal tracking-[-0.5625px] mb-[5px]"
                >
                  <p>{job.title}</p>
                </Link>
                <p className="text-[#878D9D] text-[16px] tracking-[0.23619px] leading-6 mb-[7px]">
                  {job.name}
                </p>
                <p className="flex ">
                  <div className="mr-[8px] text-[#878D9D] text-[16px] tracking-[0.23619px] leading-6 mb-[7px]">
                    <Location />
                  </div>{' '}
                  {job.address}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
