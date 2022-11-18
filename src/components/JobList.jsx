import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Rating } from './icons/Rating';
import { ReactComponent as Location } from './icons/Location.svg';
import { ReactComponent as Bookmark } from './icons/Bookmark.svg';
import { ReactComponent as RatingBig } from './icons/RatingBig.svg';
export const JobList = ({ jobs }) => {
  const location = useLocation();
  let currentDate = new Date();

  return (
    <div>
      <ul className="mb-[26px] xl:mb-[48px]">
        {jobs.map(job => {
          let updatedDate = new Date(job.updatedAt);
          return (
            <li
              key={job.id}
              className="flex bg-[#EFF0F5] mb-[8px] rounded-lg shadow-md xl:py-[16px] xl:px-[24px] xl:bg-white"
            >
              <div className="basis-3/8  xl:basis-[8%] ">
                <img
                  src={`${job.pictures[0]}`}
                  alt="avatar"
                  className="w-[65px] xl:w-[85px] h-[65px] xl:h-[85px] rounded-full  mr-[19px] ml-[16px] mt-[45px] xl:mt-0 xl:mr-[26px] xl:ml-0"
                />
              </div>
              <div className="pt-[17px] pb-[27px] pr-[16px] xl:p-0 basis-3/4 xl:basis-[70%]">
                <div className="flex justify-between items-center mb-[14px] xl:hidden">
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
              <div className="hidden self-center ml-[100px] xl:inline-block basis-[10%]">
                <RatingBig />
              </div>
              <div className="hidden  flex-col justify-between xl:flex basis-[13%]">
                <div className="self-end">
                  <Bookmark />
                </div>
                <p className="self-end">
                  Posted{' '}
                  {Math.round(
                    (currentDate - updatedDate) / (1000 * 60 * 60 * 24 * 365)
                  )}{' '}
                  years ago
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
