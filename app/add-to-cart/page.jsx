'use client';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slide from "../components/Slider";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function page() {

     const baseUrl = "http://localhost:3000";

      const settings = {
        customPaging: function(i) {
          return (
            <div className="custom-paging-item mt-8">
              <img className="w-12 h-8 object-contain transition duration-300 ease-in-out group-hover:scale-105" src={`${baseUrl}/image/img0${i + 1}.jpg`} alt="" />
            </div>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };




  return (
    <>
        <Header />
        <main className="mx-auto max-w-screen-2xl px-4">
            <div className="flex flex-col max-w-screen-2xl lg:flex-row gap-4 p-8 md:p-12  mx-auto px-4 bg-white dark:bg-black dark:border-neutral-900 border border-neutral-200 rounded-lg">
                <div className="h-full w-full basis-full lg:basis-4/6">
                    {/* <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
                            
                            <img
                            className="relative w-full h-full object-contain transition duration-300 ease-in-out hover:scale-105"
                            src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&w=1080&q=75"
                            alt="Shoes"/>
                        
                        <div class="absolute bottom-[25%] flex w-full justify-center">
                            <div class="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
                                <a aria-label="Previous product image" class="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center" href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path></svg></a>
                                <div class="mx-1 h-6 w-px bg-neutral-500"></div><a aria-label="Next product image" class="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center" href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg></a>
                            </div> 
                        </div>

                    </div>
                    <ul className="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
                        <li className="h-20 w-20">
                            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800">
                            <img className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" width="80" height="80" src={`${baseUrl}/image/img01.jpg`} alt="" /></div>
                        </li>
                        <li className="h-20 w-20">
                            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800">
                            <img className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" width="80" height="80" src={`${baseUrl}/image/img02.jpg`} alt="" /></div>
                        </li>
                        <li className="h-20 w-20">
                            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800">
                            <img className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" width="80" height="80"  src={`${baseUrl}/image/img03.jpg`} alt="" />
                            </div>
                        </li>
                        <li className="h-20 w-20">
                            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800">
                            <img className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" width="80" height="80" src={`${baseUrl}/image/img01.jpg`} alt="" />
                            </div>
                        </li>
                    </ul> */}
                        <div className="slider-container max-w-96 mx-auto lg:mt-20 mb-16 md:mb-0">
                            <Slider {...settings}>
                                <div>
                                <img className="rounded-lg w-full  mx-auto h-auto" src={`${baseUrl}/image/img01.jpg`}/>
                                </div>
                                <div>
                                <img className="rounded-lg w-full  mx-auto h-auto" src={`${baseUrl}/image/img02.jpg`}/>
                                </div>
                                <div>
                                <img className="rounded-lg w-full  mx-auto h-auto" src={`${baseUrl}/image/img03.jpg`}/>
                                </div>
                                <div>
                                <img className="rounded-lg w-full  mx-auto h-auto" src={`${baseUrl}/image/img04.jpg`}/>
                                </div>
                            </Slider>
                        </div>

                </div>
                <div className="h-full w-full basis-full lg:basis-2/6">
                    <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
                        <h1 className="mb-3 text-4xl dark:text-white font-medium">Acme Sticker</h1>

                        <div className="flex text-sm dark:bg-black bg-white/70 p-1 items-center font-semibold text-black ">
                            <p className="flex-none rounded-full bg-blue-600 text-white p-2 text-sm font-semibold">
                                $20.00 USD
                            </p>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="mb-4 text-sm font-medium uppercase tracking-wide">COLOR</div>
                        <div className="flex flex-wrap gap-3">
                        <button className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 " >Black</button>	
                        <button className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 ">White</button>
                        <button className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 ">Blue</button>

                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="mb-4 text-sm font-medium uppercase tracking-wide">size</div>
                        <div className="flex flex-wrap gap-3">
                            <button className="flex min-w-[48px] dark:text-white items-center justify-center uppercase rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-inout hover:scale-110 hover:ring-blue-600">xs</button>
                            <button className="flex min-w-[48px] dark:text-white items-center justify-center uppercase rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-inout hover:scale-110 hover:ring-blue-600">s</button>
                            <button className="flex min-w-[48px] dark:text-white items-center justify-center uppercase rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-inout hover:scale-110 hover:ring-blue-600">m</button>
                            <button className="flex min-w-[48px] dark:text-white items-center justify-center uppercase rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-inout hover:scale-110 hover:ring-blue-600">l</button>
                            <button className="flex min-w-[48px] dark:text-white items-center justify-center uppercase rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-inout hover:scale-110 hover:ring-blue-600">xl</button>
                            <button className="flex min-w-[48px] dark:text-white items-center justify-center uppercase rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-inout hover:scale-110 hover:ring-blue-600">xxl</button>
                            <button className="flex min-w-[48px] dark:text-white items-center justify-center uppercase rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-inout hover:scale-110 hover:ring-blue-600">xxl</button>
                        </div>
                        <div className="text-sm font-medium pt-6 pb-3" >60% combed ringspun cotton/40% polyester jersey tee.</div>
                    </div>
                    <button className="relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90">
                        <div className="absolute left-0 ml-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                ></path>
                            </svg>
                        </div>
                        Primary
                    </button>
                </div>
            </div>



            <div className="py-8">
                <h3 className="text-2xl font-bold mb-4 dark:text-white">Related Products</h3>
                <Slide />
            </div>
        </main>
        <Footer />
    </>
  )
}
