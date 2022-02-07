import Image from "next/image";
import ProductForm from "./ProductForm";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import RecommendedList from "./RecommendedList";
import { getAllProducts, getProduct, recursiveCatalog } from "../lib/shopify";
import { useEffect, useState } from "react";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { useUser } from "../utils/useUser";
import { supabase } from "../utils/supabase-client";
import Head from 'next/head'

import Messages from "./Messages";

export default function ProductPageContent({ product }) {
  const [inventory, setInventory] = useState();
  const images = [];
  const [likes, setLikes] = useState();
  const [hasLiked, setHasLiked] = useState(false);
  const { session, user, signOut } = useUser();

  useEffect(async () => {
    const info = await getProduct(product.handle);
    setInventory(info.totalInventory);
  }, []);

  useEffect(async () => {
    // get likes
    const { data, error } = await supabase
      .from("post")
      .select("postid, numlikes")
      .match({ postid: product.id });

    if (data[0] === undefined) {
      setLikes(0);
    } else {
      setLikes(data[0].numlikes);
    }
  }, []);

  useEffect(async () => {
    // check if user has liked
    if (user) {
      const { data, error } = await supabase
        .from("likedpost")
        .select("userid, likedpost")
        .match({ userid: user.id });
      if (data[0] === undefined) {
        setHasLiked(false);
      } else {
        for (let i = 0; i < data[0].likedpost.length; i++) {
          if (data[0].likedpost[i] === product.id) {
            setHasLiked(true);
          }
        }
      }
    } else {
      return;
    }
  }, []);

  const likePost = () => {
    setHasLiked(!hasLiked);

    if (hasLiked === false) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    addToLiked();
  };

  const addliketodb = async () => {
    const { data, error } = await supabase
      .from("post")
      .select("postid, numlikes")
      .match({ postid: product.id });

    if (data[0] === undefined) {
      let like = likes + 1;
      const { data, error } = await supabase
        .from("post")
        .insert([{ postid: product.id, numlikes: like }]);
    }

    if (data[0]) {
      let like = likes + 1;
      const { data, error } = await supabase
        .from("post")
        .update({ numlikes: like })
        .match({ postid: product.id });
    }
  };

  const deletelikefromdb = async () => {
    let like = likes - 1;
    const { data, error } = await supabase
      .from("post")
      .update({ numlikes: like })
      .match({ postid: product.id });
  };

  const addToLiked = async () => {
    if (user) {
      const { data, error } = await supabase
        .from("likedpost")
        .select("userid, likedpost")
        .like("userid", user.id);
      if (data[0] === undefined) {
        if (hasLiked === false) {
          let newproduct = [product.id];
          const { data, error } = await supabase
            .from("likedpost")
            .insert([{ userid: user.id, likedpost: newproduct }]);
          addliketodb();
        } else {
          return;
        }
      } else {
        if (hasLiked === false) {
          const { data, error } = await supabase
            .from("likedpost")
            .select("userid, likedpost")
            .match({ userid: user.id });
          let likedpost = data[0].likedpost;
          let posttoadd = product.id;
          likedpost.push(posttoadd);
          if (likedpost) {
            const { data, error } = await supabase
              .from("likedpost")
              .update({ likedpost: likedpost })
              .match({ userid: user.id });
            addliketodb();
          } else {
            return;
          }
        }
        if (hasLiked === true) {
          const { data, error } = await supabase
            .from("likedpost")
            .select("userid, likedpost")
            .match({ userid: user.id });
          let likedpostarray = data[0].likedpost;
          for (let i = 0; i < likedpostarray.length; i++) {
            if (likedpostarray[i] === product.id) {
              likedpostarray.splice(i, 1);
            }
            const { data, error } = await supabase
              .from("likedpost")
              .update({ likedpost: likedpostarray })
              .match({ userid: user.id });
            deletelikefromdb();
          }
        }
      }
    }
  };

  product.images.edges.map((image, i) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <Image
          src={image.node.originalSrc}
          alt='shopify img'
          layout="fill"
          objectFit="contain"
          priority
        />
      </SwiperSlide>
    );
  });

  SwiperCore.use([Navigation, Pagination]);

  return (
    <div className="">
      <Head>
      <title>Gloomy Bearz product page</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="Find unique and rare items. Search our online store for high quality accessories, bags, and cloths" />
        <meta property="og:title" content="Gloomy Store" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gloomy-orpin.vercel.app/" />
        <meta property="og:image" content="https://i5.walmartimages.com/asr/a572da00-f4ed-400d-a3ec-f8dd6a490c61_1.fbdb91a5f4754a9ef9addced33581401.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" />
        <meta property="og:description"
          content="High Quality Hand Made/ Modified Items" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="MyStore - GloomyBears and Accessories" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"></meta>
      </Head>
      <div className="flex flex-col justify-center items-center space-y-10 lg:flex-row lg:items-start lg:space-y-0  lg:space-x-8 max-w-full w-11/12 mx-auto">
        <div className="w-full max-w-7xl h-[600px] border bg-white rounded-2xl overflow-hidden shadow-lg lg:w-1/2">
          <div className="relative h-[500px] w-full">
            <div className="">
              <div className="absolute right-5 top-7 z-40">
                {likes > 0 && (
                  <div className="absolute -top-5 left-">{likes}</div>
                )}
                {hasLiked ? (
                  <FaHeart
                    onClick={likePost}
                    className="w-10 h-10  text-pink-400"
                  />
                ) : (
                  <FiHeart
                    onClick={likePost}
                    className="w-8 hover:text-pink-400 h-8"
                  />
                )}
              </div>
            </div>
            <Swiper
              style={{
                "--swiper-navigation-color": "#000",
                "--swiper-pagination-color": "#000",
              }}
              navigation
              pagination={{ clickable: true }}
              className="h-[600px] rounded-2xl"
              loop="true"
            >
              {images}
            </Swiper>
          </div>
        </div>

        <ProductForm inventory={inventory} product={product} />
      </div>
      <div className=" w-full text-center">
        <Messages product={product} />
      </div>

      <RecommendedList
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      />
    </div>
  );
}
