"use client";

import Image from 'next/image'
import head from "./images/head.png";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

const schools = [
  {school: "AMASS", region: "CENTRAL", level : "A"},
  {school: "AMASS", region: "CENTRAL", level : "A"},
  {school: "AMASS", region: "CENTRAL", level : "A"},
  {school: "AMASS", region: "CENTRAL", level : "A"},,
  {school: "AMASS", region: "CENTRAL", level : "A"},
  {school: "AMASS", region: "CENTRAL", level : "A"},
  {school: "AMASS", region: "CENTRAL", level : "A"},
  {school: "AMASS", region: "CENTRAL", level : "A"},
  {school: "AMASS", region: "CENTRAL", level : "A"},,
  {school: "AMASS", region: "CENTRAL", level : "A"},
  {school: "AMASS", region: "CENTRAL", level : "A"},
  {school: "AMASS", region: "CENTRAL", level : "A"},
  {school: "AMASS", region: "CENTRAL", level : "A"},
  {school: "AMASS", region: "CENTRAL", level : "A"},,
  {school: "AMASS", region: "CENTRAL", level : "A"},
  {school: "AMASS", region: "CENTRAL", level : "A"},
  {school: "AMASS", region: "CENTRAL", level : "A"},
  {school: "AMASS", region: "CENTRAL", level : "A"},
  {school: "AMASS", region: "CENTRAL", level : "A"},,
  {school: "AMASS", region: "CENTRAL", level : "A"},
]

export default function Home() {
  const [list, setList] = useState(schools);

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
                 <p>School</p>
                  <p>Region</p>
                  <p>Level</p>
            </li>
            {
              list!.map((item, indx) => (
                <li key={indx} className="flex flex-row gap-3">
                  <p>{item?.school}</p>
                  <p>{item?.region}</p>
                  <p>{item?.level}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    </main>
  )
}
