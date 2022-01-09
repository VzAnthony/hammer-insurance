import { CarCollage } from "../src/components/atom/CarCollage";
import { ChatCard } from "../src/components/atom/ChatCard";
import { Tags } from "../src/components/atom/Tags";
import { WelcomeGreeting } from "../src/components/atom/WelcomeGreeting";
import { Navbar } from "../src/components/molecule/Navbar";
import { Services } from "../src/components/organism/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="flex justify-center">
        <WelcomeGreeting />
        <CarCollage />
      </section>
      <ChatCard />
      <Tags />
      <Services />
    </div>
  );
}
