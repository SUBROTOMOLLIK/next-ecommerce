'use client';
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slider from "./components/Slider";

export default function Home() {
  return (
  <>
    <Header />
    <div className="grid msf max-w-screen-2xl grid-flow-row md:grid-cols-6 md:grid-rows-2 gap-4 py-4 md:py-1 mx-auto px-4">
        <div className="md:col-span-4 md:row-span-2 group">
            <div className="relative flex items-center justify-center w-full h-full dark:bg-black dark:border-neutral-800  bg-white border border-neutral-200 rounded-lg hover:border-blue-600">
                <a href="#">
                    <img
                        className="relative w-full h-full object-contain transition duration-300 ease-in-out hover:scale-105"
                        src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75"
                        alt="Shoes"
                    />
                </a>
                <div className="absolute bottom-0 md:mb-[35%] left-0 flex w-full px-4 pb-4 @container/label cursor-pointer">
                    <div className="flex text-sm border backdrop-blur-md rounded-full dark:bg-black/70 dark:border-neutral-800 dark:text-white bg-white/70 p-1 items-center font-semibold text-black ">
                        <h3 className="mr-4 flex pl-2 leading-none tracking-tight line-clamp-2">
                            Acme Circles T-Shirt
                        </h3>
                        <p className="flex-none rounded-full bg-blue-600 text-white p-2 text-sm font-semibold">
                            $20.00 USD
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:col-span-2 md:row-span-1 ">
            <Card />
        </div>
        <div className="md:col-span-2 md:row-span-1 ">
            <Card />
        </div>
    </div>

    <Slider />

    <Footer />
  </>
  )
}
