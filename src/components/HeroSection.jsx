import PrimaryButton from "./shared/PrimaryButton";
import ArrowRightIcon from "../assets/icons/ArrowRightIcon";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl md:text-6xl text-center font-bold mt-8">
        Write, plan, share.
        <br />
        With AI at your side.
      </h1>
      <h6 className="md:text-2xl  text-center ">
        Notion is the connected workspace where better, faster work happens.
      </h6>
      <PrimaryButton>
        Get Notion Free
        <ArrowRightIcon className="h-5 w-5" />
      </PrimaryButton>
      <img
        className=" md:max-w-2xl mt-8 mx-auto px-4"
        src="https://www.notion.so/cdn-cgi/image/format=webp,width=3840/https://images.ctfassets.net/spoqsaf9291f/3csRrNi1u82ymVlwjfo2E6/02516e52af15501acd822d3e7a03baf9/home-hero.png"
        alt=""
      />
    </section>
  );
};

export default HeroSection;
