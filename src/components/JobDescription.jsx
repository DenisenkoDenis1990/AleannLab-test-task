export const JobDescription = ({ description }) => {
  // const splitedDescriptionArray = selectedJob.description.split('\n  \n');
  // let text = '';
  // let resposibilitiesArray = '';
  // let benefitsArray = '';

  // splitedDescriptionArray.forEach(element => {
  //   if (element.includes('Responsopilities')) {
  //     resposibilitiesArray = element.split('\n');
  //   } else if (element.includes('Compensation & Benefits')) {
  //     benefitsArray = element.split('\n\t');
  //   } else {
  //     text = element;
  //   }
  // });
  // console.log(resposibilitiesArray);

  return (
    <p className="text-base text-[#38415D]/[0.82] xl:text-[#3A4562] tracking-[-0.5625px] font-normal mb-[30px] xl:ml-[89px]">
      {description}
    </p>
  );
};
