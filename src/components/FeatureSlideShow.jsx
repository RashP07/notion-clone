import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/virtual";

import { useEffect, useState } from "react";
import ArrowRightIcon from "../assets/icons/ArrowRightIcon";

const FeatureSlideShow = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (controlledSwiper?.slideTo) {
      controlledSwiper?.slideTo(activeIndex, 1000);
    }
  }, [controlledSwiper, activeIndex]);
  const features = [
    {
      title: "AI",
      icon: (
        <svg
          viewBox="0 0 24 23"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            fill: "currentcolor",
            flexShrink: 0,
          }}
        >
          <g>
            <path d="M10.4563 5.72844C10.9113 5.57094 10.9113 5.29094 10.4563 5.11594L7.98881 4.17094C7.55131 4.01344 7.04381 3.50594 6.86881 3.05094L5.92381 0.583437C5.76631 0.128438 5.48631 0.128438 5.31131 0.583437L4.36631 3.05094C4.20881 3.48844 3.70131 3.99594 3.24631 4.17094L0.778811 5.11594C0.323811 5.27344 0.323811 5.55344 0.778811 5.72844L3.24631 6.67344C3.68381 6.83094 4.19131 7.33844 4.36631 7.79344L5.31131 10.2609C5.46881 10.7159 5.74881 10.7159 5.92381 10.2609L6.86881 7.79344C7.02631 7.35594 7.53381 6.84844 7.98881 6.67344L10.4563 5.72844Z"></path>
            <path d="M22.4788 14.3734C23.8788 14.0234 23.8788 13.4459 22.4788 13.0959L19.3813 12.3259C17.9813 11.9759 16.5463 10.5409 16.1963 9.14091L15.4263 6.04341C15.0763 4.64341 14.4988 4.64341 14.1488 6.04341L13.3788 9.14091C13.0288 10.5409 11.5938 11.9759 10.1938 12.3259L7.09631 13.0959C5.69631 13.4459 5.69631 14.0234 7.09631 14.3734L10.1938 15.1434C11.5938 15.4934 13.0288 16.9284 13.3788 18.3284L14.1488 21.4259C14.4988 22.8259 15.0763 22.8259 15.4263 21.4259L16.1963 18.3284C16.5463 16.9284 17.9813 15.4934 19.3813 15.1434L22.4788 14.3734Z"></path>
          </g>
        </svg>
      ),
      desc: "Ask literally anything and get an answer.",
      tag: "Now with Q&A",
      tagStyle:
        "bg-violet-500/20 whitespace-nowrap  text-violet-700 text-xs font-medium  px-2 rounded-full",

      imageSrc:
        "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/https://images.ctfassets.net/spoqsaf9291f/6Onv3yRAxJAzFIZJpuwb5E/24e411a845cfcb4a8e2848e9912a9d29/Q_A_Kombi_Hero_screenshot.png",
      iconStyle:
        "h-8 w-8 bg-violet-100 p-1.5 rounded-md text-violet-600 flex-shrink-0",
      ctaStyle: "text-violet-600 font-medium",
    },
    {
      title: "Wikis",
      icon: (
        <svg
          viewBox="0 0 48 48"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            fill: "currentcolor",
            flexShrink: 0,
          }}
        >
          <path
            d="M21 40.86H6.09c-1.08 0-1.98-.9-1.98-1.98V20.22c0-1.17.6-1.83 1.74-1.83h.9v-3.36H4.89c-2.49 0-4.5 2.01-4.5 4.5v20.25c0 2.49 2.01 4.5 4.5 4.5H21v-3.42ZM43.14 15h-1.86v3.36h.99c1.08 0 1.62.63 1.62 1.62v18.93c0 1.08-.87 1.98-1.98 1.98H27v3.36h16.14c2.49 0 4.5-2.01 4.5-4.5V19.5c0-2.49-2.01-4.5-4.5-4.5Z"
            fill="currentColor"
          ></path>
          <path
            d="M39.39 4.5c-5.19.69-11.4 2.73-15.36 5.16-3.99-2.43-10.2-4.47-15.36-5.16v30.75c4.26.51 8.67 1.5 13.14 3.24l2.25.99 2.25-.99c4.47-1.74 8.88-2.76 13.14-3.24V4.5h-.06ZM13.14 31.89V9.69c3.21.57 6.93 2.01 8.64 3.39v21.24c-2.49-1.02-5.97-1.95-8.64-2.43Zm21.75 0c-2.64.48-6.15 1.41-8.64 2.43V13.08c1.68-1.41 5.43-2.82 8.64-3.39v22.2Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      desc: "Centralize your knowledge. No more hunting for answers.",
      imageSrc:
        "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/https://images.ctfassets.net/spoqsaf9291f/4NsNEojqcfzqch9Eoum1Gm/9aa7d73ac74b60358499211eff4fd074/engineering-wiki-V2.png",
      iconStyle:
        "h-8 w-8 bg-orange-100 p-1.5 rounded-md text-orange-600 flex-shrink-0",
      ctaStyle: "text-orange-600 font-medium",
    },
    {
      title: "Projects",
      icon: (
        <svg
          viewBox="0 0 49 49"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            fill: "currentcolor",
            flexShrink: 0,
          }}
        >
          <path
            clipRule="evenodd"
            d="m48.2037 9.1569-6.1556 6.2475-.0306-.0613c-3.0319 3.0932-5.2982 3.7975-9.7082 3.3382l-3.1543 3.185c1.1025 2.0212.8268 4.6244-.8575 6.3394-2.0519 2.1131-5.4513 2.1131-7.5644.0612s-2.1438-5.4512-.0613-7.5644c1.6844-1.715 4.2569-2.0212 6.3088-.9494l3.1544-3.185c-.5207-4.41.1225-6.6762 3.1543-9.76933l6.1557-6.2475 1.715 7.04375zm-14.5467 12.7706h.8269v.0612c1.1331 0 2.1438-.1225 3.0931-.3369.2144.9494.3369 1.8988.3369 2.9094 0 7.4113-6.0025 13.4138-13.4137 13.4138-7.4113 0-13.4138-6.0025-13.4138-13.4138 0-7.4112 6.0025-13.4137 13.4138-13.4137.9187 0 1.8375.0918 2.695.2756-.245 1.1944-.3369 2.4806-.245 3.92-.7963-.2144-1.5925-.3675-2.45-.3675-5.2675 0-9.555 4.2875-9.555 9.555s4.2875 9.555 9.555 9.555 9.555-4.2875 9.555-9.555c0-.9188-.1532-1.7763-.3982-2.6031zm8.483-2.5419c.7044-.5206 1.3781-1.1331 2.0825-1.8375l1.5925-1.6231c1.0413 2.6644 1.6538 5.5431 1.6538 8.575 0 12.6787-10.2901 22.9688-22.9688 22.9688-12.6788 0-22.96875-10.2901-22.96875-22.9688 0-12.6788 10.28995-22.96875 22.96875-22.96875 2.8787 0 5.635.55125 8.1769 1.53125l-1.5619 1.5925c-.7044.70438-1.2863 1.40875-1.8069 2.11313-1.5312-.39813-3.1544-.64313-4.8081-.64313-10.1369 0-18.375 8.2381-18.375 18.375s8.2381 18.375 18.375 18.375 18.375-8.2381 18.375-18.375c0-1.7763-.2756-3.4913-.735-5.1144z"
            fill="currentColor"
            fillRule="evenodd"
          ></path>
        </svg>
      ),
      desc: "Manage complex projects without the chaos",
      tag: "",
      color: "blue",
      imageSrc:
        "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/https://images.ctfassets.net/spoqsaf9291f/546F1MvF9KlFXBOO41AKLx/605f38de934bb47bcd89e6335eee1242/projects.png",
      iconStyle:
        "h-8 w-8 bg-blue-100 p-1.5 rounded-md text-blue-600 flex-shrink-0",
      ctaStyle: "text-blue-600 font-medium",
    },
    {
      title: "Docs",
      icon: (
        <svg
          viewBox="0 0 49 49"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            fill: "currentcolor",
            flexShrink: 0,
          }}
        >
          <path
            d="m40.22 14.512-12.33-9.99c-.72-.6-1.65-.93-2.61-.93H11.36c-2.28 0-4.11 1.83-4.11 4.11v33.78c0 2.28 1.86 4.11 4.11 4.11h26.28c2.28 0 4.11-1.83 4.11-4.11v-23.76c0-1.23-.57-2.43-1.53-3.21Zm-13.11-6.81 10.38 9.06c.42.36.18 1.05-.39 1.05h-8.88c-.6 0-1.11-.48-1.11-1.11v-9Zm8.85 33.75H13.01c-.69 0-1.26-.57-1.26-1.29v-31.2c0-.69.57-1.26 1.26-1.26h10.35v10.14c0 2.07 1.68 3.75 3.75 3.75h10.11v18.6c0 .69-.57 1.26-1.26 1.26Z"
            fill="currentColor"
          ></path>
          <path
            d="M17.75 27.232h13.5M17.75 34.402h13.5"
            stroke="currentColor"
            strokeWidth="1.824"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      desc: "Simple, powerful beautiful. Next gen notes & docs",
      tag: "",
      color: "yellow",
      imageSrc:
        "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/https://images.ctfassets.net/spoqsaf9291f/1h9O767GwXx8lwWKS55G6o/aa28560fbd35d34a414522259fde3517/meeting-notes.png",
      iconStyle:
        "h-8 w-8 bg-amber-100 p-1.5 rounded-md text-amber-600 flex-shrink-0",
      ctaStyle: "text-amber-600 font-medium",
    },
  ];

  return (
    <section className=" max-w-screen-lg px-4 mx-auto mt-4">
      <div className="flex flex-nowrap md:grid md:grid-cols-4 overflow-x-scroll gap-4">
        {/* <Swiper slidesPerView={1} spaceBetween={16}> */}
          {features.map((feature, index) => (
            <div
              onMouseEnter={() => {
                setActiveIndex(index);
              }}
              key={`feature-${feature.title}`}
              className={`p-4 overflow-hidden flex-1 min-w-[236px] shadow transition-all duration-200  h-36 flex   flex-col justify-between rounded-xl border group bg-gray-100/75 hover:bg-white ${
                activeIndex === index && "bg-white"
              }`}
            >
              <div className="flex items-center  gap-2 ">
                <span className={feature.iconStyle}>{feature.icon}</span>
                <p className="text-lg font-bold">{feature.title}</p>
                {feature.tag && (
                  <span className={feature.tagStyle}>{feature.tag}</span>
                )}
              </div>
              <p className="text-sm translate-y-2 group-hover:translate-y-0 duration-200">
                {feature.desc}
                <span
                  className={`${feature.ctaStyle} flex  md:hidden mt-1 transition group-hover:flex gap-1 items-center duration-100 md:opacity-0 group-hover:opacity-100`}
                >
                  Learn More
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </p>
            </div>
          ))}
        {/* </Swiper> */}
      </div>
      <div className="rounded-xl border mt-8 shadow-sm overflow-hidden  ">
        <Swiper
          onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          spaceBetween={10}
          onSwiper={setControlledSwiper}
          autoplay={{
            delay: 2500,
          }}
          speed={1000}
          modules={[Autoplay]}
          centeredSlides={true}
        >
          {features.map((feature) => (
            <SwiperSlide key={feature.title} className="m-auto">
              <img
                src={feature.imageSrc}
                alt={`feature-screenshot-${feature.title}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeatureSlideShow;
