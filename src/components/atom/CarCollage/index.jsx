import Image from "next/image";

export const CarCollage = () => {
  return (
    <picture className="w-[537px] h-[503px] pt-1">
      <Image
        src="/assets/static/images/car-collage.png"
        alt="service-image"
        width={537}
        height={503}
        layout="responsive"
        // objectFit="scale-down"
        //   quality={100}
      />
    </picture>
  );
};
