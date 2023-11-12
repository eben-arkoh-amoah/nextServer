"use client";

import Image from 'next/image'
import head from "../images/head.png";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { api } from '@/lib/axios/interceptors';

type School = {
  school: string,
  region: string, 
  level: string
}

export default function Schooling() {
  const [list, setList] = useState<School[]>();
  const [school, setSchool] = useState("");
  const [region, setRegion] = useState("");
  const [level, setLevel] = useState("");
  const [dataSent, setDataSent] = useState(false);
  const [rmItem, setrmItem] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = (await api.get("list")).data.schools;
        setList(data.reverse());
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetch();
    setDataSent(false);
  }, ["", dataSent])

  const addSchool = async () => {
    try {
      const data = await api.post("list", { school: school, region: region, level: level });
       setSchool("");
      setRegion("");
      setLevel("");
      console.log(data.data);
    } catch (error: any) {
      console.log(error.response)
    }
    setDataSent(true)
  };
  
  const rmSchool = async (name: string) => {
    setrmItem(name)
    try {
      const res = await api.delete("list",{ data: { name: rmItem } });
      console.log("hi world", rmItem);
      setDataSent(true);
      console.log(res.data)
    } catch (err: any) {
      console.log("hello world", rmItem);
      console.log(err.response)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#000D01] w-full">
      <header className='w-full bg-red-500'>
        <Image src={head} alt={"header"} height={10} width={100}
        className='w-full'/>
      </header>
      <div className='w-full rounded-lg flex justify-center items-center py-5 mb-10' >
        <h3 className='mx-auto text-lg font-bold text-[#fff] '>SENIOR HIGH SCHOOLS IN GHANA</h3>
        </div>
            <form className='w-5/6 flex flex-col items-center mb-10 gap-5' onSubmit={(e)=> e.preventDefault()}>
        <fieldset className='w-full flex flex-col items-center gap-5  py-2 rounded-md '>
             <input type="text" onChange={(e)=>setSchool(e.target.value)}  value={school} placeholder='School' className='rounded-md w-full p-2 outline-none  bg-[#000D01] text-[#fff]'/>
             <input type="text" onChange={(e)=>setRegion(e.target.value)} value={region}  placeholder='Region' className='rounded-md w-full outline-none   p-2 bg-[#000D01] text-[#fff]'/>
             <input type="text" onChange={(e)=>setLevel(e.target.value)} value={level} placeholder='Level' className='rounded-md outline-none  w-full p-2 bg-[#000D01] text-[#fff]'/>
        </fieldset>
        <button type={"submit"} onClick={() => addSchool()} className='p-1 bg-[#000D01] border text-[#FFFFFF] w-5/6 rounded-2xl font-semibold mt-2'
          disabled={
            school.length < 4 || region.length < 5 || level.length   !==  1 
        }
        
        >Add</button>
      </form>
      <section className='flex flex-col gap-8 items-center w-5/6 mt-10'>
        <div className='text-[#FFFFFF] text-md font-md flex flex-col gap-5 w-full'>
          <nav className='flex flex-row justify-between'>
             <Link href="" className='text-[#fff] text-md font-light '>All</Link>
             <Link href="" className='text-[#fff] font-light text-sm'>Western</Link>
             <Link href="" className='text-[#fff] font-light textsm'>Central</Link>
             <Link href="" className='text-[#fff] font-light text-sm'>Accra</Link>
             <Link href="" className='text-[#fff] font-light text-sm'>Ashanti</Link>
          </nav>
          <hr />
          <div className='w-full flex justify-end'>
            <select name="sort" id="sort" className='w-2/6 text-[#fff]   rounded-md bg-[#08220a]  py-1 px-2 cursor-pointer'>
            <option value="none" className='bg-[#000D01]'>No Sort</option>
            <option value="level" className='bg-[#000D01]'>Level</option>
            <option value="region" className='bg-[#000D01]'>Region</option>
            <option value="school" className='bg-[#000D01]'>School</option>
          </select>
        </div>
        </div>
        <div className='mt-5 w-full'>
          <ul className="flex flex-col gap-3  p-4 rounded-md">
            <li className='flex flex-row gap-5 text-[#fff]'>
                 <p className='w-3/6  font-bold '>School</p>
                  <p className='w-2/6 font-bold'>Region</p>
                  <p className='w-1/6 font-bold'>Level</p>
                  <p></p>
            </li>
            {
              list ? list.map((item: any, indx: any) => (
                <li key={indx} className="flex flex-row gap-3 text-white cursor-pointer" onClick={()=>rmSchool(item.school)}>
                  <p className='w-3/6'>{item?.school}</p>
                  <p className='w-2/6'>{item?.region}</p>
                  <p className='w-1/6'>{item?.level}</p>
                  <p className='font-bold text-[#EE0000] '>x</p>
                </li> 
              )) : <p className='text-[#fff]'>Loading ....</p>
            }
          </ul>
        </div>
        <input type="search" className='mb-5 px-3 py-1' placeholder='search...'/>
      </section>
    </main>
  )
}
