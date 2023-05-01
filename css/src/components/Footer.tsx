import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='md:flex align-middle gap-[30px] p-[40px] bg-slate-400'>
        <div className=' md:w-1/4 mb-[30px] md-mb-[0px] '>
            <h1 className='text-3xl font-bold mb-[30px] border-l-yellow-600 border-l-[5px] pl-[8px] '>ABOUT US</h1>
            <Image src='/Pana.png' alt='Panavers' width={120} height={120} />
            <p className=' mr-[25px] mt-[20px] font-medium '>The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread these technolgies globally.
              It is community of Web 3 and Metaverse developers, designers,
              trainers, startup founders and service providers.</p>
        </div>
        <div className=' md:w-1/4 mb-[30px] md-mb-[0px] '>
            <h1 className='text-3xl font-bold border-l-yellow-600 border-l-[5px] pl-[8px]'>USEFUL LINKS</h1>
            <ul className=' font-medium mt-[30px]'>
                <li><Link href='/' className=' hover:text-yellow-300 '>Home</Link></li>
                <li><Link href='/' className=' hover:text-yellow-300'>Explore</Link></li>
                <li><Link href='/' className=' hover:text-yellow-300'>About</Link></li>
                <li><Link href='/' className=' hover:text-yellow-300'>Contact</Link></li>
            </ul>
        </div>
        <div className=' md:w-1/4 mb-[30px] md-mb-[0px] '>
            <h1 className='text-3xl font-bold border-l-yellow-600 border-l-[5px] pl-[8px]'>FOLLOW US</h1>
            <ul className=' font-medium mt-[30px]'>
                <li><Link href='/' className=' hover:text-yellow-300'>Facebook</Link></li>
                <li><Link href='/' className=' hover:text-yellow-300'>Linkedin</Link></li>
                <li><Link href='/' className=' hover:text-yellow-300'>Github</Link></li>
                <li><Link href='/' className=' hover:text-yellow-300'>Twitter</Link></li>
                <li><Link href='https://www.youtube.com/@panaverse' className=' hover:text-yellow-300'>Youtube</Link></li>
            </ul>
        </div>
        <div className=' md:w-1/4 mb-[30px] md-mb-[0px] '>
            <h1 className='text-3xl font-bold border-l-yellow-600 border-l-[5px] pl-[8px]'>CONTACT US</h1>
            <ul className=' font-medium mt-[30px]'>
                <li><Link href='/' className=' hover:text-yellow-300'>+92-308-2220203</Link></li>
                <li><Link href='/' className=' hover:text-yellow-300'>zia@panacloud.com</Link></li>
                <li><Link href='/' className=' hover:text-yellow-300'>Karachi, Pakistan</Link></li>
            </ul>
        </div>
    </div>
        <div className='px-[20px]'>
        <p className=' font-bold px-[20px] py-[10px] bg-yellow-300 rounded-3xl'>All Rights Reserved © | <Link href='https://github.com/Usman5596' target='_blank'>Usman Adrees </Link></p>
      </div>
      </>
  )
}
