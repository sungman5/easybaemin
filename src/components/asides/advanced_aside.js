'use client';

import Link from "next/link";
import { advanced } from "../../../public/datas/advanced";



export default function AdvancedAside() {
    return (
        <aside className="hidden lg:flex lg:flex-col lg:flex-none lg:px-12 lg:w-72 lg:pt-20 lg:sticky lg:top-16">
            <h1 className="mb-4 text-5xl font-hanna">활용하기</h1>
            <ul className="flex flex-col gap-1">
            {
                advanced.map((element)=>{
                    return(
                        <li className="p-2 tracking-tight rounded lg:text-lg hover:bg-gray-100" key={element.id}><Link href={`/advanced/${element.id}`}>{element.title}</Link></li>
                    )
                })
            }
            </ul>
        </aside>
    )
}