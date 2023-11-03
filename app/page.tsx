import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1 className="text-slate-900 text-2xl font-bold mb-5">Hello World</h1>
      <Link href="/users">
        <button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-md">
          Click user page
        </button>
      </Link>
      <ProductCard />
    </main>
  );
}
