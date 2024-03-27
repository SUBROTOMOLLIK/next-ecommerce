
export default function SelectOption() {
  return (
    <>
    
    <label className="form-control px-4 w-full">

      <select className="select select-bordered">
          <option>All</option>
          <option>Drinkware</option>
          <option>Electronics</option>
          <option>Footware</option>
          <option>Headwear</option>
          <option>Hoodies</option>
          <option>Kids</option>
          <option>Bags</option>
          <option>Pets</option>
          <option>Shirts</option>
          <option>Stickers</option>
      </select>
    </label>
    <label className="form-control px-4 w-full">

      <select className="select select-bordered">
          <option>Relevance</option>
          <option>Trending</option>
          <option>Latest arrivals</option>
          <option>Price: Low to high</option>
          <option>Price: High to low</option>

      </select>
    </label>
    
    </>
  )
}
