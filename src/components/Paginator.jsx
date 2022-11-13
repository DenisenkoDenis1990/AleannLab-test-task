import { ArrowLeft } from './icons/ArrowLeft';
import { ArrowRight } from './icons/ArrowRight';
export const Paginator = () => {
  return (
    <div>
      <ArrowLeft />
      <ul>
        <li>
          <span>1</span>
        </li>
        <li>
          <span>2</span>
        </li>
        <li>
          <span>3</span>
        </li>
        <li>
          <span>4</span>
        </li>
        <li>
          <span>5</span>
        </li>
        <li>
          <span>...</span>
        </li>
        <li>
          <span>18</span>
        </li>
      </ul>
      <ArrowRight />
    </div>
  );
};
