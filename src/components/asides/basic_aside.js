'use client';

import Link from "next/link";
import { basic } from "../../../public/datas/basic";

export default function BasicAside() {
    return (
        <aside className="hidden lg:flex lg:flex-col lg:flex-none lg:px-12 lg:w-72 lg:pt-20 lg:sticky lg:top-16">
            <h1 className="mb-4 text-5xl lg:mb-12 font-hanna">준비하기</h1>
            <ul className="flex flex-col gap-1">
                {
                    basic.map((element) => {
                        return (
                            <li className="p-2 rounded lg:text-lg hover:bg-gray-100" key={element.id}><Link href={`/basic/${element.id}`}>{element.title}</Link></li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}