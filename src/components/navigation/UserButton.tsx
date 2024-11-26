import { useState } from "react";
import { Link } from "react-router-dom";

function UserButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className='indicator p-2' onClick={toggleDropdown}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6 text-white'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
          />
        </svg>
      </button>
      {isOpen && (
        <ul className='absolute right-0 mt-5 w-32 bg-zinc-800 p-2 shadow-2xl'>
          <Link to='/profile' onClick={toggleDropdown}>
            <li className='p-2 text-white hover:bg-gray-500'>Profile</li>
          </Link>

          <Link to='/transaction' onClick={toggleDropdown}>
            <li className='p-2 text-white hover:bg-gray-500'>Order</li>
          </Link>

          <li className='p-2 text-white hover:bg-gray-500'>Log out</li>
        </ul>
      )}
    </>
  );
}

export default UserButton;
