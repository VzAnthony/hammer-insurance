import Image from "next/image";

export const ServiceCard = ({ name, description, urlImage }) => {
  return (
    <div className="relative rounded-[20px] px-8 pt-6 pb-[38.5px] w-[235px] shadow-xl ">
      <h3 className="font-nunito font-extrabold text-2xl text-primary mb-[11px]">
        {name}
      </h3>
      <p className="font-nunito font-normal text-sm text-primary mb-[30.5px]">
        {description}
      </p>
      <picture className="absolute -bottom-7 -right-28 w-60 h-40 ">
        <Image
          src={urlImage}
          alt="service-image"
          layout="fill"
          objectFit="scale-down"
          quality={100}
        />
      </picture>
      <button className="font-nunito font-semibold text-xs text-primary-light border border-primary-light rounded-lg px-[14px] py-2 hover:bg-primary hover:text-white transition-colors">
        Ver más
      </button>
    </div>
  );
};
