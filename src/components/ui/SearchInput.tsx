// components/SearchInput.js

import React from 'react';
import Image from 'next/image';
import Magnify from '@/assets/images/magnify.svg';

const SearchInput = () => {
    return (
        <div className="relative">
            <input
                style={{ width: '350px' }}
                type="text"
                placeholder="Cosa stai cercando?"
                className="border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring focus:border-blue-300"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
               <Image src={Magnify} alt="search" width={20} height={20} />
            </div>
        </div>
    );
};

export default SearchInput;
