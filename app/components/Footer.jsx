
export default function Footer() {
  return (
    <>
        <div className="mx-auto w-full p-10 flex flex-col max-w-7xl gap-8 px-6 py-12 md:flex-row md:px-4 md:gap-12">
            <div>
                <div className="flex items-center gap-2 ">
                    <div className="bg-white dark:bg-black dark:border-neutral-800 p-3 cursor-pointer border rounded-xl">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="Acme Store logo"
                            viewBox="0 0 32 28"
                            className=" fill-black dark:fill-white h-[10px] w-[10px]"
                        >
                            <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                            <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                        </svg>
                    </div>
                    <div className=" text-base dark:text-white font-semibold ">
                        <span>ACME STORE</span>
                    </div>
                    
                </div>
            </div>
            <nav>
                <ul className="flex flex-col gap-2">
                    <li className="text-lg text-neutral-500 hover:text-black hover:underline cursor-pointer">
                        <a href="#"> Home</a>
                    </li>
                    <li className="text-lg text-neutral-500 hover:text-black hover:underline cursor-pointer">
                        <a href="#"> About</a>
                    </li>
                    <li className="text-lg text-neutral-500 hover:text-black hover:underline cursor-pointer">
                        <a href="#">Terms & Conditions</a>
                    </li>
                    <li className="text-lg text-neutral-500 hover:text-black hover:underline cursor-pointer">
                        <a href="#">Shipping & Return Policy</a>
                    </li>
                    <li className="text-lg text-neutral-500 hover:text-black hover:underline cursor-pointer">
                        <a href="#">Policy Privacy</a>
                    </li>
                    <li className="text-lg text-neutral-500 hover:text-black hover:underline cursor-pointer">
                        <a href="#"> FAQ</a>
                    </li>
                </ul>
            </nav>
            <nav className="md:ml-auto">
                <a className=" border dark:bg-black dark:border-neutral-800 bg-white rounded-xl px-3 py-2">Deploy</a>
            </nav>
        </div>
        <footer className="flex gap-2 flex-col md:flex-row md:justify-between mb-5 max-w-7xl mx-auto px-6 py-4 md:px-4 border-t">
            <div className=" text-center items-center grid gap-2 grid-flow-row md:grid-flow-col text-base md:gap-6 md:font-semibold text-neutral-500">
                <span>© 2023-2024 ACME, Inc. All rights reserved</span>
                <span className="hidden md:block">|</span>
                <span className="">Designed in Dhaka</span>
            </div>

            <div className="text-center">Crafted by ▲ RootDevs</div>
        </footer>
    </>
  )
}
