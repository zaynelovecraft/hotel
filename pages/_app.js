import "tailwindcss/tailwind.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { useEffect } from "react";
import Layout from "../components/Layout";
import ShopProvider from "../context/shopContext";
import { useRouter } from "next/router";
import { UserContextProvider } from "../utils/useUser";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  

  return (
    <div>
      <UserContextProvider>
        <ShopProvider>
          <Layout>
            <Component {...pageProps} key={router.asPath} />
          </Layout>
        </ShopProvider>
      </UserContextProvider>
    </div>
  );
}

export default MyApp;
