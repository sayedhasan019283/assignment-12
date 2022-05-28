
import axios from "axios";
import React, { useEffect, useState } from 'react';
import user from "../../../Assets/img/user.png"

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/review', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(response => setReviews(response.data))
    }, [])
    console.log(reviews);
    return (
        <div className='mb-20'>
            <h1 className='text-center text-3xl lg:text-4xl mb-12 text-sky-300'>Valuable Client Review</h1>
            <div className='lg:w-4/5 w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 sm:container container lg:grid-cols-3 gap-5 '>

                {
                    reviews.map(review => <div key={review._id} className="card lg:max-w-lg bg-base-100 shadow-xl">
                        <div className="card-body bg-sky-200">


                            <div className="flex items-center ">
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                        <img src={user} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <small>Name: {review.name}</small>
                                    <p className='font-bold'> Comment: {review.comment}</p>
                                    <p className='font-bold'>Rating: {review.rating} Stars</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;