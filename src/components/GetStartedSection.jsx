import LinkButton from "./shared/LinkButton";
import PrimaryButton from "./shared/PrimaryButton";
import SectionHeading from "./shared/SectionHeading";

const GetStartedSection = () => {
  return (
    <section className="max-w-screen-lg flex flex-col items-center mx-auto p-8 ">
      <SectionHeading>Get started for free</SectionHeading>
      <p className="mt-4 text-center">Play around it first. <br /> Pay and add your team later</p>
      <div className="flex gap-4 mt-4">
        <PrimaryButton>Try Notion free</PrimaryButton>
        <LinkButton>Request a demo</LinkButton>
      </div>
      <img
        src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/notion-parade.png"
        alt=""
        className="md:max-w-2xl"
      />
    </section>
  );
};

export default GetStartedSection;