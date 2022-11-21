import { ReactComponent as Bullet } from './icons/Bullet.svg';
export const JobDescription = ({ description }) => {
  const splitedDescriptionArray = description.split('\n  \n');
  let text = '';
  let resposibilitiesArray = '';
  let benefitsArray = '';
  let benefitsItems = '';

  splitedDescriptionArray.forEach(element => {
    if (element.includes('Responsopilities')) {
      resposibilitiesArray = element.split('\n');
    } else if (element.includes('Compensation & Benefits')) {
      benefitsArray = element.split('\n\t');
    } else {
      text = element.toString();
    }
  });

  return (
    <div className="description-text">
      <p className="mb-[46px]">{text}</p>
      <div>
        {resposibilitiesArray.map((item, index) => {
          if (index === 0) {
            return <h3 className="description-subtitles">{item}</h3>;
          }
          return <p className="mb-[46px]">{item}</p>;
        })}
      </div>
      <div>
        {benefitsArray.map((item, index) => {
          if (index === 0) {
            return <h3 className="description-subtitles">{item}</h3>;
          } else {
            benefitsItems = item.split('.');
            benefitsItems.pop();
            return (
              <ul>
                {benefitsItems.map(item => {
                  return (
                    <li>
                      <Bullet className="inline-block mr-[10px]" />
                      {item}
                    </li>
                  );
                })}
              </ul>
            );
          }
        })}
      </div>
    </div>
  );
};
