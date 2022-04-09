import '../styles/globals.scss'
import "tailwindcss/tailwind.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { useEffect } from "react";
import Layout from "../components/Layout";
;
import { useRouter } from "next/router";
import { UserContextProvider } from "../utils/useUser";
// import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

 useEffect(() => {
  window.scrollTo(0, 0)
 }, []); 

  return (
    <div>
      <UserContextProvider>
          <Layout>
            <Component {...pageProps} key={router.asPath} />
          </Layout>

      </UserContextProvider>
    </div>
  );
}

export default MyApp;
