import { useState } from "react";
import Image from "next/image";

export const ChatCard = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`flex justify-center items-center fixed bottom-10 right-10 h-[76px] rounded-full shadow-md z-10 bg-white hover:cursor-pointer ${
        toggle ? "w-[300px]" : "w-[76px]"
      }`}
      onClick={() => setToggle(!toggle)}
    >
      <div className={`text-right mr-8  ${!toggle && "hidden"}`}>
        <p className="text-primary font-nunito text-sm font-bold ">
          ¿En qué podemos ayudarte?
        </p>
        <p className="text-primary font-nunito text-sm ">Chatea con nosotros</p>
      </div>
      <Image
        src="/assets/static/icons/chat-bubble.svg"
        alt="service-image"
        width={35}
        height={35}
      />
    </div>
  );
};
