import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "../utils/useUser";
import s from "../components/Navbar.module.css";

import { useContext, useState, useEffect } from "react";
import { BiHomeHeart } from "@react-icons/all-files/bi/BiHomeHeart";
import { AiOutlineShop } from "@react-icons/all-files/ai/AiOutlineShop";
import { GiNewspaper } from "@react-icons/all-files/gi/GiNewspaper";
import { FaQuestion } from "@react-icons/all-files/fa/FaQuestion";
import { BiMessageCheck } from "@react-icons/all-files/bi/BiMessageCheck";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { MdAccountCircle } from "@react-icons/all-files/md/MdAccountCircle";
import { CgShoppingCart } from "@react-icons/all-files/cg/CgShoppingCart";
import { MdLocalHotel } from "@react-icons/all-files/md/MdLocalHotel";

const solutions = [
  {
    name: "Home",
    description: "Explore our most recent accommodations and new arrivals!",
    href: "/",
    icon: BiHomeHeart,
  },
  {
    name: "Accomodations",
    description: "Search for your dream vacation away from home",
    href: "/accommodations",
    icon: MdLocalHotel,
  },
  {
    name: "Blog",
    description: "Join our journey and stay upto date with our life style",
    href: "/blog",
    icon: GiNewspaper,
  },
  {
    name: "FAQ",
    description: "frequently asked questions",
    href: "/faq",
    icon: FaQuestion,
  },
  {
    name: "Contact",
    description: "Follow Us on other platforms like facebook and instagram!",
    href: "/contact",
    icon: BiMessageCheck,
  },
];
const callsToAction = [
  { name: "Join Email List", href: "/email_list", icon: AiOutlineMail },
  { name: "Contact Sales", href: "/contact", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "/contact",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/faq",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/category/events",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "/privacypolicy",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const { user, signOut } = useUser();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  const controlNavbar = () => {
    if(window.innerWidth <= 1024) return
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        if (show === true) {
          setShow(false);
          console.log(show);
        }
      } else {
        // if scroll up show the navbar
        if (show === false) {
          setShow(true);
          console.log(show);
        }
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (show === false) {
      const timer = setTimeout(() => {
        setHidden(true);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setHidden(false)
    }
  }, [show]);

  return (
    <Popover
      className={`fixed transition-opacity ease-in duration-700 ${
        hidden && "hidden"
      } ${
        !show && "opacity-0"
      } w-full top-0 z-50 shadow-lg lg:bg-white bg-gray-800 `}
    >
      <div className="max-w-7xl sticky mx-auto px-4 lg:px-10 lg:py-3 sm:px-6">
        <div className="flex justify-between items-center  py-1 lg:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" passHref>
              <a className="cursor-pointer">
                <div className="relative lg:w-[60px] lg:h-[60px] w-[40px] h-[40px]">
                  <Image
                    src="/images/LOGO.png"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="flex justify-between">
            {/* <div className="mr-2">
              
              <a
                className="text-sm flex items-center hover:text-pink-500 font-medium cursor-pointer"
                onClick={() => setCartOpen(!cartOpen)}
              >
              <CgShoppingCart className="" />
                <span className='hidden lg:flex'>Cart</span> (<span className="text-pink-400">{cartQuantity}</span>)
              </a>
              <MiniCart user={user} cart={cart} />
            </div> */}
            <div className="-mr-1 flex items-center -my-2 lg:hidden">
              <Popover.Button className="bg-gray-200  rounded-md p-1 inline-flex items-center justify-center text-black  hover:bg-cyan-200 focus:outline-none  focus:text-black">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-4 w-4" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>

          <Popover.Group as="nav" className="hidden lg:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-white" : "text-white",
                      "group bg-gray-800 px-2 rounded-md inline-flex items-center text-base font-medium hover:text-gray-300 focus:outline-none lg:hover:text-gray-500 focus:ring-2 lg:text-black lg:bg-white  focus:ring-white"
                    )}
                  >
                    <span>Navigation</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-white" : "text-white lg:text-black",
                        "ml-2 h-5 w-5 lg:group-hover:text-gray-500 group-hover:text-gray-300 focus:text-white"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <Popover.Button
                              className=""
                              key={item.name}
                              onClick={() => (open = false)}
                            >
                              <Link
                                className="border"
                                key={item.name}
                                href={item.href}
                              >
                                <a
                                  key={item.name}
                                  className="-m-3 p-3 flex hover:bg-cyan-100 items-start rounded-lg "
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-cyan-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base flex font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 flex text-left text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            </Popover.Button>
                          ))}
                        </div>
                        {/* <div className="px-5 py-5 bg-gray-50 flex justify-center space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <Popover.Button className="" key={item.name} onClick={() => (open = false)}>
                            <Link href={item.href} key={item.name}>
                            <div key={item.name} className="flow-root items-center align-middle ">
                              <a
                                href={item.href}
                                className="-m-3 p-3 hover:bg-cyan-100  flex items-center rounded-md text-base font-medium text-gray-900 "
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-cyan-600"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                            </Link>
                            </Popover.Button> 
                          ))}
                        </div> */}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link href="/pricing">
              <a className="text-base font-medium text-black hover:text-gray-900">
                Pricing
              </a>
            </Link>
            <Link href="/about">
              <a className="text-base font-medium text-black hover:text-gray-900">
                About
              </a>
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-white" : "text-white",
                      "group bg-gray-800 rounded-md lg:text-black lg:bg-white inline-flex px-2 items-center text-base font-medium hover:text-gray-300 lg:hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-white" : "text-white lg:text-black",
                        "ml-2 h-5 w-5 lg:group-hover:text-gray-500 group-hover:text-gray-300"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Popover.Button
                              className=""
                              key={item.name}
                              onClick={() => (open = false)}
                            >
                              <Link key={item.name} href={item.href}>
                                <a
                                  key={item.name}
                                  className="-m-3 p-3  hover:bg-cyan-100 flex items-start rounded-xl "
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-cyan-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base flex font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-left text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            </Popover.Button>
                          ))}
                        </div>
                        {/* <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                              Recent Posts
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li
                                  key={post.id}
                                  className="text-base truncate"
                                >
                                  <a
                                    href={post.href}
                                    className="font-medium text-gray-900 hover:text-gray-700"
                                  >
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a
                              href="#"
                              className="font-medium text-pink-600 hover:text-indigo-500"
                            >
                              {" "}
                              View all posts{" "}
                              <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
              {/*  */}
            </Popover>
          </Popover.Group>
          <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
            <div className="ml-3">
              {user && (
                <div className="ml-1 border border-black rounded-full px-1 text-sm hover:shadow-md  ">
                  <Link href="/account">
                    <a className="flex p-2 px-3 items-center">
                      <MdAccountCircle className="text-cyan-500 mr-1" />
                      Account
                    </a>
                  </Link>
                </div>
              )}
            </div>

            <div>
              {user ? (
                <div className="ml-3 p-2 px-3 border border-black rounded-full  text-sm hover:shadow-md ">
                  <Link href="/">
                    <a onClick={() => signOut()}>
                      <span>Sign Out</span>
                    </a>
                  </Link>
                </div>
              ) : (
                <Link href="/signin">
                  <a className={s.link}>Sign in</a>
                </Link>
              )}
            </div>
            {!user && (
              <div className="ml-3">
                <Link href="/signup">
                  <a className={s.link}>Sign Up</a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 z-50 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white z-50 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-end">
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-cyan-500 hover:bg-cyan-100 focus:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <Popover.Button
                      key={item.name}
                      onClick={() => (open = false)}
                    >
                      <Link key={item.name} href={item.href}>
                        <a
                          key={item.name}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-cyan-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      </Link>
                    </Popover.Button>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Popover.Button className="" onClick={() => (open = false)}>
                  <Link href="/pricing">
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Pricing
                    </a>
                  </Link>
                </Popover.Button>
                <Popover.Button className="" onClick={() => (open = false)}>
                  <Link href="/about">
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      About
                    </a>
                  </Link>
                </Popover.Button>
                {resources.map((item) => (
                  <Popover.Button
                    key={item.name}
                    className=""
                    onClick={() => (open = false)}
                  >
                    <Link key={item.name} href={item.href}>
                      <a
                        key={item.name}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </a>
                    </Link>
                  </Popover.Button>
                ))}
              </div>
              <div className="flex flex-col text-center justify-center">
                {user && (
                  <Popover.Button className="" onClick={() => (open = false)}>
                    <Link href="/account">
                      <a className="w-full mb-3 flex items-center pr-9 justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-cyan-300 hover:bg-cyan-500">
                        <MdAccountCircle className="mr-2 text-black" />
                        Account
                      </a>
                    </Link>
                  </Popover.Button>
                )}
                {user ? (
                  <Popover.Button className="" onClick={() => (open = false)}>
                    <Link href="/">
                      <a
                        onClick={() => signOut()}
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-cyan-300 hover:bg-cyan-500"
                      >
                        Log Out
                      </a>
                    </Link>
                  </Popover.Button>
                ) : (
                  <Popover.Button className="" onClick={() => (open = false)}>
                    <Link
                      className="flex justify-center items-center border"
                      href="/signup"
                    >
                      <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-cyan-500 hover:bg-cyan-300 hover:shadow-lg">
                        Sign up
                      </a>
                    </Link>
                  </Popover.Button>
                )}
                {!user && (
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing Guest?{" "}
                    <Popover.Button className="" onClick={() => (open = false)}>
                      <Link href="/signin">
                        <a className="text-cyan-500 hover:text-black">
                          Sign in
                        </a>
                      </Link>
                    </Popover.Button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
