import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Rating } from './icons/Rating';
import { Location } from './icons/Location';
import { Bookmark } from './icons/Bookmark';
export const JobList = ({ jobs }) => {
  const location = useLocation();
  let currentDate = new Date();

  return (
    <ul>
      {jobs.map(job => {
        let updatedDate = new Date(job.updatedAt);
        return (
          <li key={job.id}>
            <Rating />
            <Bookmark />
            <p>
              Posted{' '}
              {Math.round(
                (currentDate - updatedDate) / (1000 * 60 * 60 * 24 * 365)
              )}{' '}
              years ago
            </p>
            <img src={`${job.pictures[0]}`} alt="avatar" />
            <Link to={`/${job.id}`} state={{ from: location }}>
              <p>{job.title}</p>
            </Link>
            <p>{job.name}</p>
            <p>
              <Location /> {job.address}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
