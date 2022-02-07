import { FaGhost } from "@react-icons/all-files/fa/FaGhost";
import Link from 'next/link'
const UnderWork = () => {
  return (
    <div className="py-60 sm:p-40 lg:p-60 xl:p-50 flex h-screen -mt-[100px] flex-col items-center justify-center text-center">
      <div className="mb-4" >
      <FaGhost className="h-10 animate-bounce w-10" />
      </div>
      <div className="mb-10">
        <h1 className="mb-2">Comming Soon!</h1>
      </div>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-3xl font-bold">
        Sorry this page does not exist yet!
      </h1>
      
    </div>
  );
};

export default UnderWork;
