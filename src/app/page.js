'use client'

/**
 * sm	640px	@media (min-width: 640px) { ... }
 * md	768px	@media (min-width: 768px) { ... }
 * lg	1024px	@media (min-width: 1024px) { ... }
 * xl	1280px	@media (min-width: 1280px) { ... }
 * 2xl	1536px	@media (min-width: 1536px) { ... }
 */

import Image from 'next/image'
import Header from '../components/header'

import Link from 'next/link'
import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function Home() {


  //배민맨 입장
  const enterance = () => {
    gsap.from('#bm-character', { x: '100%', ease: "back.out", duration: 1.5, autoAlpha: 0 })
  }
  useEffect(() => {
    window.addEventListener('DOMContentLoaded', enterance())
  }, [])

  return (
    <div className='relative h-full font-hanna bg-BMprimary'>
      <section className='w-full p-5 lg:p-12'>
        <p className='mb-2 text-4xl text-white sm:text-5xl sm:leading-tight lg:text-6xl xl:text-7xl xl:leading-tight lg:leading-tight'>쉬운 배달앱<br />사용법을<br />만들었습니다.</p>
        <p className='text-white sm:text-2xl lg:text-3xl xl:text-4xl'>본 사이트는 임시 사이트입니다.</p>
      </section>
      <section className='absolute inset-x-0 bottom-0 z-0 overflow-hidden text-xl sm:text-3xl'>
        <Image id='bm-character' priority={true} className="flex invisible w-[180px] sm:w-[248px] mx-auto md:w-[320px] lg:w-[480px] 3xl:w-[648px] grow" src={'/assets/bm-character.png'} width={541} height={406} alt='배달의민족 캐릭터' />
        <div className='lg:flex'>
          <Link className="block px-5 py-4 bg-white border-b 3xl:h-96 text-BMblack lg:border-r lg:border-r-BMprimary lg:grow sm:py-6 lg:pb-32 border-slate-100 " href={'basic/0'}><p className='lg:text-5xl xl:text-6xl lg:mb-3'>준비하기</p><p className='hidden text-xl text-gray-500 lg:block font-Pretendard'>배달앱을 시작해보자</p></Link>
          <Link className="block px-5 py-4 bg-white border-b 3xl:h-96 text-BMblack lg:border-r lg:border-r-BMprimary lg:grow sm:py-6 lg:pb-32 border-slate-100 " href={'usage/0'}><p className='lg:text-5xl xl:text-6xl lg:mb-3'>이용하기</p><p className='hidden text-xl text-gray-500 lg:block font-Pretendard'>배달앱에서 주문해보자</p></Link>
          <Link className="block px-5 py-4 bg-white 3xl:h-96 text-BMblack lg:grow sm:py-6 lg:pb-32" href={'advanced/0'}><p className='lg:text-5xl xl:text-6xl lg:mb-3'>활용하기</p><p className='hidden text-xl text-gray-500 lg:block font-Pretendard'>배달앱을 더 알아보자</p></Link>
        </div>
      </section>
    </div>
  )
}
