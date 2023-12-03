import LinkButton from "./shared/LinkButton";
import SectionHeading from "./shared/SectionHeading";

const WaysToUse = () => {
  return (
    <section className="max-w-screen-lg flex flex-col items-center mx-auto p-8  ">
      <SectionHeading>Endless Ways to use it</SectionHeading>
      <LinkButton>Browse all templates</LinkButton>
      <div className="relative grid mt-8 grid-flow-row sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-8">
        <img
          className="absolute hidden md:block right-0 -top-36 h-56"
          src="https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/shared/illustrations/blocks/topPeekJ.png"
          alt=""
        />
        <div className="rounded-xl flex flex-col bg-gray-100 md:row-span-3 md:col-span-2 border">
          <div className="p-8 flex flex-col gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-orange-500 w-8"
              viewBox="0 0 64 64"
            >
              <path
                fill="currentColor"
                d="M56 34h-7v20H37V38H27v16H15V34H8v-4L32 6l9 9V8h8v15l7 7v4z"
              ></path>
            </svg>
            <h6
              className="font-semibold
            "
            >
              Company Wiki
            </h6>
            <LinkButton>Get template</LinkButton>
          </div>
          <div className="pl-8 rounded-xl overflow-hidden mt-auto ">
            <img
              src=" https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/home/company-wiki-template.png"
              alt=""
            />
          </div>
        </div>
        <div className="rounded-xl space-y-4 bg-gray-100 p-8 border">
          <svg
            viewBox="0 0 27 30"
            style={{
              WebkitFlexShrink: "0",
              MsFlexShrink: "0",
              flexShrink: "0",
            }}
            className="h-8 text-blue-600"
            display="block"
          >
            <path
              fill="currentColor"
              d="M2.005 29.512a1.751 1.751 0 001.746-1.75l.026-7.64c.432-.128 1.44-.442 2.85-.438 5.078.013 8.853 2.67 13.931 2.684 2.159.006 3.454-.321 4.593-.85 1.095-.516 1.645-1.478 1.65-2.845l.045-13.912c.004-1.208-.828-2.03-2.036-2.034-.993-.002-2.232.47-4.289.464C15.601 3.177 11.668.52 6.589.506 4.503.501 3.308.8 2.026 1.386.959 1.872.353 2.62.348 3.928L.27 27.752a1.758 1.758 0 001.735 1.76zm1.954-16.74l.014-4.173c.346-.33 1.225-.73 2.707-.727.417.002 1.309.062 1.97.164l.013-3.812c1.697.234 3.292.742 4.93 1.236l-.012 3.798c1.58.522 3.378.958 4.93 1.15l.014-3.813c.604.073 1.222.118 1.855.12 1.108.003 2.086-.095 2.82-.295l-.012 3.798c-.619.171-1.64.313-2.82.31a14.414 14.414 0 01-1.856-.12l-.014 4.171c.834.103 1.568.12 2.115.121 1.107.003 1.885-.11 2.561-.295l-.012 3.683c-.317.33-1.24.716-2.736.712-.647-.002-1.28-.075-1.941-.178l.013-4.043c-1.769-.249-3.292-.627-4.93-1.15l-.014 3.943c-1.552-.465-3.162-.915-4.93-1.107l.013-4.057c-.547-.073-1.122-.161-1.97-.163-1.483-.004-2.361.396-2.708.726zm4.678-.564c1.797.264 3.191.714 4.93 1.222l.014-4.172c-1.638-.48-3.119-.958-4.93-1.222l-.014 4.172z"
            ></path>
          </svg>
          <h6 className="font-semibold">Product Roadmap</h6>
          <LinkButton>Get template</LinkButton>
        </div>
        <div className="rounded-xl space-y-4 bg-gray-100 p-8 border">
          <svg
            className="text-orange-500 h-8 w-8"
            viewBox="0 0 31 31"
            style={{
              WebkitFlexShrink: "0",
              MsFlexShrink: "0",
              flexShrink: "0",
            }}
            display="block"
          >
            <path
              fill="currentColor"
              d="M15.278 30.602c8.344.023 15.215-6.822 15.242-15.166.028-8.33-6.812-15.21-15.142-15.232C7.034.18.164 7.025.136 15.355.11 23.7 6.948 30.58 15.278 30.602zm-1.556-7.988c-.647-.002-1.15-.291-1.608-.854l-3.368-4.037c-.33-.403-.458-.764-.457-1.18a1.594 1.594 0 011.603-1.593c.518.001.92.204 1.307.665l2.493 3.1 5.64-8.905c.376-.603.852-.904 1.413-.903.863.003 1.652.638 1.65 1.53-.002.36-.147.748-.407 1.12l-6.71 10.198c-.375.545-.937.86-1.556.859z"
            ></path>
          </svg>
          <h6
            className="font-semibold
          "
          >
            OKRs
          </h6>
          <LinkButton>Get template</LinkButton>
        </div>
        <div className="rounded-xl space-y-4 bg-gray-100 p-8 border">
          <svg
            className="text-amber-600 w-8 h-8"
            viewBox="0 0 41 40"
            style={{
              WebkitFlexShrink: "0",
              MsFlexShrink: "0",
              flexShrink: "0",
            }}
            display="block"
          >
            <g clipPath="url(#clip0_2795_333972)">
              <path
                fill="currentColor"
                d="M15.855 11.701h8.82c.934 0 1.48-.59 1.48-1.568v-1.51c0-.993-.546-1.568-1.48-1.568h-1.022c-.13-1.756-1.583-3.165-3.381-3.165-1.799 0-3.252 1.41-3.381 3.165h-1.036c-.92 0-1.467.575-1.467 1.568v1.51c0 .979.546 1.569 1.467 1.569zm4.417-3.222c-.72 0-1.31-.604-1.31-1.295 0-.72.59-1.295 1.31-1.295.72 0 1.295.576 1.295 1.295 0 .69-.576 1.295-1.295 1.295zm-7.625 31.104h15.25c3.194 0 5.064-1.885 5.064-5.122V12.766c0-3.208-1.842-5.136-4.978-5.136h-.302c.13.288.187.633.187.993v1.395c0 .432-.058.82-.201 1.166h.215c.993 0 1.525.633 1.525 1.61v21.624c0 1.021-.59 1.626-1.654 1.626H12.776c-1.064 0-1.654-.605-1.654-1.626V12.795c0-.978.547-1.611 1.54-1.611h.215c-.144-.346-.201-.734-.201-1.166V8.623c0-.36.057-.705.172-.993h-.288c-3.136 0-4.977 1.928-4.977 5.136v21.695c0 3.237 1.87 5.122 5.064 5.122zm2.057-19.365c.82 0 1.468-.647 1.468-1.467 0-.806-.648-1.453-1.468-1.453-.791 0-1.453.662-1.453 1.453a1.47 1.47 0 001.453 1.467zm4.13-.244h7.25a1.222 1.222 0 100-2.446h-7.25a1.222 1.222 0 100 2.446zm-4.13 5.308c.82 0 1.468-.647 1.468-1.467 0-.806-.662-1.439-1.468-1.439-.806 0-1.453.648-1.453 1.439 0 .82.648 1.467 1.453 1.467zm4.13-.23h7.25c.69 0 1.223-.546 1.223-1.237 0-.662-.547-1.209-1.223-1.209h-7.25c-.677 0-1.224.547-1.224 1.209 0 .69.532 1.237 1.223 1.237zm-4.13 5.568c.82 0 1.468-.633 1.468-1.453 0-.82-.648-1.453-1.468-1.453-.791 0-1.453.647-1.453 1.453 0 .805.662 1.453 1.453 1.453zm4.13-.23h7.25c.676 0 1.223-.547 1.223-1.223a1.21 1.21 0 00-1.223-1.209h-7.25a1.21 1.21 0 00-1.224 1.209c0 .676.547 1.223 1.223 1.223zM8.172 64.67h24.183c3.295 0 5.079-1.784 5.079-5.05v-8.23c0-2.042-.259-2.905-1.194-4.085l-4.33-5.625c-1.842-2.374-2.748-3.079-5.439-3.079H14.057c-2.676 0-3.582.705-5.438 3.079l-4.33 5.625c-.922 1.194-1.195 2.043-1.195 4.086v8.229c0 3.266 1.798 5.05 5.079 5.05zm12.099-9.625c-2.216 0-3.568-1.54-3.568-3.395v-.202c0-.69-.403-1.352-1.266-1.352H7.54c-.605 0-.691-.49-.403-.878l5.107-6.646c.532-.69 1.165-1.007 2.014-1.007h12.013c.849 0 1.482.316 2.014 1.007l5.093 6.646c.302.389.201.878-.389.878h-7.898c-.863 0-1.266.662-1.266 1.352v.202c0 1.856-1.352 3.395-3.553 3.395z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_2795_333972">
                <rect
                  width="39.544"
                  height="39.544"
                  x="0.5"
                  y="0.254"
                  fill="none"
                  rx="6.203"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          <h6
            className="font-semibold
          "
          >
            Meeting Notes
          </h6>
          <LinkButton>Get template</LinkButton>
        </div>
        <div className="rounded-xl space-y-4 bg-gray-100 p-8 border">
          <svg
            className="text-orange-600 h-8 w-8"
            viewBox="0 0 41 40"
            style={{
              WebkitFlexShrink: "0",
              MsFlexShrink: "0",
              flexShrink: "0",
            }}
            display="block"
          >
            <path
              fill="currentColor"
              d="M38.585 22.617c-.009-1.712-2.334-3.243-5.327-3.251l-6.1-.017c-.805-.002-1.093-.175-1.594-.694L15.686 8.083c-.33-.346-.703-.52-1.12-.521l-2.13-.006c-.374 0-.605.344-.42.733l5.115 11.005-7.484.8-2.66-4.61c-.215-.361-.531-.52-.992-.521l-.676-.002c-.417-.001-.706.285-.707.688l-.045 13.754c-.002.403.285.691.702.692l.677.002c.46.001.777-.17.994-.515l2.691-4.597 7.478.84-5.186 10.963c-.189.403.04.749.415.75l2.129.005c.417.002.792-.17 1.124-.514l9.947-10.52c.505-.53.793-.688 1.599-.686l6.1.017c2.992.008 5.328-1.511 5.348-3.223z"
            ></path>
          </svg>
          <h6
            className="font-semibold
          "
          >
            {" "}
            Vacation Planner
          </h6>
          <LinkButton>Get template</LinkButton>
        </div>
        <div className="rounded-xl space-y-4 bg-gray-100 p-8 border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-teal-600 w-8 h-8"
            viewBox="0 0 64 64"
          >
            <path
              fill="currentColor"
              d="M48 12V6h-6v6H22V6h-6v6H8v40h48V12h-8zM22 47h-8v-7h8v7zm0-12h-8v-7h8v7zm14 12h-8v-7h8v7zm0-12h-8v-7h8v7zm14 12h-8v-7h8v7zm0-12h-8v-7h8v7z"
            ></path>
          </svg>
          <h6
            className="font-semibold
          "
          >
            Editorial Calendar
          </h6>
          <LinkButton>Get template</LinkButton>
        </div>
        <div className="rounded-xl space-y-4 bg-gray-100 p-8 border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-violet-600 w-8 h-8"
            viewBox="0 0 64 64"
          >
            <path
              fill="currentColor"
              d="M50.67 8H13.33L8 40v16h48V40L50.67 8zM38 40c0 3.31-2.69 6-6 6s-6-2.69-6-6H14.08l4.33-26h27.17l4.33 26H37.99z"
            ></path>
          </svg>
          <h6
            className="font-semibold
          "
          >
            Habit tracker
          </h6>
          <LinkButton>Get template</LinkButton>
        </div>
      </div>
    </section>
  );
};

export default WaysToUse;
