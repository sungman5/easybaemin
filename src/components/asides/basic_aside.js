'use client';

import Link from "next/link";
import { basic } from "../../../public/datas/basic";
import { usePathname } from "next/navigation";

export default function BasicAside() {
    const pathname = usePathname();
    const pageId = pathname.split('/')[pathname.split('/').length - 1]
    console.log(pageId)
    return (
        <aside className="hidden lg:flex lg:flex-col lg:flex-none lg:px-12 lg:w-96 lg:pt-20 lg:sticky lg:top-16">
            <h1 className="mb-4 text-5xl text-BMprimary lg:mb-12 font-hanna">준비하기</h1>
            <ul className="flex flex-col gap-1">
                {
                    basic.map((element) => {
                        return (
                            <li className={pathname === `/basic/${element.id}` ? 'p-2 tracking-tight rounded lg:text-lg lg:bg-BMprimary100 text-BMrealblack lg:font-bold' : 'p-2 tracking-tight rounded lg:text-lg hover:bg-gray-100'} key={element.id}><Link href={`/basic/${element.id}`}>{element.title}</Link></li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}