import Header from "./Header";
import Footer from "./Footer";
import { Montserrat } from "@next/font/google";

const roboto = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  return (
    <div className={roboto.className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
