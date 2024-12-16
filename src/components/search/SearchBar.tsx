import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const urlParams = new URLSearchParams(search);
    const searchParam = urlParams.get("search") || "";
    setQuery(searchParam);
  }, [search]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/collections/?search=${encodeURIComponent(query.trim())}`);
  };

  const clearSearch = () => {
    setQuery("");
    navigate(`/collections`);
  };

  return (
    <form onSubmit={handleSearch} className='relative flex items-center justify-center gap-x-1'>
      <div className='relative'>
        <input
          type='text'
          placeholder='Search…'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='input input-bordered h-8 w-40 min-w-32 rounded-[4px] sm:h-9 sm:w-auto'
        />
        {query && (
          <button type='button' onClick={clearSearch} className='absolute right-2 top-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-5'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
            </svg>
          </button>
        )}
      </div>
      <button
        type='submit'
        className='btn btn-square h-8 min-h-6 w-8 min-w-6 rounded-[4px] sm:h-9 sm:min-h-8 sm:w-auto sm:min-w-8'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-3 sm:size-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
          />
        </svg>
      </button>
    </form>
  );
}

export default SearchBar;
