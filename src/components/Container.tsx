import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <div className="container mx-auto p-3 sm:p-0 sm:px-16 sm:py-0">{children}</div>;
};

export default Container;
