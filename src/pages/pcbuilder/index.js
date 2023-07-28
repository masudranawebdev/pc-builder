import RootLayout from "@/layout/RootLayout";
import React from "react";

const PcbuilderPage = () => {
  return (
    <div>
      <h1>this pc builder page</h1>
    </div>
  );
};

export default PcbuilderPage;

PcbuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
