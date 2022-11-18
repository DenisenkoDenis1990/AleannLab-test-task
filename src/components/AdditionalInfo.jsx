export const AdditionalInfo = ({ employment_type, benefits }) => {
  return (
    <div className="mb-[63px]">
      <h2 className="text-xl font-bold text-[#3A4562] pb-2.5 border-b-[1px] border-b-[#3A4562]/[0.13] mb-[15px]">
        Additional info
      </h2>
      <p className="text-base text-[#38415D]/[0.82] tracking-[-0.5625px] font-normal mb-[10px]">
        Employment type
      </p>
      <ul className="flex mb-[22px] mr-[-6px]">
        {employment_type.map(item => {
          return (
            <li
              key={item}
              className="text-[16px] text-center tracking-[-0.457143px] text-[#55699E] font-bold py-[17px] w-1/3 mr-[6px] bg-[#A1B1DB]/[0.3173] border-[#000000]/[0.12] border-[1px] rounded-lg"
            >
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
      <p className="text-base text-[#38415D]/[0.82] tracking-[-0.5625px] font-normal mb-[10px]">
        Benefits
      </p>
      <ul className="flex justify-start mr-[-6px]">
        {benefits.map(benefit => {
          return (
            <li
              key={benefit}
              className="text-[16px] text-center tracking-[-0.4px] text-[#988B49] font-bold py-[17px] w-1/3 mr-[6px] bg-[#FFCF0026]/[0.15] border-[#FFCF00]/[0.12] border-[1px] rounded-lg"
            >
              <span>{benefit}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
