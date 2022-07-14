import React from "react";
import { Button, cx, Divider, Icon } from "@vechaiui/react";
import { MenuAlt2Icon } from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import Constants from "../../constants";
const MobileNav = ({ location }) => {
  return (
    <>
      {" "}
      <div className="flex flex-wrap w-full space-x-4">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button as={Button} variant="light" color="primary">
            <Icon as={MenuAlt2Icon} label="gift" className="w-4 h-4" />
          </Menu.Button>
          <Transition
            as={React.Fragment}
            enter="transition ease-in-out duration-150"
            enterFrom="transform opacity-0 scale-90"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-out duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-90"
          >
            <Menu.Items
              className={
                "absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
              }
            >
              <div className="px-1 py-1">
                <div role="group">
                  <Link to={Constants.PRICING_PATH}>
                    <Menu.Item>
                      {({ active, disabled }) => (
                        <button
                          disabled={disabled}
                          aria-disabled={disabled}
                          className={cx(
                            "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                            active && "bg-primary-500 text-white",
                            disabled &&
                              "disabled:opacity-60 disabled:cursor-not-allowed"
                          )}
                        >
                          Pricing
                        </button>
                      )}
                    </Menu.Item>
                  </Link>

                  <Menu.Item>
                    {({ active, disabled }) => (
                      <button
                        disabled={disabled}
                        aria-disabled={disabled}
                        className={cx(
                          "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                          active && "bg-primary-500 text-white",
                          disabled &&
                            "disabled:opacity-60 disabled:cursor-not-allowed"
                        )}
                      >
                        About
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <Divider
                  orientation="horizontal"
                  className="border-neutral-200 dark:border-neutral-700"
                />
                <div role="group">
                  <Link
                    to={
                      location ? Constants.SIGNUP_PATH : Constants.SIGNIN_PATH
                    }
                  >
                    <Menu.Item>
                      {({ active, disabled }) => (
                        <button
                          disabled={disabled}
                          aria-disabled={disabled}
                          className={cx(
                            "flex rounded items-center font-semibold w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                            active && "bg-primary-500 text-white",
                            disabled &&
                              "disabled:opacity-60 disabled:cursor-not-allowed"
                          )}
                        >
                          {location ? "Sign up" : "Sign in"}
                        </button>
                      )}
                    </Menu.Item>
                  </Link>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
};

export default MobileNav;
