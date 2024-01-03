import PrevIcon from './PrevIcon'

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 mt-20">
      <button className="flex justify-center items-center">
        <PrevIcon className=" text-brand-primary text-[38px]" />
      </button>
      <div className="flex items-center gap-2 grow border-b border-brand-primary mr-4">
        <input
          type="text"
          className="border-b grow outline-none p-2"
        />
        <button className="flex justify-end">
          <img
            src="src/assets/icons/search.svg"
            alt="search"
            className="w-[25px] h-[25px]"
          />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
