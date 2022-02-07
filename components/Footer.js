import Image from "next/image";
import shopify from "./icons/Shopify.png";
import nextlogo from "./icons/nextjs-black-logo.png";
import tail from "./icons/tailwind-css-logo-vector.png";
import ver from "./icons/vercel.png";
import supa from "./icons/supabase-logo-vector.png";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram";
import Link from "next/link";
import { IconContext } from "react-icons"

const navigation = [
  { name: "About", href: "/underwork" },
  { name: "Store", href: "/underwork" },
  { name: "Contact", href: "/contact" },
  { name: "Terms and Conditions", href: "/underwork" },
];

export default function Footer() {
  return (
    <footer className="bg-yellow-300">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-col mb-10 flex-wrap justify-center">
          {navigation.map((item, i) => (
            <div key={i} className="px-6 sm:text-center py-2">
              <Link
              href={item.href}
              >
              <a  className="text-black opacity-85 hover:text-gray-900">
                {item.name}
              </a>

              </Link>
            </div>
          ))}
        </nav>
        <div className="flex flex-col text-center justify-center">
          <h1 className="text-center lg:mb-5">Social Networks</h1>
          <h1 className="text-center mb-3 text-gray-500 text-sm">Follow us and keep yourself informed</h1>
          <div className="flex mt-4 mb-10 justify-center">
              <a href="https://www.facebook.com/solocienadventure/" target="_blank">

              <AiFillFacebook className="w-[50px] text-gray-800 mr-3 h-[50px]" />
              </a>
<a href="https://www.instagram.com/sol_o_cien/?r=nametag" target="_blank">

              <GrInstagram className="w-[50px] text-gray-800 h-[50px]"/>
</a>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center">

          <div className="lg:mr-5">

          <h1 className="text-center mb-4">You can find us on</h1>
          <h1 className="text-center mb-3 text-gray-500 text-sm">352 Calle Mexicali, 22710, Rosarito B.C.</h1>
          <h1 className="text-center mb-3 text-gray-500 text-sm">Phone 1(562) 832-2222</h1>
          <h1 className="text-center mb-3 text-gray-500 text-sm">Phone (661) 106-2419</h1>
          <h1 className="text-center mb-3 text-gray-500 text-sm">info@solocienadventures.com</h1>

          <h1 className="text-center mt-8 mb-4">Contact Us</h1>
          <h1 className="text-center mb-3 text-gray-500 text-sm">We want to know how can we improve our service</h1>
          
          </div>
          <div className="flex justify-center">

          <div className="relative my-4 rounded-lg sm:w-[350px] sm:h-[350px]  w-[150px] h-[150px]">
          <Image
            src="https://solocienadventures.com/wp-content/uploads/2020/08/SOLCIEN-LOGO-blanco-232x300.png"
            className="rounded-2xl justify-center"
            alt="img"
            layout="fill"
            objectFit="contain"
          />
        </div>
          </div>
          </div>
        </div>

        <div className="flex mt-4 flex-col items-center align-middle text-center justify-center">
          <div>
            <p className=" text-center text-black">
              &copy; 2022 Sol O Cien Adventures, All right reserved.
            </p>
          </div>
          <div className="flex items-center align-center">
            <a rel="noreferrer" alt="githublink" href="https://github.com/">
              <AiOutlineGithub className="items-center text-black ml-2 w-6 h-6 justify-center text-center" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
