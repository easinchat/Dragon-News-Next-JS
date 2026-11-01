import logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="mx-auto text-center space-y-5 mt-3 ">
      <Image
        src={logo}
        width={"auto"}
        height={"auto"}
        alt="logo"
        loading="eager"
      ></Image>
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE , PP")}</p>
    </div>
  );
};

export default Header;
