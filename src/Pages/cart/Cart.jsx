import React, { useState } from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { IoMdRemoveCircle } from "react-icons/io";
import { clearCart, decrementCount, incrementCount, removeFromCart } from '../../features/Cart';
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from 'react-router-dom';
import MobPay from '../mobPay/MobPay';

const Cart = () => {

  let cartData = useSelector((state) => state.cart)

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

  // total operation
  let total = cartData.reduce((acc, item) => acc + item.price * item.count, 0);

  // calculating final price in calctax function
  function calcTax(totalPrice) {
    let shipping = parseFloat(15)
    let tax = parseFloat(0.18)
    let price = parseFloat(totalPrice)
    let totalTax = totalPrice * tax;
    let result = price + totalTax + shipping
    result = result.toFixed(2)

    return result
  }

  return (
    <>
      {
        (cartData.length > 0) ?
          <div>
            {/* delete cart */}
            <div className='ms-[12vw] mt-10'>
              <button className='font-bold text-white bg-red-700 py-2 px-3 rounded-md ' onClick={() => { dispatch(clearCart()) }}>Delete Cart</button>
            </div>
            <div className='flex flex-col xl:flex-row mx-[5vw] mt-12 mb-10 justify-center'>
              <div className='flex flex-col gap-5'>
                {
                  cartData?.map((item, index) => {
                    return (
                      <>
                        <div className='ms-4 lg:ms-0 w-[90%] border-2 border-black py-3 px-5 flex xl:justify-between gap-10 rounded-lg' key={item.id}>
                          <div className="img hidden lg:block lg:h-[20vh] lg:w-[25%] border-2 border-gray-100 shadow-md">
                            <img src={item.image} alt="no-img" className='h-full w-full object-cover' />
                          </div>
                          <div className="flex flex-col justify-between w-[70%]">
                            <h1 className='text-black font-bold text-sm lg:text-xl'>{item.title}</h1>
                            <div className='flex items-center gap-4 my-3'>
                              <h3 className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"><FaStar /> &nbsp;{item.rating.rate}</h3>
                              <h3 className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-800 ring-1 ring-inset ring-yellow-600/20">{item.category}</h3>
                            </div>
                            <p className='hidden sm:block'>{truncateText(item.description)}...</p>
                            <div className='flex justify-center gap-4 items-center'>
                              <button className='font-black text-2xl hover:text-green-700' onClick={() => { dispatch(incrementCount({ title: item.title })) }}><IoMdAdd /></button>
                              <input value={item.count} min="1" className='border-2 border-black w-11 text-center' readOnly />
                              <button onClick={() => { dispatch(decrementCount({ title: item.title })) }} className='font-black text-2xl hover:text-yellow-700'><FiMinus /></button>
                            </div>
                          </div>
                          <div className="button w-[22%] h-[100] flex items-center justify-center shadow-md hover:*:bg-red-700">
                            <button className='bg-black text-white h-[100%] w-full font-bold flex items-center justify-center text-8xl' onClick={() => { dispatch(removeFromCart({ id: item.id })) }}><IoMdRemoveCircle /></button>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>

              {/* for small devices */}
              {/* Proceed to pay*/}
              <div className='my-10'>
                <Link to="/payment"><button className='text-white bg-green-500 hover:bg-green-400 font-bold px-5 py-3 rounded-md flex justify-center items-center gap-3 ms-5 lg:ms-0 xl:hidden'>Proceed To Pay <GiMoneyStack /></button></Link>
              </div>

              {/* purchase section */}
              <div className='hidden h-[65vh] 2xl:h-[55vh] w-[50%] border-2 border-black px-10 py-8 mb-2 rounded-lg xl:block'>
                <div className='w-full text-white bg-black py-5 mb-4'>
                  <h1 className='text-center font-bold text-4xl'>Details</h1>
                </div>
                <div className='flex flex-col gap-8'>
                  <h3 className='font-bold text-lg'>Total Price : ${total.toFixed(2)}</h3>
                  <h3 className='font-bold text-lg'>shipping charges : $15</h3>
                  <h3 className='font-bold text-lg'>tax : 18%</h3>
                  <h3 className='font-bold text-lg'>Final Price : ${calcTax(total)}</h3>
                  <div className='flex'>
                    <label className='font-bold text-lg'>Select Method of Payment :&nbsp;&nbsp;</label>

                    <select id="cars" className='w-[30%] text-center border-2 border-black font-bold' required>
                      <option value="">Select Method</option>
                      <option value="cashOnDelivery">Cash on Delivery</option>
                      <option value="creditCard">Credit Card</option>
                      <option value="debitCard">Debit Card</option>
                    </select>
                  </div>
                  <div className='w-full flex justify-center items-center'>
                    <button className='w-96 bg-green-500 text-white rounded-md font-bold text-2xl py-3 flex justify-center items-center hover:bg-green-400'>Process Purchase&nbsp;&nbsp; <GiMoneyStack /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden'>
              <MobPay totalPrice={total} />
            </div>
          </div>
          :
          <div className='w-full h-[55vh] mt-[10vh] flex justify-center'>
            <div className='w-[90%] lg:w-[50%] h-[100%] bg-gray-900 text-white flex justify-center items-center'>
              <div className='flex flex-col justify-center items-center'>
                <HiOutlineShoppingCart className='text-[15vh]' />
                <h1 className='text-3xl mt-5 xl:text-6xl xl:mt-0'>Your Cart is Empty</h1>
              </div>
            </div>
          </div>
      }

    </>
  )
}

export default Cart