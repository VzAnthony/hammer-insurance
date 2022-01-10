import { CarCollage } from "../src/components/atom/CarCollage";
import { ChatCard } from "../src/components/atom/ChatCard";
import { Tags } from "../src/components/atom/Tags";
import { WelcomeGreeting } from "../src/components/atom/WelcomeGreeting";
import { Navbar } from "../src/components/molecule/Navbar";
import { Services } from "../src/components/organism/Services";

export default function Home() {
  return (
    <div className="lg:bg-background-home lg:[background-position-x:34rem] lg:[background-position-y:-30rem] xl:[background-position-x:70rem] xl:[background-position-y:-40rem] bg-no-repeat ">
      <Navbar />
      <section className="flex flex-col justify-center mt-28 lg:flex-row lg:pl-11 xl:pl-28 xl:justify-start xl:gap-32">
        <WelcomeGreeting />
        <CarCollage />
      </section>
      <ChatCard />
      <Tags />
      <Services />
    </div>
  );
}
