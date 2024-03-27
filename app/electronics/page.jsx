import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import SelectOption from "../components/SelectOption";


export default function page() {
	return (
		<>
			<Header />
			<div className=" flex flex-col gap-4 mt-2 md:hidden">
			  <SelectOption />
			</div>
			<div className="mx-auto max-w-screen-2xl flex flex-col md:flex-row px-4 gap-8 msf">
				{/* Left Sidebar */}
				<div className="hidden md:block max-w-[125px]">
					<LeftSidebar />
				</div>

				<main className="w-full h-full mx-auto grid grid-flow-row sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 ">
					<Card />
					<Card />
				</main>
				{/* Right Sidebar */}
				<div className="hidden md:block max-w-[125px] flex-none order-none">
					<RightSidebar />
				</div>
			</div>
			<Footer />
		</>
	);
};
