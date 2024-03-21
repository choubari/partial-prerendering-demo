import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gray-800 flex items-center justify-center mb-5">
      <div className="text-white flex items-baseline justify-between w-full py-3 px-20">
        <h1 className="font-bold">
          <Link href={"/"} className="underline">
            PPR DEMO
          </Link>
        </h1>
        <h2 className="font-bold">
          <Link href={"https://twitter.com/choubari_"} className="underline">
            @choubari_
          </Link>
        </h2>
      </div>
    </div>
  );
}
