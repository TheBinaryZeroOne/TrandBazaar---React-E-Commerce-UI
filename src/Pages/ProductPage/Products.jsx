import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, decendingOrder, ascendingOrder, mensFashion, womensFashion, resetData, jewelweryData, electronicsData } from '../../features/MainSlice'
import Card from '../../Components/Card'
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFilterSquareFill } from "react-icons/bs";
import { MdCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import CardSkele from '../../Components/CardSkele';
import Crousel from '../../Components/Crousel';

const product = () => {

  let dispatch = useDispatch()
  let selector = useSelector((state) => state.mainData)

  const [ischeck, setIsCheck] = useState(false)

  // states for reducers
  const [isDecendingOrder, setIsDecendingOrder] = useState(true);
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);
  const [isMensFashion, setIsMensFashion] = useState(true);
  const [isWomensFashion, setIsWomensFashion] = useState(true);
  const [isJewelweryData, setIsJewelweryData] = useState(true);
  const [isElectronicsData, setIsElectronicsData] = useState(true)

  // handling reducers
  const applyFilters = (reducer) => {
    if (reducer == decendingOrder) {
      setIsDecendingOrder(!isDecendingOrder)
      console.log("Decending: ", isDecendingOrder)

      if (isDecendingOrder) {
        dispatch(reducer())
      }
      else {
        dispatch(resetData())
      }
    }

    else if (reducer == ascendingOrder) {
      setIsAscendingOrder(!isAscendingOrder)
      console.log("Decending: ", isAscendingOrder)

      if (isAscendingOrder) {
        dispatch(reducer())
      }
      else {
        dispatch(resetData())
      }
    }

    else if (reducer == mensFashion) {
      setIsMensFashion(!isMensFashion)
      console.log("Decending: ", isMensFashion)

      if (isMensFashion) {
        dispatch(reducer())
      }
      else {
        dispatch(resetData())
      }
    }

    else if (reducer == womensFashion) {
      setIsWomensFashion(!isWomensFashion)
      console.log("Decending: ", isWomensFashion)

      if (isWomensFashion) {
        dispatch(reducer())
      }
      else {
        dispatch(resetData())
      }
    }

    else if (reducer == jewelweryData) {
      setIsJewelweryData(!isJewelweryData)
      console.log("Decending: ", isJewelweryData)

      if (isJewelweryData) {
        dispatch(reducer())
      }
      else {
        dispatch(resetData())
      }
    }

    else if (reducer == electronicsData) {
      setIsElectronicsData(!isElectronicsData)
      console.log("Decending: ", isElectronicsData)

      if (isElectronicsData) {
        dispatch(reducer())
      }
      else {
        dispatch(resetData())
      }
    }
  };

  const [cdata, setCdata] = useState("")

  function getCrouselData() {
    let randomId = Math.floor(Math.random() * 19);
    console.log('Random ID:', randomId);

    if (selector.data != null) {
      setCdata(selector.originalData[randomId])
    }
  }

  useEffect(() => {
    dispatch(fetchData())
  }, [])


  useEffect(() => {
    getCrouselData();
  }, [selector.data]);

  return (
    <>
      {
        (selector.status == "idle") ?
          <div>
            <Crousel data={cdata} />
            {/* niche wala div ka disp hidden se flex krna hai */}
            <div className='ms-8 mt-12 flex flex-col gap-5 lg:mx-5 lg:py-2 xl:items-center xl:fixed xl:flex-row xl:gap-0'>
              {/* Filter Button */}
              <div className='overflow-hidden border-2 border-black h-[4vh] w-[26vw] lg:w-[10vw] xl:w-[8vw] 2xl:w-[5vw] py-4 lg:py-0 px-2 rounded-md bg-black text-white flex justify-between items-center xl:rotate-[270deg] hover:border-gray-500 hover:border-2 hover:bg-white hover:text-black duration-500'>
                <button className='font-bold flex items-center gap-2' onClick={() => { setIsCheck(!ischeck) }}><BsFilterSquareFill /> Filter</button>
                <IoMdArrowDropdown />
              </div>
              {/* options */}
              <div className={(ischeck === true) ? 'bg-white border-2 border-black mx-5 px-12 py-5 lg:mx-0' : 'hidden'}>
                <ul className='font-bold cursor-pointer'>
                  <li
                    onClick={() => {
                      applyFilters(decendingOrder)
                    }}
                    className='select-none flex items-center gap-2'
                  >
                    {!isDecendingOrder ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} Decreasing prices
                  </li>
                  <li
                    onClick={() => {
                      applyFilters(ascendingOrder)
                    }}
                    className='select-none flex items-center gap-2'
                  >
                    {!isAscendingOrder ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} Increasing prices
                  </li>
                  <li
                    onClick={() => {
                      applyFilters(mensFashion)
                    }}
                    className='select-none flex items-center gap-2'
                  >
                    {!isMensFashion ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} Men's clothing
                  </li>
                  <li
                    onClick={() => {
                      applyFilters(womensFashion)
                    }}
                    className='select-none flex items-center gap-2'
                  >
                    {!isWomensFashion ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} Women's clothing
                  </li>
                  <li
                    onClick={() => {
                      applyFilters(jewelweryData)
                    }}
                    className='select-none flex items-center gap-2'
                  >
                    {!isJewelweryData ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} Jewelery
                  </li>
                  <li
                    onClick={() => {
                      applyFilters(electronicsData)
                    }}
                    className='select-none flex items-center gap-2'
                  >
                    {!isElectronicsData ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} Electronics
                  </li>
                </ul>
              </div>
            </div>
            <div className='w-full flex flex-wrap justify-center gap-8 my-8'>
              {
                selector.data?.map((item, index) => {
                  return <Card data={item} key={index} />
                })
              }
            </div>
          </div>
          :
          <div>
            {/* carkd skele is still pending!! */}
            <div className=' w-full flex gap-8 flex-wrap justify-center my-8'>
              <CardSkele />
              <CardSkele />
              <CardSkele />
              <CardSkele />
              <CardSkele />
              <CardSkele />
              <CardSkele />
              <CardSkele />
              <CardSkele />
              <CardSkele />
              <CardSkele />
              <CardSkele />
            </div>
          </div>
      }
    </>
  )
}

export default product
