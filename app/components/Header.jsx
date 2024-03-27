'use client';
import Link from "next/link";
import { CiCircleRemove } from "react-icons/ci";

export default function Header() {
  return (
    <div className="navbar bg-base-100 ">
    {/* Start NavBar */}
    <div className="navbar-start">
        <div className="hidden gap-4 md:flex flex-wrap items-center m-3 lg:flex xl:flex">
            <div className="bg-white dark:bg-black dark:border-neutral-800 p-3 cursor-pointer border rounded-xl">
                <Link href="/home">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Acme Store logo"
                        viewBox="0 0 32 28"
                        className=" fill-black dark:fill-white h-[16px] w-[16px]"
                    >
                        <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                        <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                    </svg>
                </Link>
            </div>
            <div className=" text-base hidden dark:text-white font-medium lg:block">
                <Link href="/home">ACME STORE</Link>
            </div>
            <ul className="md:flex text-base font-semibold text-center gap-6 ">
                <li className="text-neutral-500 cursor-pointer dark:hover:text-white hover:text-slate-800 hover:underline">
                    <Link href="/all">All</Link>
                </li>
                <li className="text-neutral-500 cursor-pointer dark:hover:text-white hover:text-slate-800 hover:underline ">
                    <Link href="/shirts">Shirts</Link>
                </li>
                <li className="text-neutral-500 cursor-pointer dark:hover:text-white hover:text-slate-800 hover:underline ">
                    <Link href="/stickers">Stickers</Link>
                </li>
            </ul>
        </div>
        {/* hamburger menu side bar */}
        <div className="drawer  md:hidden lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn drawer-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7"
                        />
                    </svg>
                </label>
            </div>
            <div className="drawer-side z-10">

                <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-70 min-h-full bg-base-200 text-base-content">
                    <div className="justify-content-center mb-2 mt-2">
                        <input
                            type="text"
                            placeholder="Search for products"
                            className="input input-bordered w-full max-w-2xl h-[40px]"
                        />
                    </div>

                    {/* Sidebar content here */}
                    <li className=" text-base text-black transition-colors hover:text-neutral-500 dark:text-white"><Link href="/all">All</Link></li>
                    <li className=" text-base text-black transition-colors hover:text-neutral-500 dark:text-white">
                        <Link href="/shirts">Shirts</Link>
                    </li>
                    <li className=" text-base text-black transition-colors hover:text-neutral-500 dark:text-white">
                        <Link href="/stickers">Stickers</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    {/* Center Navbar */}
    <div className="navbar-center">
        <div className="flex items-center gap-2 md:hidden lg:hidden">
            <div className="bg-white dark:bg-black dark:border-neutral-800 p-3 cursor-pointer border rounded-xl">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Acme Store logo"
                    viewBox="0 0 32 28"
                    className=" fill-black dark:fill-white h-[16px] w-[16px]"
                >
                    <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                    <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                </svg>
            </div>
            <div className=" text-base font-bold md:hidden lg:hidden">
                ACME STORE
            </div>
        </div>
        <div className="justify-content-center hidden md:block lg:block">
            <input
                type="text"
                placeholder="Search for products"
                className="input input-bordered w-full max-w-3xl h-[40px]"
            />
        </div>
    </div>

    {/* End Navbar */}
    <div className="navbar-end">
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-4 transition-all ease-in-out hover:scale-110 "
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            ></path>
                        </svg>
                    </label>
                </div>
                <div className="drawer-side z-10">
                    <label
                        htmlFor="my-drawer-4"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu max-w-96 min-h-full bg-base-200 ">
                        {/* Sidebar content here */}
                        <li className="dark:text-white text-lg font-semibold p-4">
                            My Cart
                        </li>
                        <div className="mb-4">
                            
                            <div className="relative grid grid-flow-col gap-4  mb-3 px-5">
                               <button className="text-xl absolute left-0 -top-2"><CiCircleRemove /></button>
                                <img className="w-16 h-16 rounded-md" src="image/img01.jpg" alt="" />
                                <div>
                                   <h2 className="text-base font-normal">Acme Rainbow Sticker</h2>
                                   <p className="py-1"><span>Black</span> / <span>10 X 15 inch</span></p>
                                </div>
                                
                                <div className="flex flex-col px-3">
                                    <p className="mb-2 text-sm">$8.00 USD</p> 
                                    <p className="flex border-2 rounded-full text-sm px-3 justify-between items-center"> <button className="text-lg"> - </button> 2 <button className="text-lg"> + </button></p> 
                                </div>
                            </div>
                            <hr className="w-full ml-5 mr-48"/>
                        </div>
                        
                        <div class="mt-20 dark:text-white flex w-full flex-col items-center justify-center overflow-hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-16"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg><p class="mt-6 text-center text-xl opacity-90 font-bold">Your cart is empty.</p></div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
