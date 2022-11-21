export const AttachedImages = ({ images }) => {
  return (
    <div className="mb-[64px]">
      <h2 className="section-title mb-[20px] xl:mb-[15px]">Attached Images</h2>
      <ul className="flex  mr-[-10px]">
        {images.map((image, index) => {
          return (
            <li className="mr-[10px]" key={index}>
              <img src={image} alt="Attached file" className="rounded-lg" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
