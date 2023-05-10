'use client';

/**
 * sm	640px	@media (min-width: 640px) { ... }
 * md	768px	@media (min-width: 768px) { ... }
 * lg	1024px	@media (min-width: 1024px) { ... }
 * xl	1280px	@media (min-width: 1280px) { ... }
 * 2xl	1536px	@media (min-width: 1536px) { ... }
 */

import { gsap } from "gsap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import html2canvas from "html2canvas";

export default function Header({ increaseZoom, isNavOpen, decreaseZoom, openNav, handleContrast, zoomInit, isContrast, getScreenShot, zoom }) {
    //open-menu
    const pathname = usePathname();
    const pageId = pathname.split('/')[pathname.split('/').length - 1]
    const pageCat = pathname.split('/')[pathname.split('/').length - 2]
    // console.log(pathname)
    console.log('navopen?',isNavOpen)


    return (
        // : "fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-5 py-4 text-BMblack bg-BMwhite lg:bg-BMwhite lg:text-BMblack lg:px-12 border-b"
        <>
            <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-5 py-4 border-b text-BMblack bg-BMwhite lg:px-12">
                <h1 className="text-lg sm:text-3xl font-hanna" tabIndex={1} aria-label="로고" aria-roledescription="클릭시 메인화면으로 이동."><Link role="logo" href={'/'}>쉬운 배달앱 사용법</Link></h1>
                {/* {
                    pathname === '/' ? '' :
                        <nav className="justify-center hidden text-xl grow font-hanna lg:flex">
                            <ul className="flex xl:gap-5">
                                <li><Link className={pageCat === 'basic' ? "px-3 py-2 bg-BMblack text-BMwhite hover:bg-BMblack hover:rounded xl:text-3xl" : "px-3 py-2 hover:bg-gray-200 hover:rounded xl:text-3xl"} href={'basic/0'}>준비하기</Link></li>
                                <li><Link className={pageCat === 'usage' ? "bg-BMblack text-BMwhite px-3 py-2 hover:bg-BMblack hover:rounded xl:text-3xl" : "px-3 py-2 hover:bg-gray-200 hover:rounded xl:text-3xl"} href={'usage/0'}>이용하기</Link></li>
                                <li><Link className={pageCat === 'advanced' ? "bg-BMblack text-BMwhite px-3 py-2 hover:bg-BMblack hover:rounded xl:text-3xl" : "px-3 py-2 hover:bg-gray-200 hover:rounded xl:text-3xl"} href={'advanced/0'}>활용하기</Link></li>
                            </ul>
                        </nav>} */}
                <div className="flex items-center font-hanna xl:text-xl">
                    <div className="items-center hidden gap-3 lg:flex ">
                        <div>
                            <button tabIndex={7} onClick={handleContrast} className="flex items-center gap-2"><div id="contrastSwitch" className="h-[18px] rounded-full bg-BMgray200 flex items-center justify-start p-[2px] w-[40px]"><span className="w-[16px] rounded-full bg-BMprimary h-[16px] block"></span></div>고대비</button>
                        </div>
                        <div className="">
                            <button tabIndex={8} onClick={increaseZoom} className="px-2 py-1 border border-r-0">크게</button>
                            <button tabIndex={9} onClick={zoomInit} className="px-2 py-1 border">{`${parseInt(zoom * 100)}%`}</button>
                            <button tabIndex={10} onClick={decreaseZoom} className="px-2 py-1 border border-l-0">작게</button>
                        </div>

                        {/* 돋보기 아이콘 */}
                        {/* <button className="flex" onClick={getScreenShot}>*/}
                        <button tabIndex={11} aria-label="돋보기" className="flex" onClick={''}>
                            <svg aria-label="돋보기 magnifier" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                            </svg>
                            <span>돋보기</span>
                        </button>


                    </div>

                    {/* 메뉴 아이콘 */}
                    <button onClick={openNav} aria-hidden={isNavOpen} role="button" aria-expanded={isNavOpen} className="relative w-6 h-6 lg:hidden" aria-label="메뉴" aria-roledescription="클릭시 다른 항목으로 이동 가능한 목록 열림">                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute inset-0 z-10 w-6 h-6 stroke-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button>
                </div>
                {/* 모바일 슬라이드 네비게이션 */}
                <nav aria-hidden={!isNavOpen} id="mobile-menu" className="fixed inset-0 z-50 flex flex-col items-end px-5 py-1 overflow-y-auto translate-x-full bg-BMwhite l-100 lg:hidden">
                    <div className="flex items-center justify-between w-full py-4 text-xl border-b font-hanna">
                        <h1>메뉴</h1>
                        <button onClick={openNav} aria-label="닫기 버튼">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="block w-6 h-6 p-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul className="w-full h-full text-2xl font-hanna">
                        <li className="py-5 border-b">
                            <h2 className="text-BMprimary" >준비하기</h2>
                            <ol className="flex flex-col text-base font-Pretendard">
                                {/* <li><Link onClick={openNav} className="block py-1 pt-0 font-medium border-BMprimary text-BMblack" href={'basic/1'}>쉬운 배달앱 사용법</Link></li> */}
                                <li><Link onClick={openNav} className={pathname === '/basic/0' ? "block px-2 rounded py-1 font-medium bg-BMgray200 text-BMblack" : "block px-2 rounded py-1 font-medium bg-block text-BMblack"} href={'basic/0'}>배달앱 용어사전</Link></li>
                                <li><Link onClick={openNav} className={pathname === '/basic/1' ? "block px-2 rounded py-1 font-medium bg-BMgray200 text-BMblack" : "block px-2 rounded py-1 font-medium bg-block text-BMblack"} href={'basic/1'}>배달앱 설치하기</Link></li>
                                <li><Link onClick={openNav} className={pathname === '/basic/2' ? "block px-2 rounded py-1 font-medium bg-BMgray200 text-BMblack" : "block px-2 rounded py-1 font-medium bg-block text-BMblack"} href={'basic/2'}>주소 설정하기</Link></li>
                                <li><Link onClick={openNav} className={pathname === '/basic/3' ? "block px-2 rounded py-1 font-medium bg-BMgray200 text-BMblack" : "block px-2 rounded py-1 font-medium bg-block text-BMblack"} href={'basic/3'}>회원가입 하기</Link></li>
                                <li><Link onClick={openNav} className={pathname === '/basic/4' ? "block px-2 rounded py-1 font-medium bg-BMgray200 text-BMblack" : "block px-2 rounded py-1 font-medium bg-block text-BMblack"} href={'basic/4'}>첫 화면 이해하기</Link></li>
                            </ol>
                        </li>
                        <li className="py-3 border-b">
                            <h2 className="text-BMsecondary">이용하기</h2>                            
                            <ol className="flex flex-col text-base font-Pretendard">
                                <li><Link onClick={openNav} className={pathname === '/usage/0' ? 'block px-2 rounded py-1 font-medium bg-BMgray200 text-BMblack': "px-2 rounded block py-1 font-medium bg-block text-BMblack"} href={'usage/0'}>주문할 곳 고르기</Link></li>
                                <li><Link onClick={openNav} className={pathname === '/usage/1' ? 'block px-2 rounded py-1 font-medium bg-BMgray200 text-BMblack': "px-2 rounded block py-1 font-medium bg-block text-BMblack"} href={'usage/1'}>메뉴 담기</Link></li>
                                <li><Link onClick={openNav} className={pathname === '/usage/2' ? 'block px-2 rounded py-1 font-medium bg-BMgray200 text-BMblack': "px-2 rounded block py-1 font-medium bg-block text-BMblack"} href={'usage/2'}>결제하기</Link></li>
                            </ol>
                        </li>
                        <li className="py-3">
                            <h2 className="text-BMtertiary">활용하기</h2>                            
                            <ol className="text-base font-Pretendard">
                                <li><Link onClick={openNav} className={pathname === '/advanced/0' ? 'block px-2 rounded py-1 font-medium bg-BMgray200 text-BMblack': "px-2 rounded block py-1 font-medium bg-block text-BMblack"} href={'advanced/0'}>음식을 빨리 배달 받고 싶어!</Link></li>
                                <li><Link onClick={openNav} className={pathname === '/advanced/1' ? 'block px-2 rounded py-1 font-medium bg-BMgray200 text-BMblack': "px-2 rounded block py-1 font-medium bg-block text-BMblack"} href={'advanced/1'}>배달팁이 싼 곳에서 주문하고 싶어</Link></li>
                                <li><Link onClick={openNav} className={pathname === '/advanced/2' ? 'block px-2 rounded py-1 font-medium bg-BMgray200 text-BMblack': "px-2 rounded block py-1 font-medium bg-block text-BMblack"} href={'advanced/2'}>음식을 포장해서 먹고 싶어!</Link></li>
                                <li><Link onClick={openNav} className={pathname === '/advanced/3' ? 'block px-2 rounded py-1 font-medium bg-BMgray200 text-BMblack': "px-2 rounded block py-1 font-medium bg-block text-BMblack"} href={'advanced/3'}>1인분만 주문하고 싶어!</Link></li>
                                <li><Link onClick={openNav} className={pathname === '/advanced/4' ? 'block px-2 rounded py-1 font-medium bg-BMgray200 text-BMblack': "px-2 rounded block py-1 font-medium bg-block text-BMblack"} href={'advanced/4'}>예전에 먹은 음식을 또 주문하고 싶어!</Link></li>
                                <li><Link onClick={openNav} className={pathname === '/advanced/5' ? 'block px-2 rounded py-1 font-medium bg-BMgray200 text-BMblack': "px-2 rounded block py-1 font-medium bg-block text-BMblack"} href={'advanced/5'}>싫어하는 음식은 빼달라고 하고 싶어!</Link></li>
                                <li><Link onClick={openNav} className={pathname === '/advanced/6' ? 'block px-2 rounded py-1 font-medium bg-BMgray200 text-BMblack': "px-2 rounded block py-1 font-medium bg-block text-BMblack"} href={'advanced/6'}>생활에 필요한 물건도 배달 받고 싶어!</Link></li>
                                <li><Link onClick={openNav} className={pathname === '/advanced/7' ? 'block px-2 rounded py-1 font-medium bg-BMgray200 text-BMblack': "px-2 rounded block py-1 font-medium bg-block text-BMblack"} href={'advanced/7'}>할인 받아서 음식을 주문하고 싶어!</Link></li>
                            </ol>
                        </li>
                    </ul>
                </nav>

            </header>
        </>
    )
}