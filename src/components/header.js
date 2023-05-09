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

export default function Header({ increaseZoom, decreaseZoom, zoomInit, getScreenShot, zoom }) {
    //open-menu
    const pathname = usePathname();
    console.log(pathname)
    const [isNavOpen, setIsNavOpen] = useState(false);
    const openNav = () => {
        // isNavOpen === false ?     
        if (isNavOpen === false) {
            gsap.to('#mobile-menu', { x: '0', duration: 0.2 })
            setIsNavOpen(true)
        } else {
            gsap.to('#mobile-menu', { x: '100%', duration: 0.2 })
            setIsNavOpen(false)
        }
    }





    //change color
    const [isContrast, setIsContrast] = useState(false);
    const handleContrast = useCallback(() => {
        if (isContrast === false) {
            //색상을 변경한다
            document.documentElement.style.setProperty('--BM-primary', '#000000')
            document.documentElement.style.setProperty('--BM-secondary', '#ffff00')
            document.documentElement.style.setProperty('--BM-tertiary', '#3ff23f')
            document.documentElement.style.setProperty('--BM-black', '#000000')
            document.documentElement.style.setProperty('--BM-line', '1aebff')
            document.getElementById('contrastSwitch').classList.remove('justify-start');
            document.getElementById('contrastSwitch').classList.add('justify-end');
            setIsContrast(true)
        } else {
            document.documentElement.style.setProperty('--BM-primary', '#23b8c0')
            document.documentElement.style.setProperty('--BM-tertiary', '#fdd118')
            document.documentElement.style.setProperty('--BM-black', '#414141')
            document.documentElement.style.setProperty('--BM-white', '#ffffff')
            document.documentElement.style.setProperty('--BM-secondary', '#6dba44')
            // 색상을 원래대로
            document.getElementById('contrastSwitch').classList.remove('justify-end');
            document.getElementById('contrastSwitch').classList.add('justify-start');
            setIsContrast(false)
        }
    }, [isContrast])

    // useEffect(()=>{
    //     if (isContrast === false){
    //         setContrastToggle(true)
    //     } else{
    //         setContrastToggle(false)
    //     }
    // }, [isContrast])


    return (
        <header className={pathname === '/' ? "fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-5 py-4 text-black bg-BMwhite lg:bg-BMprimary lg:text-BMwhite lg:px-12" : "fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-5 py-4 text-black bg-BMwhite lg:bg-BMwhite lg:text-BMblack lg:px-12 border-b"}>
            <h1 className="text-lg sm:text-3xl font-hanna" aria-label="로고 logo" aria-roledescription="클릭시 메인화면으로 이동."><Link href={'/'}>쉬운 배달앱 사용법</Link></h1>
            <nav className="justify-center hidden text-xl grow font-hanna lg:flex">
                <ul className="flex xl:gap-5">
                    <li><Link className={pathname === '/' ? "px-3 py-2 hover:bg-BMblack hover:rounded xl:text-3xl" : "px-3 py-2 hover:bg-gray-200 hover:rounded xl:text-3xl"} href={'basic/0'}>준비하기</Link></li>
                    <li><Link className={pathname === '/' ? "px-3 py-2 hover:bg-BMblack hover:rounded xl:text-3xl" : "px-3 py-2 hover:bg-gray-200 hover:rounded xl:text-3xl"} href={'usage/0'}>이용하기</Link></li>
                    <li><Link className={pathname === '/' ? "px-3 py-2 hover:bg-BMblack hover:rounded xl:text-3xl" : "px-3 py-2 hover:bg-gray-200 hover:rounded xl:text-3xl"} href={'advanced/0'}>활용하기</Link></li>
                </ul>
            </nav>
            <div className="flex items-center font-hanna xl:text-xl">
                <div className="items-center hidden gap-3 lg:flex ">
                    <div>
                        <button onClick={handleContrast} className="flex items-center gap-2"><div id="contrastSwitch" className="h-[18px] rounded-full bg-BMwhite flex items-center justify-start p-[2px] w-[40px]"><span className="w-[16px] rounded-full bg-BMprimary h-[16px] block"></span></div>고대비</button>
                    </div>
                    <div className="">
                        <button onClick={increaseZoom} className="px-2 py-1 border border-r-0">크게</button>
                        <button onClick={zoomInit} className="px-2 py-1 border">{`${parseInt(zoom * 100)}%`}</button>
                        <button onClick={decreaseZoom} className="px-2 py-1 border border-l-0">작게</button>
                    </div>

                    {/* 돋보기 아이콘 */}
                    {/* <button className="flex" onClick={getScreenShot}>                         */}
                    <button className="flex" onClick={''}>                        
                            <svg aria-label="돋보기 magnifier" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                            </svg>                        
                        <span>돋보기</span>
                    </button>


                </div>

                {/* 모바일 기능 버튼 */}
                <div id="mobile-option-set" className="fixed font-Pretendard text-sm font-semibold right-0 flex flex-col items-start w-24 gap-[1px] shadow-md top-[40%] lg:hidden">
                    <button onClick={increaseZoom} id="zoomIn" className="flex items-center w-24 h-8 border-0">
                        <span className="flex items-center justify-center w-10 h-8 bg-BMtertiary">+</span>
                        <span className="flex items-center justify-center h-8 w-14 bg-BMwhite">크게</span>
                    </button>
                    <button onClick={zoomInit} id="zoomInit" className="flex items-center w-24 h-8 border-0">
                        <span className="flex items-center justify-center w-10 h-8 tracking-tighter bg-BMtertiary ">{`${parseInt(zoom * 100)}%`}</span><span className="flex items-center justify-center h-8 w-14 bg-BMwhite">초기화</span>
                    </button>
                    <button onClick={decreaseZoom} id="zoomOut" className="flex items-center justify-start w-24 h-8 border-0">
                        <span className="flex items-center justify-center w-10 h-8 bg-BMtertiary">-</span>
                        <span className="flex items-center justify-center h-8 w-14 bg-BMwhite">작게</span>
                    </button>
                    <button onClick={handleContrast} className="flex items-center justify-start w-24 h-8 border-0">
                        <span className="flex items-center justify-center w-10 h-8 bg-BMtertiary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </span>
                        <span className="flex items-center justify-center h-8 w-14 bg-BMwhite">고대비</span>
                    </button>
                </div>

                {/* 메뉴 아이콘 */}
                <svg aria-label="메뉴버튼" aria-roledescription="클릭시 다른 항목으로 이동 가능한 목록 열림" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={openNav} className="w-6 h-6 stroke-2 lg:hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>
            {/* 모바일 슬라이드 네비게이션 */}
            <nav id="mobile-menu" className="fixed inset-0 z-50 flex flex-col items-end px-5 py-1 overflow-y-auto translate-x-full bg-BMwhite l-100 lg:hidden">
                <div className="flex items-center justify-between w-full pb-5 text-xl border-b font-hanna">
                    <h1 className="pt-3">메뉴</h1>
                    <svg aria-label="닫기 버튼" xmlns="http://www.w3.org/2000/svg" fill="none" onClick={openNav} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="block w-6 h-6 p-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <ul className="w-full h-full text-2xl font-hanna">
                    <li className="py-5 border-b">
                        <div className="flex justify-between mb-3">
                            <Link className="text-BMprimary" href={'basic/0'}>준비하기</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <ol className="flex flex-col text-base font-Pretendard">
                            <li><Link onClick={openNav} className="block py-1 pt-0 font-medium border-BMprimary text-BMblack" href={'basic/0'}>쉬운 배달앱 사용법</Link></li>
                            <li><Link onClick={openNav} className="block py-1 font-medium border-BMprimary text-BMblack" href={'basic/1'}>배달앱 용어사전</Link></li>
                            <li><Link onClick={openNav} className="block py-1 font-medium border-BMprimary text-BMblack" href={'basic/2'}>배달앱 설치하기</Link></li>
                            <li><Link onClick={openNav} className="block py-1 font-medium border-BMprimary text-BMblack" href={'basic/3'}>주소 설정하기</Link></li>
                            <li><Link onClick={openNav} className="block py-1 font-medium border-BMprimary text-BMblack" href={'basic/4'}>회원가입 하기</Link></li>
                            <li><Link onClick={openNav} className="block py-1 pb-0 font-medium border-BMprimary text-BMblack" href={'basic/5'}>첫 화면 이해하기</Link></li>
                        </ol>
                    </li>
                    <li className="py-3 border-b">
                        <div className="flex justify-between mb-3">
                            <Link className="text-BMsecondary" href={'usage/0'}>이용하기</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <ol className="flex flex-col text-base font-Pretendard">
                            <li><Link onClick={openNav} className="block py-1 font-medium border-BMprimary text-BMblack" href={'usage/0'}>주문할 곳 고르기</Link></li>
                            <li><Link onClick={openNav} className="block py-1 font-medium border-BMprimary text-BMblack" href={'usage/1'}>메뉴 담기</Link></li>
                            <li><Link onClick={openNav} className="block py-1 font-medium border-BMprimary text-BMblack" href={'usage/2'}>결제하기</Link></li>
                        </ol>
                    </li>
                    <li className="py-3">
                        <div className="flex justify-between mb-3">
                            <Link className="text-BMtertiary" href={'advanced/0'}>활용하기</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <ol className="text-base font-Pretendard">
                            <li><Link onClick={openNav} className="block py-1 font-medium border-BMprimary text-BMblack" href={'advanced/0'}>음식을 빨리 배달 받고 싶어!</Link></li>
                            <li><Link onClick={openNav} className="block py-1 font-medium border-BMprimary text-BMblack" href={'advanced/1'}>배달팁이 싼 곳에서 주문하고 싶어</Link></li>
                            <li><Link onClick={openNav} className="block py-1 font-medium border-BMprimary text-BMblack" href={'advanced/2'}>음식을 포장해서 먹고 싶어!</Link></li>
                            <li><Link onClick={openNav} className="block py-1 font-medium border-BMprimary text-BMblack" href={'advanced/3'}>1인분만 주문하고 싶어!</Link></li>
                            <li><Link onClick={openNav} className="block py-1 font-medium border-BMprimary text-BMblack" href={'advanced/4'}>예전에 먹은 음식을 또 주문하고 싶어!</Link></li>
                            <li><Link onClick={openNav} className="block py-1 font-medium border-BMprimary text-BMblack" href={'advanced/5'}>싫어하는 음식은 빼달라고 하고 싶어!</Link></li>
                            <li><Link onClick={openNav} className="block py-1 font-medium border-BMprimary text-BMblack" href={'advanced/6'}>생활에 필요한 물건도 배달 받고 싶어!</Link></li>
                            <li><Link onClick={openNav} className="block py-1 font-medium border-BMprimary text-BMblack" href={'advanced/7'}>할인 받아서 음식을 주문하고 싶어!</Link></li>
                        </ol>
                    </li>
                </ul>

            </nav>
        </header>

    )
}