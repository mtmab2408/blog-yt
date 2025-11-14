import { useState } from 'react'
import banner from '../assets/banner.png'
import { IoSearchOutline } from "react-icons/io5";

const tags = [
  { id: 1, name: "All" },
  { id: 2, name: "Rock/Heavy Rock" },
  { id: 3, name: "Metalcore" },
  { id: 4, name: "Alternative Metal" },
];

function Search({ onTagChange }) {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleTagClick = (index, tagName) => {
    setActiveIndex(index);
    onTagChange(tagName); 
  };

  return (
    <div className='flex justify-center flex-col px-[70px] md:px-[150px]'>
      
      <img src={banner} className='w-full h-100 rounded-2xl' />

      <div className='bg-white shadow-lg p-3 rounded-lg -mt-5 mx-[25%] flex items-center'>
        <IoSearchOutline className='text-[20px] text-gray-400'/>
        <input 
          type="text" 
          placeholder='Search'
          className='outline-none ml-2 placeholder-gray-400'
        />
      </div>

      <div className='flex gap-10 justify-center mt-5'>
        {tags.map((item, index) => (
          <ul
            key={item.id}
            onClick={() => handleTagClick(index, item.name)}
            className={`
              ${index === activeIndex ? 'bg-black text-white' : ''} 
              p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4
              hover:scale-110 hover:border, border-black
              transition-all duration-100 ease-in-out
            `}
          >
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Search;
