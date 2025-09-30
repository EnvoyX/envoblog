import Link from "next/link";

export default function Home() {
  return (
    <main className="py-10">
      <Link href={"/"}>
        <h1 className="text-4xl font-bold">Home</h1>
      </Link>
    </main>
  );
}
