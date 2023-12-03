import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const DropdownMenu = ({ title, items }) => {
  return (
    
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center gap-1.5 ">
        {title}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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
      </Menu.Button>
      <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
      <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none p-1 flex flex-col">
        {items.map((item) => (
          <Menu.Item key={item}>
            {({ active }) => (
              <a
              className={`${
                active && "bg-gray-100 rounded-md"
              }  w-full px-2 py-1`}
              href="#"
              >
                {item}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
        </Transition>
    </Menu>
  );
};

export default DropdownMenu;
