import Image from "next/image";

export const ChatCard = () => {
  return (
    <div className="flex justify-center items-center fixed bottom-10 right-10 w-[76px] h-[76px] rounded-full  shadow-md">
      <Image
        src="/assets/static/icons/chat-bubble.svg"
        alt="service-image"
        width={35}
        height={35}
      />
    </div>
  );
};
