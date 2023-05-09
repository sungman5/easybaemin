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
    gsap.from('#bm-character', { opacity: 0, duration: 1, autoAlpha: 0 })
  }
  useEffect(() => {
    window.addEventListener('DOMContentLoaded', enterance())
  }, [])

  return (
    <div className='relative h-full font-hanna bg-BMprimary'>
      <section className='w-full p-5 lg:px-12 lg:pt-5'>
        <div className='mb-2 max-w-md break-keep text-base font-medium leading-relaxed text-BMwhite lg:text-xl lg:leading-[160%] font-Pretendard'>
          <p>
            장애, 나이 상관없이 누구나 배달앱을 사용할 수 있도록 어려운 용어는 쉽게 바꾸고, 설명이 필요한 부분은 친절하게 안내했습니다. 쉬운 배달앱 사용법을 통해 발달장애인도, 시각장애인도, 어르신도 누구나 편리하게 배달로 음식과 생활용품을 주문할 수 있기를 바랍니다!
          </p>
        </div>
        {/* <p className='text-BMwhite sm:text-2xl lg:text-3xl xl:text-4xl'>본 사이트는 임시 사이트입니다.</p> */}
      </section>
      <section className='absolute inset-x-0 bottom-0 overflow-hidden'>
        <Image id='bm-character' priority={true} className="-z-40 invisible w-[300px] sm:w-[248px] mx-auto md:w-[320px] lg:w-[480px] 3xl:w-[648px] grow" src={'/assets/bm-character-2.png'} width={541} height={406} alt='배달의민족 캐릭터' />
        <div className='z-50 lg:flex'>
          <Link className="block px-5 py-4 bg-BMwhite 3xl:h-96 text-BMrealblack lg:grow sm:py-6 lg:pb-32 border-BMline " href={'basic/0'}><p className='text-xl text-BMrealblack lg:text-5xl xl:text-6xl lg:mb-3'>준비하기</p><p className='hidden text-xl text-BMrealblack lg:block font-Pretendard'>앱 설치부터 회원가입까지!<br />
            배달앱을 시작해 보자.</p></Link>
          <Link className="block px-5 py-4 bg-BMtertiary 3xl:h-96 text-BMrealblack lg:border-r lg:border-r-BMprimary lg:grow sm:py-6 lg:pb-32 border-BMline " href={'usage/0'}><p className='text-xl text-BMrealblack lg:text-5xl xl:text-6xl lg:mb-3'>이용하기</p><p className='hidden text-xl text-BMrealblack lg:block font-Pretendard'>음식 선택부터 결제까지!<br />
            배달앱으로 주문해 보자.</p></Link>
          <Link className="block px-5 py-4 bg-BMsecondary 3xl:h-96 text-BMrealblack lg:grow sm:py-6 lg:pb-32" href={'advanced/0'}><p className='text-xl text-BMrealblack lg:text-5xl xl:text-6xl lg:mb-3'>활용하기</p><p className='hidden text-xl text-BMrealblack lg:block font-Pretendard'>상황에 맞게 사용할 수 있는<br />
            다양한 기능을 알아보자.</p></Link>
        </div>
      </section>
      <div className='absolute inset-x-0 bottom-0 overflow-hidden'>
        <div className="-z-40 translate-y-10 invisible w-[300px] sm:w-[248px] mx-auto md:w-[320px] lg:w-[480px] 3xl:w-[648px] grow"></div>
        <div className='z-50 lg:flex'></div>
      </div>
    </div>
  )
}
