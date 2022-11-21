import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
export const BackToJobListBtn = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/', { replace: true });
  };
  return (
    <button onClick={handleSubmit} className="back-btn">
      <MdOutlineArrowBackIos className="mr-[19px]" />
      BACK TO JOB BOARD
    </button>
  );
};
