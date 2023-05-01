import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
    <div className=" bg-[url('/bg.png')] bg-cover bg-fixed px-44 py-40 text-center rounded-b-[35%] ">
        <h1 className='text-black text-6xl font-extrabold px-[70px]'>Prepare yourself for the Next Generation of Internet with Panaverse</h1>
        <p className=' text-xl mt-4 px-[90px]'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</p>
        <button className=' bg-blue-600 px-6 py-3 rounded-xl text-lg font-samibold text-white mt-4'>More Info</button>
    </div>
    <div className=' flex justify-around w-[70%] shadow-2xl bg-white rounded-3xl py-[80px] m-auto -mt-[80px]'>
        <Image src={'/Pana.png'} alt='Panavers' width={150} height={150} />
        <Image src={'/panac.png'} alt='Panacloud' width={150} height={150} />
        <Image src={'/saylani.png'} alt='Saylani' width={150} height={150} />
    </div>
    </>
  )
}
