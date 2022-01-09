import Image from "next/image";

export const Tags = () => {
  return (
    <div className="flex justify-center items-center gap-6 mb-20">
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
        {/* <Image
          src="/assets/static/icons/google-tag.png"
          alt="service-image"
          layout="fixed"
          width={150}
          height={150}
        /> */}
        <img src="/assets/static/icons/google-tag.png" alt="" />
      </picture>
      <picture className="">
        {/* <Image
          src="/assets/static/icons/bbb-tag.svg"
          alt="service-image"
          width={100}
          height={47}
          layout="responsive"
        /> */}
        <img src="/assets/static/icons/bbb-tag.svg" alt="" />
      </picture>
      <picture>
        {/* <Image
          src="/assets/static/icons/yelp-tag.png"
          alt="service-image"
          width={100}
          height={47}
        /> */}
        <img src="/assets/static/icons/yelp-tag.png" alt="" />
      </picture>
    </div>
  );
};
