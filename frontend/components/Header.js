import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div classNme="bar">
        <Link href="/">Sick Fits</Link>
      </div>
      <div classNme="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </header>
  );
}
