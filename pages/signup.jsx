import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, FormEvent } from "react";

import Button from "../components/ui/Button/Button";
import Input from "../components/ui/Input/Input";

import { updateUserName } from "../utils/supabase-client";
import { useUser } from '../utils/useUser';
;
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle'

const SignUp = () => {
  const [newUser, setNewUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    content: "",
  });
  const router = useRouter();
  const { signUp, user, signIn } = useUser();

  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage({});
    const { error, user: createdUser } = await signUp({ email, password });
    if (error) {
      setMessage({ type: 'error', content: error.message });
    } else {
      if (createdUser) {
        
        setMessage({
          type: 'note',
          content: 'Check your email for the confirmation link.'
        });
        await updateUserName(createdUser, name);
        setNewUser(createdUser);
        
      } else {
        setMessage({
          type: 'note',
          content: 'There seems to be an issue...'
        });
      }
    }
    setLoading(false);
  };

  const handleOAuthSignIn = async (provider) => {
    setLoading(true);
    const { error } = await signIn({ provider });
    if (error) {
      setMessage({ type: "error", content: error.message });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      router.replace('/account');
    }
  }, [user]);

  return (
    <div className="flex justify-center overflow-hidden ">
      <div className="flex mt-14 flex-col justify-between max-w-lg p-3 m-auto mx-5 ms:mx-auto sm:w-96 ">
        <div className="flex justify-center pb-5 ">
          <h1 className="text-black">Sign Up</h1>
        </div>
        <div className="flex items-center my-6 pb-7">
          <div
            className="border-t border-gray-600 flex-grow "
            aria-hidden="true"
          ></div>
        </div>
        <form onSubmit={handleSignup} className="flex flex-col space-y-4">
          {message.content && (
            <div
              className={`${
                message.type === "error" ? "text-pink-500" : "text-green-500"
              } border ${
                message.type === "error"
                  ? "border-pink-500"
                  : "border-green-500"
              } p-3`}
            >
              {message.content}
            </div>
          )}
          <Input placeholder="Name" onChange={setName} />
          <Input
            type="email"
            placeholder="Email"
            onChange={setEmail}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={setPassword}
          />
          <div className="pt-2 w-full flex flex-col">
            <Button
              variant="slim"
              type="submit"
              loading={loading}
              disabled={loading || !email.length || !password.length}
            >
              Sign up
            </Button>
          </div>

          <span className="pt-1 text-center text-sm">
            <span className="text-black">Do you have an account?</span>
            {` `}
            <Link href="/signin">
              <a className="text-accent-9 font-bold hover:underline cursor-pointer">
                Sign in.
              </a>
            </Link>
          </span>
        </form>
        

        <Button
            className="mt-10 mb-10 animate-bounce"
            variant="slim"
            type="submit"
            disabled={loading}
            onClick={() => handleOAuthSignIn("google")}
          >
            <FcGoogle />
            <span className="ml-2">Continue with Google</span>
          </Button>
        
      </div>
    </div>
  );
};

export default SignUp;
