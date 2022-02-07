import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";
import s from '../components/Navbar.module.css'
import { useUser } from "../utils/useUser"

export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  
  const { user, signOut } = useUser();

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">Gloomy Bearz</span>
          </a>
        </Link>
        <div className="flex items-center justify-between">
          <a
            className="text-base hover:text-pink-500 font-medium cursor-pointer"
            onClick={() => setCartOpen(!cartOpen)}
          >
            Cart ({cartQuantity})
          </a>
          <MiniCart cart={cart} />
          <div className="ml-5">
          {user && (
              <Link href="/account">
                <a className={s.link}>Account</a>
              </Link>
            )}
          </div>
          <div className="ml-5">
            {user ? (
              <Link href="#">
                <a className={s.link} onClick={() => signOut()}>Sign Out</a>
              </Link>
            ) : (
              <Link href="/signin">
                <a className={s.link}>Sign in</a>
              </Link>
            )}
          </div>
        </div>
        
      </div>
    </header>
  );
}
