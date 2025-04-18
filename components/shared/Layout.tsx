import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type layoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
