import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/Cart';

const Card = ({ data }) => {

    let dispatch = useDispatch()

    function truncateText(desc) {
        let finalDesc = desc
        if (desc.length > 80) {
            finalDesc = finalDesc.slice(0, 100)
        }
        else {
            finalDesc = desc
        }

        return finalDesc
    }

    return (
        <>
            <div className="card h-[60vh] w-[80%] bg-white border-2 border-black rounded-lg py-4 px-4 flex flex-col justify-between lg:h-[65vh] lg:w-96 xl:h-[55vh] 2xl:h-[46vh] lg:hover:scale-105 duration-500">
                {/* image container */}
                <div className="img-container w-full h-32 lg:h-48">
                    <img src={data.image} className='w-full h-full object-contain' alt="" />
                </div>
                {/* title */}

                <h3 className='truncate font-bold'>{data.title}</h3>
                <p>{truncateText(data.description)}...</p>

                {/* <h3>{data.title}</h3> */}
                <div className="content-container"></div>
                {/* prices and rating */}
                <div className='flex flex-col gap-5 lg:flex-row lg:my-2'>
                    <h3 className='font-bold'>Price: <span>${data.price}</span></h3>
                    <div className='flex gap-4'>
                        <h3 className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"><FaStar /> &nbsp;{data.rating.rate}</h3>
                        <h3 className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-800 ring-1 ring-inset ring-yellow-600/20">{data.category}</h3>
                    </div>
                </div>

                <div className="prices"></div>
                {/* button */}
                <button className='font-bold w-full text-center border-2 border-black bg-black text-white rounded-md py-2 hover:bg-white hover:text-black' onClick={() => { dispatch(addToCart(data)) }} >Buy Now</button>
            </div>
        </>
    )
}

export default Card
