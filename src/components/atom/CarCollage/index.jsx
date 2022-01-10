import Image from "next/image";

export const CarCollage = () => {
  return (
    <picture className="w-full h-[503px] px-10 pt-10 sm:w-[600px] sm:my-0 sm:mx-auto lg:pt-0 lg:px-[5%] lg:m-0 xl:p-0 xl:w-[500px] xl:relative xl:bottom-28 xl:left-16 ">
      <Image
        src="/assets/static/images/car-collage.png"
        alt="service-image"
        width={537}
        height={503}
        layout="responsive"
      />
    </picture>
  );
};
