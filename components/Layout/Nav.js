import React, { useState } from "react";
import Account from "../Utils/Account";
import useEagerConnect from "../../hooks/useEagerConnect";
import { useWeb3React } from "@web3-react/core";
import { Popover } from "@headlessui/react";

export default function IndexPage() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  const { account, library } = useWeb3React();

  const isConnected2 = typeof account === "string" && !!library;
  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  const {
    active,
    error,
    activate,
    chainId,

    setError,
    deactivate
  } = useWeb3React();

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <>
      <div className="h-full w-full">
        {/* Code block starts */}
        <nav className="h-12 items-center text-center  font-molle text-base hidden lg:flex py-4 shadow-none  px-6 w-full flex justify-end bg-black top-0 z-40">
          <div className="flex h-10  absolute top-0 left-0 translate-y-0">
            <a href="/" className="w-116">
              <img src="/logo.png" />
            </a>
            <div className="font-mono w-min flex mx-auto p-2 mt-0.5 translate-y-1.5 ">
              <div className="mx-2 text-base text-white">
                <Popover className="relative">
                  <Popover.Button className="flex items-center text-white transition ease-in-out hover:-translate-y-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 24 24"
                      className="mx-1 mt-1 text-cyan-300"
                      stroke="#67e8f9"
                      strokeWidth="3px"
                    >
                      <path d="M12 21l-12-18h24z" />
                    </svg>
                    codex
                  </Popover.Button>

                  <Popover.Panel className=" w-48 -translate-x-24  translate-y-3 border absolute z-10 bg-black">
                    <div className="flex flex-col">
                      <a
                        className="w-full py-4 hover:bg-yggpurple-300 "
                        href="/"
                      >
                        Universe
                      </a>
                      <a
                        className="w-full py-4 hover:bg-yggpurple-300 "
                        href="/"
                      >
                        Hymns
                      </a>
                      <a
                        className="w-full py-4 hover:bg-yggpurple-300 "
                        href="/"
                      >
                        Blog
                      </a>
                    </div>
                  </Popover.Panel>
                </Popover>
              </div>
              <div className="mx-2 text-base text-white">
                <Popover className="relative">
                  <Popover.Button className="flex items-center transition ease-in-out hover:-translate-y-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 24 24"
                      className="mx-1 mt-1 text-cyan-300"
                      stroke="#67e8f9"
                      strokeWidth="3px"
                    >
                      <path d="M12 21l-12-18h24z" />
                    </svg>
                    store
                  </Popover.Button>

                  <Popover.Panel className="  w-48 -translate-x-24  translate-y-3 border absolute z-10 bg-black">
                    <div className="flex flex-col">
                      <a
                        className="w-full py-4 hover:bg-yggpurple-300 "
                        href="/"
                      >
                        Physical Games
                      </a>
                    </div>

                    <img src="/solutions.jpg" alt="" />
                  </Popover.Panel>
                </Popover>
              </div>
              <div className="mx-2 text-base text-white">
                <Popover className="relative">
                  <Popover.Button className="flex items-center transition ease-in-out hover:-translate-y-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 24 24"
                      className="mx-1 mt-1 text-cyan-300"
                      stroke="#67e8f9"
                      strokeWidth="3px"
                    >
                      <path d="M12 21l-12-18h24z" />
                    </svg>
                    web3
                  </Popover.Button>

                  <Popover.Panel className=" border border-ygg-purple-300 w-48 absolute -translate-x-16 translate-y-3 z-10 bg-black">
                    <div className="flex flex-col ">
                      <a
                        className="w-full py-4 hover:bg-yggpurple-300 "
                        href="/web3/drops"
                      >
                        Drops
                      </a>
                      <a className="hidden py-4" href="/">
                        Market
                      </a>
                      <a
                        className="w-full py-4 hover:bg-yggpurple-300 "
                        href="/web3/resources"
                      >
                        Resources
                      </a>
                    </div>
                  </Popover.Panel>
                </Popover>
              </div>
            </div>
          </div>

          {isConnected ? (
            <div className="text-white">
              <Popover className="relative">
                <Popover.Button className="flex mt-0.5 items-center -translate-x-4 translate-y-0  transition ease-in-out hover:-translate-y-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    className="mx-1 mt-1"
                    stroke="#67e8f9"
                    strokeWidth="3px"
                  >
                    <path d="M12 21l-12-18h24z" />
                  </svg>
                  <Account triedToEagerConnect={triedToEagerConnect} />
                </Popover.Button>

                <Popover.Panel className="font-mono  border w-48 absolute -translate-x-16 translate-y-4 z-10 bg-black">
                  <div className="flex flex-col">
                    <a className="w-full py-4 hover:bg-yggpurple-300 " href="/">
                      Profile
                    </a>
                    <a className="w-full py-4 hover:bg-yggpurple-300 " href="/">
                      Wallet
                    </a>
                    <button
                      className="w-full py-4 hover:bg-yggpurple-300 "
                      onClick={() => {
                        disconnect();
                        console.log(active);
                      }}
                    >
                      Disconnect
                    </button>
                  </div>
                </Popover.Panel>
              </Popover>
            </div>
          ) : (
            <div>
              <Account triedToEagerConnect={triedToEagerConnect} />
            </div>
          )}
        </nav>

        <div className="w-full h-px bg-yggpurple-300"></div>
        <div className="w-full h-px bg-yggpurple-300"></div>
        <div className="w-full h-px bg-yggpurple-300"></div>
        <nav>
          {show ? (
            <div className="h-px -mt-0.5"></div>
          ) : (
            <div className="font-molle text-2xl py-4  px-6 w-full flex lg:hidden justify-between items-center backdrop-filter backdrop-blur-sm bg-opacity-0 top-0 z-40">
              <div className="-mb-2">
                <a
                  href="/"
                  className="hidden ml-2 font-mono cursor-pointer text-4xl"
                >
                  ANTHROMANCER
                </a>
              </div>
              <div className="flex items-center">
                <div className="relative mr-6 "></div>
                <div
                  id="menu"
                  className="text-gray-800"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-menu-2"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1={4} y1={6} x2={20} y2={6} />
                      <line x1={4} y1={12} x2={20} y2={12} />
                      <line x1={4} y1={18} x2={20} y2={18} />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-menu-2"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1={4} y1={6} x2={20} y2={6} />
                      <line x1={4} y1={12} x2={20} y2={12} />
                      <line x1={4} y1={18} x2={20} y2={18} />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          )}

          <div
            className={
              show
                ? "w-full lg:hidden h-full  fixed  z-40  transform  translate-x-0 "
                : "   w-full lg:hidden h-full  fixed z-40  transform -translate-x-full -translate-y-full"
            }
          >
            {" "}
            <div
              className=" bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 z-40 fixed z-40 top-0 bg-white shadow h-full flex-col justify-between lg:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <p className="-mb-2 font-molle text-xl text-gray-800 ml-3">
                            <a
                              href="/"
                              className="font-mono cursor-pointer text-xl "
                            >
                              ANTHROMANCER
                            </a>
                          </p>
                        </div>
                        <div
                          id="cross"
                          className="text-gray-800"
                          onClick={() => setShow(!show)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m">
                      <a href="/" className="cursor-pointer">
                        <li className="text-gray-800 pt-6">
                          <div className="flex items-center">
                            <div className="text-indigo-700"></div>
                            <p className="font-mono px-3 py-4 flex text-gray-700 text-center items-center text-sm leading-snug transition duration-100 ease-in-out transform hover:-translate-y-1">
                              codex
                            </p>
                          </div>
                        </li>
                      </a>
                      <a href="/" className="cursor-pointer">
                        <li className=" text-gray-800 pt-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="text-gray-800"></div>
                              <p className="font-mono px-3 py-4 flex text-gray-700 text-center items-center text-sm leading-snug transition duration-100 ease-in-out transform hover:-translate-y-1">
                                {" "}
                                store
                              </p>
                            </div>
                          </div>
                        </li>
                      </a>
                      <a href="/" className=" cursor-pointer">
                        <li className="text-gray-800 pt-1">
                          <div className="flex items-center">
                            <div className="text-gray-800"></div>
                            <p className="font-mono px-3 py-4 flex text-gray-700 text-center items-center text-sm leading-snug transition duration-100 ease-in-out transform hover:-translate-y-1">
                              web3
                            </p>
                          </div>
                        </li>
                      </a>
                      <li className="mt-8 ml-9 flex mx-auto items-center"></li>
                      <li className="text-gray-800 mt-3  flex mx-auto text-center justify-center">
                        {isConnected ? (
                          <div className="flex mx-auto">
                            <Popover className="relative">
                              <Popover.Button className="flex items-center">
                                <Account
                                  triedToEagerConnect={triedToEagerConnect}
                                />
                              </Popover.Button>

                              <Popover.Panel className="font-mono p-2 border w-48 absolute -translate-x-8 z-10 bg-white">
                                <div className="flex flex-col">
                                  <a className="py-4" href="/">
                                    profile
                                  </a>
                                  <a className="py-4" href="/">
                                    wallet
                                  </a>
                                  <button
                                    className="py-4"
                                    onClick={() => {
                                      disconnect();
                                      console.log(active);
                                    }}
                                  >
                                    disconnect
                                  </button>
                                </div>
                              </Popover.Panel>
                            </Popover>
                          </div>
                        ) : (
                          <div>
                            <Account
                              triedToEagerConnect={triedToEagerConnect}
                            />
                          </div>
                        )}{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Code block ends */}
      </div>
      <style jsx>{`
        @font-face {
          font-family: myFirstFont;
          src: url(/fonts/Halaney.otf);
        }

          #depict,
          #depict2,
          #depict3 {
            font-family: myFirstFont;
            
          }
        }
      `}</style>
    </>
  );
}
