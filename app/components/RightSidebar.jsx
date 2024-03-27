
export default function RightSidebar() {
  return (
    
    <nav>
        <h1 className="text-sm font-normal text-neutral-500">Sort by</h1>
        <ul className="text-base text-black dark:text-white font-semibold">
            <li className="mt-2 flex text-sm text-dark cursor-pointer p-1 hover:bg-slate-200 rounded-sm ">
                <p className="w-full text-wrap">Relevance</p>
            </li>
            <li className="flex text-black dark:text-white text-sm p-1 hover:bg-slate-200 rounded-sm cursor-pointer">
                <p className="w-full" href="#">
                    Trending
                </p>
            </li>
            <li className="flex text-black dark:text-white text-sm p-1 hover:bg-slate-200 rounded-sm cursor-pointer">
                <p className="w-full" href="#">
                    Latest arrivals
                </p>
            </li>
            <li className="flex text-black dark:text-white text-sm p-1 hover:bg-slate-200 rounded-sm cursor-pointer">
                <p className="w-full block" href="#">
                    Price: Low to high
                </p>
            </li>
            <li className="flex text-black dark:text-white text-sm p-1 hover:bg-slate-200 rounded-sm cursor-pointer">
                <p className="w-full" href="#">
                    Price: High to low
                </p>
            </li>
        </ul>
    </nav>
    
  )
}
