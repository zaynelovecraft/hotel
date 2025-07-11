import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, FormEvent } from "react";
import Input from "../components/ui/Input/Input";
import Button from "../components/ui/Button/Button";
import GitHub from "../components/icons/GitHub";
import LoadingDots from "../components/ui/LoadingDots/LoadingDots";
import { useUser } from "../utils/useUser";
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle'
import Consent from '../components/Consent'

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", content: "" });
  const router = useRouter();

  const { user, signIn } = useUser();

  const handleSignin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage({});

    const { error } = await signIn({ email, password });
    if (error) {
      setMessage({ type: "error", content: error.message})
    }
    if (!password) {
      setMessage({
        type: "note",
        content: "Check your email for the magic link.",
      });
    }
    setLoading(false)
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
      router.replace("/account");
    }
  }, [user]);

  if (!user)
    return (
      <div className=" flex justify-center overflow-hidden">
        <div className=" mt-14 lg:mt-24 flex flex-col justify-between max-w-lg p-3 m-auto mx-5 ms:mx-auto sm:w-96">
          <div className="flex justify-center pb-5">
            <h1 className="text-black">Sign In</h1>
          </div>
          <div className="flex items-center my-6 pb-7">
            <div
              className="border-t border-gray-600 flex-grow "
              aria-hidden="true"
            ></div>
          </div>
          <div className="flex flex-col space-y-4">
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

            {!showPasswordInput && (
              <form onSubmit={handleSignin} className="flex flex-col space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={setEmail}
                  required
                />
                <Button
                  variant="slim"
                  type="submit"
                  loading={loading}
                  disabled={!email.length}
                >
                  Send magic link
                </Button>
              </form>
            )}

            {showPasswordInput && (
              <form onSubmit={handleSignin} className="flex flex-col space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={setEmail}
                  required
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={setPassword}
                  required
                />
                <Button
                  className="mt-1"
                  variant="slim"
                  type="submit"
                  loading={loading}
                  disabled={!password.length || !email.length}
                >
                  Sign in
                </Button>
              </form>
            )}

            <span className="pt-1 text-center text-sm">
              <a
                href="#"
                className="text-black text-accent-9 hover:underline cursor-pointer"
                onClick={() => {
                  if (showPasswordInput) setPassword("");
                  setShowPasswordInput(!showPasswordInput);
                  setMessage({});
                }}
              >
                {`Or sign in with ${
                  showPasswordInput ? "magic link" : "password"
                }.`}
              </a>
            </span>
            <span className="pt-1 text-center text-sm">
              <span className="text-black">Don't have an account?</span>
              {` `}
              <Link href="/signup">
                <a className="text-accent-9 font-bold hover:underline cursor-pointer">
                  Sign up.
                </a>
              </Link>
            </span>
          </div>

          <div className="flex items-center my-6">
            <div
              className="border-t border-gray-600 flex-grow mr-3"
              aria-hidden="true"
            ></div>
            <div className="text-black">Or</div>
            <div
              className="border-t border-gray-600 flex-grow ml-3"
              aria-hidden="true"
            ></div>
          </div>
          <Button
            className=" mb-20"
            variant="slim"
            type="submit"
            disabled={loading}
            onClick={() => handleOAuthSignIn("google")}
          >
            <FcGoogle className="w-[25px] h-[25px]" />
            <span className="ml-2 text-xs md:text-base">Continue with Google</span>
          </Button>
        <Consent text='By creating a account,' />
        </div>
      </div>

    );

  return (
    <div className="m-6">
      <LoadingDots />
    </div>
  );
};

export default SignIn;
