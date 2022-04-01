import React from 'react'

function Adminlog() {
  return (
    <div>
         <div className="w-full flex  items-center h-[100px]">
                    <img
                      className="object-cover ml-6 mr-4 h-[80px] w-[80px] rounded-full"
                      src="/user.png"
                    />
                    <div className="flex w-full space-y-1  flex-col">
                      <div>
                        <h1 className="font-bold text-[13px]">
                          {item.user_email}
                        </h1>
                      </div>
                      <div className=" w-[205px]">
                        <h1 className="text-gray-500 truncate  text-sm">
                          {lastmessage(item.Message_data)}
                        </h1>
                      </div>
                      <div className="flex">
                        {item.read === false && (
                          <TimeAgo
                            datetime={lastsent(item.Message_data)}
                            className="text-xs text-pink-600"
                          />
                        )}
                        {item.read === false && (
                          <h1 className="text-xs ml-6 text-pink-600">
                            Unread Message
                          </h1>
                        )}
                      </div>
                    </div>
                    <div>
                      <AiOutlineMessage className="text-[40px] text-pink-400 mr-5 mt-2" />
                    </div>
                  </div>
    </div>
  )
}

export default Adminlog