import NotionLogoSVG from "../assets/icons/NotionLogoSVG";

const FooterLink = ({ text, link = "#" }) => {
  return (
    <a
      href={link}
      className="text-gray-500 tracking-wide block hover:text-blue-500 hover:underline underline-offset-2"
    >
      {text}
    </a>
  );
};

const Footer = () => {
  const data = {
    products: ["Wikis", "Projects", "Docs", "Notion AI", "What's New"],
    solutions: [
      "Enterprise",
      "Small business",
      "Personal use",
      "Remote Work",
      "Startups",
      "Education",
      "Nonprofits",
      "Engineering",
      "Product",
      "Design",
      "Managers",
    ],
    downloads: ["Mac & Windows", "iOS & Android", "Web Clipper"],
    build: [
      "Integrations",
      "Templates",
      "API docs",
      "Guides & Tutorials",
      "Hire a consultant",
      "Become an affiliate",
    ],
    learn: ["Customer stories", "Help center", "Webinars", "Blog", "Community"],
    getStarted: [
      "Switch from Confluence",
      "Switch from Asana",
      "Switch from Evernote",
      "Compare vs Monday",
      "Compare vs ClickUp",
      "Compare vs Jira",
    ],
    resources: [
      "Pricing",
      "About us",
      "Careers",
      "Media kit",
      "Email us",
      "Security",
      "Cookie settings",
      "Terms & privacy",
      "California privacy notice",
      "Status",
    ],
  };
  return (
    <footer className="border-t">
      <div className="max-w-screen-lg gap-8 mx-auto py-16 grid p-4 sm:p-8 m sm:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <NotionLogoSVG />
          <div className="flex gap-1 mt-4">
            <div className="text-gray-500 p-1.5 rounded-md hover:bg-gray-100 hover:text-gray-800">
              <svg
                className="h-5 w-5"
                viewBox="0 0 18 18"
                style={{
                  WebkitFlexShrink: "0",
                  MsFlexShrink: "0",
                  flexShrink: "0",
                }}
                fill="currentColor"
                display="block"
              >
                <path
                  fillRule="evenodd"
                  d="M9 1.621c2.405 0 2.689.011 3.635.053.879.039 1.354.186 1.67.309.418.162.721.359 1.034.671.316.316.51.615.675 1.034.123.316.271.795.309 1.67.042.949.053 1.234.053 3.635s-.011 2.689-.053 3.635c-.039.879-.186 1.354-.309 1.67a2.802 2.802 0 01-.671 1.034c-.316.316-.615.51-1.034.675-.316.123-.795.271-1.67.309-.949.042-1.234.053-3.635.053s-2.689-.011-3.635-.053c-.879-.039-1.354-.186-1.67-.309a2.802 2.802 0 01-1.034-.671 2.815 2.815 0 01-.675-1.034c-.123-.316-.271-.795-.309-1.67-.042-.949-.053-1.234-.053-3.635s.011-2.689.053-3.635c.039-.879.186-1.354.309-1.67.162-.418.359-.721.671-1.034.316-.316.615-.51 1.034-.675.316-.123.795-.271 1.67-.309.946-.042 1.23-.053 3.635-.053zM9 0C6.557 0 6.251.011 5.291.053 4.335.095 3.677.25 3.108.471a4.389 4.389 0 00-1.596 1.041A4.404 4.404 0 00.471 3.105C.25 3.678.095 4.332.053 5.288.011 6.251 0 6.557 0 9c0 2.443.011 2.749.053 3.709.042.956.197 1.614.418 2.183a4.389 4.389 0 001.041 1.596 4.392 4.392 0 001.593 1.037c.573.221 1.227.376 2.183.418.96.042 1.266.053 3.709.053s2.749-.011 3.709-.053c.956-.042 1.614-.197 2.183-.418a4.413 4.413 0 001.593-1.037c.5-.499.809-1.002 1.037-1.593.221-.573.376-1.227.418-2.183.042-.96.053-1.266.053-3.709s-.011-2.749-.053-3.709c-.042-.956-.197-1.614-.418-2.183a4.21 4.21 0 00-1.03-1.6A4.392 4.392 0 0014.896.474c-.573-.221-1.227-.376-2.183-.418C11.75.01 11.444 0 9 0zm0 4.377A4.625 4.625 0 004.377 9 4.625 4.625 0 009 13.623 4.625 4.625 0 0013.623 9 4.625 4.625 0 009 4.377zm0 7.622A3 3 0 119 6a3 3 0 010 6zm4.806-6.726a1.079 1.079 0 100-2.158 1.079 1.079 0 000 2.158z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="text-gray-500 p-1.5 rounded-md hover:bg-gray-100 hover:text-blue-500">
              <svg
                className="h-5 w-5"
                style={{
                  WebkitFlexShrink: "0",
                  MsFlexShrink: "0",
                  flexShrink: "0",
                  marginTop: 2,
                }}
                fill="currentColor"
                display="block"
              >
                <path d="M22 2.128a8.832 8.832 0 01-2.59.714A4.565 4.565 0 0021.395.328c-.871.52-1.84.9-2.865 1.104A4.495 4.495 0 0015.235 0c-2.492 0-4.51 2.034-4.51 4.543 0 .354.039.7.116 1.034-3.75-.191-7.076-2-9.301-4.75A4.571 4.571 0 00.93 3.11c0 1.576.794 2.968 2.005 3.781a4.513 4.513 0 01-2.046-.566v.057a4.537 4.537 0 003.621 4.456 4.491 4.491 0 01-2.041.08c.576 1.803 2.242 3.119 4.215 3.157A9.012 9.012 0 010 15.958 12.7 12.7 0 006.92 18c8.299 0 12.84-6.927 12.84-12.933 0-.2-.003-.393-.012-.588a9.093 9.093 0 002.25-2.35z"></path>
              </svg>
            </div>
            <div className="text-gray-500 p-1.5 rounded-md hover:bg-gray-100 hover:text-blue-700">
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 18"
                style={{
                  WebkitFlexShrink: "0",
                  MsFlexShrink: "0",
                  flexShrink: "0",
                }}
                fill="currentColor"
                display="block"
              >
                <path
                  fillRule="evenodd"
                  d="M2.077 4.154a2.078 2.078 0 10-.002-4.156 2.078 2.078 0 00.002 4.156zM0 18V5.539h4.154V18zM6.924 5.539h3.83v1.963h.056c.533-.957 1.838-1.963 3.783-1.963 4.044 0 4.792 2.517 4.792 5.791V18H15.39v-5.912c0-1.41-.029-3.225-2.076-3.225-2.08 0-2.398 1.536-2.398 3.122V18H6.924z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="text-gray-500 p-1.5 rounded-md hover:bg-gray-100 hover:text-blue-800">
              <svg
                className="h-5 w-5"
                viewBox="0 0 18 18"
                style={{
                  WebkitFlexShrink: "0",
                  MsFlexShrink: "0",
                  flexShrink: "0",
                }}
                fill="currentColor"
                display="block"
              >
                <path d="M17.999 8.999a8.999 8.999 0 10-10.405 8.89V11.6H5.309V8.999h2.285V7.016c0-2.255 1.344-3.501 3.399-3.501.985 0 2.015.176 2.015.176v2.215h-1.135c-1.118 0-1.467.694-1.467 1.405v1.688h2.496l-.399 2.601h-2.097v6.289a9.001 9.001 0 007.593-8.89z"></path>
              </svg>
            </div>
            <div className="text-gray-500 p-1.5 rounded-md hover:bg-gray-100 hover:text-red-600">
              <svg
                className="h-5 w-5"
                viewBox="0 0 18 18"
                style={{
                  WebkitFlexShrink: "0",
                  MsFlexShrink: "0",
                  flexShrink: "0",
                }}
                fill="currentColor"
                display="block"
              >
                <path d="M9 2.07C.155 2.07 0 2.857 0 9s.155 6.93 9 6.93 9-.787 9-6.93-.155-6.93-9-6.93zm2.884 7.231l-4.041 1.886c-.354.164-.644-.02-.644-.41V7.224c0-.39.29-.574.644-.41L11.884 8.7c.354.166.354.436 0 .601z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="space-y-1.5">
          <h6 className="font-medium pt-4">Product</h6>
          {data.products.map((item) => (
            <FooterLink key={`footer-${item}`} text={item} />
          ))}
          <h6 className="font-medium pt-4">Solutions</h6>
          {data.solutions.map((item) => (
            <FooterLink key={`footer-${item}`} text={item} />
          ))}
        </div>
        <div className="space-y-1.5">
          <h6 className="font-medium pt-4">Download</h6>
          {data.downloads.map((item) => (
            <FooterLink key={`footer-${item}`} text={item} />
          ))}
          <h6 className="font-medium pt-4">Build</h6>
          {data.build.map((item) => (
            <FooterLink key={`footer-${item}`} text={item} />
          ))}
          <h6 className="font-medium pt-4">Learn</h6>
          {data.learn.map((item) => (
            <FooterLink key={`footer-${item}`} text={item} />
          ))}
        </div>
        <div className="space-y-1.5">
          <h6 className="font-medium pt-4">Get started</h6>
          {data.products.map((item) => (
            <FooterLink key={`footer-${item}`} text={item} />
          ))}
          <h6 className="font-medium pt-4">Resources</h6>
          {data.products.map((item) => (
            <FooterLink key={`footer-${item}`} text={item} />
          ))}
        </div>
        <div className=""></div>
        <div className="text-sm my-8 ">
          <p>Do Not Sell or Share My Info</p>
          <p className="text-gray-400">© 2023 Notion Labs, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
