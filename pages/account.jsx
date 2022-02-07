import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase-client'
import Auth from '../components/Auth'
import Account from '../components/Account'
import { useRouter } from 'next/router'
import { useUser } from '../utils/useUser';
import { getProductsInCollection } from "../lib/shopify"
;
export default function Home({products}) {
  // const [session, setSession] = useState(null)

  // useEffect(() => {
  //   setSession(supabase.auth.session())

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })
  // }, [])

  const router = useRouter();
  const { userLoaded, user, session, userDetails, subscription } = useUser();

  useEffect(() => {
          if (!user) router.replace('/signin');
         
    
        }, [user]);

  return (
    <div className=" overflow-hidden" >
      {user && (<Account products={products} key={session.user.id} session={session} />) }
    </div>
  )
}


export async function getServerSideProps() {
  const products = await getProductsInCollection();

  return {
    props: { products }, // will be passed to the page component as props
  };
}




// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { useState, useEffect, ReactNode } from 'react';


// import { useUser } from '../utils/useUser';



//   export default function Account() {
   
//     const router = useRouter();
//     const { userLoaded, user, session, userDetails, subscription } = useUser();
    

//     useEffect(() => {
//       if (!user) router.replace('/signin');
     

//     }, [user]);
  
    
  
  
  
  
//     return (
//       <section className="h-screen">

//         <div>
//           <h2>Account</h2>
//           <h1>user id: {userDetails && (userDetails.id ) }</h1>
//         </div>
//       </section>
//     );
//   }
  