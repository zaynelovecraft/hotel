import Link from "next/link";
import React from "react";

function AdminSettings() {
  return (
    <section className="flex flex-col items-center justify-center mt-1">
      <div>
        <h1 className="text-gray-600 ">Admin Settings</h1>
      </div>
      <div className="mt-5">
        <Link href={'/photo-bucket'}>
          <a>
            <h1 className="text-black border px-4 py-1 bg-gray-300  rounded-lg text-[14px]">Upload Photos</h1>
          </a>
        </Link>
      </div>
    </section>
  );
}

export default AdminSettings;
