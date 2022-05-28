import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Part = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    const navigate = useNavigate()
    const sliceParts = parts.slice(0, 3)


    return (
        <div className=' grid lg:grid-cols-3 grid-cols-1 mt-10 gap-5 pr-[-32px] '>
            {
                sliceParts.map(product => <div key={product._id} className="card lg:max-w-full   bg-base-100 shadow-xl">
                    <figure><img src={product?.img} className="w-full h-96 w-96" alt="Shoes" /></figure>
                    <div className="p-5 bottom-px bg-[#d8f8ff]">
                        <h2 className="text-lg font-semibold mb-3">{product.name}</h2>
                        <div class="tooltip" data-tip={product.des}>
                            <p class="text-left mb-5">{product.des.slice(0, 80)}...</p>
                        </div>
                        <p className='font-semibold'> Order Quantity: {product.minimunOrder}</p>
                        <p className='font-semibold'>Price: $  {product.price}</p>

                        <div className="justify-start">
                            <button onClick={() => navigate(`/purchase/${product._id}`)} className="skybtn mt-5 rounded-lg text-white">Order Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Part;