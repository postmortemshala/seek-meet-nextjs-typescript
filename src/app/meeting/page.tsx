import dynamic from "next/dynamic";
import React from "react";

const Meeting = dynamic(() => import("seek-solution/component/Meeting"), {
  ssr: false,
});
function page() {
  return (
    <div>
      <Meeting />
    </div>
  );
}

export default page;
