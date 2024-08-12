import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/Cart'

const Crousel = ({ data }) => {

    function printStars() {
        // let rating = data.rating.rate
        let fullStar = Math.round(rating)
        let haldStar = Math.round(rating)

        let stars = []

        for (let i; i < fullStar; i++) {
            stars.push("*")
        }
    }

    let dispatch = useDispatch()


    return (
        <>
            <div className='bg-black text-white h-[60vh] lg:h-[60vh] xl:h-[50vh] my-10 flex flex-col-reverse justify-evenly items-center select-none lg:mx-10 lg:rounded-[20px] lg:flex-row'>
                <div className='w-[45vw] flex flex-col gap-3 justify-start'>
                    <h1 className='font-bold text-sm lg:text-2xl xl:text-3xl truncate lg:text-wrap'>{data.title}</h1>
                    <p className='text-wrap hidden lg:block'>{data.description}</p>
                    <h3 className='lg:hidden'>Category:- {data.category}</h3>
                    <h3>Price:- ${data.price}</h3>
                    <div>
                        <button className='bg-green-500 rounded-md font-bold text-sm lg:text-lg px-5 py-1 hover:bg-green-400' onClick={()=>{dispatch(addToCart(data))}}>Buy Now</button>
                    </div>
                </div>
                <div className='h-[15vh] lg:h-80 xl:h-96 border-[1px] border-white p-2 shadow-xl '>
                    <img src={data.image} alt="" className='h-full' />
                </div>
                <div className='text-center lg:hidden'>
                    <h1 className='font-bold text-2xl'>Today's Deal !!..</h1>
                </div>
            </div>
        </>
    )
}

export default Crousel
