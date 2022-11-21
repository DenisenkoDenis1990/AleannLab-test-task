export const AdditionalInfo = ({ employment_type, benefits }) => {
  return (
    <div className="mb-[63px]">
      <h2 className="section-title mb-[15px]">Additional info</h2>
      <p className="additional-info-subtitle">Employment type</p>
      <ul className="flex mb-[22px] mr-[-6px]">
        {employment_type.map(item => {
          return (
            <li key={item} className="additional-info-features">
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
      <p className="additional-info-subtitle">Benefits</p>
      <ul className="flex justify-start mr-[-6px]">
        {benefits.map(benefit => {
          return (
            <li
              key={benefit}
              className="additional-info-features text-[#988B49] bg-[#FFCF0026]/[0.15] border-[#FFCF00]/[0.12]"
            >
              <span>{benefit}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
