import Link from "next/link";
export default function Card() {
  return (
    <div className="relative w-full h-full dark:bg-black dark:border-neutral-800 bg-white border border-neutral-200 rounded-lg hover:border-blue-600">
    <Link href="/add-to-cart">
        
        <img
            className="relative w-full h-full object-contain transition duration-300 ease-in-out hover:scale-105"
            src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&w=1080&q=75"
            alt="Shoes"
        />
        
        <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label cursor-pointer">
            <div className="flex border backdrop-blur-md rounded-full dark:bg-black/70 dark:border-neutral-800 dark:text-white bg-white/5 p-1 items-center ">
                <h3 className="mr-4 flex text-xs pl-2 font-bold  dark:text-white text-black leading-none tracking-tight line-clamp-2">
                    Acme Circles T-Shirt
                </h3>
                <p className="flex-none rounded-full bg-blue-600 text-white p-2 text-sm font-semibold">
                    $20.00 USD
                </p>
            </div>
        </div>
    </Link>
</div>
  )
}
