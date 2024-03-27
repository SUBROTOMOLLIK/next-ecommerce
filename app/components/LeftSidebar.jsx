import Link from "next/link";

export default function LeftSidebar() {
  return (
    <>
    <nav>
        <h1 className="text-sm font-normal  text-neutral-500">Collections</h1>
        <ul className="mt-3 font-semibold text-sm">
            <li className="mt-1 hover:bg-slate-200 dark:text-white p-1 rounded-sm ">
                <Link href="/all">All</Link>
            </li>
            <li className=" hover:bg-slate-200 dark:text-white p-1 rounded-sm">
                <Link href="/drinkware">Drinkware</Link>
            </li>
            <li className=" hover:bg-slate-200 dark:text-white p-1 rounded-sm">
                <Link href="/electronics">Electronics</Link>
            </li>
            <li className=" hover:bg-slate-200 dark:text-white p-1 rounded-sm">
                <Link href="/footware">Footware</Link>
            </li>
            <li className=" hover:bg-slate-200 dark:text-white p-1 rounded-sm">
                <Link href="/headwear">Headwear</Link>
            </li>
            <li className=" hover:bg-slate-200 dark:text-white p-1 rounded-sm">
                <Link href="/hoodies">Hoodies</Link>
            </li>
            <li className=" hover:bg-slate-200 dark:text-white p-1 rounded-sm">
                <Link href="/bags">Kids</Link>
            </li>
            <li className=" hover:bg-slate-200 dark:text-white p-1 rounded-sm">
                <Link href="/bags">Bags</Link>
            </li>
            <li className=" hover:bg-slate-200 dark:text-white p-1 rounded-sm">
                <Link href="/pets">Pets</Link>
            </li>
            <li className=" hover:bg-slate-200 dark:text-white p-1 rounded-sm">
                <Link href="/shirts">Shirts</Link>
            </li>
            <li className=" hover:bg-slate-200 dark:text-white p-1 rounded-sm">
                <Link href="/stickers">Stickers</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}
