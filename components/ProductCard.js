import Link from "next/link";
import Image from "next/image";
import { formatter } from "../utils/helpers";
import { RiErrorWarningLine } from "@react-icons/all-files/ri/RiErrorWarningLine";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase-client";
import { useUser } from "../utils/useUser";

const ProductCard = ({ product }) => {
  const { handle, title } = product.node || product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;
  const price = product.node.priceRange.minVariantPrice.amount;

  const { user } = useUser();

  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState();

  // useEffect(async () => {
  //   const info = await getProduct(product.node.handle);
  //   setInventory(info.totalInventory);

  // }, []);

  useEffect(async () => {
    // get likes
    const { data, error } = await supabase
      .from("post")
      .select("postid, numlikes")
      .match({ postid: product.node.id });

    if (data[0] === undefined) {
      setLikes(0);
    } else {
      setLikes(data[0].numlikes);
    }
  }, [product]);

  useEffect(async () => {
    // check if user liked
    if (user) {
      const { data, error } = await supabase
        .from("likedpost")
        .select("userid, likedpost")
        .match({ userid: user.id });
      if (data[0] === undefined) {
        setHasLiked(false);
      } else {
        for (let i = 0; i < data[0].likedpost.length; i++) {
          if (data[0].likedpost[i] === product.node.id) {
            setHasLiked(true);
          }
        }
      }
    } else {
      return;
    }
  }, [user]);

  return (
    <Link className="z-0 relative" href={`/products/${handle}`}>
      <a
        className={`group ${
          product.node.totalInventory === 0
            ? "border-black"
            : "hover:shadow-2xl cursor-pointer"
        } relative border   bg-white shadow-lg rounded-3xl`}
      >
        <div className="absolute z-20 left-2 top-2">
          {hasLiked ? (
            <div className="flex relative">
              <FaHeart className="w-4 h-4 text-pink-400" />
              <div className="flex absolute top-2 left-4 text-gray-400 text-[11px] ">
                {likes}
              </div>
            </div>
          ) : (
            <div className="flex relative">
              <FiHeart className="w-4 h-4 text-black" />
              <div className="flex absolute top-2 left-4 text-gray-400 text-[11px] ">
                {likes}
              </div>
            </div>
          )}
        </div>
        <div
          className={` ${
            product.node.totalInventory === 0 ? "opacity-50" : ""
          } w-full  z-0 bg-white rounded-3xl overflow-hidden`}
        >
          <div className="relative mt-5 mr-2 ml-2  z-0  h-72">
            <Image
              className="border shadow-lg"
              src={originalSrc}
              alt="shopify img"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
        <h3
          className={`mt-4 ${
            product.node.totalInventory === 0 ? "text-gray-400" : "text-black"
          } breake-all text-center text-lg ml-3 font-medium`}
        >
          {title}
        </h3>
        {product.node.totalInventory === 0 ? (
          <div className="mt-1 absolute top-0 right-3 flex items-center justify-center text-center ml-3 mb-2 text-lg text-red-700">
            <RiErrorWarningLine />
            <h1 className="ml-2">Sold Out</h1>
          </div>
        ) : (
          <p className="mt-1 text-center ml-3 mb-2 text-sm text-gray-700">
            {formatter.format(price)}
          </p>
        )}
      </a>
    </Link>
  );
};

export default ProductCard;
