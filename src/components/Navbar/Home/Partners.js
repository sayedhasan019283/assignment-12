import React, { useEffect, useState } from 'react';

const Partners = () => {
    const [partners, setPartners] = useState([])
    useEffect(() => {
        fetch('partners.json')
            .then(res => res.json())
            .then(data => setPartners(data))
    }, [])
    return (
        <div className='mb-12'>
            <h1 className="text-3xl lg:text-4xl text-center mb-16 text-sky-300">
                Valuable Partners
            </h1>
            <div className='grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-4 ml-56 '>
                {
                    partners.map(p => <div key={p._id}>

                        <img src={p.img} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Partners;