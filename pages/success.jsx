// import { useState, useEffect } from "react";
import { useUser } from "../utils/useUser";
import Success from '../components/Success'
// import { useRouter } from 'next/router'

export default function success() {
  // const router = useRouter();
  const { user } = useUser();

  // useEffect(() => {
  //   if (!user) router.replace("/signin");
  // }, [user]);

  return (
    <div className=" overflow-hidden">
      {user && (<Success />)}
    </div>
  );
}

