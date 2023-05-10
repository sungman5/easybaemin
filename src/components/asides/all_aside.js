'use client';

import Link from "next/link";
import { advanced } from "../../../public/datas/advanced";
import { basic } from "../../../public/datas/basic";
import { usage } from "../../../public/datas/usage";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { gsap } from "gsap";



export default function AllAside() {

    const pathname = usePathname();
    const pageId = pathname.split('/')[pathname.split('/').length - 1]

    const [isBasicOpen, setIsBasicOpen] = useState(false);
    const basicDrop = () => {
        if (isBasicOpen === true) {
            document.getElementById('basic_dropdown').style.display = 'none';
            document.getElementById('basic_dropdown').style.height = '0';
            setIsBasicOpen(false)
        } else {
            document.getElementById('basic_dropdown').style.display = 'flex';
            document.getElementById('basic_dropdown').style.height = 'auto';
            setIsBasicOpen(true)
        }
    }
    const [isUsageOpen, setIsUsageOpen] = useState(false);
    const usageDrop = () => {
        if (isUsageOpen === true) {
            document.getElementById('basic_dropdown').style.display = 'none';
            document.getElementById('usage_dropdown').style.height = 0;
            setIsUsageOpen(false)
        } else {
            document.getElementById('basic_dropdown').style.display = 'flex';
            document.getElementById('usage_dropdown').style.height = 'auto';
            setIsUsageOpen(true)
        }
    }
    const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
    const advancedDrop = () => {
        if (isAdvancedOpen === true) {
            document.getElementById('basic_dropdown').style.display = 'none';
            document.getElementById('advanced_dropdown').style.height = 0;
            setIsAdvancedOpen(false)
        } else {
            //메뉴를 열 때
            document.getElementById('basic_dropdown').style.display = 'flex';
            document.getElementById('advanced_dropdown').style.height = 'auto';
            setIsAdvancedOpen(true)
        }
    }

    const tabIndex = 2;



    return (
        <nav className="hidden lg:flex lg:flex-col lg:flex-none lg:px-12 lg:w-96 lg:pt-20 lg:sticky lg:top-16">
            <ul className="flex flex-col gap-4">
                <li>
                    <h1 tabIndex={2} onClick={basicDrop} className="flex items-center justify-between mb-4 text-5xl cursor-pointer font-hanna text-BMprimary">준비하기
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </h1>
                    <ul aria-hidden={isBasicOpen} id="basic_dropdown" aria-label='준비하기 메뉴' className="flex flex-col h-0 gap-1 overflow-hidden">
                        {
                            basic.map((element) => {
                                return (
                                    <li tabIndex={2} className={pathname === `/basic/${element.id}` ? 'p-2 tracking-tight rounded lg:text-lg lg:bg-BMprimary100 text-BMrealblack lg:font-bold' : 'p-2 tracking-tight rounded lg:text-lg hover:bg-gray-100'} key={element.id}><Link href={`/basic/${element.id}`}>{element.title}</Link></li>
                                )
                            })
                        }
                    </ul>
                </li>
                <li>
                    <h1 tabIndex={3} onClick={usageDrop} className="flex items-center justify-between mb-4 text-5xl cursor-pointer font-hanna text-BMsecondary">이용하기
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg></h1>
                    <ul aria-hidden={isUsageOpen} id="usage_dropdown" className="flex flex-col h-0 gap-1 overflow-hidden">
                        {
                            usage.map((element) => {                                
                                return (
                                    <li tabIndex={3} className={pathname === `/usage/${element.id}` ? 'p-2 tracking-tight rounded lg:text-lg lg:bg-BMprimary100 text-BMrealblack lg:font-bold' : 'p-2 tracking-tight rounded lg:text-lg hover:bg-gray-100'} key={element.id}><Link href={`/usage/${element.id}`}>{element.title}</Link></li>
                                )
                            })
                        }
                    </ul>
                </li>
                <li>
                    <h1 tabIndex={4} onClick={advancedDrop} className="flex items-center justify-between mb-4 text-5xl cursor-pointer font-hanna text-BMtertiary">활용하기
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg></h1>
                    <ul aria-hidden={isAdvancedOpen} id="advanced_dropdown" className="flex flex-col h-0 gap-1 overflow-hidden">
                        {
                            advanced.map((element) => {                                
                                return (
                                    <li tabIndex={4} className={pathname === `/advanced/${element.id}` ? 'p-2 tracking-tight rounded lg:text-lg lg:bg-BMprimary100 text-BMrealblack lg:font-bold' : 'p-2 tracking-tight rounded lg:text-lg hover:bg-gray-100'} key={element.id}><Link href={`/advanced/${element.id}`}>{element.title}</Link></li>
                                )
                            })
                        }
                    </ul>
                </li>
            </ul>
        </nav>
    )
}