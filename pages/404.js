import Heading from "../components/Heading";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return <Heading text="404" />;
};

export default Error;
