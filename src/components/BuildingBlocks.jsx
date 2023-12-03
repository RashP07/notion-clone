import { useEffect, useState } from "react";
import Quote from "./shared/Quote";
import SectionHeading from "./shared/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const BuildingBlocks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  useEffect(() => {
    if (controlledSwiper?.slideTo) {
      controlledSwiper?.slideTo(activeIndex, 1000);
    }
  }, [activeIndex, controlledSwiper]);
  const blocks = [
    {
      name: "Board",
      imgSrc:
        "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/home/building-blocks/kanban.png",
    },
    {
      name: "Timeline",
      imgSrc:
        "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/home/building-blocks/timeline.png",
    },
    {
      name: "Table",
      imgSrc:
        "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/home/building-blocks/table.png",
    },
    {
      name: "Calendar",
      imgSrc:
        "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/home/building-blocks/calendar.png",
    },
    {
      name: "Gallery",
      imgSrc:
        "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/home/building-blocks/gallery.png",
    },
    {
      name: "List",
      imgSrc:
        "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/home/building-blocks/list.png",
    },
  ];
  return (
    <section className="max-w-screen-lg mx-auto p-8">
      <SectionHeading> Powerful building blocks</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="md:col-span-2  relative mt-40 bg-gray-100 rounded-xl p-6">
          <img
            className="absolute -top-36 h-40"
            src="https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/shared/illustrations/blocks/topPeekI.png"
            alt=""
          />
          <div className="text-blue-500 h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              color="currentColor"
              viewBox="0 0 64 64"
            >
              <path
                fill="currentColor"
                d="M45.74 33l13 13-13 13-4.24-4.24L47.26 49h-7.14c-3.86 0-6.71-1.46-8.95-4.61l-2.71-3.79 3.69-5.16 3.9 5.47c1.12 1.57 2.14 2.09 4.07 2.09h7.14l-5.76-5.76L45.74 33zm-5.62-12h7.14l-5.76 5.76L45.74 31l13-13-13-13-4.24 4.24L47.26 15h-7.14c-3.86 0-6.71 1.46-8.95 4.61l-15.21 21.3C14.84 42.48 13.82 43 11.89 43H6.01v6h5.88c3.86 0 6.71-1.46 8.95-4.61l15.21-21.3c1.12-1.57 2.14-2.09 4.07-2.09zm-24.17 2.09l3.9 5.47 3.69-5.16-2.71-3.79C18.58 16.47 15.74 15 11.88 15H6v6h5.88c1.92 0 2.95.53 4.07 2.09z"
              ></path>
            </svg>
          </div>
          <h2 className="font-semibold text-lg my-4">
            Visualise , filter & sort any way your want{" "}
          </h2>
          <p className="max-w-lg">
            Show only tasks assigned to you , or items marked as urgent. Break
            down any project in the way {"that's"} most helpful to you.
          </p>
          <div className="mt-4 rounded-xl  overflow-hidden border shadow-sm">
            <Swiper
              onActiveIndexChange={(swiper) =>
                setActiveIndex(swiper.activeIndex)
              }
              spaceBetween={10}
              onSwiper={setControlledSwiper}
              autoplay={{
                delay: 2500,
              }}
              speed={1000}
              modules={[Autoplay]}
              centeredSlides={true}
            >

              {blocks.map((block) => (
                <SwiperSlide key={block.name} className="m-auto">
                  <img
                    src={block?.imgSrc}
                    alt={`building-blocks-${block.name}`}
                    className=""
                    />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex flex-wrap gap-2 items-center mt-4 justify-center">
            {blocks.map((block, index) => (
              <div
                onClick={() => setActiveIndex(index)}
                key={"tag-" + block.name}
                className={`text-sm p-1 px-3 border border-gray-300  ${
                  activeIndex === index && "bg-gray-300/75"
                } rounded-lg`}
              >
                {block.name}
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 bg-gray-100 rounded-xl">
          <div className="p-6">
            <div className="text-blue-500 h-8 w-8">
              <svg
                className="eye"
                viewBox="0 0 30 20"
                style={{
                  width: "100%",
                  height: "100%",
                  WebkitFlexShrink: "0",
                  MsFlexShrink: "0",
                  flexShrink: "0",
                }}
                fill="currentColor"
                color="currentColor"
                display="block"
              >
                <path
                  fill="currentColor"
                  d="M14.951 19.558c1.468 0 2.85-.176 4.147-.527a17.635 17.635 0 003.598-1.386 18.18 18.18 0 002.933-1.912 17.422 17.422 0 002.213-2.084c.609-.701 1.07-1.35 1.386-1.944.322-.601.483-1.085.483-1.45s-.161-.845-.483-1.44c-.316-.594-.777-1.238-1.386-1.933a16.965 16.965 0 00-2.213-2.095 17.491 17.491 0 00-2.944-1.901 17.305 17.305 0 00-3.587-1.397A15.811 15.811 0 0014.95.963c-1.44 0-2.807.175-4.103.526A17.34 17.34 0 007.27 2.886a18.517 18.517 0 00-2.955 1.901 17.222 17.222 0 00-2.234 2.095C1.473 7.577 1.004 8.22.675 8.815.353 9.41.19 9.89.19 10.255s.162.848.484 1.45c.33.595.798 1.243 1.407 1.944.616.695 1.357 1.39 2.224 2.084a19.063 19.063 0 002.954 1.912 17.763 17.763 0 003.577 1.386c1.296.351 2.668.527 4.114.527zm0-2.074c-1.146 0-2.245-.14-3.298-.419a15.067 15.067 0 01-2.943-1.117 18.12 18.12 0 01-2.492-1.514A17.64 17.64 0 014.306 12.8c-.537-.544-.953-1.042-1.246-1.493-.287-.452-.43-.803-.43-1.053 0-.208.143-.526.43-.956.293-.43.709-.917 1.246-1.461A16.957 16.957 0 018.71 4.626a15.17 15.17 0 012.943-1.16 12.219 12.219 0 013.298-.44c1.146 0 2.242.146 3.287.44 1.046.293 2.027.68 2.944 1.16.916.473 1.747.988 2.492 1.547a16.508 16.508 0 011.923 1.665c.537.544.949 1.031 1.235 1.46.294.43.44.75.44.957 0 .25-.146.601-.44 1.053-.286.45-.698.949-1.235 1.493a17.151 17.151 0 01-4.415 3.147 15.02 15.02 0 01-2.944 1.117 12.65 12.65 0 01-3.287.42zm.01-1.44a5.64 5.64 0 002.246-.45 5.992 5.992 0 001.848-1.257 6.007 6.007 0 001.246-1.848c.3-.702.451-1.446.451-2.234a5.715 5.715 0 00-1.697-4.093 5.694 5.694 0 00-1.848-1.235 5.639 5.639 0 00-2.245-.451 5.72 5.72 0 00-2.277.45 5.694 5.694 0 00-1.848 1.236A5.715 5.715 0 009.59 8a5.785 5.785 0 00-.44 2.256c0 .788.15 1.532.45 2.234a6.02 6.02 0 001.247 1.848c.53.53 1.142.949 1.837 1.257.701.3 1.46.45 2.277.45zm-.01-3.91c-.523 0-.967-.185-1.332-.558a1.824 1.824 0 01-.548-1.321 1.8 1.8 0 01.548-1.321c.365-.366.81-.548 1.332-.548a1.8 1.8 0 011.322.548c.372.365.558.805.558 1.32 0 .51-.186.95-.558 1.322a1.784 1.784 0 01-1.322.559z"
                ></path>
              </svg>
            </div>
            <h2 className="font-semibold text-lg mt-4">
              Customize the info you track
            </h2>
            <p>
              Create your own labels, tags, owners, and more, so everyone has
              context and everything stays organized.
            </p>
          </div>
          <img
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=2048/front-static/pages/home/customize-info.png"
            className=" p-[2px] pl-4"
          />
        </div>
        <div className="md:col-span-1 bg-gray-100 rounded-lg">
          <div className="p-6">
            <div className="text-blue-500 h-8 w-8">
              <svg
                viewBox="0 0 31 27"
                style={{
                  width: "100%",
                  height: "100%",
                  WebkitFlexShrink: "0",
                  MsFlexShrink: "0",
                  flexShrink: "0",
                }}
                fill="currentColor"
                color="currentColor"
                display="block"
              >
                <path
                  fill="currentColor"
                  d="M16.167 24.767c1.583 0 2.965-.179 4.146-.537 1.19-.35 2.113-.841 2.772-1.472.666-.63.999-1.36.999-2.191 0-.552-.093-1.006-.28-1.364a4.16 4.16 0 00-.622-.946 16.46 16.46 0 01-.623-.762 1.425 1.425 0 01-.269-.849c0-.294.15-.555.451-.784.301-.236.688-.47 1.16-.698.48-.23.985-.48 1.515-.752a8.986 8.986 0 001.504-1c.48-.386.87-.848 1.17-1.385.302-.544.452-1.196.452-1.955 0-1.125-.28-2.145-.838-3.062-.551-.916-1.34-1.704-2.363-2.363-1.017-.659-2.235-1.164-3.652-1.515-1.419-.358-2.994-.537-4.727-.537-2.242 0-4.286.272-6.134.817-1.84.537-3.427 1.303-4.759 2.299-1.325.995-2.349 2.184-3.072 3.566-.716 1.375-1.074 2.9-1.074 4.576 0 1.633.34 3.119 1.02 4.458.68 1.332 1.651 2.478 2.911 3.438 1.268.966 2.772 1.711 4.512 2.234 1.74.523 3.674.784 5.801.784zm0-2.267c-1.805 0-3.445-.207-4.92-.622-1.468-.409-2.728-.992-3.781-1.752-1.053-.766-1.866-1.679-2.439-2.739-.565-1.06-.848-2.238-.848-3.534 0-1.353.3-2.582.902-3.684.609-1.103 1.475-2.052 2.6-2.847 1.124-.795 2.47-1.404 4.039-1.826 1.568-.43 3.316-.645 5.242-.645 1.876 0 3.513.219 4.91.655 1.396.437 2.477 1.05 3.243 1.837.774.78 1.16 1.69 1.16 2.729 0 .601-.15 1.11-.45 1.525-.302.408-.692.76-1.172 1.053-.472.294-.977.566-1.514.816-.53.244-1.035.502-1.515.774s-.87.59-1.17.956c-.302.365-.452.82-.452 1.364 0 .466.09.86.268 1.182.187.322.398.612.634.87.237.258.444.516.623.773.186.251.28.541.28.87 0 .68-.516 1.225-1.547 1.633-1.024.408-2.389.612-4.093.612zm-.924-2.46a2.978 2.978 0 002.632-1.493c.272-.458.408-.974.408-1.547 0-.55-.14-1.056-.419-1.514a3.09 3.09 0 00-1.095-1.096 2.874 2.874 0 00-1.526-.419c-.551 0-1.056.14-1.514.42a3.178 3.178 0 00-1.107 1.095A2.911 2.911 0 0012.214 17c0 .56.136 1.071.408 1.537.28.458.648.823 1.107 1.095.458.272.963.409 1.514.409zm0-1.407c-.3 0-.573-.071-.816-.214a1.668 1.668 0 01-.591-.591A1.638 1.638 0 0113.62 17c0-.336.075-.622.226-.859a1.55 1.55 0 01.59-.548c.244-.136.505-.204.785-.204a1.645 1.645 0 011.418.73c.157.237.236.53.236.881 0 .301-.072.577-.215.828a1.56 1.56 0 01-.59.59 1.6 1.6 0 01-.828.215zm-7.466-3.33c.494 0 .913-.175 1.257-.526a1.77 1.77 0 00.516-1.268 1.71 1.71 0 00-.516-1.257 1.693 1.693 0 00-1.257-.526c-.48 0-.895.176-1.246.526-.35.344-.526.763-.526 1.257 0 .487.175.91.526 1.268.351.35.767.526 1.246.526zm3.868-3.405c.615 0 1.138-.215 1.568-.644.437-.43.655-.96.655-1.59a2.07 2.07 0 00-.655-1.547 2.135 2.135 0 00-1.568-.645c-.623 0-1.153.215-1.59.645-.43.422-.645.938-.645 1.547 0 .63.215 1.16.645 1.59.437.43.966.644 1.59.644zm5.37-1.708c.495 0 .914-.175 1.258-.526.35-.351.526-.774.526-1.268 0-.501-.176-.924-.526-1.268a1.693 1.693 0 00-1.257-.526c-.494 0-.92.176-1.279.526-.35.351-.526.774-.526 1.268s.175.917.526 1.268c.358.35.784.526 1.279.526zm4.824.677c.4 0 .741-.14 1.02-.42.287-.286.43-.633.43-1.041 0-.394-.143-.734-.43-1.02-.279-.287-.62-.43-1.02-.43-.401 0-.748.143-1.042.43-.287.286-.43.626-.43 1.02 0 .408.143.755.43 1.042.293.28.64.419 1.042.419z"
                ></path>
              </svg>
            </div>
            <h2 className="font-semibold text-lg mt-4">
              Build any page, communicate any idea
            </h2>
            <p>
              Everything is drag and drop in Notion — images, toggles,{" "}
              {"to-do's"}, even embedded databases
            </p>
          </div>
          <img
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=2048/front-static/pages/home/build-any-page-communicate-any-idea.png"
            className=" p-[2px] pl-4"
          />
        </div>
      </div>
      <Quote
        quoteText={
          "Notion adapts to your needs. It's as minimal or as powerful as you need it to be."
        }
        author={"Rahim Makani"}
        authorDesignation={"Director of Product, Matchgroup"}
        logoUrl={
          "https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/shared/logos/color/match-group.png"
        }
      />
    </section>
  );
};

export default BuildingBlocks;
