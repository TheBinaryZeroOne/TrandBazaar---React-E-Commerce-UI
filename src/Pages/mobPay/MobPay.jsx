import React from 'react'
import { FaSackDollar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const MobPay = ({ totalPrice }) => {

    return (
        <>
            <div className='mx-5'>
                <Link to="/cart"><button className='bg-black text-white rounded-md px-5 py-2 font-bold text-xl flex justify-center items-center gap-3 mt-5'>Back</button></Link>
            </div>
            <div className='h-fit mx-5 my-5 border-2 border-black flex flex-col justify-between'>
                <div className='w-full text-white bg-black py-5 mb-4'>
                    <h1 className='text-center font-bold text-4xl'>Details</h1>
                </div>
                <div className='h-full w-full px-4 py-4 text-xl font-bold flex flex-col justify-between gap-3 '>
                    <h3>Total : {totalPrice}</h3>
                    <h3>Shipping Charger : </h3>
                    <h3>Tax : 18%</h3>
                    <h3>Total Price : </h3>
                    <div className='flex flex-col gap-4'>
                        <label className='font-bold text-lg'>Select Method of Payment :&nbsp;&nbsp;</label>

                        <select id="cars" className='w-full text-center font-bold border-2 border-black' required>
                            <option value="">Select Method</option>
                            <option value="cashOnDelivery">Cash on Delivery</option>
                            <option value="creditCard">Credit Card</option>
                            <option value="debitCard">Debit Card</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='mx-5'>
                <button className='bg-green-500 hover:bg-green-400 text-white rounded-sm w-full py-3 font-bold text-xl flex justify-center items-center gap-3 '>Checkout <FaSackDollar /></button>
            </div>
        </>
    )
}

export default MobPay
