import { useState } from "react";
import NotionLogoSVG from "../../assets/icons/NotionLogoSVG";
import Accordion from "./Accordion";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="sticky h-16 top-0 left-0 bg-white flex gap-4 items-center justify-between border-b p-3.5 z-50">
      <div className="font-bold text-xl">
        <NotionLogoSVG />
      </div>
      <div className="flex max-lg:hidden gap-4 flex-1">
        <DropdownMenu
          title="Products"
          items={["Wikis", "Projects", "Docs", "Notion AI"]}
        />
        <DropdownMenu
          title="Download"
          items={["iOS & Android", "Mac & Windows", "Web Clipper"]}
        />
        <DropdownMenu
          title="Solutions"
          items={["Enterprise", "Small business", "Personal Use"]}
        />
        <DropdownMenu
          title="Solutions"
          items={["Blogs", "Guides & Tutorials", "Webinars","Help Center","API Docs","Community","Hire a consultant"]}
        />
        <a className="cursor-pointer">Pricing</a>
      </div>
      <div className="flex max-lg:hidden items-center gap-4">
        <a className="cursor-pointer">Request a demo</a>
        <div className="h-6 w-[1px] bg-gray-200 rounded-full"></div>
        <a className="cursor-pointer">Log in</a>
        <a
          href="#"
          className="bg-gray-900 font-medium text-sm rounded-md text-white p-1.5 px-3"
        >
          Get Notion Free
        </a>
      </div>
      <button
        onClick={() => setIsMenuOpen((state) => !state)}
        className="lg:hidden"
      >
        {isMenuOpen ? (
          // Close Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="currentColor"
            className="h-6 w-6 text-black"
          >
            <path
              d="m36.24,32l15.76,15.76-4.24,4.24-15.76-15.76-15.76,15.76-4.24-4.24,15.76-15.76-15.76-15.76,4.24-4.24,15.76,15.76,15.76-15.76,4.24,4.24-15.76,15.76Z"
              fill="currentColor"
            ></path>
          </svg>
        ) : (
          // Hamburger Icon
          <svg
            className="text-black h-6 w-6"
            fill="currentColor"
            viewBox="0 0 30 30"
          >
            <path d="M2,4v2h26V4H2z M2,16h26v-2H2V16z M2,26h26v-2H2V26z"></path>
          </svg>
        )}
      </button>
      {isMenuOpen && (
        <div className="fixed z-50 overflow-y-scroll p-4 inset-0 top-16  bg-white ">
          <div>
            <Accordion title="Product">
              <div className="flex flex-col gap-1">
                <a href="">Wikis</a>
                <a href="">Projects</a>
                <a href="">Docs</a>
                <a href="">Notion AI</a>
              </div>
            </Accordion>
          </div>
          <div className="border-t mt-1">
            <Accordion title="Solutions">
              <div className="flex flex-col  gap-4">
                <div>
                  <h6 className="text-xs mb-1 text-gray-500 uppercase">
                    BY TEAM SIZE
                  </h6>
                  <div>Enterprise</div>
                  <div>Small Business</div>
                  <div>Personal</div>
                </div>
                <div>
                  <h6 className="text-xs mb-1 text-gray-500 uppercase">
                    BY TEAM FUNCTION
                  </h6>
                  <div>Enterprise</div>
                  <div>Small Business</div>
                  <div>Personal</div>
                </div>
                <div>
                  <h6 className="text-xs mb-1 text-gray-500 uppercase">
                    NOTION FOR
                  </h6>
                  <div>Enterprise</div>
                  <div>Small Business</div>
                  <div>Personal</div>
                </div>
                <div>
                  <h6 className="text-xs mb-1 text-gray-500 uppercase">
                    BY TEAM SIZE
                  </h6>
                  <div>Enterprise</div>
                  <div>Small Business</div>
                  <div>Personal</div>
                </div>
              </div>
            </Accordion>
          </div>

          <div className="border-t mt-1">
            <Accordion title="Resources">
              <div className="flex flex-col gap-1">
                <a href="">Blog</a>
                <a href="">Guides & Tutorials</a>
                <a href="">Webinars</a>
                <a href="">Help center</a>
                <a href="">API Docs</a>
                <a href="">Community</a>
                <a href="">Hire a consultant</a>
              </div>
            </Accordion>
          </div>
          <div className="border-t mt-1">
            <Accordion title="Download">
              <div className="flex flex-col gap-1">
                <a href="">iOS & Android</a>
                <a href="">Mac & Windows</a>
                <a href="">Web Clipper</a>
              </div>
            </Accordion>
          </div>
          <div className="border-t mt-1 p-2 font-medium">
            <a>Product</a>
          </div>
          <div className="border-y my-1 p-2 font-medium">
            <a>Product</a>
          </div>
          <div className="flex flex-col  gap-4 mt-4">
            <button className="bg-gray-900 hover:bg-gray-800 p-1.5 rounded-md text-white ">
              Get Notion Free
            </button>
            <button className="border hover:bg-gray-50 p-1.5 rounded-md">
              Log in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
