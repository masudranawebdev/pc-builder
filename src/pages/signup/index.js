import RootLayout from "@/layout/RootLayout";
import React from "react";

const SignupPage = () => {
  return <div></div>;
};

export default SignupPage;

SignupPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
