import React, {useState, useRef} from 'react'

function  Reciept({post}) {
    const [viewmore, setViewmore] = useState(false)
  const inputRef = useRef(null);
  const focus = () => {
    inputRef.current.scrollIntoView();
    setViewmore(false)
  };
  return (
    <div>
        <div ref={inputRef} className="absolute -top-10"></div>
        <div
                    key={post.id}
                    className="w-[400px] relative py-5 max-w-[400px] shadow-lg mb-5 mt-5 rounded-2xl border"
                  >
                    <h1 className="text-center mb-2 text-sm font-light">Receipt</h1>
                    <h1 className="text-center text-lime-600">Status <span>Payed</span></h1>
                    <h1 className="text-center mt-5">
                      Hotel Name:
                      <span className="text-gray-600 text-base">
                        {" "}
                        {post.hotel_name}
                      </span>{" "}
                    </h1>
                   
                    {viewmore === true ? <div>
                      
                    <h1 className="text-center text-sm mt-5 mb-5 ">
                      Total Nights:{" "}
                      <span className="text-gray-600 text-base">
                        {post.nights}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm ">
                      Check-in:{" "}
                      <span className="text-gray-600 text-base">
                        3 PM {post.start_date}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm mb-5">
                      Check-out:{" "}
                      <span className="text-gray-600 text-base">
                        11 AM {post.end_date}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      <span className="text-gray-600 text-base">
                        ( {post.weekdays} )
                      </span>{" "}
                      Night x (weekday price $400) ={" "}
                      <span className="text-lime-500 text-base">
                        ${post.weekday_price}{" "}
                      </span>
                    </h1>
                    <h1 className="text-center text-sm">
                      <span className="text-gray-600 text-base">
                        ( {post.weekend_days} )
                      </span>{" "}
                      Night x (weekend price $500) ={" "}
                      <span className="text-lime-500 text-base">
                        ${post.weekend_price}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center mb-5 text-sm">
                      Total ={" "}
                      <span className="text-lime-500 text-base">
                        ${post.price}
                      </span>
                    </h1>
                    <h1 className="text-center text-sm">
                      Weekly Discount :{" "}
                      <span className="text-lime-500 text-base">
                        ${post.weekly_discount}
                      </span>
                    </h1>
                    <h1 className="text-center text-sm">
                      Monthly Discount :{" "}
                      <span className="text-lime-500 text-base">
                        ${post.monthly_discount}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center mb-5 text-sm">
                      Early Bird Discount :{" "}
                      <span className="text-lime-500 text-base">
                        ${post.early_discount}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      Total guest:{" "}
                      <span className="text-gray-600 text-base">
                        {post.guest}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      <span className="text-gray-600 text-base">
                        {post.extra_guest}{" "}
                      </span>
                      Extra guest +
                      <span className="text-base text-lime-500">
                        {" "}
                        ${post.extra_guest_fee}
                      </span>{" "}
                      per night{" "}
                    </h1>
                    <h1 className="text-center mb-5 text-sm">
                      <span className="text-base text-gray-600">
                        {post.nights}
                      </span>{" "}
                      Nights x{" "}
                      <span className="text-base text-lime-500">
                        ${post.extra_guest_fee}
                      </span>{" "}
                      ={" "}
                      <span className="text-base text-lime-500">
                        ${post.guest_fee_total}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      Pets{" "}
                      <span className="text-gray-600 text-base">
                        {post.pets}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm mb-5">
                      {" "}
                      Pet fee:{" "}
                      <span className="text-base text-lime-500">
                        ${post.pet_fee}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      cleaning fee{" "}
                      <span className="text-base text-lime-500">$65</span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      Security Deposit{" "}
                      <span className="text-base text-lime-500">$200</span>{" "}
                    </h1>
                    <h1 className="text-center mt-5 text-2xl">
                      {" "}
                      Total :{" "}
                      <span className="text-lime-500 font-bold">
                        ${post.total}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm"> </h1>
                    <h1 onClick={focus} className="underline text-center mt-2 text-gray-600 cursor-pointer">View Less</h1>
                    </div> : <div>
                       <h1 onClick={() => setViewmore(true)} className="text-center mt-2 underline text-gray-600 cursor-pointer">View More Details</h1>
                      </div>}
                  </div> </div>
  )
}

export default  Reciept