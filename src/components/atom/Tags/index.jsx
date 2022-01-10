import Image from "next/image";

export const Tags = () => {
  return (
    <div className="flex flex-col items-center  sm:flex-row sm:px-5 lg:justify-center lg:gap-10 xl:gap-20">
      <picture className="flex items-center gap-2">
        <Image
          src="/assets/static/icons/rate.svg"
          alt="service-image"
          width={131}
          height={23}
          layout="fixed"
        />
        <p className="text-primary text-[10px]">(525 Reviews de Clientes)</p>
      </picture>
      <picture className="">
        <img src="/assets/static/icons/google-tag.png" alt="" />
      </picture>
      <picture className="">
        <img src="/assets/static/icons/bbb-tag.svg" alt="" />
      </picture>
      <picture>
        <img src="/assets/static/icons/yelp-tag.png" alt="" />
      </picture>
    </div>
  );
};
