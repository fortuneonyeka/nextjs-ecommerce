import Image from "next/image";
import { NavBar } from "./component/nav/navbar/NavBar";

export default function Home() {
  return (
    <div className="px-5 max-w-[1280px] mx-auto">
      <NavBar />
    </div>
  );
}
