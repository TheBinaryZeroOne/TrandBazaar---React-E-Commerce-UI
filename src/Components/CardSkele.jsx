import React from 'react'

const CardSkele = () => {
    return (
        <>
            <div className='h-[55vh] w-[80%] bg-white border-2 border-gray-400 rounded-lg py-4 px-4 flex flex-col justify-between lg:w-96 lg:h-[46vh]'>
                <div className="w-full h-32 lg:h-48 bg-gray-400"></div>
                <div className='w-[60%] bg-gray-400 h-[2vh] rounded-md'></div>
                <div className='w-full bg-gray-400 h-[8vh] rounded-md'></div>
                <div className='w-20 bg-gray-400 h-[2vh] rounded-md'></div>
                <div className='w-full bg-gray-400 h-[5vh] rounded-md'></div>
            </div>
        </>
    )
}

export default CardSkele
