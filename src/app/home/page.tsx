import dynamic from "next/dynamic";
import React from "react";

const CreateMeeting = dynamic(()=>import("seek-solution/component/CreateMeeting"),{ssr:false})
function page() {
  return (
    <div>
      <CreateMeeting />
    </div>
  );
}

export default page;
