import { Disclosure } from "@headlessui/react";

const Accordion = ({ title, children }) => {
  return (
    <Disclosure>
      <Disclosure.Button className="p-2  font-medium flex items-center justify-between w-full">
        {title}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-chevron-down"
            viewBox="0 0 24 24"
          >
            <path d="M6 9L12 15 18 9"></path>
          </svg>
        </span>
      </Disclosure.Button>
      <Disclosure.Panel className=" p-2">{children}</Disclosure.Panel>
    </Disclosure>
  );
};

export default Accordion;
