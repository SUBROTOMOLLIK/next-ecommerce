
export default function Button({ disabled = false }) {
  return (
    <button
    disabled={disabled}
    type="submit"
    className="bg-indigo-500 text-white mt-4 px-4 py-3 rounded-xl hover:bg-indigo-400"
>
    Submit
</button>
  )
}
