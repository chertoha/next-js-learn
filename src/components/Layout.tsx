import Header from "./Header";
import Footer from "./Footer";
import { Montserrat } from "@next/font/google";
import { FC, ReactNode } from "react";

const font = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

type layoutProps = {
  children: ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className={font.className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
