'use client';

import Link from "next/link";
import { usage } from "../../../public/datas/usage";
import { usePathname } from "next/navigation";



export default function UsageAside() {
    const pathname = usePathname();
    const pageId = pathname.split('/')[pathname.split('/').length - 1]
    console.log(pageId)
    return (
        <aside className="hidden lg:flex lg:flex-col lg:flex-none lg:px-12 lg:w-96 lg:pt-20 lg:sticky lg:top-16">
            <h1 className="mb-4 text-5xl text-BMsecondary lg:mb-12 font-hanna">이용하기</h1>
            <ul className="flex flex-col gap-1">
                {
                    usage.map((element) => {
                        return (
                            <li className={pathname === `/usage/${element.id}` ? 'p-2 tracking-tight rounded lg:text-lg lg:bg-BMprimary100 text-BMrealblack lg:font-bold' : 'p-2 tracking-tight rounded lg:text-lg hover:bg-gray-100'} key={element.id}><Link href={`/usage/${element.id}`}>{element.title}</Link></li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}