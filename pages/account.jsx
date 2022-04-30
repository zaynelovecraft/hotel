import { useState, useEffect } from "react";

import Account from "../components/Account";
import { useRouter } from "next/router";
import { useUser } from "../utils/useUser";

export default function Home() {
  const router = useRouter();
  const { userLoaded, user, session, userDetails, subscription } = useUser();

  useEffect(() => {
    if (!user) router.replace("/signin");
  }, [user]);

  return (
    <div className=" overflow-hidden">
      {user && <Account key={session.user.id} session={session} />}
    </div>
  );
}
