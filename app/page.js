import Link from "next/link";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link href="/about">Go to About</Link>
      <Counter />
    </div>
  );
}
