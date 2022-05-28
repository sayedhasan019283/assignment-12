
import React from 'react';

import Part from './Part/Part';

const Parts = () => {

    return (
        <div className='lg:w-4/5 w-[90%] mx-auto  mt-16 sm:container'>
            <h1 className='text-5xl text-center font-bold text-sky-300'>
                Latest Car Parts
            </h1>
            <Part></Part>
        </div>
    );
};

export default Parts;