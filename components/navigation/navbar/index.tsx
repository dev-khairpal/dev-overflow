import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center fixed z-50 w-full p-6">
      <Link href={"/"} className="flex gap-2 items-center">
        <Image src={"/logo.png"} width={40} height={40} alt="logo" />
        <h1 className="text-3xl font-bold">
          Dev <span className="text-orange-600">Overflow</span>
        </h1>
      </Link>

{/* global search */}
      <p>Global Search</p>

      {/*  */}
      <div><Theme /></div>
    </nav>
  );
};

export default Navbar;
