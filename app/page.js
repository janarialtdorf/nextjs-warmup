import Link from "next/link";
import Counter from "./components/Counter";
import ServerMessage from "./components/ServerMessage";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link href="/about">Go to About</Link>
      <Counter />
      <ServerMessage />
    </div>
  );
}
