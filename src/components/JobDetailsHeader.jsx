import { FaRegStar } from 'react-icons/fa';
import { ReactComponent as Bookmark } from './icons/Bookmark.svg';
import { ReactComponent as Share } from './icons/Share.svg';
export const JobDetailsHeader = () => {
  return (
    <div className="mt-6 xl:mt-[56px] mb-[32px] xl:mb-[39px] xl:flex xl:items-center xl:justify-between xl:border-b-[1px] xl:border-b-[#3A4562]/[0.13] xl:ml-[89px]">
      <h2 className="section-title xl:border-0 mb-[24px] xl:mb-0">
        Job Details
      </h2>
      <ul className="flex ">
        <li className="flex items-center mr-[36px]">
          <div className="xl:hidden">
            {/* <Star /> */}
            <FaRegStar className="w-[21px] h-[20px] fill-[#3A4562]/[0.8]" />
          </div>
          <div className="hidden xl:inline-block">
            <Bookmark />
          </div>
          <span className="ml-[10px]">Save to my list</span>
        </li>
        <li className="flex items-center">
          <Share />
          <span className="ml-[10px]">Share</span>
        </li>
      </ul>
    </div>
  );
};
