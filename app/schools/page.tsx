"use client";

import Image from 'next/image'
import head from "../images/head.png";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

type School = {
  school: string,
  region: string, 
  level: string
}

export default function Schooling() {
  const [list, setList] = useState<School[]>();

  useEffect(() => {
    const fetch = async () => {
 try{
     const resp = await axios.get("http://localhost:3000/api/list");
   const data = await resp.data.schools;
   setList(data);
   } catch (error: any) {
   console.log("hello world");
   console.log(error.message);
    }
    }

    fetch();
  }, [])
  

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 bg-[#000D01] w-full">
      <header className='w-full bg-red-500'>
        <Image src={head} alt={"header"} height={10} width={100}
        className='w-full'/>
      </header>
      <section>
        <div className='text-[#FFFFFF] text-md font-md flex flex-col gap-5'>
          <h3>SENIOR HIGH SCHOOLS IN GHANA</h3>
          <nav className='flex flex-row justify-between'>
            
             <Link href="" className='text-[#ED0] font-semibold '>All</Link>
             <Link href="" className='text-[#ED0] font-semibold '>25</Link>
             <Link href="" className='text-[#ED0] font-semibold '>50</Link>
             <Link href="" className='text-[#ED0] font-semibold '>100</Link>
          </nav>
        </div>
        <div className='mt-5'>
          <ul className="flex flex-col gap-3 bg-[#FFF] p-4 rounded-md">
            <li className='flex flex-row gap-5'>
                 <p className='w-3/6'>School</p>
                  <p className='w-2/6'>Region</p>
                  <p className='w-1/6'>Level</p>
            </li>
            {
              list ? list.map((item: any, indx: any) => (
                <li key={indx} className="flex flex-row gap-3">
                  <p className='w-3/6'>{item?.school}</p>
                  <p className='w-2/6'>{item?.region}</p>
                  <p className='w-1/6'>{item?.level}</p>
                </li> 
              )) : <p>Loading ....</p>
            }
          </ul>
        </div>
      </section>
    </main>
  )
}
