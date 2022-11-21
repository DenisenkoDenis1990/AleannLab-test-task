import { ReactComponent as ArrowLeft } from '../icons/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../icons/ArrowRight.svg';
export const Paginator = () => {
  return (
    <div className="paginator-conteiner">
      <div className="hidden xl:block">
        <ArrowLeft />
      </div>
      <ul className="paginator">
        <li className="pages">
          <a href="*">1</a>
        </li>
        <li className="pages text-[#55699E]  px-[10px] border-b-[2px] border-b-[#55699E]">
          <a href="*">2</a>
        </li>
        <li className="pages">
          <a href="*">3</a>
        </li>
        <li className="pages">
          <a href="*">4</a>
        </li>
        <li className="pages">
          <a href="*">5</a>
        </li>
        <li className="pages self-end py-0">
          <a href="*">...</a>
        </li>
        <li className="pages">
          <a href="*">18</a>
        </li>
      </ul>
      <div className="hidden xl:block">
        <ArrowRight />
      </div>
    </div>
  );
};
