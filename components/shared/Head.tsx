import React from "react";

type HeadProps = {
  children: React.ReactNode;
};

const Head: React.FC<HeadProps> = ({ children }) => {
  return (
    <>
      <title>{children}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};
export default Head;
