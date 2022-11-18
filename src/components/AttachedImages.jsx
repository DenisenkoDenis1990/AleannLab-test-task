export const AttachedImages = ({ images }) => {
  return (
    <div className="mb-[64px]">
      <h2 className="text-xl font-bold text-[#3A4562] pb-2.5 border-b-[1px] border-b-[#3A4562]/[0.13] mb-[20px] xl:mb-[15px]">
        Attached Images
      </h2>
      <ul className="flex  mr-[-10px]">
        {images.map(image => {
          return (
            <li className="mr-[10px]">
              <img src={image} alt="Attached file" className="rounded-lg" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
