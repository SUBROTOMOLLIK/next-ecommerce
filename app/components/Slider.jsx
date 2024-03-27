import Card from "./Card";

export default function Slider() {
  return (
    <div className="w-full overflow-x-auto pb-6 pt-1 md:mt-4">
    <ul className="flex animate-carousel gap-4 animate-infinite-scroll">
        <li className="relative flex-none aspect-square h-[30vh] max-h-[275vh] w-2/3 max-w-[475px] md:w-1/3">
            <Card />
        </li>
        <li className="relative flex-none aspect-square h-[30vh] max-h-[275vh] w-2/3 max-w-[475px] md:w-1/3">
            <Card />
        </li>
        <li className="relative flex-none aspect-square h-[30vh] max-h-[275vh] w-2/3 max-w-[475px] md:w-1/3">
            <Card />
        </li>
        <li className="relative flex-none aspect-square h-[30vh] max-h-[275vh] w-2/3 max-w-[475px] md:w-1/3">
            <Card />
        </li>
        <li className="relative flex-none aspect-square h-[30vh] max-h-[275vh] w-2/3 max-w-[475px] md:w-1/3">
            <Card />
        </li>
        <li className="relative flex-none aspect-square h-[30vh] max-h-[275vh] w-2/3 max-w-[475px] md:w-1/3">
            <Card />
        </li>
        <li className="relative flex-none aspect-square h-[30vh] max-h-[275vh] w-2/3 max-w-[475px] md:w-1/3">
            <Card />
        </li>
        <li className="relative flex-none aspect-square h-[30vh] max-h-[275vh] w-2/3 max-w-[475px] md:w-1/3">
            <Card />
        </li>
    </ul>
</div>
  )
}
