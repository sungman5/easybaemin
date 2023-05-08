'use client';

import Link from "next/link";
import { usage } from "../../../public/datas/usage";



export default function UsageAside() {
    return (
        <aside className="hidden lg:flex lg:flex-col lg:flex-none lg:px-12 lg:w-72 lg:pt-20 lg:sticky lg:top-16">
            <h1 className="mb-4 text-5xl lg:mb-12 font-hanna">이용하기</h1>
            <ul className="flex flex-col gap-1">
                {
                    usage.map((element) => {
                        return (
                            <li className="p-2 rounded lg:text-lg hover:bg-gray-100" key={element.id}><Link href={`/usage/${element.id}`}>{element.title}</Link></li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}