import React, { useState } from "react";

function calendar() {
  const [data, setData] = useState();

  console.log(data);

  const newdata = JSON.stringify(data);

  const fetchData = async () => {
    const response = await fetch("/api/hotel");
    const data = await response.json();
    setData(data);
  };

  return (
    <div className="flex justify-center ">
      <button
        onClick={fetchData}
        className="p-3 m-6 border items-center justify-center align-middle border-3 rounded-lg shadow-lg"
      >
        hey
      </button>
      <div className="flex-wrap"></div>
    </div>
  );
}

export default calendar;
