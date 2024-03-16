import dynamic from "next/dynamic";
import React from "react";

const InstantMeeting = dynamic(
  () => import("seek-solution/component/InstantMeeting"),
  { ssr: false }
);
function page() {
  return (
    <div>
      <InstantMeeting />
    </div>
  );
}

export default page;
