import React from "react";
import AdminMessages from "./AdminMessages";

function AdminChatEngine({ talk, end, newmessages, loading }) {

  return (
    <div className="h-full  flex flex-col-reverse overflow-y-scroll overflow-hidden bg-white">
      <AdminMessages loading={loading} end={end} talk={talk} newmessages={newmessages} />
    </div>
  );
}

export default AdminChatEngine;
