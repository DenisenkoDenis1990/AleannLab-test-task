import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
export const BackToJobListBtn = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/', { replace: true });
  };
  return (
    <button
      onClick={handleSubmit}
      className="hidden xl:flex items-center bg-[#384564]/[0.14] rounded-lg py-[18px] px-[26px] text-[12px] leading-4 font-semibold mb-[162px]"
    >
      <MdOutlineArrowBackIos className="mr-[19px]" />
      BACK TO JOB BOARD
    </button>
  );
};
