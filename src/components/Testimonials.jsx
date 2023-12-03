import LinkButton from "./shared/LinkButton";
import SectionHeading from "./shared/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ArrowRightIcon from "../assets/icons/ArrowRightIcon";
import { useState } from "react";

const Testimonials = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="max-w-screen-lg flex flex-col items-center mx-auto p-8 ">
      <SectionHeading>
        Join a global movement. <br />
        Unleash your creativity.
      </SectionHeading>
      <p className="my-4 max-w-md text-center">
        Our vibrant community produces content, teaches courses, and leads
        events all over the world.
      </p>
      <LinkButton>Learn More</LinkButton>
      <img
        src="https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/home/avatars.png"
        alt=""
      />
      <div className="grid  grid-cols-1 md:grid-cols-6 gap-6 ">
        <div className="col-span-1 md:col-span-2 bg-gray-100 rounded-xl p-8 border">
          <p className="font-bold text-4xl text-blue-400">1M+</p>
          <span>community members</span>
        </div>
        <div className="col-span-1 md:col-span-2 bg-gray-100 rounded-xl p-8 border">
          <p className="font-bold text-4xl text-blue-400">150+</p>
          <span>community groups</span>
        </div>
        <div className="col-span-1 md:col-span-2 bg-gray-100 rounded-xl p-8 border">
          <p className="font-bold text-4xl text-blue-400">50+</p>
          <span>countries represented</span>
        </div>
        <div className="col-span-1 md:col-span-3 bg-gray-100 rounded-xl p-8 border">
          <h2 className="font-semibold text-lg">
            An always-on support network
          </h2>
          <p>Swap setups and share tips in over 149 online communities.</p>
          <img
            className="md:h-52 md:w-52 "
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/community-icons-V2.png"
          />
        </div>
        <div className="relative col-span-1 md:col-span-3  bg-gray-100 rounded-xl border overflow-hidden">
          <div className="p-8">
            <h2 className="font-semibold text-lg">
              An always-on support network
            </h2>
            <p>Swap setups and share tips in over 149 online communities.</p>
          </div>
          <img
            className="pl-8  bottom-0 right-0 "
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/welcome-to-notion.png"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-6 md:row-span-3 gap-6 ">
        <div className="md:col-span-2 md:row-span-3 bg-gray-100 rounded-xl p-8 border ">
          <Swiper
            navigation={true}
            modules={[Pagination, Controller]}
            pagination={true}
            className="p-8 relative"
            slidesPerView={1}
            spaceBetween={100}
            onSwiper={(swiper) => setSwiper(swiper)}
          >
            <SwiperSlide>
              <img
                className="aspect-square object-cover object-center"
                src="https://www.notion.so/cdn-cgi/image/format=webp,width=3840,quality=75/front-static/pages/home/community/community-slide-01.png"
                alt=""
              />
              <p className="my-2 text-center">Community meet-up in Tokyo</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="aspect-square object-cover object-center"
                src="https://www.notion.so/cdn-cgi/image/format=webp,width=3840,quality=75/front-static/pages/home/community/community-slide-02.png"
                alt=""
              />
              <p className="my-2 text-center">
                Notion ambassador event in New York
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="aspect-square object-cover object-center"
                src="https://www.notion.so/cdn-cgi/image/format=webp,width=3840,quality=75/front-static/pages/home/community/community-slide-03.png"
                alt=""
              />
              <p className="my-2 text-center">
                Sharing Notion setups in San Francisco
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="aspect-square object-cover object-center"
                src="https://www.notion.so/cdn-cgi/image/format=webp,width=3840,quality=75/front-static/pages/home/community/community-slide-04.png"
                alt=""
              />
              <p className="my-2 text-center">Coffee pop-up in London</p>
            </SwiperSlide>
            <button
              onClick={() => swiper?.slideNext()}
              className="h-10 w-10 rounded-full md:flex items-center justify-center hidden top-64 right-12 z-10 bg-white absolute"
            >
              <ArrowRightIcon />
            </button>

            <button
              onClick={() => swiper?.slidePrev()}
              className="h-10 w-10 rotate-180 rounded-full md:flex hidden  items-center justify-center top-64 left-12 z-10 bg-white absolute"
            >
              <ArrowRightIcon />
            </button>
          </Swiper>
        </div>
        <div className="col-span-1 md:row-span-1 bg-gray-100 rounded-xl p-4 border">
          <div className="flex gap-2 items-center mb-2">
            <div className="rounded-full h-12 w-12 overflow-hidden">
              <img
                className="object-center object-cover"
                src="https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/front-static/pages/home/avatars/twitter-avatar-deborah.png"
                alt=""
              />
            </div>
            <div className="flex flex-col text-sm">
              <p className="font-semibold">Deborah Mecca</p>
              <p className="text-gray-500">@DebMecca</p>
            </div>
          </div>
          <p className="">
            I used to HATE documenting things. And then I started using
            <span className="text-blue-500"> @NotionHQ</span> and I document a
            lot. A LOT A LOT. Now I just realize that it {"wasn't"} that I hated
            documenting, I just hated Google Docs.
          </p>
        </div>

        <div className="col-span-1 md:row-span-1 bg-gray-100 rounded-xl p-4 border">
          <div className="flex gap-2 items-center mb-2">
            <div className="rounded-full h-12 w-12 overflow-hidden">
              <img
                className="object-center object-cover"
                src="https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/front-static/pages/home/avatars/twitter-avatar-andre.png"
                alt=""
              />
            </div>
            <div className="flex flex-col text-sm">
              <p className="font-semibold">Deborah Mecca</p>
              <p className="text-gray-500">@DebMecca</p>
            </div>
          </div>
          <p className="">
            One of the most incredible things about
            <span className="text-blue-500"> @NotionHQ</span> a is the dynamic
            community being built - creating and sharing at its best.
          </p>
        </div>
        <div className="col-span-1 md:row-span-1 bg-gray-100 rounded-xl p-4 border">
          <div className="flex gap-2 items-center mb-2">
            <div className="rounded-full h-12 w-12 overflow-hidden">
              <img
                className="object-center object-cover"
                src="https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/front-static/pages/home/avatars/twitter-avatar-oliver.png"
                alt=""
              />
            </div>
            <div className="flex flex-col text-sm">
              <p className="font-semibold">Deborah Mecca</p>
              <p className="text-gray-500">@DebMecca</p>
            </div>
          </div>
          <p className="">
            <span className="text-blue-500">@NotionHQ</span> Truly impressed by
            the velocity and quality of your work. Making using Notion even more
            fun week after week!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
