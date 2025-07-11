import Head from "next/head";
import React from "react";
import {
  PostCard,
  Categories,
  PostWidget,
  FeaturedPosts,
} from "../components/blog";
import { getPosts } from "../services";

function blog({ posts }) {
  return (
    <div className="bg-gray-200">
      <div className="container pt-20 lg:pt-36  mx-auto px-10 pb-8 ">
        <Head>
          <title>Blog</title>
          <link rel="icon" href="/favicon.ico"></link>
        </Head>
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post) => (
              <PostCard key={post.node.title} post={post.node} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative lg:top-[10px]">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
  };
}

export default blog;
